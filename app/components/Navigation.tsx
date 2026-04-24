'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative z-50">
      {/* Desktop & Mobile Header */}
      <div className="flex items-center justify-between px-4 md:px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-widest text-white">LUMA</div>
        
        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <Link href="/product" className="hover:text-white transition-colors">PRODUCT</Link>
          <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
          <Link href="/tools" className="text-blue-500 hover:text-blue-400 transition-colors">TOOLS</Link>
          <Link href="/product" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-semibold transition-colors">
            UPGRADE
          </Link>
        </div>

        {/* Mobile Menu Toggle Button (Hidden on Desktop) */}
        <button 
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 shadow-2xl flex flex-col p-4 space-y-4 text-center">
          <Link href="/" onClick={() => setIsOpen(false)} className="block text-zinc-400 hover:text-white py-2">HOME</Link>
          <Link href="/product" onClick={() => setIsOpen(false)} className="block text-zinc-400 hover:text-white py-2">PRODUCT</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block text-zinc-400 hover:text-white py-2">ABOUT</Link>
          <Link href="/tools" onClick={() => setIsOpen(false)} className="block text-blue-500 py-2 font-semibold">TOOLS</Link>
          <Link href="/product" onClick={() => setIsOpen(false)} className="block bg-blue-600 text-white py-3 rounded-lg font-bold mt-4">
            UPGRADE YOUR SETUP
          </Link>
        </div>
      )}
    </nav>
  )
}