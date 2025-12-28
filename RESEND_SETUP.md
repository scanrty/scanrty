# 📧 CONFIGURATION RESEND - EMAILS AUTOMATIQUES

## ✅ CE QUI A ÉTÉ INTÉGRÉ :

1. **Package Resend** installé
2. **Service d'email** (`/lib/email.ts`) créé avec :
   - Email de confirmation au client (design professionnel)
   - Email de notification à l'équipe
3. **Webhook mis à jour** pour envoyer automatiquement les emails
4. **Templates HTML** élégants aux couleurs de ScanRty

---

## 🚀 CONFIGURATION RESEND (5 MINUTES)

### **ÉTAPE 1 : Créer un compte Resend**

1. Va sur **resend.com**
2. Clique **"Sign Up"**
3. Inscris-toi avec ton email professionnel
4. Vérifie ton email

---

### **ÉTAPE 2 : Obtenir ta clé API**

1. Une fois connecté, va dans **"API Keys"**
2. Clique **"Create API Key"**
3. **Name** : `ScanRty Production`
4. **Permission** : `Full Access` ou `Sending Access`
5. Clique **"Add"**
6. **📋 COPIE LA CLÉ** (commence par `re_...`)

---

### **ÉTAPE 3 : Configurer le domaine d'envoi**

**Option A : Utiliser le domaine Resend (GRATUIT - pour commencer)**
- Tes emails viendront de : `noreply@resend.dev`
- Aucune configuration nécessaire
- Parfait pour tester

**Option B : Utiliser ton domaine scanrty.com (RECOMMANDÉ)**
1. Dans Resend → **"Domains"**
2. Clique **"Add Domain"**
3. Entre : `scanrty.com`
4. Resend va te donner des enregistrements DNS à ajouter chez OVH
5. Ajoute ces enregistrements DNS
6. Attends la validation (quelques minutes)

**Avec ton domaine, les emails viendront de :** `noreply@scanrty.com`

---

### **ÉTAPE 4 : Ajouter la clé sur Vercel**

1. Va sur **vercel.com** → Projet **scanrty**
2. **Settings** → **Environment Variables**
3. Clique **"Add New"**

**Variable :**
```
Name: RESEND_API_KEY
Value: re_xxxxx (colle ta clé Resend)
Environment: Production uniquement
```

4. Clique **"Save"**

---

### **ÉTAPE 5 : Redéployer**

1. **Deployments** → Dernier déploiement
2. **⋯** → **Redeploy**
3. Confirme

---

## ✅ APRÈS LE DÉPLOIEMENT

**Quand un client paie :**
1. ✅ Webhook reçoit le paiement
2. ✅ Email professionnel envoyé au CLIENT
   - Design aux couleurs ScanRty
   - Détails de la commande
   - Prochaines étapes
3. ✅ Email de notification envoyé à TOI
   - Infos complètes du client
   - Produit acheté
   - Action requise

---

## 📧 EMAILS ENVOYÉS

### **Email client :**
- Design moderne avec gradient bleu
- Logo ScanRty
- Récapitulatif commande
- Prochaines étapes selon le produit
- Lien vers le site
- Footer professionnel avec RGPD

### **Email équipe (info.client@scanrty.com) :**
- Notification instantanée
- Toutes les infos client
- Produit et montant
- Alerte action requise

---

## 💰 TARIFS RESEND

**Plan GRATUIT :**
- 3 000 emails/mois
- 100 emails/jour
- Parfait pour démarrer !

**Plan PRO (20$/mois) :**
- 50 000 emails/mois
- Support prioritaire
- Analytics avancés

---

## 🧪 TESTER LES EMAILS

Une fois Resend configuré :

1. Va sur **scanrty.com**
2. Achète Sentinelle (9€)
3. Utilise une vraie carte
4. Vérifie ta boîte email ! 📧

Tu recevras :
- Email de confirmation Stripe
- Email professionnel de ScanRty
- Notification sur info.client@scanrty.com

---

## 📊 VOIR LES LOGS

**Sur Resend :**
- Dashboard → **"Emails"**
- Tu verras tous les emails envoyés
- Statut : Delivered, Opened, Clicked

**Sur Vercel :**
- Functions → `/api/webhooks`
- Logs de tous les événements

---

## ⚠️ IMPORTANT

Si tu ne configures pas Resend :
- Les emails ne seront PAS envoyés
- Le webhook continuera de fonctionner
- Les logs seront visibles dans Vercel
- Aucune erreur, juste pas d'email

**Donc tu peux déployer maintenant et configurer Resend plus tard !**

---

**Une fois Resend configuré, ton système sera 100% automatique ! 🚀**
