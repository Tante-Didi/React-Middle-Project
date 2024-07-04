import React, { useEffect, useMemo, useState } from 'react'
import ClickableFilterFatherContainer from '../../components/clickableFilterFatherContainer/clickableFilterFatherContainer'
import ClickableFilterChild from '../../components/clickableFilterFatherContainer/ClickableFilterChild/ClickableFilterChild'
import ClickableGamesIdea from '../../components/ClickableGamesIdea/ClickableGamesIdea'

import './GamesIdeas.css'
import NavGamesIdeas from '../../components/NavGamesIdeas/NavGamesIdeas'
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useDataContext } from '../../context/gamesContext'

const nestedCategory = ['gameDifficulty', 'durationGame', 'typeGame']

const getInitFilters = (games) => {
  const keys = nestedCategory;
  const obj = {};
  for (const key of keys) {
    obj[key] = {};
    const values = Array.from(new Set(games.map(game => game[key])))
    for (const val of values) {
      obj[key][val] = false;
    }
  }
  return obj;
};

const GamesIdeas = () => {
  const [active, setActive] = useState()
  const { games } = useDataContext()
  const { category } = useParams()
  const gameToShow = useMemo(() => {
    return category ? games.filter(g => g.categories.includes(category)) : games
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
    }));
  };
  console.log(filters)
  return (
    <div>
      <NavGamesIdeas />
      <p>GamesIdeas page</p>
      <ClickableFilterFatherContainer />
      {
        filters ? <div>
          <div>
            {Object.keys(filters)?.map((btn) => (
              <button
                style={{ backgroundColor: selectedButton === btn ? "red" : "gray" }}
                onClick={() => setSelectedButton(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
          <div> {
            Object.keys(filters[selectedButton]).map((btn) => (
              <button
                style={{ backgroundColor: filters[selectedButton][btn] ? "red" : "gray" }}
                onClick={() => selectedNestedBtn(btn)}
              >
                {btn}
              </button>
            ))

          }</div>
        </div>

          : <div>loading</div>
      }
      {gameToShow.map(game => <div>{game.gameName}</div>)}
    </div>
  )
}

export default GamesIdeas
