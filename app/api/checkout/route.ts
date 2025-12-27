import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { priceId } = await request.json()
    
    // Pour l'instant, on redirige vers Stripe Checkout
    // Tu devras ajouter ta clé secrète Stripe dans Vercel
    const checkoutUrl = `https://buy.stripe.com/test_xxxxx` // On va générer ça depuis Stripe
    
    return NextResponse.json({ url: checkoutUrl })
  } catch (error) {
    return NextResponse.json({ error: 'Error creating checkout session' }, { status: 500 })
  }
}
