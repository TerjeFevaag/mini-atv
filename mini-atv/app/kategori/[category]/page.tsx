import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, SlidersHorizontal } from 'lucide-react'
import { products } from '@/lib/products'
import ProductCard from '@/components/ui/ProductCard'

const categoryMeta: Record<string, { title: string; description: string; parent: string }> = {
  '50cc':    { title: 'Opp til 50cc', description: 'Trygt og morsomt for barn fra 3 til 8 år', parent: 'Bensindrevet ATV' },
  '110cc':   { title: '110cc – 125cc', description: 'Mer kraft for barn og ungdom fra 7 til 12 år', parent: 'Bensindrevet ATV' },
  '125cc':   { title: '110cc – 125cc', description: 'Mer kraft for barn og ungdom fra 7 til 12 år', parent: 'Bensindrevet ATV' },
  '250cc':   { title: '250cc+', description: 'Kraftige ATV-er for ungdom og voksne', parent: 'Bensindrevet ATV' },
  '450cc':   { title: '450cc+', description: 'Sport og racing for voksne', parent: 'Bensindrevet ATV' },
  '6v':      { title: 'Elektrisk 6V', description: 'Første elektriske ATV for de minste fra 2,5 år', parent: 'Elektrisk ATV' },
  '12v':     { title: 'Elektrisk 12V', description: 'Elektrisk ATV for barn fra 3 år', parent: 'Elektrisk ATV' },
  '1000w':   { title: 'Elektrisk 1000W', description: 'Kraftig elektrisk ATV for barn fra 7 år', parent: 'Elektrisk ATV' },
  '1200w':   { title: 'Elektrisk 1200W+', description: 'Kraftigste elektriske ATV for ungdom', parent: 'Elektrisk ATV' },
  '1500w':   { title: 'Elektrisk 1500W', description: 'Elektrisk ATV for ungdom og voksne', parent: 'Elektrisk ATV' },
  'bensindrevet': { title: 'Bensindrevet ATV', description: 'Alle bensindrevne ATV-er', parent: 'Kategorier' },
  'elektrisk':    { title: 'Elektrisk ATV', description: 'Alle elektriske ATV-er', parent: 'Kategorier' },
  'voksen':       { title: 'Sport & Racing', description: 'ATV-er for voksne og ungdom', parent: 'Kategorier' },
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const cat = params.category.toLowerCase()
  const meta = categoryMeta[cat]
  if (!meta) notFound()

  let filtered = products
  if (cat === 'bensindrevet' || cat === 'elektrisk') {
    filtered = products.filter(p => p.category === cat)
  } else if (cat === 'voksen') {
    filtered = products.filter(p => p.ageGroup === 'voksen')
  } else if (cat === '110cc') {
    filtered = products.filter(p => p.subcategory === '110cc' || p.subcategory === '125cc')
  } else {
    filtered = products.filter(p => p.subcategory === cat)
  }

  return (
    <>
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-slate-500 font-semibold">
            <Link href="/" className="hover:text-orange-500 transition-colors">Hjem</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900">{meta.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <span className="section-tag">{meta.parent}</span>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">{meta.title}</h1>
          <p className="text-slate-500 font-semibold">{meta.description}</p>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <span className="text-5xl mb-4 block">🏎️</span>
            <h2 className="text-xl font-extrabold text-slate-700 mb-2">Ingen produkter funnet</h2>
            <p className="text-slate-500 mb-6">Vi har ingen produkter i denne kategorien for øyeblikket.</p>
            <Link href="/" className="btn-primary">Tilbake til forsiden</Link>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-slate-500 font-semibold">{filtered.length} produkt{filtered.length !== 1 ? 'er' : ''}</p>
              <div className="flex items-center gap-2 text-sm text-slate-500 font-semibold">
                <SlidersHorizontal className="w-4 h-4" /> Sortert etter popularitet
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}
