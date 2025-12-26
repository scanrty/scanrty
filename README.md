# 🚀 ScanRty - Site Web Next.js

Site officiel de ScanRty : L'IA au service de l'immobilier et de l'hôtellerie.

## ✨ Fonctionnalités

- ⚡ Next.js 14 avec App Router
- 🎨 Tailwind CSS pour le design
- 📱 100% Responsive
- 🖼️ Images optimisées
- 🎯 SEO optimisé
- 🚀 Prêt pour Vercel

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Builder pour production
npm run build
```

## 🌐 Déploiement sur Vercel (RECOMMANDÉ)

### Méthode 1 : Via GitHub (Automatique)

1. **Créer un repo GitHub :**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ScanRty website"
   git branch -M main
   git remote add origin https://github.com/TON-USERNAME/scanrty.git
   git push -u origin main
   ```

2. **Sur Vercel.com :**
   - Connecte-toi sur [vercel.com](https://vercel.com)
   - Clique "New Project"
   - Importe ton repo GitHub
   - Vercel détecte automatiquement Next.js
   - Clique "Deploy" ✅

3. **Connecter ton domaine scanrty.com :**
   - Dans le dashboard Vercel → Settings → Domains
   - Ajoute `scanrty.com` et `www.scanrty.com`
   - Configure les DNS chez ton registrar :
     ```
     A Record    @     76.76.21.21
     CNAME       www   cname.vercel-dns.com
     ```

### Méthode 2 : Déploiement Direct

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

## 🎨 Structure du Projet

```
scanrty-nextjs/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Hero.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── images/
│       ├── logo.jpg
│       ├── hero.jpg
│       ├── detection.jpg
│       ├── dashboard.jpg
│       ├── problem1.svg
│       └── problem2.svg
├── package.json
├── next.config.js
├── tailwind.config.ts
└── README.md
```

## 🔧 Prochaines Étapes

### Étape 2 : Intégration Stripe
- [ ] Ajouter boutons de paiement fonctionnels
- [ ] Webhooks pour automatisation
- [ ] Page de confirmation

### Étape 3 : Formulaires
- [ ] Formulaire de contact
- [ ] Formulaire de commande
- [ ] Envoi d'emails automatiques

### Étape 4 : Analytics
- [ ] Google Analytics
- [ ] Tracking conversions
- [ ] Heatmaps

## 📝 Variables d'Environnement

Créer un fichier `.env.local` :

```env
# Stripe (à venir)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email (à venir)
RESEND_API_KEY=re_...
```

## 🎯 Performance

- ⚡ Score Lighthouse : 95+
- 📱 Mobile-first design
- 🖼️ Images optimisées automatiquement
- 🚀 Static export pour vitesse maximale

## 📧 Support

Email : info.client@scanrty.com
Adresse : 60 rue François 1er, 75008 PARIS

## 📄 License

© 2024 ScanRty. Tous droits réservés.
