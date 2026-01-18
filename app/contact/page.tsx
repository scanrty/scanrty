'use client'

import { useState } from 'react'
import Header from '../components/Header'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    requestType: 'hitscan',
    message: ''
  })
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Créer le contenu de l'email
    const emailContent = `
Nouvelle demande de contact - ScanRty

Type de demande : ${formData.requestType === 'hitscan' ? 'HitScan - Consulting' : formData.requestType === 'question' ? 'Question générale' : 'Support technique'}

Nom : ${formData.firstName} ${formData.lastName}
Email : ${formData.email}
Téléphone : ${formData.phone}

Message :
${formData.message}
    `.trim()

    // Ouvrir le client email
    const mailtoLink = `mailto:info.client@scanrty.com?subject=Nouvelle demande - ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(emailContent)}`
    
    window.location.href = mailtoLink
    
    // Simuler un délai puis afficher succès
    setTimeout(() => {
      setStatus('success')
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (status === 'success') {
    return (
      <main className="min-h-screen bg-[#000814]">
        <Header />
        <div className="min-h-screen flex items-center justify-center px-8 pt-32">
          <div className="max-w-2xl text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#ffffff] flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#38bdf8] to-[#ffffff] bg-clip-text text-transparent">
              Message envoyé ! 📧
            </h1>
            
            <p className="text-xl text-white mb-8">
              Votre client email s'est ouvert. Cliquez sur "Envoyer" pour nous transmettre votre message.
            </p>
            
            <p className="text-white mb-8">
              Nous vous répondrons dans les plus brefs délais à l'adresse : <strong className="text-[#38bdf8]">{formData.email}</strong>
            </p>
            
            <div className="flex gap-4 justify-center">
              <a href="/" className="px-8 py-4 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] text-white font-semibold no-underline hover:-translate-y-0.5 transition-all">
                Retour à l'accueil
              </a>
              <button 
                onClick={() => setStatus('idle')}
                className="px-8 py-4 rounded-full bg-transparent border-2 border-[#38bdf8] text-[#38bdf8] font-semibold hover:bg-[#38bdf8] hover:text-white transition-all"
              >
                Nouveau message
              </button>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#000814]">
      <Header />
      
      <section className="max-w-4xl mx-auto px-8 py-32 pt-40">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#38bdf8] to-[#ffffff] bg-clip-text text-transparent">
            Contactez-nous
          </h1>
          <p className="text-xl text-white">
            Une question ? Un projet ? Notre équipe vous répond sous 24h.
          </p>
        </div>

        <div className="bg-[#001d3d] rounded-3xl p-12 border border-[#38bdf8]/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Prénom et Nom */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-white font-semibold mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#000814] border border-[#38bdf8]/20 text-white focus:border-[#38bdf8] focus:outline-none transition-colors"
                  placeholder="Votre prénom"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-white font-semibold mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#000814] border border-[#38bdf8]/20 text-white focus:border-[#38bdf8] focus:outline-none transition-colors"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            {/* Email et Téléphone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#000814] border border-[#38bdf8]/20 text-white focus:border-[#38bdf8] focus:outline-none transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#000814] border border-[#38bdf8]/20 text-white focus:border-[#38bdf8] focus:outline-none transition-colors"
                  placeholder="06 12 34 56 78"
                />
              </div>
            </div>

            {/* Type de demande */}
            <div>
              <label htmlFor="requestType" className="block text-white font-semibold mb-2">
                Type de demande *
              </label>
              <select
                id="requestType"
                name="requestType"
                required
                value={formData.requestType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#000814] border border-[#38bdf8]/20 text-white focus:border-[#38bdf8] focus:outline-none transition-colors"
              >
                <option value="hitscan">HitScan - Demande de devis consulting</option>
                <option value="question">Question générale</option>
                <option value="support">Support technique</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-xl bg-[#000814] border border-[#38bdf8]/20 text-white focus:border-[#38bdf8] focus:outline-none transition-colors resize-none"
                placeholder="Décrivez votre projet ou votre question..."
              />
            </div>

            {/* Bouton Submit */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-12 py-4 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] text-white font-bold text-lg hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </div>
          </form>
        </div>

        {/* Informations de contact */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-[#001d3d] rounded-2xl p-8 border border-[#38bdf8]/10 text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-[#38bdf8] mb-2">Email</h3>
            <a href="mailto:info.client@scanrty.com" className="text-white hover:text-[#38bdf8] transition-colors no-underline">
              info.client@scanrty.com
            </a>
          </div>
          
          <div className="bg-[#001d3d] rounded-2xl p-8 border border-[#38bdf8]/10 text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold text-[#38bdf8] mb-2">Adresse</h3>
            <p className="text-white">
              60 rue François 1er<br />
              75008 Paris
            </p>
          </div>
          
          <div className="bg-[#001d3d] rounded-2xl p-8 border border-[#38bdf8]/10 text-center">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-bold text-[#38bdf8] mb-2">Réponse</h3>
            <p className="text-white">
              Sous 24h maximum<br />
              Lun - Ven : 9h - 18h
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
