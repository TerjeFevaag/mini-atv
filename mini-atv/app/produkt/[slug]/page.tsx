import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { getProductBySlug, products } from '@/lib/products'
import ProductPageClient from '@/components/product/ProductPageClient'

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  return (
    <>
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-slate-500 font-semibold">
            <Link href="/" className="hover:text-orange-500 transition-colors">Hjem</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href={`/kategori/${product.subcategory}`} className="hover:text-orange-500 transition-colors">
              {product.category === 'elektrisk' ? 'Elektrisk ATV' : 'Bensindrevet ATV'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 truncate max-w-xs">{product.name}</span>
          </nav>
        </div>
      </div>
      <ProductPageClient product={product} />
    </>
  )
}
