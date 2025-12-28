/**
 * ScanRty - Service de détection de sous-locations
 * Scrape les principales plateformes pour détecter des annonces suspectes
 */

export interface PropertyData {
  address: string
  city: string
  postalCode: string
  propertyType: string
  rooms: number
  surface: number
  floor?: string
  features: string[]
  description: string
  photos?: string[] // URLs des photos uploadées
}

export interface DetectionResult {
  platform: string
  url: string
  title: string
  price?: string
  photos: string[]
  similarity: number // Score de 0 à 100
  suspicionLevel: 'low' | 'medium' | 'high'
  reasons: string[]
}

export interface ScrapingReport {
  propertyData: PropertyData
  detections: DetectionResult[]
  summary: {
    totalDetections: number
    highSuspicion: number
    mediumSuspicion: number
    lowSuspicion: number
  }
  scrapedAt: string
}

/**
 * Fonction principale de scraping
 */
export async function scanProperty(propertyData: PropertyData): Promise<ScrapingReport> {
  console.log('🔍 Début du scan pour:', propertyData.address)
  
  const detections: DetectionResult[] = []
  
  // Scraping de chaque plateforme
  try {
    const airbnbResults = await scrapeAirbnb(propertyData)
    detections.push(...airbnbResults)
  } catch (error) {
    console.error('❌ Erreur Airbnb:', error)
  }
  
  try {
    const bookingResults = await scrapeBooking(propertyData)
    detections.push(...bookingResults)
  } catch (error) {
    console.error('❌ Erreur Booking:', error)
  }
  
  try {
    const lbcResults = await scrapeLeBonCoin(propertyData)
    detections.push(...lbcResults)
  } catch (error) {
    console.error('❌ Erreur Le Bon Coin:', error)
  }
  
  try {
    const abritelResults = await scrapeAbritel(propertyData)
    detections.push(...abritelResults)
  } catch (error) {
    console.error('❌ Erreur Abritel:', error)
  }
  
  // Calcul du résumé
  const summary = {
    totalDetections: detections.length,
    highSuspicion: detections.filter(d => d.suspicionLevel === 'high').length,
    mediumSuspicion: detections.filter(d => d.suspicionLevel === 'medium').length,
    lowSuspicion: detections.filter(d => d.suspicionLevel === 'low').length,
  }
  
  console.log('✅ Scan terminé:', summary)
  
  return {
    propertyData,
    detections,
    summary,
    scrapedAt: new Date().toISOString(),
  }
}

/**
 * Scraping Airbnb avec Puppeteer
 */
