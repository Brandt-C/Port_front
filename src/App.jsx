import { useState } from 'react'
import './App.css'
import Nav from './componenets/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
<h1>What to do next??</h1>
    </>
  )
}

export default App
