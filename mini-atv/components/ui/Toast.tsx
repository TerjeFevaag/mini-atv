'use client'
import { ShoppingCart, X } from 'lucide-react'
import { useToastStore } from '@/store/toast'

export default function ToastContainer() {
  const { toasts, dismiss } = useToastStore()

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      {toasts.map(t => (
        <div
          key={t.id}
          className="flex items-center gap-3 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-lg min-w-[260px] animate-in slide-in-from-bottom-4 fade-in duration-200"
        >
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shrink-0">
            <ShoppingCart className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-orange-400">{t.message}</p>
            <p className="text-xs text-slate-300 font-semibold line-clamp-1">{t.productName}</p>
          </div>
          <button onClick={() => dismiss(t.id)} className="text-slate-400 hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  )
}
