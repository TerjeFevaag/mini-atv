'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight, ArrowLeft } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/products'

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore()
  const shipping = totalPrice() >= 999 ? 0 : 299
  const total = totalPrice() + shipping

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <ShoppingCart className="w-16 h-16 text-slate-200 mb-4" />
        <h1 className="text-2xl font-extrabold text-slate-900 mb-2">Handlekurven er tom</h1>
        <p className="text-slate-500 font-semibold mb-6">Du har ikke lagt til noen produkter ennå.</p>
        <Link href="/" className="btn-primary">
          <ArrowLeft className="w-4 h-4" /> Se alle produkter
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Handlekurv</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => {
            const price = product.salePrice ?? product.price
            return (
              <div key={product.slug} className="card p-4 flex gap-4">
                <div className="relative w-24 h-20 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                  {product.images[0] ? (
                    <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="96px" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl">🏎️</div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <Link href={`/produkt/${product.slug}`} className="font-extrabold text-slate-900 text-sm hover:text-orange-500 transition-colors line-clamp-2">
                    {product.name}
                  </Link>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-orange-500 font-extrabold">{formatPrice(price)}</span>
                    {product.salePrice && (
                      <span className="text-slate-400 line-through text-sm">{formatPrice(product.price)}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                      <button onClick={() => updateQuantity(product.slug, quantity - 1)} className="w-8 h-8 flex items-center justify-center hover:bg-slate-100">
                        <Minus className="w-3.5 h-3.5 text-slate-600" />
                      </button>
                      <span className="w-10 text-center text-sm font-extrabold">{quantity}</span>
                      <button onClick={() => updateQuantity(product.slug, quantity + 1)} className="w-8 h-8 flex items-center justify-center hover:bg-slate-100">
                        <Plus className="w-3.5 h-3.5 text-slate-600" />
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-extrabold text-slate-900 text-sm">{formatPrice(price * quantity)}</span>
                      <button onClick={() => removeItem(product.slug)} className="text-slate-400 hover:text-red-500 transition-colors p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          <Link href="/" className="btn-ghost mt-2">
            <ArrowLeft className="w-4 h-4" /> Fortsett å handle
          </Link>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="card p-6 sticky top-24">
            <h2 className="font-extrabold text-slate-900 text-lg mb-5">Ordresammendrag</h2>
            <div className="space-y-3 text-sm font-semibold">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} varer)</span>
                <span>{formatPrice(totalPrice())}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Frakt</span>
                <span className={shipping === 0 ? 'text-green-600 font-extrabold' : ''}>
                  {shipping === 0 ? 'Gratis 🎉' : formatPrice(shipping)}
                </span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-slate-400">Fri frakt fra kr 999 — {formatPrice(999 - totalPrice())} igjen</p>
              )}
              <div className="border-t border-slate-100 pt-3 flex justify-between text-slate-900 font-extrabold text-base">
                <span>Totalt</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
            <Link href="/kasse" className="btn-primary w-full justify-center mt-5 text-base py-3.5">
              Til kassen <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="flex items-center justify-center gap-2 mt-4">
              {['VIPPS', 'VISA', 'MC', 'STRIPE'].map(p => (
                <span key={p} className="bg-slate-100 text-slate-500 text-xs font-bold px-2 py-0.5 rounded">{p}</span>
              ))}
            </div>
            <p className="text-center text-xs text-slate-400 mt-2 font-semibold">🔒 Sikker og kryptert betaling</p>
          </div>
        </div>
      </div>
    </div>
  )
}
