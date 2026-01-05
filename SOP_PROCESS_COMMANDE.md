# 📋 SOP - TRAITEMENT COMMANDE SCANRTY

## ⏱️ TEMPS ESTIMÉ : 15-20 MINUTES

---

## 🎯 OBJECTIF
Traiter une commande Sentinelle ou VigilAn de bout en bout et envoyer le rapport au client sous 24h.

---

## 📧 ÉTAPE 1 : RÉCEPTION COMMANDE (automatique)

**Tu reçois un email avec :**
- 🔔 Objet : "NOUVELLE COMMANDE [PRODUIT] - [NOM CLIENT]"
- 📋 Toutes les infos du bien
- 👤 Coordonnées client
- 💰 Montant payé

**Action : Lis l'email et note l'adresse du bien**

---

## 🤖 ÉTAPE 2 : SCRAPING OCTOPARSE (5 minutes)

### A. Airbnb

1. **Ouvre Octoparse**
2. **Lance le template "Airbnb [VILLE]"**
3. **Entre la ville** (ex: Paris)
4. **Clique "Run"**
5. **Attends 2-3 minutes**
6. **Export → CSV**
7. **Sauvegarde** : `airbnb_[ville]_[date].csv`

### B. Le Bon Coin

1. **Lance le template "LBC [VILLE]"**
2. **Entre la ville**
3. **Clique "Run"**
4. **Attends 2-3 minutes**
5. **Export → CSV**
6. **Sauvegarde** : `lbc_[ville]_[date].csv`

---

## 🔍 ÉTAPE 3 : ANALYSE DES RÉSULTATS (5-8 minutes)

### Ouvre les 2 fichiers CSV

**Pour chaque annonce, vérifie si :**

✅ **L'adresse correspond** (même rue, même quartier)
✅ **Le nombre de pièces** est proche (±1)
✅ **La surface** est proche (±15m²)
✅ **Les mots-clés** de l'adresse apparaissent dans le titre
✅ **Les photos** ressemblent (si disponibles)

### Calcul du score de similarité :

- **80-100** = 🔴 HAUTE suspicion
- **50-79** = 🟡 MOYENNE suspicion
- **30-49** = 🟢 FAIBLE suspicion
- **< 30** = Pas de correspondance (ne pas inclure)

**Note les annonces suspectes dans un bloc-notes**

---

## 📄 ÉTAPE 4 : GÉNÉRATION DU RAPPORT (5-7 minutes)

### Ouvre le template Word : `TEMPLATE_RAPPORT_SCANRTY.docx`

**Remplis les sections :**

1. **Date du scan** → Date du jour

2. **Bien surveillé** :
   - Type, Adresse, Ville, CP
   - Pièces, Surface, Étage
   - (Copie depuis l'email reçu)

3. **Résumé** :
   - Total détections
   - Nombre par niveau de suspicion

4. **Détails des détections** :
   - Pour CHAQUE annonce suspecte :
     - Plateforme (Airbnb/LBC)
     - Titre
     - URL
     - Prix
     - Score
     - Niveau de suspicion
     - Raisons (liste)
   - Dupliquer la section pour chaque annonce

5. **Sauvegarde** : `Rapport_ScanRty_[NOM_CLIENT].docx`

---

## 📤 ÉTAPE 5 : EXPORT PDF (1 minute)

1. **Ouvre le document Word**
2. **Fichier → Exporter → PDF**
3. **Sauvegarde** : `Rapport_ScanRty_[NOM_CLIENT].pdf`

---

## ✉️ ÉTAPE 6 : ENVOI AU CLIENT (2 minutes)

### Compose un email :

**À :** [email du client]
**Objet :** Votre rapport de détection ScanRty

**Corps :**

```
Bonjour [Prénom],

Votre rapport de détection de sous-location est prêt !

En pièce jointe, vous trouverez l'analyse complète de votre bien 
situé [adresse].

RÉSUMÉ :
- [X] annonce(s) détectée(s)
- [X] avec forte suspicion
- [X] avec suspicion moyenne

N'hésitez pas à me contacter si vous avez des questions.

Cordialement,
L'équipe ScanRty
info.client@scanrty.com
```

**Pièce jointe :** Rapport PDF

**Envoie !**

---

## ✅ ÉTAPE 7 : VALIDATION (30 secondes)

1. **Réponds à l'email de notification** avec "DONE"
2. **Archive les fichiers** :
   - CSV Octoparse
   - Word
   - PDF
3. **Note dans un fichier** (optionnel) :
   - Date, Client, Détections

---

## 📊 CHECKLIST QUALITÉ

Avant d'envoyer, vérifie :

- [ ] Toutes les infos du bien sont correctes
- [ ] Au moins 1 annonce analysée (ou "Aucune détection")
- [ ] Les URLs sont cliquables
- [ ] Les scores sont cohérents
- [ ] Les raisons de suspicion sont claires
- [ ] Le PDF s'ouvre correctement
- [ ] L'email du client est correct

---

## 💡 ASTUCES

### Si AUCUNE annonce trouvée :
```
Rapport avec "0 annonce détectée"
Message positif : "Aucune sous-location détectée. Votre bien ne 
semble pas faire l'objet de location non autorisée."
```

### Si TROP d'annonces (>20) :
```
Ne garde que les 10 plus suspectes (score >60)
Note dans le rapport : "10 annonces les plus suspectes présentées"
```

### Si doutes sur une annonce :
```
Privilégie la prudence : mieux vaut signaler et laisser le client 
vérifier que de manquer une vraie sous-location.
```

---

## 🚨 EN CAS DE PROBLÈME

### Octoparse plante :
→ Relance la tâche
→ Si ça persiste, fais la recherche manuellement sur les sites

### Pas sûr d'une détection :
→ Note "Suspicion moyenne" et explique pourquoi dans les raisons

### Client contacte avant 24h :
→ Envoie un email : "Votre rapport est en cours d'analyse, 
   vous le recevrez d'ici [X] heures"

---

## 📈 OPTIMISATION (après 10-20 clients)

**Tu peux :**
- Créer des macros Excel pour analyse automatique scores
- Automatiser l'envoi d'email (templates Gmail)
- Utiliser Text Expander pour phrases répétitives
- **Passer à ScraperAPI quand rentable (50€/mois)**

---

## 🎯 OBJECTIF : 15 MINUTES PAR CLIENT

**Avec de la pratique :**
- Scraping : 3 min
- Analyse : 5 min
- Rapport : 5 min
- Envoi : 2 min

**= 15 MIN TOTAL = 4 CLIENTS/HEURE**

**À 9€/client = 36€/heure de CA ! 💰**

---

**Bon courage ! Tu vas assurer ! 🔥**
