import React from 'react'

import './GameIdeaCard.css'

const GameIdeaCard = () => {
  return (
    <div>
      <div>
        <p>מה הדירוג שהיית בוחר להעניק למשחק?</p>
        <div className="rating">
          <input defaultValue={10} name="rating" id="star10" type="radio" />
          <label htmlFor="star10" />
          <input defaultValue={9} name="rating" id="star9" type="radio" />
          <label htmlFor="star9" />
          <input defaultValue={8} name="rating" id="star8" type="radio" />
          <label htmlFor="star8" />
          <input defaultValue={7} name="rating" id="star7" type="radio" />
          <label htmlFor="star7" />
          <input defaultValue={6} name="rating" id="star6" type="radio" />
          <label htmlFor="star6" />
          <input defaultValue={5} name="rating" id="star5" type="radio" />
          <label htmlFor="star5" />
          <input defaultValue={4} name="rating" id="star4" type="radio" />
          <label htmlFor="star4" />
          <input defaultValue={3} name="rating" id="star3" type="radio" />
          <label htmlFor="star3" />
          <input defaultValue={2} name="rating" id="star2" type="radio" />
          <label htmlFor="star2" />
          <input defaultValue={1} name="rating" id="star1" type="radio" />
          <label htmlFor="star1" />
        </div>
      </div>
    </div>
  )
}

export default GameIdeaCard
