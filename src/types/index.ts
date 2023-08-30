export interface User {
  id: string
  createdAt: string
  email: string
  username: string
}

export interface Product {
  id: string
  createdAt: string
  name: string
}

export interface Register {
  id: string
  createdAt: string
  userId: string
  productId: string
  amount: number
}
