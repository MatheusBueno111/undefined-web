import { collection, getDocs } from 'firebase/firestore'
import { db } from '../services/firebase'

export const fetchProducts = async () => {
  const productsCollectionRef = collection(db, 'products')
  try {
    const response = await getDocs(productsCollectionRef)
    const data = response.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    console.log('products', data)
    return data
  } catch (error) {
    console.error(error)
  }
}
