'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../components/Header'

const PRODUCTS = {
  sentinelle: {
    name: 'Sentinelle',
    price: 29,
    description: 'Rapport ponctuel de détection de sous-location',
    stripeLink: 'https://buy.stripe.com/dRmeVe4rj4Tm8Zidfc4Rq04'
  },
  vigilan: {
    name: 'VigilAn',
    price: 99,
    description: 'Surveillance annuelle avec rapports mensuels',
    stripeLink: 'https://buy.stripe.com/cNi14o7Dv85ygrKcb84Rq03'
  }
}

export default function CommanderPage() {
  const router = useRouter()
  const [selectedProduct, setSelectedProduct] = useState<'sentinelle' | 'vigilan'>('sentinelle')
  const [images, setImages] = useState<File[]>([])
  const [status, setStatus] = useState<'idle' | 'sending'>('idle')
  const [formData, setFormData] = useState({
    // Infos client
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Infos bien
    address: '',
    city: '',
    postalCode: '',
    propertyType: 'appartement',
    rooms: '',
    surface: '',
    floor: '',
    features: [] as string[],
    description: ''
  })

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).slice(0, 10)
      setImages(prev => [...prev, ...newImages].slice(0, 10))
    }
  }

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index))
  }

  const toggleFeature = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // Redirection directe vers le payment link Stripe
      const product = PRODUCTS[selectedProduct]
      window.location.href = product.stripeLink
    } catch (error) {
      console.error('Erreur:', error)
      setStatus('idle')
      alert('Une erreur est survenue. Veuillez réessayer.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const product = PRODUCTS[selectedProduct]

  return (
    <main className="min-h-screen bg-[#000814]">
      <Header />
      
      <section className="max-w-5xl mx-auto px-8 py-32 pt-40">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#38bdf8] to-[#ffffff] bg-clip-text text-transparent">
            Commander {product.name}
          </h1>
          <p className="text-xl text-white mb-2">
            {product.description}
          </p>
          <div className="text-3xl font-bold text-[#38bdf8]">
            {product.price}€ {selectedProduct === 'vigilan' ? '/an' : ''}
          </div>
        </div>

        {/* Sélection du produit */}
        <div className="bg-[#001d3d] rounded-3xl p-8 mb-8 border border-[#38bdf8]/10">
          <h2 className="text-2xl font-bold text-white mb-4">Choisissez votre offre</h2>
          <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
            {Object.entries(PRODUCTS).map(([key, prod]) => (
              <button
                key={key}
                onClick={() => setSelectedProduct(key as any)}
                className={`p-6 rounded-xl border-2 transition-all ${
                  selectedProduct === key
                    ? 'border-[#38bdf8] bg-[#38bdf8]/10'
                    : 'border-[#38bdf8]/20 hover:border-[#38bdf8]/40'
                }`}
              >
                <div className="text-white font-bold text-xl mb-2">{prod.name}</div>
                <div className="text-[#38bdf8] font-bold text-2xl">{prod.price}€</div>
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Photos du bien */}
          <div className="bg-[#001d3d] rounded-3xl p-8 border border-[#38bdf8]/10">
            <h2 className="text-2xl font-bold text-white mb-4">📸 Photos du bien (recommandé)</h2>
            <p className="text-white/70 mb-4">
              Les photos facilitent grandement la surveillance et améliore la précision de nos rapports. 
              <span className="text-[#38bdf8]"> Fortement recommandé</span> pour un service optimal.
            </p>
            
            <label className="block w-full cursor-pointer">
              <div className="border-2 border-dashed border-[#38bdf8]/30 rounded-xl p-8 text-center hover:border-[#38bdf8] transition-colors">
                <div className="text-4xl mb-2">📷</div>
                <div className="text-white font-semibold mb-1">Cliquez pour ajouter des photos</div>
                <div className="text-white/50 text-sm">Jusqu'à 10 photos maximum (JPG, PNG)</div>
              </div>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>

            {images.length > 0 && (
              <div className="grid grid-cols-5 gap-4 mt-6">
                {images.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Photo ${index + 1}`}
                      className="w-full h-32 object-cover rounded-xl"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="text-white/50 text-sm mt-2">
              {images.length}/10 photos uploadées
            </div>
          </div>

          {/* Informations du bien */}
          <div className="bg-[#001d3d] rounded-3xl p-8 border border-[#38bdf8]/10">
            <h2 className="text-2xl font-bold text-white mb-6">🏠 Informations du bien</h2>
            
            <div className="space-y-6">
              {/* Type de bien */}
              <div>
                <label className="block text-white font-semibold mb-2">Type de bien *</label>
                <select
                  name="propertyType"
                  required
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#000814] border border-[#38bdf8]/20 text-white focus:border-[#38bdf8] focus:outline-none"
                >
                  <option value="appartement">Appartement</option>
                  <option value="maison">Maison</option>
                </select>
              </div>

              {/* Adresse */}
              <div>
                <label className="block text-white font-semibold mb-2">Adresse complète du bien à surveiller *</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Numéro et nom de rue"
                  className="w-full px-4 py-3 rounded-xl bg-[#000814] border border-[#38bdf8]/20 text-white focus:border-[#38bdf8] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">Code postal *</label>
                  <input
                    type="text"
                    name="postalCode"
                    required
                    value={formData.postalCode}
                    onChange={handleChange}
                    placeholder="75008"
                    className="w-full px-4 py-3 rounded-xl bg-[#000814] border border-[#38bdf8]/20 text-white focus:border-[#38bdf8] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Ville *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Paris"
                    className="w-full px-4 py-3 rounded-xl bg-[#000814] border border-[#38bdf8]/20 text-white focus:border-[#38bdf8] focus:outline-none"
                  />
                </div>
              </div>

              {/* Caractéristiques */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">Pièces *</label>
                  <input
                    type="number"
                    name="rooms"
                    required
                    min="1"
                    value={formData.rooms}
                    onChange={handleChange}
                    placeholder="3"
                    className="w-full px-4 py-3 rounded-xl bg-[#000814] border border-[#38bdf8]/20 text-white focus:border-[#38bdf8] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Surface (m²) *</label>
                  <input
                    type="number"
                    name="surface"
                    required
                    min="1"
                    value={formData.surface}
                    onChange={handleChange}
                    placeholder="65"
                    className="w-full px-4 py-3 rounded-xl bg-[#000814] border border-[#38bdf8]/20 text-white focus:border-[#38bdf8] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Étage</label>
                  <input
                    type="text"
                    name="floor"
                    value={formData.floor}
                    onChange={handleChange}
                    placeholder="3ème"
                    className="w-full px-4 py-3 rounded-xl bg-[#000814] border border-[#38bdf8]/20 text-white focus:border-[#38bdf8] focus:outline-none"
                  />
                </div>
              </div>

              {/* Équipements */}
              <div>
                <label className="block text-white font-semibold mb-3">Équipements / Particularités</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Balcon', 'Terrasse', 'Jardin', 'Parking', 'Cave', 'Ascenseur', 'Piscine', 'Meublé', 'Climatisation'].map(feature => (
                    <button
                      key={feature}
                      type="button"
                      onClick={() => toggleFeature(feature)}
                      className={`px-4 py-2 rounded-xl border-2 transition-all ${
                        formData.features.includes(feature)
                          ? 'border-[#38bdf8] bg-[#38bdf8]/10 text-[#38bdf8]'
                          : 'border-[#38bdf8]/20 text-white hover:border-[#38bdf8]/40'
                      }`}
                    >
                      {feature}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-white font-semibold mb-2">Description / Remarques</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Ajoutez des détails importants pour la surveillance..."
                  className="w-full px-4 py-3 rounded-xl bg-[#000814] border border-[#38bdf8]/20 text-white focus:border-[#38bdf8] focus:outline-none resize-none"
                />
              </div>
            </div>
          </div>

          {/* Informations client */}
          <div className="bg-[#001d3d] rounded-3xl p-8 border border-[#38bdf8]/10">
            <h2 className="text-2xl font-bold text-white mb-6">👤 Vos informations</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">Prénom *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#000814] border border-[#38bdf8]/20 text-white focus:border-[#38bdf8] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Nom *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#000814] border border-[#38bdf8]/20 text-white focus:border-[#38bdf8] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#000814] border border-[#38bdf8]/20 text-white focus:border-[#38bdf8] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Téléphone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#000814] border border-[#38bdf8]/20 text-white focus:border-[#38bdf8] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bouton de validation */}
          <div className="text-center">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="px-16 py-5 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] text-white font-bold text-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Chargement...' : `Procéder au paiement (${product.price}€)`}
            </button>
            
            {/* Confidentiality notice */}
            <div className="mt-6 max-w-2xl mx-auto bg-[#001d3d] rounded-2xl p-6 border border-[#38bdf8]/10">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔒</span>
                <div className="text-left">
                  <h3 className="text-white font-semibold mb-2">Confidentialité & Protection des données</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Toutes les informations et photos que vous nous transmettez sont strictement confidentielles 
                    et utilisées uniquement dans le cadre de votre service de surveillance. 
                    Vos données seront automatiquement supprimées à la fin de votre abonnement ou après la remise 
                    de votre rapport ponctuel, conformément au RGPD.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  )
}
