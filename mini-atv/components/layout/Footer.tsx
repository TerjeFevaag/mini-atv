import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Envelope, Clock } from '@phosphor-icons/react/dist/ssr'

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
)

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="mb-4 inline-block bg-white rounded-xl px-3 py-2">
            <Image
              src="/images/logo.png"
              alt="Engros Service Mini-ATV"
              width={160}
              height={50}
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed mb-5">
            Norges ledende nettbutikk for Mini-ATV og firehjulinger. Trygge, morsomme og av god kvalitet — for barn fra 3 til 12 år.
          </p>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/engrosservice.no/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-700 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors text-white" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/engrosservice.no/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-700 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors text-white" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/in/engrosservice-no/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-700 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors text-white" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
          </div>
        </div>

        {/* Handleguide */}
        <div>
          <h3 className="font-extrabold text-white text-sm uppercase tracking-widest mb-4">Handleguide</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-orange-400 transition-colors">Alle produkter</Link></li>
            <li><Link href="/kategori/50cc" className="hover:text-orange-400 transition-colors">Opp til 50cc</Link></li>
            <li><Link href="/kategori/110cc" className="hover:text-orange-400 transition-colors">110cc – 125cc</Link></li>
            <li><Link href="/kategori/elektrisk" className="hover:text-orange-400 transition-colors">Elektrisk ATV</Link></li>
          </ul>
        </div>

        {/* Kundeservice */}
        <div>
          <h3 className="font-extrabold text-white text-sm uppercase tracking-widest mb-4">Kundeservice</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/kontakt" className="hover:text-orange-400 transition-colors">Kontakt oss</Link></li>
            <li><Link href="/om-oss" className="hover:text-orange-400 transition-colors">Om oss</Link></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">Frakt & Levering</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">14 dagers returrett</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">Garanti & Service</a></li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="font-extrabold text-white text-sm uppercase tracking-widest mb-4">Kontakt oss</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin weight="fill" className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
              <span>Solgaard Skog 120<br />1599 Moss, Norge</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone weight="fill" className="w-4 h-4 text-orange-400 shrink-0" />
              <a href="tel:+4740001767" className="hover:text-orange-400 transition-colors">+47 400 01 767</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Envelope weight="fill" className="w-4 h-4 text-orange-400 shrink-0" />
              <a href="mailto:kundeservice@engrosservice.no" className="hover:text-orange-400 transition-colors">kundeservice@engrosservice.no</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock weight="fill" className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
              <div className="text-xs leading-relaxed">
                <div className="font-semibold text-slate-200">Telefon</div>
                <div>Man–Fre: 09:00–18:00</div>
                <div>Lørdag: 10:00–15:00</div>
                <div>Søndag: Stengt</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Payment + copyright */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2026 EUROSHOPPER GROUP AS (Org.nr: 925 554 804 MVA) — Alle rettigheter forbeholdt.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 mr-1">Betaling:</span>
            {['VIPPS', 'VISA', 'MC', 'STRIPE'].map(p => (
              <span key={p} className="bg-slate-700 text-slate-300 text-xs font-bold px-2 py-1 rounded-md">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
