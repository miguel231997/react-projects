import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

//In the App component, we wrap the application components (Login and Profile) with the UserContextProvider to make the user context available to them. This setup allows components like Login and Profile to access and update the user state without prop drilling, making the code more organized and efficient.

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1> React video for context API</h1>
      <Login />
      <Profile />
      </UserContextProvider>
  )
}

export default App
