'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartStore, Product } from '@/lib/types'

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product: Product, quantity = 1) => {
        const items = get().items
        const existing = items.find(i => i.product.slug === product.slug)
        if (existing) {
          set({
            items: items.map(i =>
              i.product.slug === product.slug
                ? { ...i, quantity: i.quantity + quantity }
                : i
            ),
          })
        } else {
          set({ items: [...items, { product, quantity }] })
        }
      },

      removeItem: (slug: string) => {
        set({ items: get().items.filter(i => i.product.slug !== slug) })
      },

      updateQuantity: (slug: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(slug)
          return
        }
        set({
          items: get().items.map(i =>
            i.product.slug === slug ? { ...i, quantity } : i
          ),
        })
      },

      clearCart: () => set({ items: [] }),

      totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

      totalPrice: () =>
        get().items.reduce(
          (sum, i) => sum + (i.product.salePrice ?? i.product.price) * i.quantity,
          0
        ),
    }),
    { name: 'mini-atv-cart' }
  )
)
