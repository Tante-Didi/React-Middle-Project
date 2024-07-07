import React, { useEffect, useState } from 'react'
import { useDataContext } from '../../context/gamesContext'
import './ClickableCategory.css'
import { Link } from 'react-router-dom'

const formatNames = {
  kids: 'ילדים',
  family: 'משפחה',
  adults: 'מבוגרים',
}

const ClickableCategory = () => {
  const { games, loading } = useDataContext()
  const [categoriesName, setCatergoriesName] = useState([])

  function handleClickableCategoryCard() {}

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
        <div className="P-container">
          <p className="home-page-title ma">מה</p>
          <br />
          <p className="home-page-title ba"> בא </p>
          <br />
          <br />
          <p className="home-page-title lanu"> לנו </p>
          <br />
          <br />
          <br />
          <p className="home-page-title leshacek"> לשחק </p>
          <p className="home-page-title q">? </p>
        </div>

        {categoriesName.map((category, index) => (
          <Link
            to={category}
            key={index}
            className={`clickable-category category-${index}`}
          >
            {formatNames[category]}
          </Link>
        ))}
      </div>
    </div>
  )
}
export default ClickableCategory
