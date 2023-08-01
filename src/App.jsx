
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cases from './pages/Cases'
import Home from './pages/Home'

function App() {


  return (
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/cases' Component={Cases}/>
    </Routes>
  )
}

export default App
