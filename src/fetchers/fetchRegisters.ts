import { collection, getDocs } from 'firebase/firestore'
import { db } from '../services/firebase'
import { Register } from '../types'

export const fetchregisters = async () => {
  const registersCollectionRef = collection(db, 'register')
  try {
    const response = await getDocs(registersCollectionRef)
    const data = response.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Register[]

    return data
  } catch (error) {
    console.error(error)
  }
}
