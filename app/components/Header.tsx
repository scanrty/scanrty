'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000814]/90 backdrop-blur-xl border-b border-[#38bdf8]/10">
      <nav className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-4 text-2xl font-bold no-underline">
          <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#38bdf8]/30">
            <img src="/logo.png" alt="ScanRty Logo" className="w-full h-full object-cover" />
          </div>
          <span className="whitespace-nowrap">
            <span className="text-white">Scan</span>
            <span className="text-[#38bdf8]">R</span>
            <span className="text-white">ty</span>
          </span>
        </a>
        
        <ul className="hidden md:flex gap-8 list-none items-center">
          <li><a href="#solutions" className="text-white no-underline font-medium hover:text-[#38bdf8] transition-colors">Solutions</a></li>
          <li><a href="#pricing" className="text-white no-underline font-medium hover:text-[#38bdf8] transition-colors">Tarifs</a></li>
          <li><a href="/contact" className="text-white no-underline font-medium hover:text-[#38bdf8] transition-colors">Contact</a></li>
          <li>
            <a href="/contact" className="px-8 py-3 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#1e3a5f] text-white font-semibold no-underline  hover:-translate-y-0.5 transition-all">
              Demander un devis
            </a>
          </li>
        </ul>
        
        <button className="md:hidden text-[#38bdf8] text-2xl bg-transparent border-none cursor-pointer">
          ☰
        </button>
      </nav>
    </header>
  )
}
