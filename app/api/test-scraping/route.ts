import { NextResponse } from 'next/server'
import { scanProperty, PropertyData } from '@/lib/scraping'
import { generateTextReport, generateHTMLReport } from '@/lib/report'

/**
 * Route de test pour le scraping - GRATUIT, pas de paiement requis
 * 
 * Utilisation :
 * GET /api/test-scraping?address=15%20rue%20de%20Rivoli&city=Paris&postalCode=75001&rooms=3&surface=65
 */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    
    // Récupérer les paramètres
    const address = searchParams.get('address') || '15 rue de Rivoli'
    const city = searchParams.get('city') || 'Paris'
    const postalCode = searchParams.get('postalCode') || '75001'
    const rooms = parseInt(searchParams.get('rooms') || '3')
    const surface = parseInt(searchParams.get('surface') || '65')
    const propertyType = searchParams.get('propertyType') || 'appartement'
    const floor = searchParams.get('floor') || ''
    const description = searchParams.get('description') || ''
    
    console.log('🧪 TEST SCRAPING LANCÉ')
    console.log('📍 Adresse:', address, city, postalCode)
    
    // Construire les données du bien
    const propertyData: PropertyData = {
      address,
      city,
      postalCode,
      propertyType,
      rooms,
      surface,
      floor,
      features: [],
      description,
    }
    
    console.log('🤖 Lancement du scan...')
    
    // Lancer le scraping
    const scrapingReport = await scanProperty(propertyData)
    
    console.log('✅ Scan terminé!')
    console.log('📊 Résumé:', scrapingReport.summary)
    
    // Générer les rapports
    const textReport = generateTextReport(scrapingReport)
    const htmlReport = generateHTMLReport(scrapingReport)
    
    console.log('📄 Rapports générés')
    
    // Afficher le rapport texte dans les logs
    console.log('\n' + '='.repeat(80))
    console.log(textReport)
    console.log('='.repeat(80) + '\n')
    
    // Retourner le rapport HTML pour affichage dans le navigateur
    return new NextResponse(htmlReport, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    })
    
  } catch (error: any) {
    console.error('❌ Erreur test scraping:', error)
    
    return NextResponse.json(
      { 
        error: error.message,
        stack: error.stack 
      },
      { status: 500 }
    )
  }
}
