import { useState } from 'react'
import './App.css'
import Nav from './componenets/Nav'
import Home from './views/Home'
import { Route, Routes } from 'react-router-dom'
import Mad from './views/Mad'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Routes>
        <Route children path='/mad' element={ <Mad />} />
        <Route children path='/' element={ <Home />} />
      </Routes>

    </>
  )
}

export default App;
