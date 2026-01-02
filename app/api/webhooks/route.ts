import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { sendConfirmationEmail, sendNotificationToTeam } from '@/lib/email'
import { scanProperty, PropertyData } from '@/lib/scraping'
import { generateTextReport, generateHTMLReport } from '@/lib/report'

// Force cette route à être dynamique
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get('stripe-signature')!

  let event: Stripe.Event

  try {
    // Vérifier que la requête vient bien de Stripe
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err: any) {
    console.error(`❌ Webhook signature verification failed: ${err.message}`)
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 })
  }

  // Traiter l'événement
  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session
        await handleCheckoutSessionCompleted(session)
        break

      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        await handlePaymentIntentSucceeded(paymentIntent)
        break

      case 'customer.subscription.created':
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionCreated(subscription)
        break

      case 'customer.subscription.updated':
        const subscriptionUpdated = event.data.object as Stripe.Subscription
        await handleSubscriptionUpdated(subscriptionUpdated)
        break

      case 'customer.subscription.deleted':
        const subscriptionDeleted = event.data.object as Stripe.Subscription
        await handleSubscriptionDeleted(subscriptionDeleted)
        break

      default:
        console.log(`⚠️ Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (err: any) {
    console.error(`❌ Error processing webhook: ${err.message}`)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}

// Gérer une session de paiement complétée
async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  console.log('✅ Paiement complété:', session.id)

  // Récupérer les détails du client
  const customerEmail = session.customer_details?.email
  const customerName = session.customer_details?.name
  const customerPhone = session.customer_details?.phone
  const amountTotal = session.amount_total ? session.amount_total / 100 : 0

  // Récupérer les line items pour savoir quel produit a été acheté
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id)
  const productName = lineItems.data[0]?.description || 'Produit inconnu'

  console.log(`
    📧 Client: ${customerName} (${customerEmail})
    📱 Téléphone: ${customerPhone}
    💰 Montant: ${amountTotal}€
    📦 Produit: ${productName}
  `)

  // ICI : Tu peux envoyer un email, créer un ticket, etc.
  // Envoyer un email de confirmation personnalisé
  await sendConfirmationEmailOld({
    email: customerEmail!,
    name: customerName!,
    product: productName,
    amount: amountTotal,
  })

  // Exemple : Créer une entrée dans ta base de données
  // await createCustomerRecord({ ... })
  
  // NOUVEAU : Déclencher le scraping pour Sentinelle et VigilAn
  if (productName.includes('Sentinelle') || productName.includes('VigilAn')) {
    console.log('🔍 Déclenchement du scraping automatique...')
    
    // Récupérer les métadonnées du paiement (infos du bien)
    // Note: Il faut d'abord modifier le formulaire de commande pour envoyer ces infos via metadata
    const metadata = session.metadata || {}
    
    if (metadata.address && metadata.city) {
      const propertyData: PropertyData = {
        address: metadata.address,
        city: metadata.city,
        postalCode: metadata.postalCode || '',
        propertyType: metadata.propertyType || 'appartement',
        rooms: parseInt(metadata.rooms || '0'),
        surface: parseInt(metadata.surface || '0'),
        floor: metadata.floor,
        features: metadata.features ? metadata.features.split(',') : [],
        description: metadata.description || '',
      }
      
      // Lancer le scraping en arrière-plan
      triggerScraping(propertyData, customerEmail!, customerName!)
        .catch(error => console.error('❌ Erreur scraping:', error))
    } else {
      console.log('⚠️ Pas de données de bien dans metadata, scraping non lancé')
    }
  }
}

// Gérer un paiement réussi
async function handlePaymentIntentSucceeded(paymentIntent: Stripe.PaymentIntent) {
  console.log('✅ Paiement réussi:', paymentIntent.id)
  
  // Actions à effectuer après un paiement réussi
}

// Gérer la création d'un abonnement
async function handleSubscriptionCreated(subscription: Stripe.Subscription) {
  console.log('✅ Abonnement créé:', subscription.id)
  
  const customerId = subscription.customer as string
  const customer = await stripe.customers.retrieve(customerId)
  
  if ('email' in customer) {
    console.log(`📧 Nouvel abonnement pour: ${customer.email}`)
    
    // ICI : Envoyer email de bienvenue, activer accès, etc.
  }
}

// Gérer la mise à jour d'un abonnement
async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  console.log('📝 Abonnement mis à jour:', subscription.id)
  
  // Gérer les changements (upgrade, downgrade, etc.)
}

// Gérer l'annulation d'un abonnement
async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  console.log('❌ Abonnement annulé:', subscription.id)
  
  const customerId = subscription.customer as string
  const customer = await stripe.customers.retrieve(customerId)
  
  if ('email' in customer) {
    console.log(`📧 Abonnement annulé pour: ${customer.email}`)
    
    // ICI : Désactiver l'accès, envoyer email de confirmation d'annulation
  }
}

// Fonction pour envoyer un email de confirmation (avec Resend)
async function sendConfirmationEmailOld(data: {
  email: string
  name: string
  product: string
  amount: number
}) {
  console.log(`📧 Envoi email de confirmation à ${data.email}`)
  
  try {
    // Envoyer l'email au client
    await sendConfirmationEmail(data)
    
    // Envoyer la notification à l'équipe
    await sendNotificationToTeam(data)
    
    console.log('✅ Emails envoyés avec succès')
  } catch (error) {
    console.error('❌ Erreur lors de l\'envoi des emails:', error)
    // Ne pas bloquer le webhook si l'email échoue
  }
}

// Fonction pour déclencher le scraping en arrière-plan
async function triggerScraping(propertyData: PropertyData, customerEmail: string, customerName: string) {
  console.log('🤖 Démarrage du scraping pour:', propertyData.address)
  
  try {
    // Lancer le scan
    const scrapingReport = await scanProperty(propertyData)
    
    console.log('✅ Scan terminé:', scrapingReport.summary)
    
    // Générer le rapport
    const textReport = generateTextReport(scrapingReport)
    const htmlReport = generateHTMLReport(scrapingReport)
    
    // TODO: Envoyer le rapport par email avec le HTML
    // Pour l'instant, on log juste
    console.log('📄 Rapport généré')
    console.log(textReport)
    
    // TODO Phase 2: Envoyer par email avec pièce jointe PDF
    // await sendReportEmail(customerEmail, customerName, htmlReport)
    
    // TODO Phase 2: Sauvegarder dans une base de données
    // await saveReport(scrapingReport)
    
    return scrapingReport
  } catch (error) {
    console.error('❌ Erreur lors du scraping:', error)
    throw error
  }
}
