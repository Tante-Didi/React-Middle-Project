import React from 'react'
import ClickableCategory from '../../components/ClickableCategory/ClickableCategory'
import { Link } from 'react-router-dom'

import './Home.css'

function Home() {
  return (
    <div className="home-container   ">
      <div className="main-homepage-container ">
        <ClickableCategory />
      </div>
    </div>
  )
}

export default Home
