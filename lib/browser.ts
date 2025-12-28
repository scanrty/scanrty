/**
 * Service Puppeteer optimisé pour Vercel (Serverless)
 */

import chromium from 'chrome-aws-lambda'
import puppeteer from 'puppeteer-core'

export async function getBrowser() {
  // Configuration différente selon l'environnement
  const isDev = process.env.NODE_ENV === 'development'
  
  if (isDev) {
    // En développement local, utiliser Chrome installé
    return puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
  } else {
    // En production sur Vercel, utiliser chrome-aws-lambda
    return puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
    })
  }
}

export async function closeBrowser(browser: any) {
  if (browser) {
    await browser.close()
  }
}
