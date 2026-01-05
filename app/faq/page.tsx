'use client'

import Header from '../components/Header'

export default function FAQ() {
  return (
    <main>
      <Header />
      
      <section className="min-h-screen pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#38bdf8] to-white bg-clip-text text-transparent text-center">
            Questions Fréquentes
          </h1>
          <p className="text-xl text-white/80 mb-16 text-center">
            Tout ce que vous devez savoir sur ScanRty
          </p>

          <div className="space-y-6">
            {/* Section Détection */}
            <div className="bg-[#001d3d] rounded-2xl p-8 border border-[#38bdf8]/10">
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-6">🔍 Détection de sous-location</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Comment fonctionne la détection ?</h3>
                  <p className="text-white/80">
                    Notre IA scanne quotidiennement les principales plateformes (Airbnb, Booking, Le Bon Coin, Abritel) et compare les annonces avec les caractéristiques de votre bien : adresse, nombre de pièces, surface, photos.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Quel est le délai pour recevoir mon rapport ?</h3>
                  <p className="text-white/80">
                    Pour Sentinelle : sous 24h maximum. Pour VigilAn : rapports mensuels + alertes en temps réel si détection.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Le rapport a-t-il une valeur juridique ?</h3>
                  <p className="text-white/80">
                    Le rapport ScanRty est un outil d'alerte et de documentation. Il contient des preuves (captures d'écran, URLs) que vous pouvez présenter à votre avocat, mais il ne constitue pas une preuve légale en soi.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Que se passe-t-il si vous détectez une sous-location ?</h3>
                  <p className="text-white/80">
                    Vous recevez immédiatement un rapport détaillé avec les URLs, captures d'écran et score de similarité. Nous vous recommandons de contacter un avocat et de prendre des mesures selon votre contrat de bail.
                  </p>
                </div>
              </div>
            </div>

            {/* Section Tarifs */}
            <div className="bg-[#001d3d] rounded-2xl p-8 border border-[#38bdf8]/10">
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-6">💰 Tarifs & Paiement</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Quels moyens de paiement acceptez-vous ?</h3>
                  <p className="text-white/80">
                    Nous acceptons toutes les cartes bancaires (Visa, Mastercard, American Express) via notre plateforme sécurisée Stripe.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Y a-t-il des frais cachés ?</h3>
                  <p className="text-white/80">
                    Non, le prix affiché est le prix total. Pas de frais supplémentaires.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Puis-je annuler mon abonnement VigilAn ?</h3>
                  <p className="text-white/80">
                    Oui, à tout moment. L'annulation prend effet à la fin de votre période d'abonnement en cours.
                  </p>
                </div>
              </div>
            </div>

            {/* Section Technique */}
            <div className="bg-[#001d3d] rounded-2xl p-8 border border-[#38bdf8]/10">
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-6">⚙️ Questions Techniques</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Mes données sont-elles sécurisées ?</h3>
                  <p className="text-white/80">
                    Absolument. Toutes vos données sont chiffrées et stockées selon les normes RGPD. Nous ne partageons jamais vos informations avec des tiers.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Puis-je surveiller plusieurs biens ?</h3>
                  <p className="text-white/80">
                    Oui ! Vous pouvez commander plusieurs Sentinelle ou VigilAn. Contactez-nous pour des tarifs groupés si vous avez plus de 10 biens.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Faut-il installer quelque chose ?</h3>
                  <p className="text-white/80">
                    Non, tout fonctionne en ligne. Vous recevez simplement les rapports par email.
                  </p>
                </div>
              </div>
            </div>

            {/* Section Support */}
            <div className="bg-[#001d3d] rounded-2xl p-8 border border-[#38bdf8]/10">
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-6">📞 Support</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Comment vous contacter ?</h3>
                  <p className="text-white/80 mb-4">
                    Email : <a href="mailto:info.client@scanrty.com" className="text-[#38bdf8] hover:underline">info.client@scanrty.com</a>
                  </p>
                  <p className="text-white/80">
                    Délai de réponse : moins de 24h pour VigilAn, moins de 48h pour Sentinelle
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Proposez-vous un essai gratuit ?</h3>
                  <p className="text-white/80">
                    Sentinelle à 9€ est notre offre d'essai. Pour un scan unique, c'est le moyen le plus économique de tester notre service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-xl text-white/80 mb-6">
              Vous ne trouvez pas la réponse à votre question ?
            </p>
            <a href="/contact" className="inline-block px-8 py-4 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] text-white font-semibold no-underline  hover:-translate-y-0.5 transition-all">
              Contactez-nous
            </a>
          </div>
        </div>
      </section>

      {/* Footer copié */}
      <footer className="bg-[#001d3d] py-16 border-t border-[#38bdf8]/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center text-white">
            <p>&copy; 2026 ScanRty. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
