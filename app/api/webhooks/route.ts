import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { sendOrderConfirmationToClient, sendOrderNotificationToTeam } from '@/lib/notifications'

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
  const customerName = session.customer_details?.name || 'Client'
  const customerPhone = session.customer_details?.phone || ''
  const amountTotal = session.amount_total ? session.amount_total / 100 : 0

  // Récupérer les line items pour savoir quel produit a été acheté
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id)
  const productName = lineItems.data[0]?.description || 'Produit'

  console.log(`
    📧 Client: ${customerName} (${customerEmail})
    📱 Téléphone: ${customerPhone}
    💰 Montant: ${amountTotal}€
    📦 Produit: ${productName}
  `)

  // Récupérer les métadonnées (infos du bien)
  const metadata = session.metadata || {}
  
  try {
    // Envoyer email de confirmation au client
    await sendOrderConfirmationToClient({
      customerName,
      customerEmail: customerEmail!,
      customerPhone,
      product: productName,
      amount: amountTotal,
      propertyData: {
        address: metadata.address || '',
        city: metadata.city || '',
        postalCode: metadata.postalCode || '',
        propertyType: metadata.propertyType || 'appartement',
        rooms: parseInt(metadata.rooms || '0'),
        surface: parseInt(metadata.surface || '0'),
        floor: metadata.floor || '',
        features: metadata.features ? metadata.features.split(',') : [],
        description: metadata.description || '',
      }
    })
    
    // Envoyer notification à l'équipe avec toutes les infos
    await sendOrderNotificationToTeam({
      customerName,
      customerEmail: customerEmail!,
      customerPhone,
      product: productName,
      amount: amountTotal,
      propertyData: {
        address: metadata.address || '',
        city: metadata.city || '',
        postalCode: metadata.postalCode || '',
        propertyType: metadata.propertyType || 'appartement',
        rooms: parseInt(metadata.rooms || '0'),
        surface: parseInt(metadata.surface || '0'),
        floor: metadata.floor || '',
        features: metadata.features ? metadata.features.split(',') : [],
        description: metadata.description || '',
      }
    })
    
    console.log('✅ Emails envoyés avec succès')
  } catch (error) {
    console.error('❌ Erreur envoi emails:', error)
  }
}

// Gérer un paiement réussi
async function handlePaymentIntentSucceeded(paymentIntent: Stripe.PaymentIntent) {
  console.log('✅ Paiement réussi:', paymentIntent.id)
}

// Gérer la création d'un abonnement
async function handleSubscriptionCreated(subscription: Stripe.Subscription) {
  console.log('✅ Abonnement créé:', subscription.id)
  
  const customerId = subscription.customer as string
  const customer = await stripe.customers.retrieve(customerId)
  
  if ('email' in customer) {
    console.log(`📧 Nouvel abonnement pour: ${customer.email}`)
  }
}

// Gérer la mise à jour d'un abonnement
async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  console.log('📝 Abonnement mis à jour:', subscription.id)
}

// Gérer l'annulation d'un abonnement
async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  console.log('❌ Abonnement annulé:', subscription.id)
  
  const customerId = subscription.customer as string
  const customer = await stripe.customers.retrieve(customerId)
  
  if ('email' in customer) {
    console.log(`📧 Abonnement annulé pour: ${customer.email}`)
  }
}
