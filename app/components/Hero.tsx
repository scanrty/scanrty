export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-32 pb-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
        <div>
          <h1 className="text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-[#7dd3fc] to-white bg-clip-text text-transparent">
            L'IA au service de votre patrimoine immobilier
          </h1>
          <p className="text-xl text-white mb-8 leading-relaxed">
            Détectez les sous-locations illégales et optimisez la rentabilité de vos établissements hôteliers grâce à notre intelligence artificielle de pointe.
          </p>
          <div className="flex gap-6 flex-wrap">
            <a href="#pricing" className="px-8 py-4 rounded-full bg-gradient-to-br from-[#7dd3fc] to-[#ffffff] text-white font-semibold no-underline shadow-lg shadow-[#7dd3fc]/30 hover:shadow-[#7dd3fc]/40 hover:-translate-y-0.5 transition-all text-lg">
              Découvrir nos offres
            </a>
            <a href="#solutions" className="px-8 py-4 rounded-full bg-transparent text-[#7dd3fc] font-semibold no-underline border-2 border-[#7dd3fc] hover:bg-[#7dd3fc] hover:text-[#000814] transition-all text-lg">
              Comment ça marche ?
            </a>
          </div>
        </div>
        
        <div className="animate-float">
          <img src="/images/hero.jpg" alt="ScanRty AI" className="w-full rounded-3xl shadow-2xl shadow-[#7dd3fc]/20" />
        </div>
      </div>
      
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_20%_20%,rgba(0,212,255,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(255,0,110,0.15)_0%,transparent_50%)]"></div>
      </div>
    </section>
  )
}
