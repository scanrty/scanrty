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
            <a href="#sentinelle" className="px-8 py-4 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] text-white font-semibold no-underline hover:-translate-y-0.5 transition-all">
              Voir la détection
            </a>
            <a href="#targate" className="px-8 py-4 rounded-full bg-transparent text-[#38bdf8] font-semibold no-underline border-2 border-[#38bdf8] hover:bg-[#38bdf8] hover:text-[#000814] transition-all">
              Voir l'optimisation
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent"></div>
      </div>

      {/* Sentinelle & VigilAn Section */}
      <section id="sentinelle" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Texte */}
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-[#38bdf8]/10 rounded-full mb-6">
                <span className="text-[#38bdf8] font-semibold">🔍 Détection de sous-location</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-white">
                Sentinelle & VigilAn
              </h2>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
                Notre IA scanne automatiquement <strong className="text-[#38bdf8]">Airbnb, Booking, Le Bon Coin, Abritel...</strong> pour détecter toute sous-location illégale de votre bien immobilier.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Scan automatique</h3>
                    <p className="text-white/70">Surveillance 24/7 de toutes les plateformes de location courte durée</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Analyse IA</h3>
                    <p className="text-white/70">Comparaison intelligente : adresse, photos, caractéristiques du bien</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Rapport détaillé</h3>
                    <p className="text-white/70">Reçevez les preuves sous 24h : captures d'écran, URLs, scores de similarité</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/commander" className="px-8 py-4 text-center rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] text-white font-semibold no-underline hover:-translate-y-0.5 transition-all">
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
                  src="https://www.youtube.com/embed/DGU8LumnF6Y?rel=0&modestbranding=1" 
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

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent"></div>
      </div>

      {/* TarGate Section */}
      <section id="targate" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Vidéo */}
            <div className="order-1">
              <div className="relative rounded-3xl overflow-hidden bg-[#001d3d] border-2 border-[#38bdf8]/20 shadow-2xl shadow-[#38bdf8]/20">
                <div className="aspect-video bg-gradient-to-br from-[#1e3a5f] to-[#001d3d] flex items-center justify-center">
                  {/* Placeholder vidéo */}
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#38bdf8]/20 flex items-center justify-center">
                      <svg className="w-10 h-10 text-[#38bdf8]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-white/60 text-sm">Vidéo de démonstration</p>
                    <p className="text-[#38bdf8] font-semibold mt-2">TarGate Dashboard</p>
                    <p className="text-white/40 text-xs mt-4">
                      Remplacez ce bloc par :<br/>
                      <code className="text-[#38bdf8]">&lt;iframe src="URL_YOUTUBE"&gt;</code>
                    </p>
                  </div>
                  
                  {/* Pour intégrer une vraie vidéo :
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/TON_VIDEO_ID" 
                    title="Démonstration TarGate"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  */}
                </div>
                
                {/* Badge "Interactive" */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-green-500 text-white text-xs font-bold rounded-full flex items-center gap-2">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  PREMIUM
                </div>
              </div>

              {/* Stats rapides */}
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
                    <h3 className="text-xl font-bold text-white mb-2">Recommandations IA</h3>
                    <p className="text-white/70">Suggestions tarifaires basées sur la demande, les événements et les tendances</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Visualisation avancée</h3>
                    <p className="text-white/70">Graphiques interactifs, heatmaps, prévisions de taux d'occupation</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="px-8 py-4 text-center rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] text-white font-semibold no-underline hover:-translate-y-0.5 transition-all">
                  Demander une démo
                </a>
                <a href="#pricing" className="px-8 py-4 text-center rounded-full bg-[#001d3d] text-[#38bdf8] font-semibold no-underline border-2 border-[#38bdf8] hover:bg-[#38bdf8] hover:text-white transition-all">
                  Voir les tarifs
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#1e3a5f] to-[#001d3d] rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-[#38bdf8]/20 relative overflow-hidden">
            {/* Effet lumineux */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15)_0%,transparent_70%)]"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-white">
                Prêt à protéger et optimiser votre patrimoine ?
              </h2>
              <p className="text-lg sm:text-xl text-white/80 mb-8">
                Rejoignez les centaines de propriétaires et hôteliers qui font confiance à ScanRty
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/commander" className="px-10 py-5 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#60a5fa] text-white font-bold text-lg no-underline hover:-translate-y-1 transition-all">
                  Commencer maintenant
                </a>
                <a href="/contact" className="px-10 py-5 rounded-full bg-white/10 backdrop-blur text-white font-bold text-lg no-underline border-2 border-white/20 hover:bg-white/20 transition-all">
                  Parler à un expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001d3d] py-8 border-t border-[#38bdf8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p>&copy; 2026 ScanRty. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  )
}
