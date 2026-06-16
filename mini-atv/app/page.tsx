import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShieldCheck, Truck, ArrowCounterClockwise, Headphones, Lightning, GasPump, Star, Tag } from '@phosphor-icons/react/dist/ssr'
import ProductCard from '@/components/ui/ProductCard'
import KidsProductTabs from '@/components/home/KidsProductTabs'
import { products } from '@/lib/products'

const categories = [
  {
    title: 'Opp til 50cc',
    subtitle: 'Bensindrevet · Alder 3–8 år',
    image: '/images/homepage/product-atv-1-CA-fuCX8.jpg',
    href: '/kategori/50cc',
    bg: 'bg-green-50',
    badge: '3–8 år',
    badgeColor: 'bg-green-500',
  },
  {
    title: '110cc – 125cc',
    subtitle: 'Bensindrevet · Alder 7–12 år',
    image: '/images/homepage/atv125cc6-600x450.jpg',
    href: '/kategori/110cc',
    bg: 'bg-sky-50',
    badge: '7–12 år',
    badgeColor: 'bg-sky-500',
  },
  {
    title: '250cc+',
    subtitle: 'Bensindrevet · Ungdom & Voksen',
    image: '/images/homepage/product-atv-3-UW4IHtNj.jpg',
    href: '/kategori/250cc',
    bg: 'bg-orange-50',
    badge: '12+ år',
    badgeColor: 'bg-orange-500',
  },
  {
    title: 'Elektrisk 6V–12V',
    subtitle: 'Elektrisk · Alder 2,5–6 år',
    image: '/images/homepage/product-atv-4-tDPe2Xpr.jpg',
    href: '/kategori/6v',
    bg: 'bg-yellow-50',
    badge: '2,5–6 år',
    badgeColor: 'bg-yellow-500',
  },
  {
    title: 'Elektrisk 1000W',
    subtitle: 'Elektrisk · Alder 7–10 år',
    image: '/images/homepage/farmer_el_atv_1200w1-1-600x450.jpg',
    href: '/kategori/1000w',
    bg: 'bg-purple-50',
    badge: '7–10 år',
    badgeColor: 'bg-purple-500',
  },
  {
    title: 'Elektrisk 1200W+',
    subtitle: 'Elektrisk · Ungdom & Voksen',
    image: '/images/homepage/farmer_el_atv_1200w5-600x450.jpg',
    href: '/kategori/1200w',
    bg: 'bg-indigo-50',
    badge: '7+ år',
    badgeColor: 'bg-indigo-500',
  },
]

const ageGroups = [
  { label: '2,5–6 år', emoji: '🌱', desc: 'Trygg første ATV', color: 'bg-green-500', href: '/#produkter' },
  { label: '7–10 år', emoji: '🚀', desc: 'Mer kraft og fart', color: 'bg-sky-500', href: '/#produkter' },
  { label: '10–12 år', emoji: '🏆', desc: 'Racing-opplevelse', color: 'bg-orange-500', href: '/#produkter' },
]

