import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import CreateAccountPage from './components/pages/CreateAccountPage'
import ProfilePage from './components/pages/ProfilePage'
import LoginPage from './components/pages/LoginPage'



const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/create-account',
      element: <CreateAccountPage />
    },
    {
      path: '/profile',
      element: <ProfilePage />
    },
    {
      path: '/login',
      element: <LoginPage />
    }
  ]
)

const App = () => {
  return (
    <div className='flex justify-center items-center bg-gray-100'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App