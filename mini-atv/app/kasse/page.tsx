'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ShieldCheck, ChevronRight } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/products'

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCartStore()
  const [payment, setPayment] = useState<'vipps' | 'card'>('vipps')
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', postalCode: '', city: '',
  })

  const shipping = totalPrice() >= 999 ? 0 : 299
  const total = totalPrice() + shipping

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1500))
    clearCart()
    window.location.href = '/ordre-bekreftelse'
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-extrabold text-slate-900 mb-2">Handlekurven er tom</h1>
        <Link href="/" className="btn-primary mt-4"><ArrowLeft className="w-4 h-4" /> Se produkter</Link>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Progress */}
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-400 mb-8">
        <Link href="/handlekurv" className="text-orange-500">Handlekurv</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-900 font-extrabold">Kasse</span>
        <ChevronRight className="w-3.5 h-3.5" />
        <span>Bekreftelse</span>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left — form */}
          <div className="lg:col-span-3 space-y-8">
            {/* Contact */}
            <div className="card p-6">
              <h2 className="font-extrabold text-slate-900 text-lg mb-5">Kontaktinformasjon</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-extrabold text-slate-700 mb-1">Fornavn *</label>
                  <input name="firstName" value={form.firstName} onChange={handleChange} required className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400" />
                </div>
                <div>
                  <label className="block text-sm font-extrabold text-slate-700 mb-1">Etternavn *</label>
                  <input name="lastName" value={form.lastName} onChange={handleChange} required className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400" />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-extrabold text-slate-700 mb-1">E-postadresse *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400" />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-extrabold text-slate-700 mb-1">Telefonnummer *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400" />
                </div>
              </div>
            </div>

            {/* Shipping */}
            <div className="card p-6">
              <h2 className="font-extrabold text-slate-900 text-lg mb-5">Leveringsadresse</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-extrabold text-slate-700 mb-1">Gateadresse *</label>
                  <input name="address" value={form.address} onChange={handleChange} required placeholder="Gatenavn 12" className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-extrabold text-slate-700 mb-1">Postnummer *</label>
                    <input name="postalCode" value={form.postalCode} onChange={handleChange} required placeholder="0000" className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-extrabold text-slate-700 mb-1">Sted *</label>
                    <input name="city" value={form.city} onChange={handleChange} required className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="card p-6">
              <h2 className="font-extrabold text-slate-900 text-lg mb-5">Betalingsmetode</h2>
              <div className="space-y-3">
                <label className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-colors ${payment === 'vipps' ? 'border-orange-400 bg-orange-50' : 'border-slate-200 hover:border-slate-300'}`}>
                  <input type="radio" name="payment" value="vipps" checked={payment === 'vipps'} onChange={() => setPayment('vipps')} className="text-orange-500" />
                  <div className="flex-1">
                    <div className="font-extrabold text-slate-900 text-sm">Vipps</div>
                    <div className="text-xs text-slate-500 font-semibold">Norges mest populære betalingsmetode</div>
                  </div>
                  <div className="bg-orange-500 text-white font-extrabold text-xs px-2 py-1 rounded-lg">VIPPS</div>
                </label>
                <label className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-colors ${payment === 'card' ? 'border-orange-400 bg-orange-50' : 'border-slate-200 hover:border-slate-300'}`}>
                  <input type="radio" name="payment" value="card" checked={payment === 'card'} onChange={() => setPayment('card')} className="text-orange-500" />
                  <div className="flex-1">
                    <div className="font-extrabold text-slate-900 text-sm">Kort (Visa / Mastercard)</div>
                    <div className="text-xs text-slate-500 font-semibold">Sikker kortbetaling via Stripe</div>
                  </div>
                  <div className="flex gap-1">
                    {['VISA', 'MC'].map(c => (
                      <span key={c} className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-0.5 rounded">{c}</span>
                    ))}
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right — summary */}
          <div className="lg:col-span-2">
            <div className="card p-6 sticky top-24">
              <h2 className="font-extrabold text-slate-900 text-lg mb-4">Din ordre</h2>
              <div className="space-y-3 mb-5 max-h-64 overflow-y-auto">
                {items.map(({ product, quantity }) => {
                  const price = product.salePrice ?? product.price
                  return (
                    <div key={product.slug} className="flex gap-3 text-sm">
                      <div className="relative w-12 h-10 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                        {product.images[0] ? (
                          <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="48px" />
                        ) : <div className="w-full h-full flex items-center justify-center text-lg">🏎️</div>}
                        <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">{quantity}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-slate-800 text-xs line-clamp-2">{product.name}</div>
                      </div>
                      <div className="font-extrabold text-slate-900 text-xs shrink-0">{formatPrice(price * quantity)}</div>
                    </div>
                  )
                })}
              </div>
              <div className="space-y-2 text-sm font-semibold border-t border-slate-100 pt-4">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(totalPrice())}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Frakt</span>
                  <span className={shipping === 0 ? 'text-green-600 font-extrabold' : ''}>
                    {shipping === 0 ? 'Gratis' : formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex justify-between text-slate-900 font-extrabold text-base border-t border-slate-100 pt-2">
                  <span>Totalt</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full justify-center mt-5 text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Behandler...' : payment === 'vipps' ? '⚡ Betal med Vipps' : '🔒 Betal med kort'}
              </button>

              <div className="flex items-center gap-1.5 justify-center mt-3 text-xs text-slate-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> Sikker og kryptert betaling
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
