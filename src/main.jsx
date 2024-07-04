import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GamesProvider } from './context/gamesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GamesProvider>
      <App />
    </GamesProvider>
  </React.StrictMode>
)
