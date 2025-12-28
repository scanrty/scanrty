# 🔔 CONFIGURATION WEBHOOKS STRIPE

## ✅ CE QUI A ÉTÉ CRÉÉ :

1. **API Route** : `/app/api/webhooks/route.ts`
   - Reçoit les événements Stripe
   - Vérifie la sécurité
   - Traite les paiements automatiquement

2. **Événements gérés** :
   - ✅ `checkout.session.completed` → Paiement complété
   - ✅ `payment_intent.succeeded` → Paiement réussi
   - ✅ `customer.subscription.created` → Abonnement créé
   - ✅ `customer.subscription.updated` → Abonnement modifié
   - ✅ `customer.subscription.deleted` → Abonnement annulé

---

## 🚀 ÉTAPES DE CONFIGURATION :

### **ÉTAPE 1 : Déployer sur Vercel**

1. Push le code sur GitHub
2. Vercel déploie automatiquement
3. Ton endpoint webhook sera : `https://scanrty.com/api/webhooks`

---

### **ÉTAPE 2 : Configurer le Webhook sur Stripe**

1. **Va sur dashboard.stripe.com**
2. **Developers** → **Webhooks**
3. Clique **"Add endpoint"**

**Paramètres :**
- **Endpoint URL** : `https://scanrty.com/api/webhooks`
- **Events to send** : Sélectionne ces événements :
  - ✅ `checkout.session.completed`
  - ✅ `payment_intent.succeeded`
  - ✅ `customer.subscription.created`
  - ✅ `customer.subscription.updated`
  - ✅ `customer.subscription.deleted`

4. Clique **"Add endpoint"**

---

### **ÉTAPE 3 : Récupérer le Webhook Secret**

Une fois le webhook créé :

1. Clique sur le webhook que tu viens de créer
2. Clique **"Reveal"** à côté de **"Signing secret"**
3. **COPIE** le secret (commence par `whsec_...`)

---

### **ÉTAPE 4 : Ajouter les Variables d'Environnement sur Vercel**

1. **Va sur vercel.com** → Projet **scanrty**
2. **Settings** → **Environment Variables**
3. **Ajoute ces 2 variables** :

**Variable 1 :**
```
Name: STRIPE_SECRET_KEY
Value: sk_live_xxxxx (ta vraie clé secrète Stripe en production)
Environment: Production
```

**Variable 2 :**
```
Name: STRIPE_WEBHOOK_SECRET
Value: whsec_xxxxx (le secret que tu viens de copier)
Environment: Production
```

4. Clique **"Save"**
5. **Redéploie** le site (Vercel → Deployments → Redeploy)

---

## 🧪 TESTER LE WEBHOOK :

### **Méthode 1 : Test réel**

1. Va sur **scanrty.com**
2. Achète Sentinelle (9€) avec une vraie carte
3. Regarde les **logs Vercel** :
   - Vercel → Projet → **Functions** → Clique sur `/api/webhooks`
   - Tu verras les logs avec les infos du client

### **Méthode 2 : Test Stripe CLI (développeurs)**

```bash
stripe listen --forward-to localhost:3000/api/webhooks
stripe trigger checkout.session.completed
```

---

## 📧 PROCHAINE ÉTAPE : EMAILS AUTOMATIQUES

Pour envoyer de vrais emails automatiques après paiement :

### **Option 1 : Resend (recommandé - gratuit jusqu'à 3000 emails/mois)**

```bash
npm install resend
```

### **Option 2 : SendGrid**
```bash
npm install @sendgrid/mail
```

### **Option 3 : Nodemailer (Gmail, SMTP)**
```bash
npm install nodemailer
```

---

## 🎯 CE QUE ÇA FAIT ACTUELLEMENT :

Quand un client paie :
1. ✅ Webhook reçoit l'événement
2. ✅ Vérifie que ça vient bien de Stripe (sécurité)
3. ✅ Log toutes les infos dans la console Vercel
4. ✅ Affiche un email de confirmation simulé

**Pour activer les VRAIS emails** :
→ On intègre Resend (5 minutes de plus)

---

## 📝 NOTES IMPORTANTES :

- Les webhooks fonctionnent UNIQUEMENT en production (pas en local)
- Les logs sont visibles dans Vercel → Functions
- Stripe retente automatiquement si le webhook échoue
- Toujours vérifier la signature pour la sécurité

---

## 🆘 DÉPANNAGE :

**Webhook ne fonctionne pas ?**

1. Vérifie que l'URL est exacte : `https://scanrty.com/api/webhooks`
2. Vérifie que le `STRIPE_WEBHOOK_SECRET` est correct dans Vercel
3. Regarde les logs Vercel pour voir les erreurs
4. Sur Stripe → Webhooks → Clique sur le webhook → Regarde "Recent deliveries"

---

**Une fois configuré, chaque paiement déclenchera automatiquement ton webhook ! 🎉**
