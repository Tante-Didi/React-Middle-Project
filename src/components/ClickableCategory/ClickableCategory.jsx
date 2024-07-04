// import React, { useEffect } from 'react'
// import { useDataContext } from '../../context/gamesContext'
// import './ClickableCategory.css'

// const ClickableCategory = () => {
//   const { games, loading } = useDataContext()
//   useEffect(() => {
//     if (!loading && games.length > 0) {
//       const categories = Array.from(games.flatMap((game) => game.categories))
//       console.log('Categories:', categories)
//     }
//   }, [loading, games])
//   if (loading) {
//     return (
//       <div>
//         <Loader />
//       </div>
//     )
//   }
//   if (!games || games.length === 0) {
//     return <div>No games available.</div>
//   }
//   return (
//     <div className="clickableCategoryCard">
//       <p>ClickableCategory</p>
//       <div className="div-container">
//         {games
//           .flatMap((game) => game.categories)
//           .map((category, index) => (
//             <div key={index} className={`clickable-category category-${index}`}>
//               {category}
//             </div>
//           ))}
//       </div>
//     </div>
//   )
// }
// export default ClickableCategory

const formatNames = {
  kids: 'ילדים',
  family: 'משפחה',
  adults: 'מבוגרים'
}

import React, { useEffect, useState } from 'react'
import { useDataContext } from '../../context/gamesContext'
import './ClickableCategory.css'
import { Link } from 'react-router-dom'

const ClickableCategory = () => {
  const { games, loading } = useDataContext()
  const [categoriesName, setCatergoriesName] = useState([])

  function handleClickableCategoryCard() { }

  useEffect(() => {
    if (!loading && games.length > 0) {
      const categories = Array.from(
        new Set(games.flatMap((game) => game.categories))
      )
      setCatergoriesName(categories)
    }
  }, [loading, games])
  if (loading) {
    return <div>Loading...</div>
  }
  if (!games || games.length === 0) {
    return <div>No games available.</div>
  }
  return (
    <div className="clickableCategoryCard">
      <div className="div-container" onClick={handleClickableCategoryCard}>
        {categoriesName.map((category, index) => (
          <Link to={category} key={index} className={`clickable-category category-${index}`}>
            {formatNames[category]}
          </Link>
        ))}
      </div>
    </div>
  )
}
export default ClickableCategory
