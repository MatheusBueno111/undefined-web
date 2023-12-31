import { collection, getDocs } from 'firebase/firestore'
import { db } from '../services/firebase'
import { Product } from '../types'

export const fetchProducts = async () => {
  const productsCollectionRef = collection(db, 'products')
  try {
    const response = await getDocs(productsCollectionRef)
    const data = response.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Product[]

    return data
  } catch (error) {
    console.error(error)
  }
}
