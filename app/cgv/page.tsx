'use client'

import Header from '../components/Header'

export default function CGV() {
  return (
    <main>
      <Header />
      
      <section className="min-h-screen pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#38bdf8] to-white bg-clip-text text-transparent">
            Conditions Générales de Vente
          </h1>
          
          <div className="bg-[#001d3d] rounded-2xl p-8 border border-[#38bdf8]/10 text-white space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">1. Objet</h2>
              <p>
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre SAS PERAZUR (ci-après "ScanRty") et tout client (ci-après "le Client") souhaitant utiliser les services proposés sur le site scanrty.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">2. Services proposés</h2>
              <p className="mb-3"><strong>2.1 Sentinelle (9€) :</strong></p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Scan ponctuel de détection de sous-location sur votre bien immobilier</li>
                <li>Rapport détaillé envoyé sous 24 heures maximum</li>
                <li>Surveillance des plateformes : Airbnb, Booking, Le Bon Coin, Abritel</li>
                <li>Support client sous 48h</li>
              </ul>

              <p className="mb-3"><strong>2.2 VigilAn (59€/an) :</strong></p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Surveillance continue pendant 12 mois</li>
                <li>Rapport mensuel automatique</li>
                <li>Alertes en temps réel en cas de détection</li>
                <li>Captures d'écran systématiques</li>
                <li>Support client sous 24h</li>
              </ul>

              <p className="mb-3"><strong>2.3 TarGate (99€/mois) :</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dashboard de surveillance concurrentielle pour hôtels</li>
                <li>Analyse tarifaire et notations des concurrents</li>
                <li>Suggestions d'optimisation par IA</li>
                <li>Support prioritaire</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">3. Commande et paiement</h2>
              <p className="mb-2">
                <strong>3.1</strong> Les commandes sont effectuées directement sur le site scanrty.com via le système de paiement sécurisé Stripe.
              </p>
              <p className="mb-2">
                <strong>3.2</strong> Le paiement s'effectue en ligne par carte bancaire. Les prix sont indiqués en euros TTC.
              </p>
              <p className="mb-2">
                <strong>3.3</strong> La commande est confirmée après réception du paiement intégral.
              </p>
              <p>
                <strong>3.4</strong> Une facture est envoyée par email après chaque transaction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">4. Exécution du service</h2>
              <p className="mb-2">
                <strong>4.1 Sentinelle :</strong> Le rapport est envoyé sous 24 heures maximum après validation du paiement.
              </p>
              <p className="mb-2">
                <strong>4.2 VigilAn :</strong> Le service démarre immédiatement après paiement. Le premier rapport est envoyé sous 24h, puis mensuellement.
              </p>
              <p>
                <strong>4.3 TarGate :</strong> L'accès au dashboard est activé sous 24h après validation du paiement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">5. Droit de rétractation</h2>
              <p className="mb-2">
                Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les services pleinement exécutés avant la fin du délai de rétractation et dont l'exécution a commencé après accord préalable exprès du consommateur.
              </p>
              <p>
                En commandant nos services, le Client reconnaît et accepte expressément que l'exécution commence immédiatement, renonçant ainsi à son droit de rétractation de 14 jours.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">6. Résiliation - Abonnements</h2>
              <p className="mb-2">
                <strong>6.1</strong> Pour VigilAn et TarGate, le Client peut résilier son abonnement à tout moment depuis son espace client ou par email.
              </p>
              <p className="mb-2">
                <strong>6.2</strong> La résiliation prend effet à la fin de la période en cours. Aucun remboursement au prorata n'est effectué.
              </p>
              <p>
                <strong>6.3</strong> En cas de non-paiement, l'accès au service est suspendu jusqu'à régularisation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">7. Garanties et limites</h2>
              <p className="mb-2">
                <strong>7.1</strong> ScanRty s'engage à fournir un service de détection de qualité basé sur des technologies d'intelligence artificielle performantes.
              </p>
              <p className="mb-2">
                <strong>7.2</strong> Toutefois, ScanRty ne garantit pas l'exhaustivité des résultats ni la détection de 100% des sous-locations existantes.
              </p>
              <p className="mb-2">
                <strong>7.3</strong> Les rapports fournis sont des outils d'aide à la décision et ne constituent pas des preuves juridiques formelles.
              </p>
              <p>
                <strong>7.4</strong> ScanRty ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser le service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">8. Confidentialité</h2>
              <p>
                Les données collectées sont traitées conformément à notre <a href="/confidentialite" className="text-[#38bdf8] hover:underline">Politique de Confidentialité</a> et au RGPD. Elles sont utilisées uniquement pour la fourniture du service commandé.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">9. Modification des CGV</h2>
              <p>
                ScanRty se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables sont celles en vigueur au moment de la commande.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">10. Droit applicable et litiges</h2>
              <p className="mb-2">
                Les présentes CGV sont régies par le droit français.
              </p>
              <p className="mb-2">
                En cas de litige, une solution amiable sera recherchée avant toute action judiciaire.
              </p>
              <p>
                À défaut, les tribunaux français seront seuls compétents.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">11. Contact</h2>
              <p>
                Pour toute question relative aux présentes CGV :<br />
                Email : info.client@scanrty.com<br />
                Adresse : 60 rue François 1er, 75008 Paris
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
