/**
 * Service Puppeteer optimisé pour Vercel (Serverless)
 * Import dynamique pour éviter l'erreur de compilation Next.js
 */

export async function getBrowser() {
  // Import dynamique uniquement au runtime (pas au build)
  const chromium = (await import('@sparticuz/chromium')).default
  const puppeteer = (await import('puppeteer-core')).default
  
  // Configuration différente selon l'environnement
  const isDev = process.env.NODE_ENV === 'development'
  
  if (isDev) {
    // En développement local, utiliser Chrome installé
    return puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
  } else {
    // En production sur Vercel, utiliser @sparticuz/chromium
    return puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    })
  }
}

export async function closeBrowser(browser: any) {
  if (browser) {
    await browser.close()
  }
}
