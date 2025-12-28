/**
 * ScanRty - Générateur de rapports de détection
 */

import { ScrapingReport, DetectionResult } from './scraping'

export function generateTextReport(report: ScrapingReport): string {
  const { propertyData, detections, summary } = report
  
  let text = `
╔═══════════════════════════════════════════════════════════════╗
║                    RAPPORT SCANRTY                            ║
║              Détection de Sous-Location                       ║
╚═══════════════════════════════════════════════════════════════╝

📅 Date du scan : ${new Date(report.scrapedAt).toLocaleString('fr-FR')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 BIEN SURVEILLÉ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Type            : ${propertyData.propertyType === 'appartement' ? 'Appartement' : 'Maison'}
Adresse         : ${propertyData.address}
Ville           : ${propertyData.city} (${propertyData.postalCode})
Pièces          : ${propertyData.rooms}
Surface         : ${propertyData.surface} m²
${propertyData.floor ? `Étage           : ${propertyData.floor}\n` : ''}
${propertyData.features.length > 0 ? `Équipements     : ${propertyData.features.join(', ')}\n` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 RÉSUMÉ DES DÉTECTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Total d'annonces détectées      : ${summary.totalDetections}
└─ Suspicion HAUTE  (🔴)        : ${summary.highSuspicion}
└─ Suspicion MOYENNE (🟡)       : ${summary.mediumSuspicion}
└─ Suspicion FAIBLE (🟢)        : ${summary.lowSuspicion}

`

  if (summary.highSuspicion > 0) {
    text += `⚠️  ALERTE : ${summary.highSuspicion} annonce(s) avec forte probabilité de sous-location détectée(s) !\n\n`
  } else if (summary.mediumSuspicion > 0) {
    text += `⚡ ATTENTION : ${summary.mediumSuspicion} annonce(s) avec probabilité moyenne détectée(s).\n\n`
  } else if (summary.totalDetections > 0) {
    text += `ℹ️  INFO : ${summary.totalDetections} annonce(s) avec faible probabilité détectée(s).\n\n`
  } else {
    text += `✅ AUCUNE annonce suspecte détectée sur les plateformes analysées.\n\n`
  }

  if (detections.length > 0) {
    text += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔍 DÉTAILS DES ANNONCES DÉTECTÉES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

`
    
    detections.forEach((detection, index) => {
      const icon = detection.suspicionLevel === 'high' ? '🔴' : 
                   detection.suspicionLevel === 'medium' ? '🟡' : '🟢'
      
      text += `${icon} ANNONCE #${index + 1} - Suspicion ${detection.suspicionLevel.toUpperCase()}
   
   Plateforme  : ${detection.platform}
   Titre       : ${detection.title}
   URL         : ${detection.url}
   ${detection.price ? `Prix        : ${detection.price}\n` : ''}
   Score       : ${detection.similarity}/100
   
   Raisons de suspicion :
${detection.reasons.map(r => `   • ${r}`).join('\n')}
   
   Photos      : ${detection.photos.length} photo(s) disponible(s)
   
───────────────────────────────────────────────────────────────

`
    })
  }

  text += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 PLATEFORMES ANALYSÉES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Airbnb.fr
✅ Booking.com
✅ Abritel.fr
✅ Le Bon Coin (Locations vacances)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ℹ️  INFORMATIONS LÉGALES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ce rapport est fourni à titre informatif. Les annonces détectées
présentent des similarités avec votre bien mais ne constituent
pas une preuve formelle de sous-location.

Nous vous recommandons de :
1. Vérifier les annonces manuellement
2. Contacter un avocat si nécessaire
3. Prendre des captures d'écran comme preuves
4. Consulter votre contrat de bail

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📞 BESOIN D'AIDE ?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Email   : info.client@scanrty.com
Site    : https://scanrty.com

ScanRty - Votre partenaire de confiance pour la détection
          de sous-locations non autorisées.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rapport généré par ScanRty © ${new Date().getFullYear()}
Données confidentielles - Ne pas diffuser

`

  return text
}

export function generateHTMLReport(report: ScrapingReport): string {
  const { propertyData, detections, summary } = report
  
  const alertClass = summary.highSuspicion > 0 ? 'high-alert' : 
                     summary.mediumSuspicion > 0 ? 'medium-alert' : 
                     summary.totalDetections > 0 ? 'low-alert' : 'no-alert'
  
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rapport ScanRty - ${propertyData.address}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #f8f9fa;
      padding: 40px 20px;
      color: #1f2937;
    }
    .container { max-width: 900px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .header {
      background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%);
      padding: 40px 30px;
      text-align: center;
      color: white;
    }
    .header h1 { font-size: 32px; margin-bottom: 10px; }
    .header .subtitle { font-size: 16px; opacity: 0.9; }
    .content { padding: 40px 30px; }
    .section { margin-bottom: 40px; }
    .section-title {
      font-size: 20px;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #38bdf8;
    }
    .property-info {
      background: #f3f4f6;
      padding: 20px;
      border-radius: 12px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
    .property-info-item { display: flex; justify-content: space-between; }
    .property-info-label { font-weight: 600; color: #6b7280; }
    .property-info-value { color: #1f2937; }
    .summary {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;
      margin-bottom: 30px;
    }
    .summary-card {
      background: #f3f4f6;
      padding: 20px;
      border-radius: 12px;
      text-align: center;
    }
    .summary-card .number {
      font-size: 36px;
      font-weight: 700;
      color: #38bdf8;
      margin-bottom: 5px;
    }
    .summary-card .label {
      font-size: 12px;
      color: #6b7280;
      text-transform: uppercase;
      font-weight: 600;
    }
    .alert {
      padding: 20px;
      border-radius: 12px;
      margin-bottom: 30px;
      border-left: 4px solid;
    }
    .alert.high-alert {
      background: #fee; border-color: #dc2626;
    }
    .alert.medium-alert {
      background: #fef3c7; border-color: #f59e0b;
    }
    .alert.low-alert {
      background: #dbeafe; border-color: #3b82f6;
    }
    .alert.no-alert {
      background: #d1fae5; border-color: #10b981;
    }
    .alert-title {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .detection {
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
    }
    .detection-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }
    .detection-title {
      font-size: 16px;
      font-weight: 600;
      color: #1f2937;
    }
    .detection-badge {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
    }
    .detection-badge.high { background: #fee2e2; color: #dc2626; }
    .detection-badge.medium { background: #fef3c7; color: #f59e0b; }
    .detection-badge.low { background: #dbeafe; color: #3b82f6; }
    .detection-info {
      display: grid;
      gap: 10px;
      margin-bottom: 15px;
    }
    .detection-info-item {
      display: flex;
      gap: 10px;
    }
    .detection-info-label {
      font-weight: 600;
      color: #6b7280;
      min-width: 100px;
    }
    .detection-reasons {
      background: white;
      padding: 15px;
      border-radius: 8px;
      border-left: 3px solid #38bdf8;
    }
    .detection-reasons-title {
      font-weight: 600;
      margin-bottom: 10px;
      color: #1f2937;
    }
    .detection-reasons ul {
      list-style: none;
      padding: 0;
    }
    .detection-reasons li {
      padding: 5px 0;
      padding-left: 20px;
      position: relative;
    }
    .detection-reasons li:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #38bdf8;
      font-weight: bold;
    }
    .footer {
      background: #f9fafb;
      padding: 30px;
      text-align: center;
      color: #6b7280;
      font-size: 14px;
      border-top: 1px solid #e5e7eb;
    }
    .platforms {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;
      margin-top: 20px;
    }
    .platform-badge {
      background: #eff6ff;
      padding: 10px;
      border-radius: 8px;
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      color: #38bdf8;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🔍 Rapport de Détection ScanRty</h1>
      <div class="subtitle">Détection de Sous-Location</div>
      <div style="margin-top: 15px; opacity: 0.9;">
        📅 ${new Date(report.scrapedAt).toLocaleString('fr-FR')}
      </div>
    </div>
    
    <div class="content">
      <!-- Bien surveillé -->
      <div class="section">
        <h2 class="section-title">📍 Bien Surveillé</h2>
        <div class="property-info">
          <div class="property-info-item">
            <span class="property-info-label">Type</span>
            <span class="property-info-value">${propertyData.propertyType === 'appartement' ? 'Appartement' : 'Maison'}</span>
          </div>
          <div class="property-info-item">
            <span class="property-info-label">Pièces</span>
            <span class="property-info-value">${propertyData.rooms}</span>
          </div>
          <div class="property-info-item">
            <span class="property-info-label">Adresse</span>
            <span class="property-info-value">${propertyData.address}</span>
          </div>
          <div class="property-info-item">
            <span class="property-info-label">Surface</span>
            <span class="property-info-value">${propertyData.surface} m²</span>
          </div>
          <div class="property-info-item">
            <span class="property-info-label">Ville</span>
            <span class="property-info-value">${propertyData.city} (${propertyData.postalCode})</span>
          </div>
          ${propertyData.floor ? `
          <div class="property-info-item">
            <span class="property-info-label">Étage</span>
            <span class="property-info-value">${propertyData.floor}</span>
          </div>
          ` : ''}
        </div>
      </div>
      
      <!-- Résumé -->
      <div class="section">
        <h2 class="section-title">📊 Résumé des Détections</h2>
        <div class="summary">
          <div class="summary-card">
            <div class="number">${summary.totalDetections}</div>
            <div class="label">Total</div>
          </div>
          <div class="summary-card">
            <div class="number" style="color: #dc2626;">${summary.highSuspicion}</div>
            <div class="label">Haute 🔴</div>
          </div>
          <div class="summary-card">
            <div class="number" style="color: #f59e0b;">${summary.mediumSuspicion}</div>
            <div class="label">Moyenne 🟡</div>
          </div>
          <div class="summary-card">
            <div class="number" style="color: #3b82f6;">${summary.lowSuspicion}</div>
            <div class="label">Faible 🟢</div>
          </div>
        </div>
        
        <div class="alert ${alertClass}">
          <div class="alert-title">
            ${summary.highSuspicion > 0 ? '⚠️ ALERTE : Forte probabilité de sous-location détectée !' : 
              summary.mediumSuspicion > 0 ? '⚡ ATTENTION : Probabilité moyenne de sous-location détectée.' :
              summary.totalDetections > 0 ? 'ℹ️ INFO : Annonces avec faible probabilité détectées.' :
              '✅ AUCUNE annonce suspecte détectée.'}
          </div>
          ${summary.totalDetections > 0 ? `
          <p>
            Nous avons détecté ${summary.totalDetections} annonce(s) qui présente(nt) des similarités 
            avec votre bien. Veuillez consulter les détails ci-dessous.
          </p>
          ` : `
          <p>
            Notre système n'a détecté aucune annonce suspecte correspondant à votre bien 
            sur les plateformes analysées. Votre bien ne semble pas faire l'objet de sous-location.
          </p>
          `}
        </div>
      </div>
      
      ${detections.length > 0 ? `
      <!-- Détails des détections -->
      <div class="section">
        <h2 class="section-title">🔍 Détails des Annonces Détectées</h2>
        ${detections.map((d, i) => `
        <div class="detection">
          <div class="detection-header">
            <div class="detection-title">Annonce #${i + 1} - ${d.platform}</div>
            <div class="detection-badge ${d.suspicionLevel}">
              Suspicion ${d.suspicionLevel === 'high' ? 'HAUTE 🔴' : d.suspicionLevel === 'medium' ? 'MOYENNE 🟡' : 'FAIBLE 🟢'}
            </div>
          </div>
          <div class="detection-info">
            <div class="detection-info-item">
              <span class="detection-info-label">Titre :</span>
              <span>${d.title}</span>
            </div>
            <div class="detection-info-item">
              <span class="detection-info-label">URL :</span>
              <a href="${d.url}" target="_blank" style="color: #38bdf8;">${d.url}</a>
            </div>
            ${d.price ? `
            <div class="detection-info-item">
              <span class="detection-info-label">Prix :</span>
              <span>${d.price}</span>
            </div>
            ` : ''}
            <div class="detection-info-item">
              <span class="detection-info-label">Score :</span>
              <span><strong>${d.similarity}/100</strong></span>
            </div>
            <div class="detection-info-item">
              <span class="detection-info-label">Photos :</span>
              <span>${d.photos.length} photo(s) disponible(s)</span>
            </div>
          </div>
          <div class="detection-reasons">
            <div class="detection-reasons-title">Raisons de suspicion :</div>
            <ul>
              ${d.reasons.map(r => `<li>${r}</li>`).join('')}
            </ul>
          </div>
        </div>
        `).join('')}
      </div>
      ` : ''}
      
      <!-- Plateformes analysées -->
      <div class="section">
        <h2 class="section-title">📋 Plateformes Analysées</h2>
        <div class="platforms">
          <div class="platform-badge">✅ Airbnb</div>
          <div class="platform-badge">✅ Booking</div>
          <div class="platform-badge">✅ Abritel</div>
          <div class="platform-badge">✅ Le Bon Coin</div>
        </div>
      </div>
      
      <!-- Informations légales -->
      <div class="section" style="background: #f9fafb; padding: 20px; border-radius: 12px; font-size: 14px; color: #6b7280;">
        <h2 class="section-title">ℹ️ Informations Légales</h2>
        <p style="margin-bottom: 15px;">
          Ce rapport est fourni à titre informatif. Les annonces détectées présentent des similarités 
          avec votre bien mais ne constituent pas une preuve formelle de sous-location.
        </p>
        <p style="font-weight: 600; color: #1f2937; margin-bottom: 10px;">Nous vous recommandons de :</p>
        <ul style="list-style: none; padding-left: 20px;">
          <li style="margin-bottom: 8px;">• Vérifier les annonces manuellement</li>
          <li style="margin-bottom: 8px;">• Contacter un avocat si nécessaire</li>
          <li style="margin-bottom: 8px;">• Prendre des captures d'écran comme preuves</li>
          <li style="margin-bottom: 8px;">• Consulter votre contrat de bail</li>
        </ul>
      </div>
    </div>
    
    <div class="footer">
      <div style="font-size: 16px; font-weight: 600; color: #1f2937; margin-bottom: 10px;">
        📞 Besoin d'aide ?
      </div>
      <div style="margin-bottom: 5px;">
        Email : <a href="mailto:info.client@scanrty.com" style="color: #38bdf8;">info.client@scanrty.com</a>
      </div>
      <div style="margin-bottom: 20px;">
        Site : <a href="https://scanrty.com" style="color: #38bdf8;">https://scanrty.com</a>
      </div>
      <div style="padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px;">
        ScanRty © ${new Date().getFullYear()} - Votre partenaire de confiance pour la détection de sous-locations<br>
        Données confidentielles - Ne pas diffuser
      </div>
    </div>
  </div>
</body>
</html>
  `
}
