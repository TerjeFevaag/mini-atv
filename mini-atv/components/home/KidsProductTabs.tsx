'use client'
import { useState } from 'react'
import ProductCard from '@/components/ui/ProductCard'
import { Product } from '@/lib/types'

const TABS = [
  { label: 'Alle', value: 'alle' },
  { label: '3–6 år', value: '3-6' },
  { label: '7–10 år', value: '7-10' },
  { label: '10–12 år', value: '10-12' },
]

export default function KidsProductTabs({ products }: { products: Product[] }) {
  const [activeTab, setActiveTab] = useState('alle')

  const filtered = activeTab === 'alle'
    ? products
    : products.filter(p => p.ageGroup === activeTab)

  return (
    <div>
      <div className="flex gap-2 justify-center mb-8 flex-wrap">
        {TABS.map(tab => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-6 py-2.5 rounded-full font-extrabold text-sm transition-all ${
              activeTab === tab.value
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-orange-300 hover:text-orange-500'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
