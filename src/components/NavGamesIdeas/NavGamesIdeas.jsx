import { Link } from 'react-router-dom'
import './NavGamesIdeas.css'

const NavGamesIdeas = () => {
  return (
    <div className="btns-container">
      <button className="btn-container  age">גיל המשתתפים במשחק</button>
      <button className="btn-container  number-of-participents">
        מס' המשתתפים במשחק
      </button>
      <button className="btn-container type-of-game"> סוג המשחק</button>
      <button className="btn-container duration">משך זמן המשחק</button>
    </div>
  )
}

export default NavGamesIdeas
