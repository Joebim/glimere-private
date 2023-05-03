import './App.css'
import Home from './components/Home'
import { Routes } from 'react-router'
import { Route } from 'react-router'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </>
    
  )
}

export default App
