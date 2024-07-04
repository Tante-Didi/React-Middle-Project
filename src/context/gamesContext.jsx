import { createContext, useContext, useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config/firebaseConfig'

const GamesContext = createContext()

export const GamesProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [games, setGames] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'gamesIdea'))
        const queryArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setGames(queryArray)
      } catch (error) {
        console.log(error)
      }

      // try {
      //   const querySnapshot = await getDocs(collection(db, 'gamesIdea'))
      //   const queryArray = querySnapshot.docs.map((doc) => ({
      //     id: doc.id,
      //     ...doc.data(),
      //   }))
      //   setGames(queryArray)
      // } catch (error) {
      //   console.log(error)
      // }
    }
    fetchData()
  }, [])

  console.log('games response from firebase', games)

  return (
    <GamesContext.Provider value={{ games }}>{children}</GamesContext.Provider>
  )
}

export const useDataContext = () => {
  return useContext(GamesContext)
}
