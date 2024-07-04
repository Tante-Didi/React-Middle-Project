// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA1k-pEci70c0grokgjuLw2FiqkFTCmsew',
  authDomain: 'which-game-to-play.firebaseapp.com',
  projectId: 'which-game-to-play',
  storageBucket: 'which-game-to-play.appspot.com',
  messagingSenderId: '168531069284',
  appId: '1:168531069284:web:e9dd0997489129bb089271',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
