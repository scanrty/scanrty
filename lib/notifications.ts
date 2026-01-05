import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface OrderData {
  customerName: string
  customerEmail: string
  customerPhone: string
  product: string
  amount: number
  propertyData: {
    address: string
    city: string
    postalCode: string
    propertyType: string
    rooms: number
    surface: number
    floor?: string
    features: string[]
    description: string
  }
}

export async function sendOrderNotificationToTeam(data: OrderData) {
  try {
    const emailContent = generateTeamNotificationHTML(data)
    
    const result = await resend.emails.send({
      from: 'ScanRty Commandes <noreply@scanrty.com>',
      to: 'info.client@scanrty.com',
      subject: `🔔 NOUVELLE COMMANDE ${data.product.toUpperCase()} - ${data.customerName}`,
      html: emailContent,
    })
    
    console.log('✅ Notification équipe envoyée:', result)
    return result
  } catch (error) {
    console.error('❌ Erreur notification équipe:', error)
    throw error
  }
}

export async function sendOrderConfirmationToClient(data: OrderData) {
  try {
    const emailContent = generateClientConfirmationHTML(data)
    
    const result = await resend.emails.send({
      from: 'ScanRty <noreply@scanrty.com>',
      to: data.customerEmail,
      subject: `Confirmation de votre commande ${data.product}`,
      html: emailContent,
    })
    
    console.log('✅ Confirmation client envoyée:', result)
    return result
  } catch (error) {
    console.error('❌ Erreur confirmation client:', error)
    throw error
  }
}

