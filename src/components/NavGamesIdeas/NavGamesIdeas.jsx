import React, { useState, useEffect } from 'react'
import './NavGamesIdeas.css'

const nestedCategory = [
  { key: 'minNumberPraticepents', label: 'מספר המשתתפים המינימלי' },
  { key: 'minPlayersAge', label: 'הגיל המינימלי עבור השחקן' },
  { key: 'gameDifficulty', label: 'רמת קושי' },
  { key: 'durationGame', label: 'משך זמן המשחק' },
  { key: 'typeGame', label: 'סוג המשחק' },
]

const getInitFilters = (games) => {
  const obj = {}
  for (const category of nestedCategory) {
    const key = category.key
    obj[key] = {}
    const values = Array.from(new Set(games.map((game) => game[key])))
    for (const val of values) {
      obj[key][val] = false
    }
  }
  return obj
}

const NavGamesIdeas = ({ games, onFilterChange }) => {
  const [filters, setFilters] = useState(null)
  const [selectedButtons, setSelectedButtons] = useState([])
  const [selectedNestedButton, setSelectedNestedButton] = useState(null)

  useEffect(() => {
    if (games) {
      setFilters(getInitFilters(games))
    }
  }, [games])

  const selectedNestedBtn = (item) => {
    setFilters((prev) => ({
      ...prev,
      [selectedNestedButton]: {
        ...prev[selectedNestedButton],
        [item]: !prev[selectedNestedButton][item],
      },
    }))
    if (onFilterChange) {
      onFilterChange(
        selectedNestedButton,
        filters ? filters[selectedNestedButton] : {}
      )
    }
  }

  const handleButtonClick = (btnKey) => {
    setSelectedButtons((prevSelected) => {
      if (prevSelected.includes(btnKey)) {
        return prevSelected.filter((key) => key !== btnKey)
      } else {
        return [...prevSelected, btnKey]
      }
    })
    setSelectedNestedButton(btnKey)
    if (onFilterChange) {
      onFilterChange(btnKey, filters ? filters[btnKey] : {})
    }
  }

  return (
    <div>
      <div className="btns-container">
        {nestedCategory.map((btn) => (
          <button
            key={btn.key}
            className="btn-container"
            style={{
              backgroundColor: selectedButtons.includes(btn.key)
                ? 'rgba(118, 212, 255, 0.897)'
                : ' #acacac',
            }}
            onClick={() => handleButtonClick(btn.key)}
          >
            {btn.label}
          </button>
        ))}
      </div>
      {filters && selectedButtons.length > 0 && (
        <div className="nested-btns-container">
          {selectedButtons.map((btnKey) => (
            <div key={btnKey} className="nested-category-card">
              <h1>{nestedCategory.find((cat) => cat.key === btnKey).label}</h1>
              <div className="nested-btns">
                {Object.keys(filters[btnKey]).map((btn) => (
                  <button
                    key={btn}
                    className="nested-btn"
                    style={{
                      backgroundColor: filters[btnKey][btn]
                        ? 'rgba(177, 230, 255, 0.897)'
                        : ' #acacac',
                    }}
                    onClick={() => selectedNestedBtn(btn)}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default NavGamesIdeas
