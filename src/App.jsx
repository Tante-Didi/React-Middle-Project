import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import GamesIdeas from './pages/GamesIdeas/GamesIdeas'
import About from './pages/About/About'
import Search from './components/Search/Search'
import Login from './pages/Login/Login'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import ClickableFilterFatherContainer from './components/clickableFilterFatherContainer/clickableFilterFatherContainer'
import ClickableFilterChild from './components/clickableFilterFatherContainer/ClickableFilterChild/ClickableFilterChild'
import ClickableGamesIdea from './components/ClickableGamesIdea/ClickableGamesIdea'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/games-idea',
        element: <GamesIdeas />,
      },
      {
        path: 'by-filter',
        element: <ClickableFilterFatherContainer />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/login',
        element: <Login />,
      },

      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
