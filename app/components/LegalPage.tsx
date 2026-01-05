'use client'

import Header from '../components/Header'

export default function LegalPage({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <main>
      <Header />
      
      <section className="min-h-screen pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#38bdf8] to-white bg-clip-text text-transparent">
            {title}
          </h1>
          
          <div className="bg-[#001d3d] rounded-2xl p-8 border border-[#38bdf8]/10">
            <div className="prose prose-invert prose-lg max-w-none">
              {children}
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
