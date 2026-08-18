'use client'
import { create } from 'zustand'

interface Toast {
  id: number
  message: string
  productName: string
}

interface ToastStore {
  toasts: Toast[]
  show: (productName: string) => void
  dismiss: (id: number) => void
}

let nextId = 0

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  show: (productName) => {
    const id = ++nextId
    set(s => ({ toasts: [...s.toasts, { id, message: 'Lagt i handlekurven', productName }] }))
    setTimeout(() => set(s => ({ toasts: s.toasts.filter(t => t.id !== id) })), 3000)
  },
  dismiss: (id) => set(s => ({ toasts: s.toasts.filter(t => t.id !== id) })),
}))
