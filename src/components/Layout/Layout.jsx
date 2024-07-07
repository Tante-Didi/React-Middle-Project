import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Search from '../Search/Search'
import Logo from '../Logo/Logo'

import './Layout.css'

function Layout() {
  return (
    <div className="layout-container">
      <header>
        <nav>
          <ul className="larger">
            <li className="logo">
              <Link to="logo">
                <Logo />
              </Link>
            </li>
            <li>
              <Link to="/login" className="layout-font one">
                {' '}
                שלום, דניאלה
              </Link>
            </li>
            <li>
              <Link to="/search">
                <Search />
              </Link>
            </li>
            <li>
              <Link to="/about" className="layout-font two">
                אודות
              </Link>
            </li>
            <li>
              <Link to="/games-idea" className="layout-font three">
                רעיונות למשחקים
              </Link>
            </li>
            <li>
              <Link to="/" className="layout-font four">
                דף הבית
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p className="footer-p">
          <div className="text">. &copy; צאי מהקופסא 2024</div>

          <div className="text">אפליקציה לרעיונות משחקי קופסא</div>

          <div className="text">כל הזכויות שמורות לדניאלה ארמוני-אלון</div>
        </p>
      </footer>
    </div>
  )
}

export default Layout
