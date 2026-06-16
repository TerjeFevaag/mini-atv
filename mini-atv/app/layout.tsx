import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Mini-ATV.no — Norges beste Mini-ATV for barn og ungdom',
  description: 'Kjøp Mini-ATV til barn og ungdom (3–12 år). Stort utvalg av elektriske og bensindrevne ATV-er. Fri frakt, trygg betaling med Vipps, 14 dagers returrett.',
  keywords: 'mini ATV, barn ATV, elektrisk ATV, bensindrevet ATV, mini firehjuling, ATV for barn',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb" className={nunito.variable}>
      <body className="font-nunito bg-white text-slate-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
