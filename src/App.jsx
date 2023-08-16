import './App.css'
import Home from './pages/Home'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import FontLoad from './global-components/Fontload'

function App() {

  FontLoad()
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </>
    
  )
}

export default App
