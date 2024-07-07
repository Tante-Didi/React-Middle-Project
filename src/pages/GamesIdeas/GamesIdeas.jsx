/*import React, { useEffect, useMemo, useState } from 'react'
import ClickableFilterFatherContainer from '../../components/clickableFilterFatherContainer/clickableFilterFatherContainer'
import ClickableFilterChild from '../../components/clickableFilterFatherContainer/ClickableFilterChild/ClickableFilterChild'
import ClickableGamesIdea from '../../components/ClickableGamesIdea/ClickableGamesIdea'

import './GamesIdeas.css'
import NavGamesIdeas from '../../components/NavGamesIdeas/NavGamesIdeas'
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useDataContext } from '../../context/gamesContext'

const nestedCategory = [
  { minNumberPraticepents: 'מס המשתתפים' },
  { minPlayersAge: 'גיל השחקן' },
  { gameDifficulty: 'רמת קושי' },
  { durationGame: 'משך זמן המשחק ' },
  { typeGame: 'סוג המשחק' },
]

// const formatNames = {
//   minNumberPraticepents:'מס המשתתפים',
//   minPlayersAge: 'גיל השחקן',
//   gameDifficulty: 'רמת קושי',
//   durationGame:'משך זמן המשחק '
//   typeGame:'סוג המשחק',
// }

const getInitFilters = (games) => {
  const keys = nestedCategory
  const obj = {}
  for (const key of keys) {
    obj[key] = {}
    const values = Array.from(new Set(games.map((game) => game[key])))
    for (const val of values) {
      obj[key][val] = false
    }
  }
  return obj
}

const GamesIdeas = () => {
  const [active, setActive] = useState()
  const { games } = useDataContext()
  const { category } = useParams()
  const gameToShow = useMemo(() => {
    return category
      ? games.filter((g) => g.categories.includes(category))
      : games
  }, [category, games.length])
  const [filters, setFilters] = useState(null)
  const [selectedButton, setSelectedButton] = useState(nestedCategory[0])

  useEffect(() => {
    if (gameToShow) {
      setFilters(getInitFilters(gameToShow))
    }
  }, [gameToShow])

  const selectedNestedBtn = (item) => {
    setFilters((prev) => ({
      ...prev,
      [selectedButton]: {
        ...prev[selectedButton],
        [item]: !prev[selectedButton][item],
      },
    }))
  }
  console.log(filters)
  return (
    <div>
      <NavGamesIdeas />
      <p>GamesIdeas page</p>

      {filters ? (
        <div>
          <div>
            {Object.keys(filters)?.map((btn) => (
              <button
                style={{
                  backgroundColor: selectedButton === btn ? 'red' : 'gray',
                }}
                onClick={() => setSelectedButton(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
          <div>
            {' '}
            {Object.keys(filters[selectedButton]).map((btn) => (
              <button
                style={{
                  backgroundColor: filters[selectedButton][btn]
                    ? 'red'
                    : 'gray',
                }}
                onClick={() => selectedNestedBtn(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
      {gameToShow.map((game) => (
        <div>{game.gameName}</div>
      ))}
    </div>
  )
}

export default GamesIdeas
*/

// import React, { useEffect, useMemo, useState } from 'react'
// import ClickableFilterFatherContainer from '../../components/clickableFilterFatherContainer/clickableFilterFatherContainer'
// import ClickableFilterChild from '../../components/clickableFilterFatherContainer/ClickableFilterChild/ClickableFilterChild'
// import ClickableGamesIdea from '../../components/ClickableGamesIdea/ClickableGamesIdea'

// import './GamesIdeas.css'
// import NavGamesIdeas from '../../components/NavGamesIdeas/NavGamesIdeas'
// import { Outlet } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
// import { useDataContext } from '../../context/gamesContext'

// const nestedCategory = [
//   { key: 'minNumberPraticepents', label: ' מס המשתתפים המינימלי' },
//   { key: 'minPlayersAge', label: 'הגיל המינמלי עבור השחקן' },
//   { key: 'gameDifficulty', label: 'רמת קושי' },
//   { key: 'durationGame', label: 'משך זמן המשחק' },
//   { key: 'typeGame', label: 'סוג המשחק' },
// ]

