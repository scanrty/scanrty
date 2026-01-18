'use client'

import Header from './components/Header'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      
      {/* Stats Section */}
      <section className="bg-[#001d3d] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-br from-[#38bdf8] to-[#ffffff] bg-clip-text text-transparent font-mono">24h</div>
            <div className="text-lg text-white mt-2">Délai de réponse maximum</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-br from-[#38bdf8] to-[#ffffff] bg-clip-text text-transparent font-mono">99%</div>
            <div className="text-lg text-white mt-2">Taux de détection</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-br from-[#38bdf8] to-[#ffffff] bg-clip-text text-transparent font-mono">500+</div>
            <div className="text-lg text-white mt-2">Biens surveillés</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-br from-[#38bdf8] to-[#ffffff] bg-clip-text text-transparent font-mono">24/7</div>
            <div className="text-lg text-white mt-2">Surveillance continue</div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 sm:py-24 lg:py-32" id="problems">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-[#38bdf8] to-[#ffffff] bg-clip-text text-transparent">
          Les défis que vous rencontrez
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-center text-white mb-16">
          Deux problématiques majeures, une solution technologique
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <div className="bg-[#001d3d] rounded-3xl p-6 sm:p-8 lg:p-12 border border-[#38bdf8]/10 hover:border-[#38bdf8] hover:-translate-y-2 transition-all hover:shadow-2xl hover:shadow-[#38bdf8]/20">
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
          
          <div className="bg-[#001d3d] rounded-3xl p-6 sm:p-8 lg:p-12 border border-[#38bdf8]/10 hover:border-[#38bdf8] hover:-translate-y-2 transition-all hover:shadow-2xl hover:shadow-[#38bdf8]/20">
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
      <section className="bg-[#001d3d] py-12 sm:py-16 sm:py-24 lg:py-32" id="solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-[#38bdf8] to-[#ffffff] bg-clip-text text-transparent">
            Nos solutions intelligentes
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-center text-white mb-24">
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
              <a href="#pricing" className="inline-block px-4 sm:px-6 lg:px-8 py-4 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] text-white font-semibold no-underline  hover:-translate-y-0.5 transition-all">
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
              <a href="#pricing" className="inline-block px-4 sm:px-6 lg:px-8 py-4 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] text-white font-semibold no-underline  hover:-translate-y-0.5 transition-all">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 sm:py-24 lg:py-32" id="pricing">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-[#38bdf8] to-[#ffffff] bg-clip-text text-transparent">
          Choisissez votre formule
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-center text-white mb-16">
          Des solutions adaptées à chaque besoin
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Sentinelle */}
          <div className="bg-[#001d3d] rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-[#38bdf8]/10 hover:border-[#38bdf8] hover:-translate-y-2 transition-all hover:shadow-2xl hover:shadow-[#38bdf8]/30">
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
            <a href="/commander" className="block w-full px-4 sm:px-6 lg:px-8 py-4 text-center rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] text-white font-semibold no-underline  hover:-translate-y-0.5 transition-all">
              Commander
            </a>
          </div>

          {/* VigilAn */}
          <div className="bg-[#001d3d] rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-[#38bdf8] hover:-translate-y-2 transition-all shadow-2xl shadow-[#38bdf8]/30 relative md:scale-105">
            <div className="absolute top-5 right-[-25px] bg-gradient-to-br from-[#1e3a5f] to-[#152d47] text-white px-12 py-2 text-xs font-bold rotate-45 shadow-lg">
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
            <a href="/commander" className="block w-full px-4 sm:px-6 lg:px-8 py-4 text-center rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] text-white font-semibold no-underline  hover:-translate-y-0.5 transition-all">
              Souscrire
            </a>
          </div>

          {/* Lucidis B2G */}
          <div className="bg-[#001d3d] rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-[#38bdf8]/10 hover:border-[#38bdf8] hover:-translate-y-2 transition-all hover:shadow-2xl hover:shadow-[#38bdf8]/30">
            <div className="text-center mb-8 pb-8 border-b border-[#38bdf8]/20">
              <div className="text-sm text-white uppercase tracking-widest mb-2">Municipalités</div>
              <div className="text-3xl font-bold text-[#38bdf8] mb-4">Lucidis</div>
              <div className="text-3xl font-extrabold font-mono">Sur devis</div>
              <div className="text-white">B2G</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Surveillance territoriale
              </li>
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Dashboard municipal
              </li>
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Détection non-déclarées
              </li>
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Rapports & cartographie
              </li>
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                POC gratuit 30 jours
              </li>
            </ul>
            <a href="/contact" className="block w-full px-4 sm:px-6 lg:px-8 py-4 text-center rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] text-white font-semibold no-underline  hover:-translate-y-0.5 transition-all">
              Demander un devis
            </a>
          </div>

          {/* TarGate */}
          <div className="bg-[#001d3d] rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-[#38bdf8]/10 hover:border-[#38bdf8] hover:-translate-y-2 transition-all hover:shadow-2xl hover:shadow-[#38bdf8]/30">
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
            <a href="https://buy.stripe.com/bJe3cwf5X4TmfnGcb84Rq02" target="_blank" rel="noopener noreferrer" className="block w-full px-4 sm:px-6 lg:px-8 py-4 text-center rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] text-white font-semibold no-underline  hover:-translate-y-0.5 transition-all">
              Essayer
            </a>
          </div>

          {/* HitScan */}
          <div className="bg-[#001d3d] rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-[#38bdf8]/10 hover:border-[#38bdf8] hover:-translate-y-2 transition-all hover:shadow-2xl hover:shadow-[#38bdf8]/30">
            <div className="text-center mb-8 pb-8 border-b border-[#38bdf8]/20">
              <div className="text-sm text-white uppercase tracking-widest mb-2">Hôtellerie</div>
              <div className="text-3xl font-bold text-[#38bdf8] mb-4">HitScan</div>
              <div className="text-3xl font-extrabold font-mono">Sur devis</div>
              <div className="text-white">consulting</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Analyse opérationnelle
              </li>
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Rapport détaillé
              </li>
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Axes d'amélioration
              </li>
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Marketing digital
              </li>
              <li className="text-white pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-[#38bdf8] before:font-bold">
                Consultant dédié
              </li>
            </ul>
            <a href="/contact" className="block w-full px-4 sm:px-6 lg:px-8 py-4 text-center rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] text-white font-semibold no-underline hover:-translate-y-0.5 transition-all">
              Demander un devis
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#001d3d] py-24 text-center my-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15)_0%,transparent_70%)]"></div>
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Prêt à protéger votre patrimoine ?
          </h2>
          <p className="text-2xl text-white/90 mb-8">
            Rejoignez les centaines de propriétaires qui font confiance à ScanRty
          </p>
          <a href="#pricing" className="inline-block px-12 py-5 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#60a5fa] text-white font-bold text-xl no-underline hover:-translate-y-1 transition-all">
            Commencer maintenant
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001d3d] py-12 sm:py-16 border-t border-[#38bdf8]/10" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.svg" alt="ScanRty" className="w-10 h-10" />
                <h3 className="text-2xl font-bold text-[#38bdf8]">ScanRty</h3>
              </div>
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
                <li><a href="/faq" className="text-white hover:text-[#38bdf8] transition-colors no-underline">FAQ</a></li>
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
          <div className="text-center pt-8 border-t border-[#38bdf8]/10">
            <div className="flex justify-center gap-6 mb-4 text-sm">
              <a href="/mentions-legales" className="text-white hover:text-[#38bdf8] transition-colors no-underline">Mentions légales</a>
              <span className="text-white">•</span>
              <a href="/cgv" className="text-white hover:text-[#38bdf8] transition-colors no-underline">CGV</a>
              <span className="text-white">•</span>
              <a href="/confidentialite" className="text-white hover:text-[#38bdf8] transition-colors no-underline">Confidentialité</a>
            </div>
            <p className="text-white">&copy; 2026 ScanRty. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
