'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Zap, Fuel } from 'lucide-react'
import { Product } from '@/lib/types'
import { formatPrice } from '@/lib/products'
import { useCartStore } from '@/store/cart'
import AgeBadge from './AgeBadge'

const ageBorderColor: Record<string, string> = {
  '3-6':   'border-l-green-400',
  '7-10':  'border-l-sky-400',
  '10-12': 'border-l-orange-400',
  'voksen':'border-l-slate-400',
}

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore(s => s.addItem)
  const discountPct = product.salePrice
    ? Math.round((1 - product.salePrice / product.price) * 100)
    : null

  return (
    <div className={`card border-l-4 ${ageBorderColor[product.ageGroup] ?? 'border-l-slate-200'} group flex flex-col`}>
      {/* Image */}
      <Link href={`/produkt/${product.slug}`} className="block relative aspect-[4/3] bg-slate-50 overflow-hidden">
        {product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-100">
            <span className="text-4xl">🏎️</span>
          </div>
        )}
        {/* Badges top */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.salePrice && (
            <span className="bg-red-500 text-white text-xs font-extrabold px-2 py-0.5 rounded-full">
              -{discountPct}%
            </span>
          )}
          {!product.salePrice && (
            <span className="bg-sky-500 text-white text-xs font-extrabold px-2 py-0.5 rounded-full">NYHET</span>
          )}
        </div>
        {/* Category icon */}
        <div className="absolute top-2 right-2">
          <span className={`w-7 h-7 rounded-full flex items-center justify-center shadow-sm ${product.category === 'elektrisk' ? 'bg-sky-500' : 'bg-orange-500'}`}>
            {product.category === 'elektrisk'
              ? <Zap className="w-3.5 h-3.5 text-white" />
              : <Fuel className="w-3.5 h-3.5 text-white" />
            }
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <AgeBadge ageGroup={product.ageGroup} />
          <span className="text-xs text-slate-400 font-semibold">
            {product.category === 'elektrisk' ? '⚡' : '⛽'} {product.subcategory.toUpperCase()}
          </span>
        </div>

        <Link href={`/produkt/${product.slug}`} className="font-extrabold text-slate-900 text-sm leading-snug hover:text-orange-500 transition-colors line-clamp-2">
          {product.name}
        </Link>

        {/* Price */}
        <div className="flex items-baseline gap-2 mt-auto pt-2">
          {product.salePrice ? (
            <>
              <span className="text-xl font-extrabold text-orange-500">{formatPrice(product.salePrice)}</span>
              <span className="text-sm text-slate-400 line-through">{formatPrice(product.price)}</span>
            </>
          ) : (
            <span className="text-xl font-extrabold text-slate-900">{formatPrice(product.price)}</span>
          )}
        </div>

        <button
          onClick={() => addItem(product)}
          className="btn-primary w-full justify-center text-sm py-2.5 mt-1"
        >
          <ShoppingCart className="w-4 h-4" />
          Legg i handlekurv
        </button>
      </div>
    </div>
  )
}
