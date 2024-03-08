import { Outlet } from 'react-router-dom'
import { NavBar } from './Components/Navbar/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
