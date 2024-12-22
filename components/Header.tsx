'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-gray-800 py-4 px-6 relative z-50">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold">Dmitrijus Drozdovas</Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex gap-6">
          <Link href="/blog" className="hover:text-blue-400 transition-colors">
            Blog
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition-colors" hidden>
            About
          </Link>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-gray-800 p-4 md:hidden shadow-lg border-t border-gray-700">
            <div className="flex flex-col gap-4">
              <Link 
                href="/blog" 
                className="hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
                hidden
              >
                Blog
              </Link>
              <Link 
                href="/about" 
                className="hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}