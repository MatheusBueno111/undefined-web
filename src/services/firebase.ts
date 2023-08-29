import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB5vG2fHbEIFULixbsnuveLpyZkojKTLzE',
  authDomain: 'undefined-d53f6.firebaseapp.com',
  projectId: 'undefined-d53f6',
  storageBucket: 'undefined-d53f6.appspot.com',
  messagingSenderId: '512670482459',
  appId: '1:512670482459:web:d9266c58f9f7108fcb38be',
  measurementId: 'G-MBGYCWMN7C',
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
