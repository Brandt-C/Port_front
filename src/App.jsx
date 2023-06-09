
import './App.css'
import Nav from './components/Nav'
import Home from './views/Home'
import { Route, Routes } from 'react-router-dom'
import Mad from './views/Mad'
import About from './views/About'
import Story from './views/Story'


function App() {

  return (
    <>
        <Nav />
        <Routes>
          <Route children path='/mad' element={<Mad />} />
          <Route children path='/' element={<Home />} />
          <Route children path='/about' element={<About />} />
          <Route children path='/story' element={<Story />} />
        </Routes>
    </>
  )
}

export default App;
