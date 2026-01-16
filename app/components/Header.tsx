'use client'

import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000814]/90 backdrop-blur-xl border-b border-[#38bdf8]/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 sm:gap-4 text-xl sm:text-2xl font-bold no-underline z-10">
          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden ring-2 ring-[#38bdf8]/30 shadow-lg flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="ScanRty Logo" 
              className="w-full h-full object-cover"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
          </div>
          <span className="whitespace-nowrap">
            <span className="text-white">Scan</span>
            <span className="text-[#38bdf8]">R</span>
            <span className="text-white">ty</span>
          </span>
        </a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8 list-none items-center">
          <li><a href="#solutions" className="text-white no-underline font-medium hover:text-[#38bdf8] transition-colors text-sm lg:text-base">Solutions</a></li>
          <li><a href="#pricing" className="text-white no-underline font-medium hover:text-[#38bdf8] transition-colors text-sm lg:text-base">Tarifs</a></li>
          <li><a href="/contact" className="text-white no-underline font-medium hover:text-[#38bdf8] transition-colors text-sm lg:text-base">Contact</a></li>
          <li>
            <a href="/contact" className="px-6 lg:px-8 py-2.5 lg:py-3 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] text-white font-semibold text-sm lg:text-base no-underline hover:-translate-y-0.5 transition-all whitespace-nowrap">
              Demander un devis
            </a>
          </li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#38bdf8] text-2xl bg-transparent border-none cursor-pointer p-2 hover:bg-[#38bdf8]/10 rounded-lg transition-colors z-10"
          aria-label="Menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#001d3d] border-t border-[#38bdf8]/10">
          <ul className="flex flex-col gap-2 p-4 list-none">
            <li>
              <a 
                href="#solutions" 
                className="block px-4 py-3 text-white no-underline font-medium hover:bg-[#38bdf8]/10 rounded-lg transition-colors" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </a>
            </li>
            <li>
              <a 
                href="#pricing" 
                className="block px-4 py-3 text-white no-underline font-medium hover:bg-[#38bdf8]/10 rounded-lg transition-colors" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Tarifs
              </a>
            </li>
            <li>
              <a 
                href="/contact" 
                className="block px-4 py-3 text-white no-underline font-medium hover:bg-[#38bdf8]/10 rounded-lg transition-colors" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
            <li className="pt-2">
              <a 
                href="/contact" 
                className="block text-center px-6 py-3 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] text-white font-semibold no-underline" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Demander un devis
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