export default function HomePage() {
  const kidsProducts = products.filter(p => p.ageGroup !== 'voksen')
  const adultProducts = products.filter(p => p.ageGroup === 'voksen')

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[580px] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Image
          src="/images/homepage/hero-atv-jrfmPW6S.jpg"
          alt="Mini-ATV hero"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute top-8 right-8 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-8 left-8 w-48 h-48 bg-sky-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <span className="inline-block bg-orange-500 text-white text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-widest mb-4">
              🏁 Norges største utvalg av Mini-ATV
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Ditt neste<br />
              <span className="text-orange-400">eventyr</span><br />
              starter her!
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-lg">
              Trygge, morsomme og perfekt for norske stier — for barn fra 3 til 12 år. Elektrisk og bensindrevet.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#produkter" className="btn-primary text-base px-8 py-4">
                Se alle modeller <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/om-oss" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all">
                Vår historie
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { n: '23+', label: 'Modeller på lager' },
                { n: '15k+', label: 'Fornøyde kunder' },
                { n: '3–12', label: 'Aldersgruppe (år)' },
                { n: '🚚', label: 'Fri frakt i Norge' },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-extrabold text-orange-400">{s.n}</div>
                  <div className="text-xs text-slate-400 font-semibold">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── AGE GROUPS ─── */}
      <section className="bg-gradient-to-r from-orange-50 to-sky-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="section-tag">Finn riktig ATV</span>
            <h2 className="text-2xl font-extrabold text-slate-900">Velg etter alder</h2>
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {ageGroups.map(ag => (
              <Link key={ag.label} href={ag.href} className="group text-center">
                <div className={`${ag.color} w-20 h-20 rounded-3xl flex flex-col items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                  <span className="text-3xl">{ag.emoji}</span>
                </div>
                <div className="font-extrabold text-slate-900 text-base">{ag.label}</div>
                <div className="text-xs text-slate-500 font-semibold">{ag.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-white border-y border-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: <Tag weight="fill" className="w-5 h-5 text-white" />, title: 'Prisgaranti', desc: '100% best pris — finn det billigere og vi matcher' },
              { icon: <ShieldCheck weight="fill" className="w-5 h-5 text-white" />, title: 'CE-godkjent & trygg', desc: 'Alle ATV-er møter europeiske sikkerhetsstandarder' },
              { icon: <Truck weight="fill" className="w-5 h-5 text-white" />, title: 'Gratis levering', desc: 'Fri frakt på alle ordre over kr 999' },
              { icon: <ArrowCounterClockwise weight="fill" className="w-5 h-5 text-white" />, title: '14 dagers retur', desc: 'Ikke fornøyd? Send den tilbake uten spørsmål' },
              { icon: <Headphones weight="fill" className="w-5 h-5 text-white" />, title: 'Kundeservice', desc: 'Ring +47 400 01 767 — vi hjelper deg' },
            ].map(t => (
              <div key={t.title} className="flex items-start gap-3">
                <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center shrink-0">{t.icon}</div>
                <div>
                  <div className="font-extrabold text-slate-900 text-sm">{t.title}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section className="bg-sky-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="section-tag">Utforsk etter type</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Kategorier</h2>
            <p className="text-slate-500 font-semibold">Velg riktig ATV basert på alder og motortype</p>
          </div>
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <GasPump weight="fill" className="w-5 h-5 text-orange-500" />
              <h3 className="font-extrabold text-slate-900 text-lg">Bensindrevet ATV</h3>
              <span className="text-sm text-slate-400 font-semibold">— Klassisk kraft for terreng og skog</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {categories.slice(0, 3).map(cat => (
                <Link key={cat.title} href={cat.href} className={`group card ${cat.bg} border-0`}>
                  <div className="relative h-56 overflow-hidden">
                    <Image src={cat.image} alt={cat.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, 33vw" />
                    <span className={`absolute top-3 left-3 ${cat.badgeColor} text-white text-xs font-extrabold px-3 py-1 rounded-full`}>{cat.badge}</span>
                  </div>
                  <div className="p-4">
                    <div className="font-extrabold text-slate-900 text-base">{cat.title}</div>
                    <div className="text-sm text-slate-500 font-semibold mb-3">{cat.subtitle}</div>
                    <span className="text-orange-500 font-bold text-sm group-hover:underline">Se modeller →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Lightning weight="fill" className="w-5 h-5 text-sky-500" />
              <h3 className="font-extrabold text-slate-900 text-lg">Elektrisk ATV</h3>
              <span className="text-sm text-slate-400 font-semibold">— Stillegående og miljøvennlig</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {categories.slice(3).map(cat => (
                <Link key={cat.title} href={cat.href} className={`group card ${cat.bg} border-0`}>
                  <div className="relative h-56 overflow-hidden">
                    <Image src={cat.image} alt={cat.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, 33vw" />
                    <span className={`absolute top-3 left-3 ${cat.badgeColor} text-white text-xs font-extrabold px-3 py-1 rounded-full`}>{cat.badge}</span>
                  </div>
                  <div className="p-4">
                    <div className="font-extrabold text-slate-900 text-base">{cat.title}</div>
                    <div className="text-sm text-slate-500 font-semibold mb-3">{cat.subtitle}</div>
                    <span className="text-sky-500 font-bold text-sm group-hover:underline">Se modeller →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ALL KIDS PRODUCTS ─── */}
      <section id="produkter" className="bg-gradient-to-b from-yellow-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="section-tag">For barn & ungdom</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Alle Mini-ATV for barn</h2>
            <p className="text-slate-500 font-semibold">Elektriske og bensindrevne modeller fra 3 til 12 år — alle CE-godkjente</p>
          </div>
          <KidsProductTabs products={kidsProducts} />
        </div>
      </section>

      {/* ─── ADULT/SPORT ─── */}
      {adultProducts.length > 0 && (
        <section className="bg-slate-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block text-orange-400 font-bold text-xs tracking-widest uppercase mb-2">Sport & Racing</span>
              <h2 className="text-3xl font-extrabold text-white mb-2">Kraftige ATV-er for voksne</h2>
              <p className="text-slate-400 font-semibold">Registreringspliktige modeller for ungdom og voksne</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {adultProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── BRAND STORY ─── */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-tag">Vår historie</span>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-5">
                Skap minner<br />
                <span className="text-orange-500">i naturen</span> 🌲
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6 font-semibold">
                Vi tror på at de beste opplevelsene skjer utendørs. Enten du utforsker skogsstier med familien, kjører i fjellet med venner, eller trenger en pålitelig partner på gården — vi har ATV-en for deg.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: '🛡️', title: 'Trygt & Pålitelig', desc: 'CE og ROHS godkjent. Dødmannsknapp på alle modeller.' },
                  { icon: '⚡', title: 'El & Bensin', desc: 'Fra stille elektriske til kraftige bensinmotorer.' },
                  { icon: '🇳🇴', title: 'Norsk natur', desc: 'Laget for norsk terreng. Fri frakt & 14 dagers retur.' },
                ].map(f => (
                  <div key={f.title} className="bg-white rounded-2xl p-4 shadow-sm">
                    <span className="text-2xl mb-2 block">{f.icon}</span>
                    <div className="font-extrabold text-slate-900 text-sm mb-1">{f.title}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{f.desc}</div>
                  </div>
                ))}
              </div>
              <Link href="/om-oss" className="btn-primary">
                Les mer om oss <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/homepage/adventure-lifestyle-CJgNoD9h.jpg"
                  alt="Familie på ATV-tur"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white rounded-2xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Star weight="fill" className="w-5 h-5 text-white" />
                  <div>
                    <div className="font-extrabold text-sm">15 000+</div>
                    <div className="text-xs opacity-90">fornøyde kunder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-20 overflow-hidden bg-orange-500">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/homepage/atv-trail-BedWAeL7.jpg" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <span className="inline-block bg-white/20 text-white text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-widest mb-4">Utvalgte modeller</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Klar for å erobre terrenget? 🏁
          </h2>
          <p className="text-white/90 text-lg font-semibold mb-8">
            Fra fjord til fjell — våre ATV-er er bygget for norsk natur. Bestill i dag og få den levert rett hjem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#produkter" className="bg-white text-orange-500 hover:bg-slate-100 font-extrabold px-8 py-4 rounded-xl text-base transition-colors shadow-lg">
              Se alle modeller
            </Link>
            <a href="tel:+4740001767" className="bg-orange-600 hover:bg-orange-700 text-white font-extrabold px-8 py-4 rounded-xl text-base transition-colors">
              Ring +47 400 01 767
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
