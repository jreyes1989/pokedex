
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRoutes from './components/ProtectedRoutes'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import Pokedexinfo from './pages/Pokedexinfo'

function App() {
  
  

  return (
    <div className="App">
      
      <Routes>
        <Route  path='/'  element={<Home/>} />
        //Ruta Protegidas
        <Route element={<ProtectedRoutes />} >
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<Pokedexinfo />} />
        </Route>
      </Routes>
    
    </div>
  )
}

export default App
