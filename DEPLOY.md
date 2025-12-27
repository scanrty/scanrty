# 🚀 GUIDE DE DÉPLOIEMENT SCANRTY

## Option 1 : Déploiement Vercel (RECOMMANDÉ - GRATUIT)

### Étapes rapides :

1. **Extraire le projet**
   ```bash
   tar -xzf scanrty-nextjs.tar.gz
   cd scanrty-nextjs
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Tester en local**
   ```bash
   npm run dev
   ```
   Ouvre http://localhost:3000

4. **Créer un compte GitHub** (si tu n'en as pas)
   - Va sur github.com
   - Crée un compte gratuit

5. **Push sur GitHub**
   ```bash
   git init
   git add .
   git commit -m "ScanRty website"
   git branch -M main
   # Crée d'abord un nouveau repo sur github.com, puis :
   git remote add origin https://github.com/TON-USERNAME/scanrty.git
   git push -u origin main
   ```

6. **Déployer sur Vercel**
   - Va sur vercel.com
   - Connecte-toi avec GitHub
   - Clique "New Project"
   - Sélectionne ton repo "scanrty"
   - Clique "Deploy"
   - ✅ FAIT ! Ton site est en ligne en ~2 minutes

7. **Connecter ton domaine scanrty.com**
   - Dans Vercel → Settings → Domains
   - Ajoute "scanrty.com"
   - Configure les DNS chez OVH :
     ```
     Type A    @     76.76.21.21
     Type CNAME www   cname.vercel-dns.com
     ```
   - Attends 5-10 minutes → Ton site est sur scanrty.com ! 🎉

---

## Option 2 : Déploiement sur ton serveur OVH

### Si tu veux ABSOLUMENT rester sur OVH :

1. **Sur ton serveur OVH** (via SSH) :
   ```bash
   # Installer Node.js 18+
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Uploader le projet
   scp scanrty-nextjs.tar.gz user@ton-serveur-ovh.com:/var/www/
   
   # Sur le serveur
   cd /var/www
   tar -xzf scanrty-nextjs.tar.gz
   cd scanrty-nextjs
   npm install
   npm run build
   
   # Installer PM2 pour garder le site en ligne
   sudo npm install -g pm2
   pm2 start npm --name "scanrty" -- start
   pm2 save
   pm2 startup
   ```

2. **Configurer Nginx**
   ```nginx
   server {
       listen 80;
       server_name scanrty.com www.scanrty.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

3. **SSL avec Certbot**
   ```bash
   sudo certbot --nginx -d scanrty.com -d www.scanrty.com
   ```

---

## ⚡ Pourquoi Vercel > OVH pour ce projet ?

| Feature | Vercel | OVH |
|---------|--------|-----|
| Prix | Gratuit | ~10€/mois |
| Setup | 5 minutes | 1-2 heures |
| HTTPS | Automatique | Config manuelle |
| CDN mondial | Inclus | Non |
| Déploiement | 1 clic | SSH + Config |
| Mises à jour | Git push | SSH + rebuild |

**Mon conseil : Va sur Vercel, c'est fait pour Next.js** 🚀

---

## 🆘 Besoin d'aide ?

Email : info.client@scanrty.com
