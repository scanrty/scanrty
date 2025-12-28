import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

const PRODUCT_PRICE_IDS: Record<string, string> = {
  sentinelle: process.env.NEXT_PUBLIC_PRICE_SENTINELLE || '',
  vigilan: process.env.NEXT_PUBLIC_PRICE_VIGILAN || '',
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    const {
      product,
      propertyData,
      customerData,
    } = body
    
    // Créer une session Stripe avec metadata
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: PRODUCT_PRICE_IDS[product],
          quantity: 1,
        },
      ],
      mode: product === 'vigilan' ? 'subscription' : 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/merci?produit=${product}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/commander`,
      customer_email: customerData.email,
      // IMPORTANT: Metadata pour le webhook
      metadata: {
        // Infos du bien
        address: propertyData.address,
        city: propertyData.city,
        postalCode: propertyData.postalCode,
        propertyType: propertyData.propertyType,
        rooms: propertyData.rooms.toString(),
        surface: propertyData.surface.toString(),
        floor: propertyData.floor || '',
        features: propertyData.features.join(','),
        description: propertyData.description,
        // Infos client
        customerName: `${customerData.firstName} ${customerData.lastName}`,
        customerPhone: customerData.phone,
      },
    })
    
    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.error('❌ Erreur création session Stripe:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
