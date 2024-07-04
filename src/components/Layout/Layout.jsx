import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Search from '../Search/Search'

import './Layout.css'

function Layout() {
  return (
    <div className="layout-container">
      <header>
        <h6>Layout Page</h6>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/games-idea">Games Idea</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/search">
                <Search />
              </Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2024 My React App</p>
      </footer>
    </div>
  )
}

export default Layout
