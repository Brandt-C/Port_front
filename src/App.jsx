
import './App.css'
import Nav from './componenets/Nav'
import Home from './views/Home'
import { Route, Routes } from 'react-router-dom'
import Mad from './views/Mad'
import About from './views/About'
import { ThemeProvider } from '@mui/material'
import theme from './Theme';

function App() {

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
        <Nav />
        <Routes>
          <Route children path='/mad' element={<Mad />} />
          <Route children path='/' element={<Home />} />
          <Route children path='/about' element={<About />} />
        </Routes>
      {/* </ThemeProvider> */}
    </>
  )
}

export default App;
