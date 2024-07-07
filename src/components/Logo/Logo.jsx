import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'

const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/" className="logo-link">
        <a href="index.html" className="logo-link">
          <img
            src="/public/girl-thinks-while-playing.svg"
            alt="Your Company Logo"
            id="logo"
          />
          {/* <span className="logo-text">צאי מהקופסא</span> */}
        </a>
      </Link>
    </div>
  )
}

export default Logo
