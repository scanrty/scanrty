'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000814]/90 backdrop-blur-xl border-b border-[#00d4ff]/10">
      <nav className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-4 text-2xl font-bold no-underline">
          <div className="w-12 h-12 rounded-xl overflow-hidden">
            <img src="/images/logo.jpg" alt="ScanRty Logo" className="w-full h-full object-cover" />
          </div>
          <span className="whitespace-nowrap">
            <span className="text-white">Scan</span>
            <span className="text-[#7dd3fc]">R</span>
            <span className="text-white">ty</span>
          </span>
        </a>
        
        <ul className="hidden md:flex gap-8 list-none items-center">
          <li><a href="#solutions" className="text-white no-underline font-medium hover:text-[#00d4ff] transition-colors">Solutions</a></li>
          <li><a href="#pricing" className="text-white no-underline font-medium hover:text-[#00d4ff] transition-colors">Tarifs</a></li>
          <li><a href="#about" className="text-white no-underline font-medium hover:text-[#00d4ff] transition-colors">À propos</a></li>
          <li>
            <a href="#contact" className="px-8 py-3 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#0077b6] text-white font-semibold no-underline shadow-lg shadow-[#00d4ff]/30 hover:shadow-[#00d4ff]/40 hover:-translate-y-0.5 transition-all">
              Contactez-nous
            </a>
          </li>
        </ul>
        
        <button className="md:hidden text-[#00d4ff] text-2xl bg-transparent border-none cursor-pointer">
          ☰
        </button>
      </nav>
    </header>
  )
}