function generateTeamNotificationHTML(data: OrderData): string {
  const { customerName, customerEmail, customerPhone, product, amount, propertyData } = data
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px; }
    .container { max-width: 700px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #38bdf8, #0ea5e9); padding: 30px; text-align: center; color: white; }
    .header h1 { margin: 0; font-size: 28px; }
    .content { padding: 30px; }
    .section { margin-bottom: 25px; }
    .section-title { color: #38bdf8; font-size: 18px; font-weight: bold; margin-bottom: 15px; border-bottom: 2px solid #38bdf8; padding-bottom: 8px; }
    .info-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #f0f0f0; }
    .info-label { font-weight: 600; color: #666; }
    .info-value { color: #333; text-align: right; }
    .checklist { background: #fff9e6; border-left: 4px solid #fbbf24; padding: 20px; border-radius: 6px; }
    .checklist h3 { margin: 0 0 15px 0; color: #f59e0b; }
    .checklist ol { margin: 0; padding-left: 20px; }
    .checklist li { padding: 8px 0; color: #333; }
    .urgent { background: #fee; border-left: 4px solid #dc2626; padding: 15px; border-radius: 6px; color: #991b1b; font-weight: 600; }
    .button { display: inline-block; background: #38bdf8; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🔔 NOUVELLE COMMANDE</h1>
      <div style="margin-top: 10px; font-size: 20px; font-weight: 600;">${product}</div>
    </div>
    
    <div class="content">
      <div class="urgent">
        ⏰ DEADLINE : Rapport à envoyer sous 24 heures maximum
      </div>
      
      <div class="section">
        <div class="section-title">👤 INFORMATIONS CLIENT</div>
        <div class="info-row">
          <span class="info-label">Nom complet :</span>
          <span class="info-value">${customerName}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Email :</span>
          <span class="info-value">${customerEmail}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Téléphone :</span>
          <span class="info-value">${customerPhone}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Montant payé :</span>
          <span class="info-value" style="color: #10b981; font-weight: bold; font-size: 18px;">${amount}€</span>
        </div>
      </div>
      
      <div class="section">
        <div class="section-title">🏠 BIEN À SURVEILLER</div>
        <div class="info-row">
          <span class="info-label">Type :</span>
          <span class="info-value">${propertyData.propertyType === 'appartement' ? 'Appartement' : 'Maison'}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Adresse complète :</span>
          <span class="info-value">${propertyData.address}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Ville :</span>
          <span class="info-value">${propertyData.city} (${propertyData.postalCode})</span>
        </div>
        <div class="info-row">
          <span class="info-label">Nombre de pièces :</span>
          <span class="info-value">${propertyData.rooms}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Surface :</span>
          <span class="info-value">${propertyData.surface} m²</span>
        </div>
        ${propertyData.floor ? `
        <div class="info-row">
          <span class="info-label">Étage :</span>
          <span class="info-value">${propertyData.floor}</span>
        </div>
        ` : ''}
        ${propertyData.features.length > 0 ? `
        <div class="info-row">
          <span class="info-label">Équipements :</span>
          <span class="info-value">${propertyData.features.join(', ')}</span>
        </div>
        ` : ''}
        ${propertyData.description ? `
        <div style="margin-top: 15px;">
          <div class="info-label">Description / Remarques :</div>
          <div style="background: #f9fafb; padding: 15px; border-radius: 6px; margin-top: 8px; color: #333;">
            ${propertyData.description}
          </div>
        </div>
        ` : ''}
      </div>
      
      <div class="checklist">
        <h3>📋 PROCESS À SUIVRE (15-20 minutes) :</h3>
        <ol>
          <li><strong>Octoparse - Airbnb :</strong> Lance template "Airbnb ${propertyData.city}", exporte CSV</li>
          <li><strong>Octoparse - Le Bon Coin :</strong> Lance template "LBC ${propertyData.city}", exporte CSV</li>
          <li><strong>Analyse :</strong> Compare résultats avec adresse "${propertyData.address}"</li>
          <li><strong>Rapport :</strong> Ouvre template Word, remplis les détections</li>
          <li><strong>Export PDF :</strong> Génère le rapport final</li>
          <li><strong>Envoi :</strong> Email le rapport à ${customerEmail}</li>
        </ol>
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #f0f0f0;">
        <p style="color: #666; margin-bottom: 15px;">Recherche rapide :</p>
        <a href="https://www.airbnb.fr/s/${encodeURIComponent(propertyData.city)}/homes" class="button" target="_blank">
          Voir Airbnb ${propertyData.city}
        </a>
        <a href="https://www.leboncoin.fr/recherche?category=12&locations=${encodeURIComponent(propertyData.city)}" class="button" target="_blank" style="background: #0ea5e9;">
          Voir Le Bon Coin
        </a>
      </div>
      
      <div style="margin-top: 30px; padding: 20px; background: #f0f9ff; border-radius: 6px; text-align: center;">
        <div style="font-size: 14px; color: #0369a1; font-weight: 600; margin-bottom: 8px;">
          💡 RAPPEL
        </div>
        <div style="font-size: 13px; color: #0369a1;">
          Une fois le rapport envoyé, réponds à cet email avec "DONE" pour traçabilité.
        </div>
      </div>
    </div>
  </div>
</body>
</html>
  `
}

function generateClientConfirmationHTML(data: OrderData): string {
  const { customerName, product, amount } = data
  
  const productMessages: Record<string, { title: string; message: string; delay: string }> = {
    'Sentinelle': {
      title: 'Votre rapport de détection sera prêt sous 24h',
      message: 'Notre équipe analyse votre bien sur toutes les plateformes de location (Airbnb, Booking, Le Bon Coin, Abritel). Vous recevrez un rapport détaillé par email dans les 24 heures.',
      delay: '24 heures'
    },
    'VigilAn': {
      title: 'Votre surveillance annuelle est activée',
      message: 'Votre bien est désormais sous surveillance continue. Vous recevrez votre premier rapport mensuel dans les 24 heures, puis chaque mois pendant un an.',
      delay: '24 heures'
    }
  }
  
  const productInfo = productMessages[product] || productMessages['Sentinelle']
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #38bdf8, #0ea5e9); padding: 40px 30px; text-align: center; color: white; }
    .header h1 { margin: 0; font-size: 32px; }
    .content { padding: 40px 30px; }
    .success-icon { width: 80px; height: 80px; background: linear-gradient(135deg, #38bdf8, #60a5fa); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: white; font-size: 40px; }
    .title { font-size: 24px; color: #1f2937; text-align: center; margin-bottom: 10px; }
    .subtitle { font-size: 16px; color: #6b7280; text-align: center; margin-bottom: 30px; }
    .info-box { background: #f3f4f6; padding: 25px; border-radius: 12px; margin-bottom: 30px; }
    .info-row { display: flex; justify-content: space-between; padding: 8px 0; }
    .info-label { color: #6b7280; }
    .info-value { color: #1f2937; font-weight: 600; }
    .next-steps { background: #eff6ff; border-left: 4px solid #38bdf8; padding: 20px; border-radius: 8px; margin-bottom: 30px; }
    .next-steps h3 { margin: 0 0 10px 0; color: #1f2937; font-size: 18px; }
    .next-steps p { margin: 0; color: #6b7280; line-height: 1.6; }
    .footer { text-align: center; padding: 30px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Scan<span style="background: white; color: #38bdf8; padding: 0 8px; border-radius: 6px;">R</span>ty</h1>
    </div>
    
    <div class="content">
      <div class="success-icon">✓</div>
      
      <h2 class="title">Merci pour votre commande !</h2>
      <p class="subtitle">Bonjour <strong>${customerName}</strong>,</p>
      
      <div class="info-box">
        <h3 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px;">📦 Détails de votre commande</h3>
        <div class="info-row">
          <span class="info-label">Produit :</span>
          <span class="info-value">${product}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Montant :</span>
          <span class="info-value" style="color: #38bdf8; font-size: 20px;">${amount}€</span>
        </div>
      </div>
      
      <div class="next-steps">
        <h3>📋 ${productInfo.title}</h3>
        <p>${productInfo.message}</p>
      </div>
      
      <div style="background: #f9fafb; padding: 20px; border-radius: 8px; text-align: center;">
        <div style="font-size: 14px; color: #6b7280; margin-bottom: 8px;">
          <strong>Besoin d'aide ?</strong>
        </div>
        <div style="font-size: 14px; color: #6b7280;">
          Contactez-nous : <a href="mailto:info.client@scanrty.com" style="color: #38bdf8; text-decoration: none;">info.client@scanrty.com</a>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 30px;">
        <a href="https://scanrty.com" style="display: inline-block; background: linear-gradient(135deg, #38bdf8, #60a5fa); color: white; padding: 14px 40px; text-decoration: none; border-radius: 25px; font-weight: 600;">
          Retour sur ScanRty
        </a>
      </div>
    </div>
    
    <div class="footer">
      <p style="margin: 0 0 10px 0;">ScanRty - 60 rue François 1er, 75008 Paris</p>
      <p style="margin: 0; font-size: 12px;">© 2026 ScanRty. Tous droits réservés.</p>
      <p style="margin: 15px 0 0; font-size: 11px;">
        🔒 Vos données sont confidentielles et seront supprimées conformément au RGPD.
      </p>
    </div>
  </div>
</body>
</html>
  `
}