// const getInitFilters = (games) => {
//   const obj = {}
//   for (const category of nestedCategory) {
//     const key = category.key
//     obj[key] = {}
//     const values = Array.from(new Set(games.map((game) => game[key])))
//     for (const val of values) {
//       obj[key][val] = false
//     }
//   }
//   return obj
// }

// const GamesIdeas = () => {
//   const [active, setActive] = useState()
//   const { games } = useDataContext()
//   const { category } = useParams()
//   const gameToShow = useMemo(() => {
//     return category
//       ? games.filter((g) => g.categories.includes(category))
//       : games
//   }, [category, games.length])
//   const [filters, setFilters] = useState(null)
//   const [selectedButton, setSelectedButton] = useState(nestedCategory[0].key)

//   useEffect(() => {
//     if (gameToShow) {
//       setFilters(getInitFilters(gameToShow))
//     }
//   }, [gameToShow])

//   const selectedNestedBtn = (item) => {
//     setFilters((prev) => ({
//       ...prev,
//       [selectedButton]: {
//         ...prev[selectedButton],
//         [item]: !prev[selectedButton][item],
//       },
//     }))
//   }

//   console.log(filters)

//   return (
//     <div>
//       <NavGamesIdeas />
//       <p>GamesIdeas page</p>

//       {filters ? (
//         <div>
//           <div>
//             {nestedCategory.map((btn) => (
//               <button
//                 key={btn.key}
//                 style={{
//                   backgroundColor: selectedButton === btn.key ? 'red' : 'gray',
//                 }}
//                 onClick={() => setSelectedButton(btn.key)}
//               >
//                 {btn.label}
//               </button>
//             ))}
//           </div>
//           <div>
//             {Object.keys(filters[selectedButton]).map((btn) => (
//               <button
//                 key={btn}
//                 style={{
//                   backgroundColor: filters[selectedButton][btn]
//                     ? 'red'
//                     : 'gray',
//                 }}
//                 onClick={() => selectedNestedBtn(btn)}
//               >
//                 {btn}
//               </button>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div>loading</div>
//       )}
//       {gameToShow.map((game) => (
//         <div key={game.id}>{game.gameName}</div>
//       ))}
//     </div>
//   )
// }

