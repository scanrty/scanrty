'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function ThankYouContent() {
  const searchParams = useSearchParams()
  const produit = searchParams.get('produit') || 'votre commande'

  const produitNames: { [key: string]: string } = {
    'sentinelle': 'Sentinelle',
    'vigilan': 'VigilAn',
    'targate': 'TarGate'
  }

  const produitName = produitNames[produit] || 'votre commande'

  return (
    <main className="min-h-screen flex items-center justify-center px-8 bg-[#000814]">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#ffffff] flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#38bdf8] to-[#ffffff] bg-clip-text text-transparent">
            Merci pour votre commande ! 🎉
          </h1>
          
          <p className="text-2xl text-white mb-6">
            Votre paiement pour <strong className="text-[#38bdf8]">{produitName}</strong> a été confirmé.
          </p>
          
          <div className="bg-[#001d3d] rounded-2xl p-8 mb-8 border border-[#38bdf8]/20">
            <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">📧 Prochaines étapes</h2>
            <ul className="text-left text-white space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#38bdf8] font-bold mt-1">✓</span>
                <span>Vous allez recevoir un <strong>email de confirmation</strong> avec tous les détails</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#38bdf8] font-bold mt-1">✓</span>
                <span>Notre équipe va <strong>traiter votre demande</strong> dans les plus brefs délais</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#38bdf8] font-bold mt-1">✓</span>
                <span>Pour <strong>Sentinelle</strong> : Rapport sous 24h maximum</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#38bdf8] font-bold mt-1">✓</span>
                <span>Pour <strong>VigilAn & TarGate</strong> : Accès envoyé sous 2h</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#001d3d] rounded-2xl p-6 mb-8 border border-[#38bdf8]/10">
            <p className="text-white">
              <strong className="text-[#38bdf8]">Besoin d'aide ?</strong><br />
              Contactez-nous : <a href="mailto:info.client@scanrty.com" className="text-[#38bdf8] hover:underline">info.client@scanrty.com</a>
            </p>
          </div>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/" className="px-8 py-4 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#ffffff] text-white font-semibold no-underline shadow-lg shadow-[#38bdf8]/30 hover:shadow-[#38bdf8]/40 hover:-translate-y-0.5 transition-all">
              Retour à l'accueil
            </a>
            <a href="mailto:info.client@scanrty.com" className="px-8 py-4 rounded-full bg-transparent border-2 border-[#38bdf8] text-[#38bdf8] font-semibold no-underline hover:bg-[#38bdf8] hover:text-white transition-all">
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function MerciPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center bg-[#000814]">
        <div className="text-white text-2xl">Chargement...</div>
      </main>
    }>
      <ThankYouContent />
    </Suspense>
  )
}
