import React, { useState } from 'react'
import ClickableFilterFatherContainer from '../../components/clickableFilterFatherContainer/clickableFilterFatherContainer'
import ClickableFilterChild from '../../components/clickableFilterFatherContainer/ClickableFilterChild/ClickableFilterChild'
import ClickableGamesIdea from '../../components/ClickableGamesIdea/ClickableGamesIdea'

import './GamesIdeas.css'
import NavGamesIdeas from '../../components/NavGamesIdeas/NavGamesIdeas'
import { Outlet } from 'react-router-dom'

const GamesIdeas = () => {
  const [active, setActive] = useState()

  return (
    <div>
      <NavGamesIdeas />
      <p>GamesIdeas page</p>
      <ClickableFilterFatherContainer />
    </div>
  )
}

export default GamesIdeas