// export default GamesIdeas
/*--------------------------------------------------------------------------------------------------------------------*/
/*import React, { useMemo, useState } from 'react'
import NavGamesIdeas from '../../components/NavGamesIdeas/NavGamesIdeas'
import './GamesIdeas.css'
import { useParams } from 'react-router-dom'
import { useDataContext } from '../../context/gamesContext'

const GamesIdeas = () => {
  const { games } = useDataContext()
  const { category } = useParams()
  const [filteredGames, setFilteredGames] = useState(games)

  const handleFilterChange = (key, filterOptions) => {
    const filtered = games.filter((game) => filterOptions[game[key]])
    setFilteredGames(filtered)
  }

  const gameToShow = useMemo(() => {
    return category
      ? filteredGames.filter((g) => g.categories.includes(category))
      : filteredGames
  }, [category, filteredGames])

  return (
    <div>
      <NavGamesIdeas games={games} onFilterChange={handleFilterChange} />
      <p>GamesIdeas page</p>
      {gameToShow.map((game) => (
        <div key={game.id}>{game.gameName}</div>
      ))}
    </div>
  )
}

export default GamesIdeas*/
/*------------------------------------------------------------------------------------------------------------------*/
/*import React, { useMemo, useState, useEffect } from 'react'
import NavGamesIdeas from '../../components/NavGamesIdeas/NavGamesIdeas'
import './GamesIdeas.css'
import { useParams } from 'react-router-dom'
import { useDataContext } from '../../context/gamesContext'

const GamesIdeas = () => {
  const { games } = useDataContext()
  const { category } = useParams()
  const [filteredGames, setFilteredGames] = useState(games)
  const [activeFilters, setActiveFilters] = useState({})

  useEffect(() => {
    applyFilters()
  }, [activeFilters, games])

  const handleFilterChange = (key, filterOptions) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      [key]: filterOptions,
    }))
  }

  const applyFilters = () => {
    let filtered = games
    for (const key in activeFilters) {
      const selectedOptions = Object.entries(activeFilters[key])
        .filter(([_, isSelected]) => isSelected)
        .map(([option, _]) => option)
      if (selectedOptions.length > 0) {
        filtered = filtered.filter((game) =>
          selectedOptions.includes(game[key])
        )
      }
    }
    setFilteredGames(filtered)
  }

  const gameToShow = useMemo(() => {
    return category
      ? filteredGames.filter((g) => g.categories.includes(category))
      : filteredGames
  }, [category, filteredGames])

  return (
    <div>
      <NavGamesIdeas games={games} onFilterChange={handleFilterChange} />
      <p>GamesIdeas page</p>
      {gameToShow.map((game) => (
        <div key={game.id}>{game.gameName}</div>
      ))}
    </div>
  )
}

export default GamesIdeas*/
/*----------------------------------------------------------------------------------------------------------------*/
/*import React, { useMemo, useState, useEffect } from 'react'
import NavGamesIdeas from '../../components/NavGamesIdeas/NavGamesIdeas'
import './GamesIdeas.css'
import { useParams } from 'react-router-dom'
import { useDataContext } from '../../context/gamesContext'

const GamesIdeas = () => {
  const { games } = useDataContext()
  const { category } = useParams()
  const [filteredGames, setFilteredGames] = useState(games)
  const [activeFilters, setActiveFilters] = useState({})

  useEffect(() => {
    applyFilters()
  }, [activeFilters, games])

  const handleFilterChange = (key, filterOptions) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      [key]: filterOptions,
    }))
  }

  const applyFilters = () => {
    let filtered = games
    for (const key in activeFilters) {
      const selectedOptions = Object.entries(activeFilters[key])
        .filter(([_, isSelected]) => isSelected)
        .map(([option, _]) => option)
      if (selectedOptions.length > 0) {
        filtered = filtered.filter((game) =>
          selectedOptions.includes(game[key])
        )
      }
    }
    setFilteredGames(filtered)
  }

  const gameToShow = useMemo(() => {
    return category
      ? filteredGames.filter((g) => g.categories.includes(category))
      : filteredGames
  }, [category, filteredGames])

  return (
    <div>
      <NavGamesIdeas games={games} onFilterChange={handleFilterChange} />
      <p>GamesIdeas page</p>
      {gameToShow.map((game) => (
        <div key={game.id}>{game.gameName}</div>
      ))}
    </div>
  )
}

export default GamesIdeas*/

import React, { useMemo, useState, useEffect } from 'react'
import NavGamesIdeas from '../../components/NavGamesIdeas/NavGamesIdeas'
import './GamesIdeas.css'
import { useParams } from 'react-router-dom'
import { useDataContext } from '../../context/gamesContext'
import { Link } from 'react-router-dom'

const GamesIdeas = () => {
  const { games } = useDataContext()
  const { category } = useParams()
  const [filteredGames, setFilteredGames] = useState(games)
  const [activeFilters, setActiveFilters] = useState({})

  useEffect(() => {
    applyFilters()
  }, [activeFilters, games])

  const handleFilterChange = (key, filterOptions) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      [key]: filterOptions,
    }))
  }

  const applyFilters = () => {
    let filtered = games
    for (const key in activeFilters) {
      const selectedOptions = Object.entries(activeFilters[key])
        .filter(([_, isSelected]) => isSelected)
        .map(([option, _]) => option)
      if (selectedOptions.length > 0) {
        filtered = filtered.filter((game) =>
          selectedOptions.includes(game[key])
        )
      }
    }
    setFilteredGames(filtered)
  }

  const gameToShow = useMemo(() => {
    return category
      ? filteredGames.filter((g) => g.categories.includes(category))
      : filteredGames
  }, [category, filteredGames])

  return (
    <div>
      <NavGamesIdeas games={games} onFilterChange={handleFilterChange} />

      <div className="games-grid">
        {gameToShow.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.img} alt={game.gameName} />
            <h1>{game.gameName}</h1>
            <p className="header-one">רמת קושי: {game.gameDifficulty}</p>
            <p className="header-one">אורך המשחק: {game.durationGame}</p>
            <p className="header-one">סוג המשחק: {game.typeGame}</p>
          </div>
        ))}
      </div>
      <Link className="back " to="/">
        חזרה לדף הבית
      </Link>
    </div>
  )
}

export default GamesIdeas
