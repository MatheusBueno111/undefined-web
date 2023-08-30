import { collection, getDocs } from 'firebase/firestore'
import { db } from '../services/firebase'
import { User } from '../types'

export const fetchUsers = async () => {
  const productsCollectionRef = collection(db, 'users')
  try {
    const response = await getDocs(productsCollectionRef)
    const data = response.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as User[]

    return data
  } catch (error) {
    console.error(error)
  }
}
