import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar.JSX'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
<Hero />
<Footer />
    </div>
  )
}

export default App
