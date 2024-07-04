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
import React, { useEffect } from 'react'
import { useDataContext } from '../../context/gamesContext'
import './ClickableCategory.css'

const ClickableCategory = () => {
  const { games, loading } = useDataContext()

  function handleClickableCategoryCard() {}

  useEffect(() => {
    if (!loading && games.length > 0) {
      const categories = Array.from(
        new Set(games.flatMap((game) => game.categories))
      )
      console.log('Categories:', categories)
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
        {games
          .flatMap((game) => game.categories)
          .map((category, index) => (
            <div key={index} className={`clickable-category category-${index}`}>
              {category}
            </div>
          ))}
      </div>
    </div>
  )
}
export default ClickableCategory
