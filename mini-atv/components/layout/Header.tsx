'use client'
import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCart, Search, Menu, X, ChevronDown } from 'lucide-react'
import { useCartStore } from '@/store/cart'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const totalItems = useCartStore(s => s.totalItems())

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      {/* Top bar */}
      <div className="bg-orange-500 text-white text-xs font-semibold py-2 text-center px-4">
        🚚 Gratis frakt over kr 999 &nbsp;|&nbsp; ⚡ Trygg betaling med Vipps &nbsp;|&nbsp; 🔄 14 dagers returrett
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-extrabold text-lg">M</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-extrabold text-slate-900 text-lg leading-tight">Mini-ATV</div>
              <div className="text-orange-500 text-xs font-semibold leading-tight">.no</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/" className="px-4 py-2 text-slate-700 hover:text-orange-500 font-semibold text-sm rounded-lg hover:bg-orange-50 transition-colors">
              Hjem
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-slate-700 hover:text-orange-500 font-semibold text-sm rounded-lg hover:bg-orange-50 transition-colors">
                Bensindrevet <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <Link href="/kategori/50cc" className="block px-3 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg font-semibold">Opp til 50cc (alder 3–8)</Link>
                  <Link href="/kategori/110cc" className="block px-3 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg font-semibold">110cc – 125cc (alder 7–12)</Link>
                  <Link href="/kategori/250cc" className="block px-3 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg font-semibold">250cc+ (ungdom/voksen)</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-slate-700 hover:text-orange-500 font-semibold text-sm rounded-lg hover:bg-orange-50 transition-colors">
                Elektrisk <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <Link href="/kategori/6v" className="block px-3 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg font-semibold">6V – 12V (alder 2,5–6)</Link>
                  <Link href="/kategori/1000w" className="block px-3 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg font-semibold">Opp til 1000W (alder 7–10)</Link>
                  <Link href="/kategori/1200w" className="block px-3 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg font-semibold">1200W+ (alder 7+)</Link>
                </div>
              </div>
            </div>
            <Link href="/om-oss" className="px-4 py-2 text-slate-700 hover:text-orange-500 font-semibold text-sm rounded-lg hover:bg-orange-50 transition-colors">
              Om oss
            </Link>
            <Link href="/kontakt" className="px-4 py-2 text-slate-700 hover:text-orange-500 font-semibold text-sm rounded-lg hover:bg-orange-50 transition-colors">
              Kontakt
            </Link>
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-2">
            {/* Search toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-slate-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
              aria-label="Søk"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart */}
            <Link href="/handlekurv" className="relative p-2 text-slate-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
              aria-label="Meny"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="pb-3">
            <form onSubmit={e => { e.preventDefault(); window.location.href = `/butikk?q=${searchQuery}` }} className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Søk etter ATV, modell, alder..."
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400"
                autoFocus
              />
            </form>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <Link href="/" onClick={() => setMenuOpen(false)} className="px-4 py-3 text-slate-700 hover:text-orange-500 font-semibold rounded-lg hover:bg-orange-50">Hjem</Link>
            <div className="px-4 py-2 text-xs font-extrabold text-slate-400 uppercase tracking-widest">Bensindrevet</div>
            <Link href="/kategori/50cc" onClick={() => setMenuOpen(false)} className="px-6 py-2.5 text-slate-700 hover:text-orange-500 font-semibold rounded-lg hover:bg-orange-50 text-sm">Opp til 50cc</Link>
            <Link href="/kategori/110cc" onClick={() => setMenuOpen(false)} className="px-6 py-2.5 text-slate-700 hover:text-orange-500 font-semibold rounded-lg hover:bg-orange-50 text-sm">110cc – 125cc</Link>
            <Link href="/kategori/250cc" onClick={() => setMenuOpen(false)} className="px-6 py-2.5 text-slate-700 hover:text-orange-500 font-semibold rounded-lg hover:bg-orange-50 text-sm">250cc+</Link>
            <div className="px-4 py-2 text-xs font-extrabold text-slate-400 uppercase tracking-widest">Elektrisk</div>
            <Link href="/kategori/6v" onClick={() => setMenuOpen(false)} className="px-6 py-2.5 text-slate-700 hover:text-orange-500 font-semibold rounded-lg hover:bg-orange-50 text-sm">6V – 12V</Link>
            <Link href="/kategori/1000w" onClick={() => setMenuOpen(false)} className="px-6 py-2.5 text-slate-700 hover:text-orange-500 font-semibold rounded-lg hover:bg-orange-50 text-sm">Opp til 1000W</Link>
            <Link href="/kategori/1200w" onClick={() => setMenuOpen(false)} className="px-6 py-2.5 text-slate-700 hover:text-orange-500 font-semibold rounded-lg hover:bg-orange-50 text-sm">1200W+</Link>
            <div className="border-t border-slate-100 my-2" />
            <Link href="/om-oss" onClick={() => setMenuOpen(false)} className="px-4 py-3 text-slate-700 hover:text-orange-500 font-semibold rounded-lg hover:bg-orange-50">Om oss</Link>
            <Link href="/kontakt" onClick={() => setMenuOpen(false)} className="px-4 py-3 text-slate-700 hover:text-orange-500 font-semibold rounded-lg hover:bg-orange-50">Kontakt</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
