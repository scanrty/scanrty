'use client'

import Header from '../components/Header'
import { useState } from 'react'

export default function Demo() {
  return (
    <main className="bg-[#000814]">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-[#38bdf8] to-white bg-clip-text text-transparent">
            Découvrez ScanRty en action
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Voyez comment notre intelligence artificielle protège et optimise votre patrimoine immobilier en quelques clics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/commander" 
              className="px-8 py-4 text-center rounded-full bg-gradient-to-r from-[#38bdf8] to-[#1e3a5f] text-white font-semibold hover:shadow-lg hover:shadow-[#38bdf8]/50 transition-all no-underline"
            >
              Commander maintenant
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 text-center rounded-full border-2 border-[#38bdf8] text-[#38bdf8] font-semibold hover:bg-[#38bdf8] hover:text-white transition-all no-underline"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      {/* Démo Sentinelle & VigilAn */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Texte */}
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-[#38bdf8]/10 rounded-full mb-6">
                <span className="text-[#38bdf8] font-semibold">🏠 Détection de sous-location</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-white">
                Sentinelle & VigilAn
              </h2>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
                Notre IA scanne automatiquement <strong className="text-[#38bdf8]">Airbnb, Booking, Le Bon Coin et Abritel</strong> pour détecter les sous-locations illégales de votre bien.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Scan automatique</h3>
                    <p className="text-white/70">Notre IA compare adresse, photos et caractéristiques de votre bien sur toutes les plateformes</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Rapport détaillé</h3>
                    <p className="text-white/70">Recevez un rapport complet avec preuves, captures d'écran et URL des annonces en 24h</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Actions légales</h3>
                    <p className="text-white/70">Des preuves concrètes que vous pouvez présenter à votre avocat ou assurance</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/commander" className="px-8 py-4 text-center rounded-full bg-gradient-to-r from-[#38bdf8] to-[#1e3a5f] text-white font-semibold no-underline hover:shadow-lg hover:shadow-[#38bdf8]/50 transition-all">
                  Essayer Sentinelle - 9€
                </a>
                <a href="/commander" className="px-8 py-4 text-center rounded-full bg-[#001d3d] text-[#38bdf8] font-semibold no-underline border-2 border-[#38bdf8] hover:bg-[#38bdf8] hover:text-white transition-all">
                  Souscrire VigilAn - 59€/an
                </a>
              </div>
            </div>

            {/* Vidéo */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden bg-[#001d3d] border-2 border-[#38bdf8]/20 shadow-2xl shadow-[#38bdf8]/20">
                <iframe 
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/sKWsL95f09o?rel=0&modestbranding=1" 
                  title="Démonstration Sentinelle & VigilAn"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                
                {/* Badge "Live Demo" */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white text-xs font-bold rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  LIVE DEMO
                </div>
              </div>

              {/* Stats rapides */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-[#001d3d] rounded-xl p-4 text-center border border-[#38bdf8]/10">
                  <div className="text-2xl font-bold text-[#38bdf8]">24h</div>
                  <div className="text-xs text-white/60 mt-1">Délai max</div>
                </div>
                <div className="bg-[#001d3d] rounded-xl p-4 text-center border border-[#38bdf8]/10">
                  <div className="text-2xl font-bold text-[#38bdf8]">99%</div>
                  <div className="text-xs text-white/60 mt-1">Détection</div>
                </div>
                <div className="bg-[#001d3d] rounded-xl p-4 text-center border border-[#38bdf8]/10">
                  <div className="text-2xl font-bold text-[#38bdf8]">4</div>
                  <div className="text-xs text-white/60 mt-1">Plateformes</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Démo TarGate */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000814] to-[#001d3d]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Vidéo/Mockup */}
            <div className="order-1">
              <div className="relative rounded-3xl overflow-hidden bg-[#001d3d] border-2 border-[#38bdf8]/20 shadow-2xl shadow-[#38bdf8]/20 p-8">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#38bdf8]/20 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#38bdf8]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-white/60">Vidéo de démonstration</p>
                  <p className="text-[#38bdf8] font-semibold text-xl">TarGate Dashboard</p>
                  <p className="text-white/40 text-sm max-w-md mx-auto">
                    Prochainement : découvrez notre dashboard intelligent de revenue management pour hôtels
                  </p>
                </div>
                
                {/* Badge "Coming Soon" */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-[#38bdf8] to-[#1e3a5f] text-white text-xs font-bold rounded-full">
                  BIENTÔT
                </div>
              </div>

              {/* Stats TarGate */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-[#001d3d] rounded-xl p-4 text-center border border-[#38bdf8]/10">
                  <div className="text-2xl font-bold text-[#38bdf8]">+25%</div>
                  <div className="text-xs text-white/60 mt-1">RevPAR</div>
                </div>
                <div className="bg-[#001d3d] rounded-xl p-4 text-center border border-[#38bdf8]/10">
                  <div className="text-2xl font-bold text-[#38bdf8]">Real-time</div>
                  <div className="text-xs text-white/60 mt-1">Data</div>
                </div>
                <div className="bg-[#001d3d] rounded-xl p-4 text-center border border-[#38bdf8]/10">
                  <div className="text-2xl font-bold text-[#38bdf8]">IA</div>
                  <div className="text-xs text-white/60 mt-1">Suggestions</div>
                </div>
              </div>
            </div>

            {/* Texte */}
            <div className="order-2">
              <div className="inline-block px-4 py-2 bg-[#38bdf8]/10 rounded-full mb-6">
                <span className="text-[#38bdf8] font-semibold">📊 Optimisation hôtelière</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-white">
                TarGate Dashboard
              </h2>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
                Maximisez votre <strong className="text-[#38bdf8]">RevPAR</strong> avec notre dashboard intelligent qui analyse vos concurrents et vous suggère les tarifs optimaux en temps réel.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Surveillance concurrentielle</h3>
                    <p className="text-white/70">Tarifs, disponibilités et notations de vos concurrents en temps réel</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Tarification dynamique</h3>
                    <p className="text-white/70">Suggestions de prix basées sur l'offre, la demande et les événements locaux</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Rapports personnalisés</h3>
                    <p className="text-white/70">Analytics détaillés et recommandations stratégiques par notre IA</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="px-8 py-4 text-center rounded-full bg-gradient-to-r from-[#38bdf8] to-[#1e3a5f] text-white font-semibold no-underline hover:shadow-lg hover:shadow-[#38bdf8]/50 transition-all">
                  Demander une démo
                </a>
                <a href="/targate" className="px-8 py-4 text-center rounded-full bg-[#001d3d] text-[#38bdf8] font-semibold no-underline border-2 border-[#38bdf8] hover:bg-[#38bdf8] hover:text-white transition-all">
                  En savoir plus
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-white">
            Prêt à protéger votre patrimoine ?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Rejoignez les propriétaires et hôteliers qui font confiance à ScanRty pour sécuriser et optimiser leurs revenus
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/commander" 
              className="px-10 py-5 text-center rounded-full bg-gradient-to-r from-[#38bdf8] to-[#1e3a5f] text-white font-bold text-lg hover:shadow-lg hover:shadow-[#38bdf8]/50 transition-all no-underline"
            >
              Commander maintenant
            </a>
            <a 
              href="/contact" 
              className="px-10 py-5 text-center rounded-full border-2 border-[#38bdf8] text-[#38bdf8] font-bold text-lg hover:bg-[#38bdf8] hover:text-white transition-all no-underline"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
