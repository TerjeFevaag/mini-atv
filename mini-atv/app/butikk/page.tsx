'use client'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { products } from '@/lib/products'
import ProductCard from '@/components/ui/ProductCard'
import Link from 'next/link'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

function SearchResults() {
  const params = useSearchParams()
  const q = params.get('q')?.toLowerCase().trim() ?? ''

  const results = q.length < 2 ? [] : products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.subcategory.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <span className="section-tag">Søk</span>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
          {q ? `Søkeresultater for "${q}"` : 'Søk i butikken'}
        </h1>
        <p className="text-slate-500 font-semibold">
          {q.length >= 2
            ? results.length > 0
              ? `${results.length} produkt${results.length !== 1 ? 'er' : ''} funnet`
              : 'Ingen produkter matchet søket ditt'
            : 'Skriv minst 2 tegn for å søke'}
        </p>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {results.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      ) : q.length >= 2 ? (
        <div className="text-center py-20">
          <span className="text-5xl mb-4 block">🔍</span>
          <h2 className="text-xl font-extrabold text-slate-700 mb-2">Ingen treff på "{q}"</h2>
          <p className="text-slate-500 mb-6">Prøv et annet søkeord, eller se alle kategorier.</p>
          <Link href="/" className="btn-primary">Tilbake til forsiden</Link>
        </div>
      ) : null}
    </div>
  )
}

export default function ButikkPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <MagnifyingGlass className="w-10 h-10 text-slate-300 mx-auto mb-4" />
        <p className="text-slate-500 font-semibold">Søker...</p>
      </div>
    }>
      <SearchResults />
    </Suspense>
  )
}
