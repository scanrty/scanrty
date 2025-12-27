'use client'

import Header from './components/Header'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      
      {/* Stats Section */}
      <section className="bg-[#001d3d] py-16">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="text-center">
            <div className="text-6xl font-extrabold bg-gradient-to-br from-[#38bdf8] to-[#ffffff] bg-clip-text text-transparent font-mono">24h</div>
            <div className="text-lg text-white mt-2">Délai de réponse maximum</div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-extrabold bg-gradient-to-br from-[#38bdf8] to-[#ffffff] bg-clip-text text-transparent font-mono">99%</div>
            <div className="text-lg text-white mt-2">Taux de détection</div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-extrabold bg-gradient-to-br from-[#38bdf8] to-[#ffffff] bg-clip-text text-transparent font-mono">500+</div>
            <div className="text-lg text-white mt-2">Biens surveillés</div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-extrabold bg-gradient-to-br from-[#38bdf8] to-[#ffffff] bg-clip-text text-transparent font-mono">24/7</div>
            <div className="text-lg text-white mt-2">Surveillance continue</div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="max-w-7xl mx-auto px-8 py-32" id="problems">
        <h2 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-[#38bdf8] to-[#ffffff] bg-clip-text text-transparent">
          Les défis que vous rencontrez
        </h2>
        <p className="text-xl text-center text-white mb-16">
          Deux problématiques majeures, une solution technologique
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-[#001d3d] rounded-3xl p-12 border border-[#38bdf8]/10 hover:border-[#38bdf8] hover:-translate-y-2 transition-all hover:shadow-2xl hover:shadow-[#38bdf8]/20">
            <img src="/images/problem1.svg" alt="Sous-location" className="w-full h-48 object-cover rounded-2xl mb-8" />
            <h3 className="text-3xl font-bold text-[#38bdf8] mb-6">La sous-location illégale</h3>
            <ul className="space-y-4">
              <li className="text-white pl-8 relative before:content-['→'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Découverte tardive des dégâts causés par les locations sauvages
              </li>
              <li className="text-white pl-8 relative before:content-['→'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Amendes et sanctions administratives
              </li>
              <li className="text-white pl-8 relative before:content-['→'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Perte de revenus au profit de locataires indélicats
              </li>
              <li className="text-white pl-8 relative before:content-['→'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Risques juridiques et assurances compromises
              </li>
            </ul>
          </div>
          
          <div className="bg-[#001d3d] rounded-3xl p-12 border border-[#38bdf8]/10 hover:border-[#38bdf8] hover:-translate-y-2 transition-all hover:shadow-2xl hover:shadow-[#38bdf8]/20">
            <img src="/images/problem2.svg" alt="Rentabilité hôtelière" className="w-full h-48 object-cover rounded-2xl mb-8" />
            <h3 className="text-3xl font-bold text-[#38bdf8] mb-6">La rentabilité hôtelière</h3>
            <ul className="space-y-4">
              <li className="text-white pl-8 relative before:content-['→'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Difficulté à se positionner face à la concurrence
              </li>
              <li className="text-white pl-8 relative before:content-['→'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Tarification inadaptée au marché local
              </li>
              <li className="text-white pl-8 relative before:content-['→'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Manque de visibilité sur les performances concurrentes
              </li>
              <li className="text-white pl-8 relative before:content-['→'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Perte d'opportunités de revenus
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-[#001d3d] py-32" id="solutions">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-[#38bdf8] to-[#ffffff] bg-clip-text text-transparent">
            Nos solutions intelligentes
          </h2>
          <p className="text-xl text-center text-white mb-24">
            Une technologie de pointe pour protéger et optimiser vos actifs
          </p>
          
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-br from-[#38bdf8] to-[#ffffff] bg-clip-text text-transparent">
                🔍 Détection de sous-location
              </h3>
              <p className="text-xl text-white mb-8 leading-relaxed">
                Notre IA scanne en continu les plateformes de location courte durée (Airbnb, Leboncoin, Booking...) pour identifier toute annonce suspecte de votre bien.
              </p>
              <div className="space-y-4 mb-8">
                <div className="bg-[#38bdf8]/10 p-4 rounded-xl border-l-4 border-[#38bdf8] font-medium text-white">
                  ✓ Surveillance automatique 24/7
                </div>
                <div className="bg-[#38bdf8]/10 p-4 rounded-xl border-l-4 border-[#38bdf8] font-medium text-white">
                  ✓ Comparaison visuelle par IA
                </div>
                <div className="bg-[#38bdf8]/10 p-4 rounded-xl border-l-4 border-[#38bdf8] font-medium text-white">
                  ✓ Rapport détaillé avec preuves
                </div>
                <div className="bg-[#38bdf8]/10 p-4 rounded-xl border-l-4 border-[#38bdf8] font-medium text-white">
                  ✓ Alertes en temps réel
                </div>
              </div>
              <a href="#pricing" className="inline-block px-8 py-4 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#ffffff] text-white font-semibold no-underline shadow-lg shadow-[#38bdf8]/30 hover:shadow-[#38bdf8]/40 hover:-translate-y-0.5 transition-all">
                Protéger mon bien
              </a>
            </div>
            <div>
              <img src="/images/detection.jpg" alt="Détection IA" className="w-full rounded-3xl shadow-2xl" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="md:order-2">
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-br from-[#38bdf8] to-[#ffffff] bg-clip-text text-transparent">
                📊 TarGate - Optimisation Hôtelière
              </h3>
              <p className="text-xl text-white mb-8 leading-relaxed">
                Tableau de bord intelligent qui analyse en temps réel vos concurrents, leurs tarifs, leurs notations et vous suggère les ajustements optimaux.
              </p>
              <div className="space-y-4 mb-8">
                <div className="bg-[#38bdf8]/10 p-4 rounded-xl border-l-4 border-[#38bdf8] font-medium text-white">
                  ✓ Dashboard temps réel
                </div>
                <div className="bg-[#38bdf8]/10 p-4 rounded-xl border-l-4 border-[#38bdf8] font-medium text-white">
                  ✓ Analyse concurrentielle
                </div>
                <div className="bg-[#38bdf8]/10 p-4 rounded-xl border-l-4 border-[#38bdf8] font-medium text-white">
                  ✓ Suggestions tarifaires intelligentes
                </div>
                <div className="bg-[#38bdf8]/10 p-4 rounded-xl border-l-4 border-[#38bdf8] font-medium text-white">
                  ✓ Alertes événements locaux
                </div>
              </div>
              <a href="#pricing" className="inline-block px-8 py-4 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#ffffff] text-white font-semibold no-underline shadow-lg shadow-[#38bdf8]/30 hover:shadow-[#38bdf8]/40 hover:-translate-y-0.5 transition-all">
                Optimiser mon hôtel
              </a>
            </div>
            <div className="md:order-1">
              <img src="/images/dashboard.jpg" alt="Dashboard TarGate" className="w-full rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-8 py-32" id="pricing">
        <h2 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-[#38bdf8] to-[#ffffff] bg-clip-text text-transparent">
          Choisissez votre formule
        </h2>
        <p className="text-xl text-center text-white mb-16">
          Des solutions adaptées à chaque besoin
        </p>
        
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sentinelle */}
          <div className="bg-[#001d3d] rounded-3xl p-12 border-2 border-[#38bdf8]/10 hover:border-[#38bdf8] hover:-translate-y-2 transition-all hover:shadow-2xl hover:shadow-[#38bdf8]/30">
            <div className="text-center mb-8 pb-8 border-b border-[#38bdf8]/20">
              <div className="text-sm text-white uppercase tracking-widest mb-2">Immobilier</div>
              <div className="text-3xl font-bold text-[#38bdf8] mb-4">Sentinelle</div>
              <div className="text-6xl font-extrabold font-mono">9€</div>
              <div className="text-white">ponctuel</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Rapport ponctuel
              </li>
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Résultat par mail sous 24h
              </li>
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Surveillance sur 15 jours
              </li>
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Service client sous 48h
              </li>
            </ul>
            <a href="mailto:info.client@scanrty.com?subject=Commande%20Sentinelle&body=Bonjour%2C%0A%0AJe%20souhaite%20commander%20l'offre%20Sentinelle%20(9%E2%82%AC)%20pour%20d%C3%A9tecter%20une%20%C3%A9ventuelle%20sous-location.%0A%0AAdresse%20du%20bien%20%C3%A0%20surveiller%20%3A%0A%0AMon%20nom%20%3A%0AMon%20t%C3%A9l%C3%A9phone%20%3A" className="block w-full px-8 py-4 text-center rounded-full bg-gradient-to-br from-[#38bdf8] to-[#ffffff] text-white font-semibold no-underline shadow-lg shadow-[#38bdf8]/30 hover:shadow-[#38bdf8]/40 hover:-translate-y-0.5 transition-all">
              Commander
            </a>
          </div>

          {/* VigilAn */}
          <div className="bg-[#001d3d] rounded-3xl p-12 border-2 border-[#38bdf8] hover:-translate-y-2 transition-all shadow-2xl shadow-[#38bdf8]/30 relative md:scale-105">
            <div className="absolute top-5 right-[-25px] bg-gradient-to-br from-[#ffffff] to-[#e0e7ff] text-white px-12 py-2 text-xs font-bold rotate-45">
              POPULAIRE
            </div>
            <div className="text-center mb-8 pb-8 border-b border-[#38bdf8]/20">
              <div className="text-sm text-white uppercase tracking-widest mb-2">Immobilier</div>
              <div className="text-3xl font-bold text-[#38bdf8] mb-4">VigilAn</div>
              <div className="text-6xl font-extrabold font-mono">59€</div>
              <div className="text-white">/ an</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Rapport mensuel
              </li>
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Surveillance quotidienne
              </li>
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Captures d'écran si détection
              </li>
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Alertes temps réel
              </li>
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Service client sous 24h
              </li>
            </ul>
            <a href="mailto:info.client@scanrty.com?subject=Souscription%20VigilAn&body=Bonjour%2C%0A%0AJe%20souhaite%20souscrire%20%C3%A0%20l'offre%20VigilAn%20(59%E2%82%AC%2Fan)%20pour%20une%20surveillance%20annuelle.%0A%0AAdresse%20du%20bien%20%C3%A0%20surveiller%20%3A%0A%0AMon%20nom%20%3A%0AMon%20t%C3%A9l%C3%A9phone%20%3A" className="block w-full px-8 py-4 text-center rounded-full bg-gradient-to-br from-[#38bdf8] to-[#ffffff] text-white font-semibold no-underline shadow-lg shadow-[#38bdf8]/30 hover:shadow-[#38bdf8]/40 hover:-translate-y-0.5 transition-all">
              Souscrire
            </a>
          </div>

          {/* TarGate */}
          <div className="bg-[#001d3d] rounded-3xl p-12 border-2 border-[#38bdf8]/10 hover:border-[#38bdf8] hover:-translate-y-2 transition-all hover:shadow-2xl hover:shadow-[#38bdf8]/30">
            <div className="text-center mb-8 pb-8 border-b border-[#38bdf8]/20">
              <div className="text-sm text-white uppercase tracking-widest mb-2">Hôtellerie</div>
              <div className="text-3xl font-bold text-[#38bdf8] mb-4">TarGate</div>
              <div className="text-6xl font-extrabold font-mono">99€</div>
              <div className="text-white">/ mois</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Accès dashboard complet
              </li>
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Tarifs & notations concurrents
              </li>
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Événements à venir
              </li>
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Suggestions tarifaires IA
              </li>
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Support prioritaire
              </li>
            </ul>
            <a href="mailto:info.client@scanrty.com?subject=Essai%20TarGate&body=Bonjour%2C%0A%0AJe%20souhaite%20tester%20TarGate%20(99%E2%82%AC%2Fmois)%20pour%20optimiser%20mon%20%C3%A9tablissement.%0A%0ANom%20de%20l'%C3%A9tablissement%20%3A%0AVille%20%3A%0A%0AMon%20nom%20%3A%0AMon%20t%C3%A9l%C3%A9phone%20%3A" className="block w-full px-8 py-4 text-center rounded-full bg-gradient-to-br from-[#38bdf8] to-[#ffffff] text-white font-semibold no-underline shadow-lg shadow-[#38bdf8]/30 hover:shadow-[#38bdf8]/40 hover:-translate-y-0.5 transition-all">
              Essayer
            </a>
          </div>

          {/* HitScan */}
          <div className="bg-[#001d3d] rounded-3xl p-12 border-2 border-[#38bdf8]/10 hover:border-[#38bdf8] hover:-translate-y-2 transition-all hover:shadow-2xl hover:shadow-[#38bdf8]/30">
            <div className="text-center mb-8 pb-8 border-b border-[#38bdf8]/20">
              <div className="text-sm text-white uppercase tracking-widest mb-2">Hôtellerie</div>
              <div className="text-3xl font-bold text-[#38bdf8] mb-4">HitScan</div>
              <div className="text-3xl font-extrabold font-mono">Sur devis</div>
              <div className="text-white">consulting</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Analyse opérationnelle complète
              </li>
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Rapport détaillé
              </li>
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Axes d'amélioration identifiés
              </li>
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Suggestions marketing digital
              </li>
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Présence d'un consultant
              </li>
            </ul>
            <a href="mailto:info.client@scanrty.com?subject=Demande%20de%20devis%20HitScan&body=Bonjour%2C%0A%0AJe%20souhaite%20recevoir%20un%20devis%20pour%20HitScan%20(analyse%20compl%C3%A8te).%0A%0ANom%20de%20l'%C3%A9tablissement%20%3A%0AVille%20%3A%0AType%20d'%C3%A9tablissement%20%3A%0A%0AMon%20nom%20%3A%0AMon%20t%C3%A9l%C3%A9phone%20%3A" className="block w-full px-8 py-4 text-center rounded-full bg-transparent text-[#38bdf8] font-semibold no-underline border-2 border-[#38bdf8] hover:bg-[#38bdf8] hover:text-[#000814] transition-all">
              Demander un devis
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#38bdf8] to-[#ffffff] py-24 text-center my-32">
        <h2 className="text-5xl font-extrabold text-white mb-6">
          Prêt à protéger votre patrimoine ?
        </h2>
        <p className="text-2xl text-white/90 mb-8">
          Rejoignez les centaines de propriétaires qui font confiance à ScanRty
        </p>
        <a href="#pricing" className="inline-block px-12 py-5 rounded-full bg-white text-[#0ea5e9] font-bold text-xl no-underline hover:bg-[#000814] hover:text-[#38bdf8] transition-all shadow-2xl">
          Commencer maintenant
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#001d3d] py-16 border-t border-[#38bdf8]/10" id="contact">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-[#38bdf8] mb-4">ScanRty</h3>
              <p className="text-white leading-relaxed">
                L'intelligence artificielle au service de l'immobilier et de l'hôtellerie. Nous aidons les propriétaires et hôteliers à protéger et optimiser leurs actifs.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#38bdf8] mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><a href="#solutions" className="text-white hover:text-[#38bdf8] transition-colors no-underline">Détection sous-location</a></li>
                <li><a href="#solutions" className="text-white hover:text-[#38bdf8] transition-colors no-underline">Optimisation hôtelière</a></li>
                <li><a href="#pricing" className="text-white hover:text-[#38bdf8] transition-colors no-underline">Tarifs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#38bdf8] mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="mailto:info.client@scanrty.com" className="text-white hover:text-[#38bdf8] transition-colors no-underline">info.client@scanrty.com</a></li>
                <li className="text-white">60 rue François 1er</li>
                <li className="text-white">75008 PARIS</li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-[#38bdf8]/10 text-white">
            <p>&copy; 2024 ScanRty. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
