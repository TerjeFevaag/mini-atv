export type AgeGroup = '3-6' | '7-10' | '10-12' | 'voksen'
export type ProductCategory = 'bensindrevet' | 'elektrisk'
export type ProductSubcategory = '50cc' | '110cc' | '125cc' | '250cc' | '450cc' | '6v' | '12v' | '1000w' | '1200w' | '1500w'

export interface Product {
  id: string
  name: string
  slug: string
  price: number
  salePrice: number | null
  description: string
  specs: Record<string, string>
  images: string[]
  video: string | null
  category: ProductCategory
  subcategory: ProductSubcategory
  ageGroup: AgeGroup
  color: string
  note?: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface CartStore {
  items: CartItem[]
  addItem: (product: Product, quantity?: number) => void
  removeItem: (slug: string) => void
  updateQuantity: (slug: string, quantity: number) => void
  clearCart: () => void
  totalItems: () => number
  totalPrice: () => number
}

export interface CheckoutForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  postalCode: string
  city: string
  paymentMethod: 'vipps' | 'card'
}
