import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
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
  // Exemple : Envoyer un email de confirmation personnalisé
  await sendConfirmationEmail({
    email: customerEmail!,
    name: customerName!,
    product: productName,
    amount: amountTotal,
  })

  // Exemple : Créer une entrée dans ta base de données
  // await createCustomerRecord({ ... })
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

// Fonction pour envoyer un email de confirmation (exemple)
async function sendConfirmationEmail(data: {
  email: string
  name: string
  product: string
  amount: number
}) {
  console.log(`📧 Envoi email de confirmation à ${data.email}`)
  
  // ICI : Intégrer avec un service d'email (Resend, SendGrid, etc.)
  // Pour l'instant, on log juste les infos
  
  console.log(`
    ===== EMAIL DE CONFIRMATION =====
    À: ${data.email}
    Nom: ${data.name}
    Produit: ${data.product}
    Montant: ${data.amount}€
    
    Bonjour ${data.name},
    
    Merci pour votre achat de ${data.product} !
    
    Montant payé: ${data.amount}€
    
    ${data.product.includes('Sentinelle') ? 
      'Votre rapport de détection sera prêt sous 24h.' : 
      data.product.includes('VigilAn') ?
      'Votre surveillance annuelle est maintenant active.' :
      data.product.includes('TarGate') ?
      'Votre accès au dashboard TarGate a été activé.' :
      'Nous traitons votre commande.'
    }
    
    L'équipe ScanRty
    ================================
  `)
  
  // TODO: Remplacer par un vrai service d'email
}
