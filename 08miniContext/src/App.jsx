/* this project teach us about useContext(contextAPI) minimally 1st cheak context/UserContext.js 2nd context/UserContextProvider.jsx 3rd App.jsx 4th components/Login.jsx 5th components/Profile.jsx read carefully*/

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1> react video for context api</h1>
      <Login/>
      <Profile />
    </UserContextProvider>
  )
}

export default App
