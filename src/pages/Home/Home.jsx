import React from 'react'
import ClickableCategory from '../../components/ClickableCategory/ClickableCategory'
import { Link } from 'react-router-dom'

import './Home.css'

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <div className="main-homepage-container">
        <p className="home-page-title">מה בא לנו לשחק?</p>
        <ClickableCategory />
      </div>
    </div>
  )
}

export default Home
