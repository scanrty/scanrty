'use client'

import Header from '../components/Header'

export default function MentionsLegales() {
  return (
    <main>
      <Header />
      
      <section className="min-h-screen pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#38bdf8] to-white bg-clip-text text-transparent">
            Mentions Légales
          </h1>
          
          <div className="bg-[#001d3d] rounded-2xl p-8 border border-[#38bdf8]/10 text-white space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">1. Informations sur l'éditeur</h2>
              <p className="mb-2"><strong>Raison sociale :</strong> SAS PERAZUR</p>
              <p className="mb-2"><strong>Forme juridique :</strong> Société par Actions Simplifiée</p>
              <p className="mb-2"><strong>Siège social :</strong> 60 rue François 1er, 75008 Paris, France</p>
              <p className="mb-2"><strong>Email :</strong> info.client@scanrty.com</p>
              <p className="mb-2"><strong>Directeur de la publication :</strong> Anthony PERAZUR</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">2. Hébergement</h2>
              <p className="mb-2"><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p className="mb-2"><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
              <p className="mb-2"><strong>Site web :</strong> <a href="https://vercel.com" className="text-[#38bdf8] hover:underline" target="_blank" rel="noopener noreferrer">vercel.com</a></p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">3. Propriété intellectuelle</h2>
              <p className="mb-2">
                L'ensemble du contenu de ce site (textes, images, logos, vidéos, code source) est la propriété exclusive de SAS PERAZUR, sauf mention contraire.
              </p>
              <p className="mb-2">
                Toute reproduction, distribution, modification ou utilisation sans autorisation écrite préalable est strictement interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">4. Données personnelles</h2>
              <p className="mb-2">
                Les informations collectées sur ce site font l'objet d'un traitement informatique destiné à la gestion de nos services.
              </p>
              <p className="mb-2">
                Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données vous concernant.
              </p>
              <p className="mb-2">
                Pour exercer ces droits, contactez-nous à : info.client@scanrty.com
              </p>
              <p>
                Consultez notre <a href="/confidentialite" className="text-[#38bdf8] hover:underline">Politique de Confidentialité</a> pour plus de détails.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">5. Cookies</h2>
              <p className="mb-2">
                Ce site utilise des cookies strictement nécessaires à son fonctionnement technique. Aucun cookie publicitaire ou de tracking n'est utilisé.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">6. Limitation de responsabilité</h2>
              <p className="mb-2">
                SAS PERAZUR met tout en œuvre pour offrir des informations exactes et à jour. Toutefois, des erreurs ou omissions peuvent survenir. L'utilisateur est seul responsable de l'utilisation qu'il fait des informations présentes sur le site.
              </p>
              <p>
                SAS PERAZUR ne saurait être tenu responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation du site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38bdf8] mb-4">7. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. Tout litige relatif à leur interprétation ou leur exécution relève de la compétence exclusive des tribunaux français.
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
