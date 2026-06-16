'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCart, Minus, Plus, Zap, Fuel, ShieldCheck, Truck } from 'lucide-react'
import { Product } from '@/lib/types'
import { getRelatedProducts, formatPrice } from '@/lib/products'
import { useCartStore } from '@/store/cart'
import AgeBadge from '@/components/ui/AgeBadge'
import ProductCard from '@/components/ui/ProductCard'

export default function ProductPageClient({ product }: { product: Product }) {
  const related = getRelatedProducts(product, 4)
  const addItem = useCartStore(s => s.addItem)
  const [qty, setQty] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [activeTab, setActiveTab] = useState<'beskrivelse' | 'video' | 'tekniske'>('beskrivelse')
  const [added, setAdded] = useState(false)

  const displayPrice = product.salePrice ?? product.price
  const discountPct = product.salePrice
    ? Math.round((1 - product.salePrice / product.price) * 100)
    : null

  function handleAddToCart() {
    addItem(product, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Gallery */}
        <div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-3">
            {product.images[activeImage] ? (
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl">🏎️</div>
            )}
            {discountPct && (
              <span className="absolute top-4 left-4 bg-red-500 text-white font-extrabold text-sm px-3 py-1 rounded-full">
                -{discountPct}% SALG
              </span>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-colors ${i === activeImage ? 'border-orange-500' : 'border-transparent hover:border-slate-300'}`}
                >
                  <Image src={img} alt={`bilde ${i + 1}`} fill className="object-cover" sizes="80px" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-3">
            <AgeBadge ageGroup={product.ageGroup} size="md" />
            <span className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${product.category === 'elektrisk' ? 'bg-sky-100 text-sky-700' : 'bg-orange-100 text-orange-700'}`}>
              {product.category === 'elektrisk' ? <Zap className="w-3 h-3" /> : <Fuel className="w-3 h-3" />}
              {product.category === 'elektrisk' ? 'Elektrisk' : 'Bensindrevet'} · {product.subcategory.toUpperCase()}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 leading-tight">{product.name}</h1>

          <div className="flex items-baseline gap-3 mb-5">
            <span className="text-4xl font-extrabold text-orange-500">{formatPrice(displayPrice)}</span>
            {product.salePrice && (
              <span className="text-xl text-slate-400 line-through font-semibold">{formatPrice(product.price)}</span>
            )}
          </div>

          <p className="text-slate-600 leading-relaxed font-semibold mb-6">{product.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="flex items-center gap-1.5 text-xs font-bold bg-green-50 text-green-700 px-3 py-1.5 rounded-full border border-green-200">
              <ShieldCheck className="w-3.5 h-3.5" /> CE-godkjent
            </span>
            <span className="flex items-center gap-1.5 text-xs font-bold bg-sky-50 text-sky-700 px-3 py-1.5 rounded-full border border-sky-200">
              <Truck className="w-3.5 h-3.5" /> Fri frakt
            </span>
            <span className="text-xs font-bold bg-orange-50 text-orange-700 px-3 py-1.5 rounded-full border border-orange-200">
              14 dagers retur
            </span>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center border-2 border-slate-200 rounded-xl overflow-hidden">
              <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-11 h-11 flex items-center justify-center hover:bg-slate-100 transition-colors">
                <Minus className="w-4 h-4 text-slate-600" />
              </button>
              <span className="w-12 text-center font-extrabold text-slate-900">{qty}</span>
              <button onClick={() => setQty(q => q + 1)} className="w-11 h-11 flex items-center justify-center hover:bg-slate-100 transition-colors">
                <Plus className="w-4 h-4 text-slate-600" />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className={`flex-1 btn-primary justify-center text-base py-3 ${added ? '!bg-green-500' : ''}`}
            >
              <ShoppingCart className="w-5 h-5" />
              {added ? 'Lagt til! ✓' : 'Legg i handlekurv'}
            </button>
          </div>

          <Link href="/kasse" onClick={() => addItem(product, qty)} className="btn-blue w-full justify-center text-base py-3 block text-center">
            Kjøp nå →
          </Link>

          {qty > 1 && (
            <p className="text-sm text-slate-500 text-center mt-2 font-semibold">
              Totalt: <span className="text-slate-900 font-extrabold">{formatPrice(displayPrice * qty)}</span>
            </p>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-14">
        <div className="border-b border-slate-200 flex gap-2 overflow-x-auto">
          {[
            { key: 'beskrivelse', label: 'Beskrivelse' },
            ...(product.video ? [{ key: 'video', label: '▶ Video' }] : []),
            { key: 'tekniske', label: 'Tekniske data' },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className={`px-5 py-3 font-extrabold text-sm border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.key ? 'border-orange-500 text-orange-500' : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="py-8">
          {activeTab === 'beskrivelse' && (
            <p className="text-slate-700 leading-relaxed text-base font-semibold max-w-2xl">{product.description}</p>
          )}
          {activeTab === 'video' && product.video && (
            <div className="max-w-2xl aspect-video rounded-2xl overflow-hidden bg-slate-900">
              <iframe
                src={product.video}
                title={`${product.name} video`}
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          )}
          {activeTab === 'tekniske' && (
            <table className="w-full max-w-2xl text-sm">
              <tbody>
                {Object.entries(product.specs).map(([key, val], i) => (
                  <tr key={key} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="py-2.5 px-4 font-extrabold text-slate-700 w-48 rounded-l-lg">{key}</td>
                    <td className="py-2.5 px-4 text-slate-600 rounded-r-lg">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Lignende produkter</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}
    </div>
  )
}
