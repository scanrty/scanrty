import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface EmailData {
  email: string
  name: string
  product: string
  amount: number
  phone?: string
  address?: string
}

export async function sendConfirmationEmail(data: EmailData) {
  try {
    const emailContent = getEmailContent(data)
    
    const result = await resend.emails.send({
      from: 'ScanRty <noreply@scanrty.com>',
      to: data.email,
      subject: `Confirmation de votre commande ${data.product}`,
      html: emailContent,
    })
    
    console.log('✅ Email envoyé avec succès:', result)
    return result
  } catch (error) {
    console.error('❌ Erreur envoi email:', error)
    throw error
  }
}

export async function sendNotificationToTeam(data: EmailData) {
  try {
    const emailContent = getTeamNotificationContent(data)
    
    const result = await resend.emails.send({
      from: 'ScanRty Notifications <noreply@scanrty.com>',
      to: 'info.client@scanrty.com',
      subject: `🔔 Nouvelle commande ${data.product} - ${data.name}`,
      html: emailContent,
    })
    
    console.log('✅ Notification équipe envoyée:', result)
    return result
  } catch (error) {
    console.error('❌ Erreur notification équipe:', error)
    throw error
  }
}

function getEmailContent(data: EmailData): string {
  const productMessages: Record<string, { title: string; message: string }> = {
    'Sentinelle': {
      title: 'Votre rapport de détection sera prêt sous 24h',
      message: 'Notre équipe va analyser votre bien et vous transmettre un rapport détaillé de détection de sous-location dans les 24 heures.'
    },
    'VigilAn': {
      title: 'Votre surveillance annuelle est maintenant active',
      message: 'Votre bien est désormais sous surveillance quotidienne. Vous recevrez des rapports mensuels et des alertes en temps réel en cas de détection.'
    },
    'TarGate': {
      title: 'Votre accès au dashboard TarGate est activé',
      message: 'Vous pouvez maintenant accéder à votre dashboard d\'optimisation tarifaire en temps réel.'
    }
  }
  
  const productInfo = productMessages[data.product] || {
    title: 'Votre commande a été confirmée',
    message: 'Notre équipe va traiter votre demande dans les plus brefs délais.'
  }
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirmation de commande - ScanRty</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8f9fa;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #38bdf8 0%, #ffffff 100%); padding: 40px 30px; border-radius: 20px 20px 0 0; text-align: center;">
      <h1 style="margin: 0; color: white; font-size: 32px; font-weight: bold;">
        Scan<span style="color: #38bdf8; background: white; padding: 0 8px; border-radius: 6px;">R</span>ty
      </h1>
    </div>
    
    <!-- Body -->
    <div style="background: white; padding: 40px 30px; border-radius: 0 0 20px 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      
      <!-- Success icon -->
      <div style="text-align: center; margin-bottom: 30px;">
        <div style="display: inline-block; width: 80px; height: 80px; background: linear-gradient(135deg, #38bdf8, #60a5fa); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
          <span style="color: white; font-size: 40px;">✓</span>
        </div>
      </div>
      
      <!-- Main message -->
      <h2 style="color: #1f2937; font-size: 24px; margin: 0 0 10px 0; text-align: center;">
        Merci pour votre commande !
      </h2>
      
      <p style="color: #6b7280; font-size: 16px; line-height: 1.6; text-align: center; margin: 0 0 30px 0;">
        Bonjour <strong>${data.name}</strong>,
      </p>
      
      <!-- Order details -->
      <div style="background: #f3f4f6; padding: 25px; border-radius: 12px; margin-bottom: 30px;">
        <h3 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px;">📦 Détails de votre commande</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #6b7280;">Produit :</td>
            <td style="padding: 8px 0; color: #1f2937; font-weight: 600; text-align: right;">${data.product}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;">Montant :</td>
            <td style="padding: 8px 0; color: #38bdf8; font-weight: 700; font-size: 20px; text-align: right;">${data.amount}€</td>
          </tr>
        </table>
      </div>
      
      <!-- Next steps -->
      <div style="background: #eff6ff; border-left: 4px solid #38bdf8; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
        <h3 style="margin: 0 0 10px 0; color: #1f2937; font-size: 18px;">📋 ${productInfo.title}</h3>
        <p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 1.6;">
          ${productInfo.message}
        </p>
      </div>
      
      <!-- Contact info -->
      <div style="text-align: center; padding: 25px 0; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px;">
          <strong>Besoin d'aide ?</strong>
        </p>
        <p style="margin: 0; color: #6b7280; font-size: 14px;">
          Contactez-nous : <a href="mailto:info.client@scanrty.com" style="color: #38bdf8; text-decoration: none;">info.client@scanrty.com</a>
        </p>
      </div>
      
      <!-- CTA Button -->
      <div style="text-align: center; margin-top: 30px;">
        <a href="https://scanrty.com" style="display: inline-block; background: linear-gradient(135deg, #38bdf8, #60a5fa); color: white; padding: 14px 40px; text-decoration: none; border-radius: 25px; font-weight: 600; font-size: 16px;">
          Retour sur ScanRty
        </a>
      </div>
      
    </div>
    
    <!-- Footer -->
    <div style="text-align: center; padding: 30px 20px 0;">
      <p style="margin: 0; color: #9ca3af; font-size: 12px;">
        ScanRty - 60 rue François 1er, 75008 Paris<br>
        © 2025 ScanRty. Tous droits réservés.
      </p>
      <p style="margin: 15px 0 0; color: #9ca3af; font-size: 11px;">
        🔒 Vos données sont confidentielles et seront supprimées conformément au RGPD.
      </p>
    </div>
    
  </div>
</body>
</html>
  `
}

function getTeamNotificationContent(data: EmailData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Nouvelle commande</title>
</head>
<body style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
  <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px;">
    <h2 style="color: #38bdf8; margin-bottom: 20px;">🔔 Nouvelle commande reçue</h2>
    
    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <h3 style="margin-top: 0;">Produit : ${data.product}</h3>
      <p><strong>Montant :</strong> ${data.amount}€</p>
    </div>
    
    <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <h3 style="margin-top: 0; color: #1f2937;">Informations client</h3>
      <p><strong>Nom :</strong> ${data.name}</p>
      <p><strong>Email :</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Téléphone :</strong> ${data.phone}</p>` : ''}
      ${data.address ? `<p><strong>Adresse :</strong> ${data.address}</p>` : ''}
    </div>
    
    <div style="background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107;">
      <p style="margin: 0; color: #856404;">
        ⚡ <strong>Action requise :</strong> Préparer le dossier de surveillance et contacter le client sous 24h.
      </p>
    </div>
  </div>
</body>
</html>
  `
}
