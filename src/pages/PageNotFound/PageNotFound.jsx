import React from 'react'
import { Link } from 'react-router-dom'
import './PageNotFound.css'

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h2>404 - האתר לא נמצא</h2>
      <p>סליחה, אבל דף האתר שאתה מחפש לא נמצא.</p>
      <Link to="/">חזרה לדף הבית</Link>
    </div>
  )
}

export default PageNotFound
