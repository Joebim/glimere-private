import './App.css'
import Home from './pages/Home'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import FontLoad from './global-components/Fontload'
import Navbar from './global-components/Navbar'
import Services from './pages/Services'

function App() {

  FontLoad()
  return (
    <>
          <Navbar />

    <Routes>
      {/* <Route path='/' element={<Home />} /> */}
      <Route path='/' element={<Services />} />
    </Routes>
    </>
    
  )
}

export default App
