'use client'

import Header from '../components/Header'

export default function Confidentialite() {
  return (
    <main>
      <Header />
      
      <section className="min-h-screen pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#38bdf8] to-white bg-clip-text text-transparent">
            Politique de Confidentialité
          </h1>
          
          <div className="bg-[#001d3d] rounded-2xl p-8 border border-[#38bdf8]/10 text-white space-y-8">
            
            <div>
              <p className="text-lg mb-4">
                SAS PERAZUR (ci-après "ScanRty") s'engage à protéger la vie privée de ses utilisateurs et à traiter leurs données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">1. Responsable du traitement</h2>
              <p>
                <strong>SAS PERAZUR</strong><br />
                60 rue François 1er, 75008 Paris<br />
                Email : info.client@scanrty.com
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">2. Données collectées</h2>
              <p className="mb-3"><strong>2.1 Données d'identification :</strong></p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
              </ul>

              <p className="mb-3"><strong>2.2 Données relatives au bien surveillé :</strong></p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Adresse complète du bien</li>
                <li>Caractéristiques (nombre de pièces, surface, étage, équipements)</li>
                <li>Photos du bien (optionnel)</li>
              </ul>

              <p className="mb-3"><strong>2.3 Données de paiement :</strong></p>
              <p className="mb-4">
                Traitées directement et exclusivement par notre prestataire de paiement sécurisé Stripe. ScanRty ne stocke aucune donnée bancaire.
              </p>

              <p className="mb-3"><strong>2.4 Données de connexion :</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Adresse IP</li>
                <li>Logs de connexion</li>
                <li>Type de navigateur</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">3. Finalités du traitement</h2>
              <p className="mb-2">Vos données sont collectées pour :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fournir les services de détection de sous-location commandés</li>
                <li>Gérer votre commande et votre facturation</li>
                <li>Vous envoyer les rapports de surveillance</li>
                <li>Assurer le support client</li>
                <li>Améliorer nos services</li>
                <li>Respecter nos obligations légales et réglementaires</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">4. Base légale du traitement</h2>
              <p className="mb-2">Le traitement de vos données repose sur :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>L'exécution du contrat :</strong> fourniture du service commandé</li>
                <li><strong>Votre consentement :</strong> pour l'envoi d'informations commerciales (opt-in)</li>
                <li><strong>L'obligation légale :</strong> conservation des données comptables et fiscales</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">5. Durée de conservation</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Données de commande :</strong> 3 ans après la fin du service (obligations comptables)</li>
                <li><strong>Données de surveillance :</strong> durée du service + 1 an</li>
                <li><strong>Photos uploadées :</strong> supprimées après génération du rapport</li>
                <li><strong>Données de connexion :</strong> 1 an maximum</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">6. Destinataires des données</h2>
              <p className="mb-2">Vos données sont accessibles uniquement à :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Les équipes de ScanRty (accès strictement limité au nécessaire)</li>
                <li>Nos prestataires techniques : Vercel (hébergement), Stripe (paiement), Resend (emails)</li>
                <li>Les autorités légales sur réquisition judiciaire</li>
              </ul>
              <p className="mt-3">
                <strong>Nous ne vendons ni ne louons jamais vos données personnelles à des tiers.</strong>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">7. Sécurité</h2>
              <p>
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction :
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Chiffrement des données en transit (HTTPS/TLS)</li>
                <li>Authentification sécurisée</li>
                <li>Accès restreint aux données</li>
                <li>Sauvegardes régulières</li>
                <li>Surveillance des accès</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">8. Vos droits</h2>
              <p className="mb-3">Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et y accéder</li>
                <li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement :</strong> supprimer vos données dans certaines conditions</li>
                <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
              </ul>
              <p>
                <strong>Pour exercer vos droits :</strong> Envoyez un email à info.client@scanrty.com avec une copie de votre pièce d'identité.
              </p>
              <p className="mt-3">
                <strong>Délai de réponse :</strong> 1 mois maximum (peut être prolongé de 2 mois si demande complexe)
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">9. Réclamation</h2>
              <p>
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) :
              </p>
              <p className="mt-2">
                <strong>CNIL</strong><br />
                3 Place de Fontenoy, TSA 80715<br />
                75334 Paris Cedex 07<br />
                Site web : <a href="https://www.cnil.fr" className="text-[#38bdf8] hover:underline" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">10. Cookies</h2>
              <p className="mb-2">
                Notre site utilise uniquement des cookies strictement nécessaires au fonctionnement technique (session, sécurité).
              </p>
              <p>
                Aucun cookie publicitaire, de tracking ou de profilage n'est utilisé.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">11. Transferts internationaux</h2>
              <p>
                Vos données sont hébergées au sein de l'Union Européenne. Certains prestataires (Vercel, Stripe) peuvent avoir des serveurs aux États-Unis, mais disposent de garanties appropriées (clauses contractuelles types, Privacy Shield).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">12. Modifications</h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.
              </p>
            </div>

            <div className="pt-4 border-t border-[#38bdf8]/20">
              <p className="text-sm text-white/60">
                Dernière mise à jour : 5 janvier 2026
              </p>
            </div>

          </div>

          <div className="mt-8 text-center">
            <a href="/" className="text-[#38bdf8] hover:underline">← Retour à l'accueil</a>
          </div>
        </div>
      </section>

      <footer className="bg-[#001d3d] py-8 border-t border-[#38bdf8]/10">
        <div className="max-w-7xl mx-auto px-8 text-center text-white">
          <p>&copy; 2026 ScanRty. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  )
}
