export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 bg-gradient-to-r from-[#38bdf8] to-white bg-clip-text text-transparent">
            L'IA au service de votre patrimoine immobilier
          </h1>
          <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8 leading-relaxed">
            Détectez les sous-locations illégales et optimisez la rentabilité de vos établissements hôteliers grâce à notre intelligence artificielle de pointe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a href="#pricing" className="px-6 sm:px-8 py-3 sm:py-4 text-center rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] text-white font-semibold no-underline hover:-translate-y-0.5 transition-all text-base sm:text-lg">
              Découvrir nos offres
            </a>
            <a href="#solutions" className="px-6 sm:px-8 py-3 sm:py-4 text-center rounded-full bg-transparent text-[#38bdf8] font-semibold no-underline border-2 border-[#38bdf8] hover:bg-[#38bdf8] hover:text-[#000814] transition-all text-base sm:text-lg">
              Comment ça marche ?
            </a>
          </div>
        </div>
        
        <div className="animate-float hidden md:block">
          <img src="/images/hero.jpg" alt="ScanRty AI" className="w-full rounded-3xl shadow-2xl shadow-[#38bdf8]/20" />
        </div>
      </div>
      
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_20%_20%,rgba(0,212,255,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(255,0,110,0.15)_0%,transparent_50%)]"></div>
      </div>
    </section>
  )
}