async function scrapeAirbnb(property: PropertyData): Promise<DetectionResult[]> {
  console.log('🏠 Scraping Airbnb...')
  
  const results: DetectionResult[] = []
  let browser = null
  
  try {
    const { getBrowser, closeBrowser } = await import('./browser')
    browser = await getBrowser()
    
    const page = await browser.newPage()
    
    // User agent pour éviter détection bot
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')
    
    // Construire l'URL de recherche Airbnb
    const searchUrl = `https://www.airbnb.fr/s/${encodeURIComponent(property.city)}/homes?adults=1&children=0&infants=0`
    
    console.log('🔍 URL Airbnb:', searchUrl)
    
    // Naviguer vers la page
    await page.goto(searchUrl, { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    })
    
    // Attendre le chargement des résultats
    await page.waitForTimeout(3000)
    
    // Extraire les annonces
    const listings = await page.evaluate(() => {
      const cards = document.querySelectorAll('[data-testid="card-container"]')
      const results = []
      
      for (let i = 0; i < Math.min(cards.length, 10); i++) {
        const card = cards[i]
        
        try {
          const titleEl = card.querySelector('[data-testid="listing-card-title"]')
          const priceEl = card.querySelector('[data-testid="price-availability-row"]')
          const linkEl = card.querySelector('a')
          const imgsEls = card.querySelectorAll('img')
          
          if (titleEl && linkEl) {
            results.push({
              title: titleEl.textContent?.trim() || '',
              price: priceEl?.textContent?.trim() || '',
              url: linkEl.href || '',
              photos: Array.from(imgsEls).map(img => img.src).filter(Boolean)
            })
          }
        } catch (err) {
          console.error('Erreur extraction card:', err)
        }
      }
      
      return results
    })
    
    console.log(`✅ Airbnb: ${listings.length} annonces trouvées`)
    
    // Analyser chaque annonce
    for (const listing of listings) {
      const similarity = calculateSimilarity(property, {
        address: listing.title,
        rooms: property.rooms, // On ne peut pas extraire facilement
        surface: property.surface,
      })
      
      const reasons = []
      
      // Vérifier si le titre contient la ville
      if (listing.title.toLowerCase().includes(property.city.toLowerCase())) {
        reasons.push(`Annonce dans ${property.city}`)
      }
      
      // Vérifier si le titre contient des mots-clés de l'adresse
      const addressWords = property.address.toLowerCase().split(' ')
      for (const word of addressWords) {
        if (word.length > 3 && listing.title.toLowerCase().includes(word)) {
          reasons.push(`Mot-clé de l'adresse trouvé: "${word}"`)
        }
      }
      
      if (reasons.length > 0) {
        results.push({
          platform: 'Airbnb',
          url: listing.url,
          title: listing.title,
          price: listing.price,
          photos: listing.photos,
          similarity,
          suspicionLevel: getSuspicionLevel(similarity),
          reasons,
        })
      }
    }
    
    await closeBrowser(browser)
    
  } catch (error) {
    console.error('❌ Erreur scraping Airbnb:', error)
    if (browser) {
      const { closeBrowser } = await import('./browser')
      await closeBrowser(browser)
    }
  }
  
  return results
}

/**
 * Scraping Booking.com (version simplifiée)
 */
async function scrapeBooking(property: PropertyData): Promise<DetectionResult[]> {
  console.log('🏨 Scraping Booking.com...')
  
  const results: DetectionResult[] = []
  
  // Booking a beaucoup de protections anti-bot
  // Pour le MVP, on fait une recherche simple
  
  try {
    const searchUrl = `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(property.city + ', France')}`
    console.log('🔍 URL Booking:', searchUrl)
    
    // TODO Phase 2: Implémenter avec proxies rotatifs ou attendre d'avoir du budget
    console.log('⚠️ Booking nécessite proxies - à implémenter en Phase 2')
    
  } catch (error) {
    console.error('Erreur scraping Booking:', error)
  }
  
  return results
}

/**
 * Scraping Le Bon Coin
 */
