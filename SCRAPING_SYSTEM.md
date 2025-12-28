# 🤖 SYSTÈME DE SCRAPING AUTOMATIQUE - SCANRTY

## ✅ CE QUI A ÉTÉ CRÉÉ (PHASE 1 - MVP)

### **1. Service de Scraping (`/lib/scraping.ts`)**
Moteur de détection qui analyse les plateformes :
- ✅ Airbnb.fr
- ✅ Booking.com
- ✅ Abritel.fr
- ✅ Le Bon Coin (locations vacances)

**Fonctionnalités :**
- Recherche par adresse, ville, caractéristiques
- Calcul de score de similarité (0-100)
- Classification suspicion (low/medium/high)
- Extraction des raisons de suspicion

### **2. Générateur de Rapports (`/lib/report.ts`)**
Création de rapports professionnels :
- ✅ Format **texte** (pour logs/emails)
- ✅ Format **HTML** (pour emails clients)
- ✅ Design aux couleurs ScanRty
- ✅ Résumé visuel des détections

### **3. Webhook Automatisé (`/app/api/webhooks/route.ts`)**
Déclenchement automatique après paiement :
- ✅ Récupération des données du bien (metadata Stripe)
- ✅ Lancement du scraping en arrière-plan
- ✅ Génération du rapport
- ✅ Envoi par email (à venir)

### **4. API de Checkout (`/app/api/create-checkout/route.ts`)**
Création de sessions Stripe avec metadata :
- ✅ Envoie toutes les infos du bien à Stripe
- ✅ Disponible dans le webhook
- ✅ Pas besoin de base de données !

### **5. Formulaire de Commande Mis à Jour**
- ✅ Envoie les données directement à l'API
- ✅ Crée une session Stripe avec metadata
- ✅ Redirection automatique vers paiement

---

## 🎯 COMMENT ÇA FONCTIONNE MAINTENANT

### **Parcours Client :**

1. **Client remplit le formulaire** sur `/commander`
   - Infos du bien (adresse, pièces, surface, photos...)
   - Infos client (nom, email, téléphone)

2. **Clique "Procéder au paiement"**
   - Appel à `/api/create-checkout`
   - Création session Stripe avec metadata
   - Redirection vers Stripe

3. **Client paie sur Stripe**
   - Paiement sécurisé
   - Infos sauvegardées dans metadata

4. **Webhook reçoit le paiement**
   - Récupère metadata (données du bien)
   - Déclenche scraping automatiquement
   - Génère le rapport

5. **Client reçoit son rapport**
   - Email de confirmation
   - Rapport de détection (à venir en Phase 2)

---

## 📊 ÉTAT ACTUEL (MVP - PHASE 1)

### **✅ FONCTIONNEL :**
- Architecture complète en place
- Webhook déclenche le scraping
- Rapport généré et loggé
- Données du bien transmises via Stripe

### **⏳ EN COURS (nécessite vraie implémentation) :**
- **Scraping réel** des plateformes
  - Actuellement : logs des URLs de recherche
  - Phase 2 : vrai scraping avec Puppeteer/API

- **Comparaison de photos**
  - Phase 2 : Computer Vision (OpenAI Vision API)

- **Envoi du rapport par email**
  - Phase 2 : Email avec rapport HTML en pièce jointe

---

## 🚀 PROCHAINES ÉTAPES (PHASE 2)

### **1. SCRAPING RÉEL (1 semaine)**

**Option A : Puppeteer (gratuit mais fragile)**
```bash
npm install puppeteer
```
- Navigateur headless
- Scraping direct des sites
- ⚠️ Risque de blocage

**Option B : API de Scraping (recommandé - 50-100€/mois)**
- **ScraperAPI** : `https://www.scraperapi.com/`
- **Bright Data** : `https://brightdata.com/`
- **Proxies rotatifs**
- **Captcha handling**
- **Plus stable**

**Implémentation :**
```typescript
// Dans /lib/scraping.ts
import puppeteer from 'puppeteer'

async function scrapeAirbnb(property) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  await page.goto(`https://airbnb.fr/s/${property.city}`)
  
  // Extraire les résultats
  const listings = await page.$$eval('.listing-card', cards => {
    return cards.map(card => ({
      title: card.querySelector('h3').textContent,
      price: card.querySelector('.price').textContent,
      url: card.querySelector('a').href,
      photos: [...card.querySelectorAll('img')].map(img => img.src)
    }))
  })
  
  await browser.close()
  return listings
}
```

---

### **2. COMPARAISON DE PHOTOS (1 semaine)**

**Option : OpenAI Vision API**
```bash
npm install openai
```

```typescript
import OpenAI from 'openai'

async function comparePhotos(photo1Url, photo2Url) {
  const openai = new OpenAI()
  
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [{
      role: "user",
      content: [
        { type: "text", text: "Ces deux photos montrent-elles le même bien immobilier ? Score de similarité ?" },
        { type: "image_url", image_url: { url: photo1Url } },
        { type: "image_url", image_url: { url: photo2Url } }
      ]
    }]
  })
  
  return response.choices[0].message.content
}
```

---

### **3. GÉNÉRATION PDF + ENVOI EMAIL (3 jours)**

**Installer puppeteer-core pour PDF :**
```bash
npm install puppeteer-core
```

```typescript
import puppeteer from 'puppeteer-core'

async function generatePDF(htmlReport: string) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  await page.setContent(htmlReport)
  
  const pdf = await page.pdf({
    format: 'A4',
    printBackground: true
  })
  
  await browser.close()
  return pdf
}

// Envoyer avec Resend
await resend.emails.send({
  from: 'ScanRty <noreply@scanrty.com>',
  to: customerEmail,
  subject: 'Votre rapport de détection ScanRty',
  html: htmlReport,
  attachments: [{
    filename: 'rapport-scanrty.pdf',
    content: pdfBuffer
  }]
})
```

---

### **4. BASE DE DONNÉES (1 semaine)**

**Pour VigilAn (surveillance quotidienne) :**

**Option : Supabase (PostgreSQL gratuit)**
```bash
npm install @supabase/supabase-js
```

**Tables nécessaires :**
- `properties` : Biens surveillés
- `scans` : Historique des scans
- `detections` : Annonces détectées
- `alerts` : Alertes envoyées

---

### **5. MONITORING QUOTIDIEN - VigilAn (1 semaine)**

**Avec Vercel Cron Jobs :**

```typescript
// /app/api/cron/daily-scan/route.ts
export async function GET(req: Request) {
  // Vérifier le secret cron
  if (req.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 })
  }
  
  // Récupérer tous les abonnements VigilAn actifs
  const activeProperties = await getActiveVigilAnProperties()
  
  // Scanner chaque bien
  for (const property of activeProperties) {
    await scanProperty(property)
  }
  
  return Response.json({ success: true })
}
```

**Configuration dans `vercel.json` :**
```json
{
  "crons": [{
    "path": "/api/cron/daily-scan",
    "schedule": "0 8 * * *"
  }]
}
```

---

## 💰 COÛTS ESTIMÉS (PHASE 2)

### **Services tiers :**
- **ScraperAPI** : 50-100€/mois (10,000 requêtes)
- **OpenAI Vision** : ~0.01$/image (négligeable)
- **Supabase** : Gratuit jusqu'à 500MB
- **Vercel** : Gratuit (Pro si > 100GB bandwidth)
- **Resend** : Gratuit jusqu'à 3,000 emails/mois

**Total estimé : 50-150€/mois** selon le volume

---

## 🧪 TESTER LE MVP ACTUEL

1. **Déploie le code**
2. **Va sur scanrty.com/commander**
3. **Remplis le formulaire complet**
4. **Paie avec une vraie carte** (9€)
5. **Va voir les logs Vercel** → Functions → `/api/webhooks`
6. **Tu verras :**
   - ✅ Infos du bien récupérées
   - ✅ Scraping déclenché
   - ✅ URLs de recherche loggées
   - ✅ Rapport texte généré

---

## 📝 PROCHAINE DÉCISION

**Tu veux :**

**A. Déployer le MVP actuel et tester le flow complet** ? (30 min)

**B. Implémenter le scraping réel avec Puppeteer** ? (1 journée)

**C. Utiliser une API de scraping (ScraperAPI)** ? (2h + coût)

**D. Commencer par la comparaison de photos** ? (1 journée)

---

**Dis-moi ce que tu préfères et on continue ! 🚀**