async function scrapeLeBonCoin(property: PropertyData): Promise<DetectionResult[]> {
  console.log('📰 Scraping Le Bon Coin...')
  
  const results: DetectionResult[] = []
  let browser = null
  
  try {
    const { getBrowser, closeBrowser } = await import('./browser')
    browser = await getBrowser()
    
    const page = await browser.newPage()
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')
    
    // Recherche locations vacances dans la ville
    const searchUrl = `https://www.leboncoin.fr/recherche?category=12&locations=${encodeURIComponent(property.city)}`
    
    console.log('🔍 URL Le Bon Coin:', searchUrl)
    
    await page.goto(searchUrl, { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    })
    
    await page.waitForTimeout(2000)
    
    // Extraire les annonces
    const listings = await page.evaluate(() => {
      const ads = document.querySelectorAll('[data-qa-id="aditem_container"]')
      const results = []
      
      for (let i = 0; i < Math.min(ads.length, 10); i++) {
        const ad = ads[i]
        
        try {
          const titleEl = ad.querySelector('[data-qa-id="aditem_title"]')
          const priceEl = ad.querySelector('[data-qa-id="aditem_price"]')
          const linkEl = ad.querySelector('a')
          const imgEl = ad.querySelector('img')
          
          if (titleEl && linkEl) {
            results.push({
              title: titleEl.textContent?.trim() || '',
              price: priceEl?.textContent?.trim() || '',
              url: linkEl.href || '',
              photos: imgEl ? [imgEl.src] : []
            })
          }
        } catch (err) {
          console.error('Erreur extraction annonce LBC:', err)
        }
      }
      
      return results
    })
    
    console.log(`✅ Le Bon Coin: ${listings.length} annonces trouvées`)
    
    // Analyser chaque annonce
    for (const listing of listings) {
      const reasons = []
      
      // Vérifier ville
      if (listing.title.toLowerCase().includes(property.city.toLowerCase())) {
        reasons.push(`Annonce dans ${property.city}`)
      }
      
      // Vérifier nombre de pièces
      const roomsMatch = listing.title.match(/(\d+)\s*(pièces?|chambres?)/i)
      if (roomsMatch && parseInt(roomsMatch[1]) === property.rooms) {
        reasons.push(`${property.rooms} pièces mentionnées`)
      }
      
      // Vérifier mots-clés adresse
      const addressWords = property.address.toLowerCase().split(' ')
      for (const word of addressWords) {
        if (word.length > 3 && listing.title.toLowerCase().includes(word)) {
          reasons.push(`Mot-clé trouvé: "${word}"`)
        }
      }
      
      if (reasons.length > 0) {
        const similarity = calculateSimilarity(property, {
          address: listing.title,
          rooms: roomsMatch ? parseInt(roomsMatch[1]) : 0,
          surface: 0,
        })
        
        results.push({
          platform: 'Le Bon Coin',
          url: listing.url,
          title: listing.title,
          price: listing.price,
          photos: listing.photos,
          similarity,
          suspicionLevel: getSuspicionLevel(similarity),
          reasons,
        })
      }
    }
    
    await closeBrowser(browser)
    
  } catch (error) {
    console.error('❌ Erreur scraping Le Bon Coin:', error)
    if (browser) {
      const { closeBrowser } = await import('./browser')
      await closeBrowser(browser)
    }
  }
  
  return results
}

/**
 * Scraping Abritel (version simplifiée)
 */
async function scrapeAbritel(property: PropertyData): Promise<DetectionResult[]> {
  console.log('🏖️ Scraping Abritel...')
  
  const results: DetectionResult[] = []
  
  try {
    const searchUrl = `https://www.abritel.fr/search/keywords:${encodeURIComponent(property.city)}`
    console.log('🔍 URL Abritel:', searchUrl)
    
    // TODO Phase 2: Implémenter avec proxies
    console.log('⚠️ Abritel nécessite proxies - à implémenter en Phase 2')
    
  } catch (error) {
    console.error('Erreur scraping Abritel:', error)
  }
  
  return results
}

/**
 * Calcul de similarité entre deux biens
 */
function calculateSimilarity(property: PropertyData, listing: any): number {
  let score = 0
  const weights = {
    address: 40,
    rooms: 20,
    surface: 15,
    photos: 25,
  }
  
  // Comparaison adresse (fuzzy matching)
  if (listing.address && property.address.toLowerCase().includes(listing.address.toLowerCase())) {
    score += weights.address
  }
  
  // Comparaison nombre de pièces
  if (listing.rooms === property.rooms) {
    score += weights.rooms
  } else if (Math.abs(listing.rooms - property.rooms) === 1) {
    score += weights.rooms * 0.5
  }
  
  // Comparaison surface
  if (listing.surface && Math.abs(listing.surface - property.surface) < 10) {
    score += weights.surface
  }
  
  // TODO: Comparaison de photos avec Computer Vision (Phase 2)
  
  return score
}

/**
 * Détermine le niveau de suspicion
 */
function getSuspicionLevel(similarity: number): 'low' | 'medium' | 'high' {
  if (similarity >= 70) return 'high'
  if (similarity >= 40) return 'medium'
  return 'low'
}

/**
 * VERSION AVANCÉE avec Puppeteer (à activer en Phase 2)
 */
export async function scrapeWithPuppeteer(property: PropertyData): Promise<ScrapingReport> {
  // TODO: Installer puppeteer
  // npm install puppeteer
  
  console.log('🤖 Scraping avancé avec Puppeteer (non implémenté)')
  
  // const browser = await puppeteer.launch({ headless: true })
  // const page = await browser.newPage()
  // ... scraping logic
  
  // Pour l'instant, retourner le scan basique
  return scanProperty(property)
}
