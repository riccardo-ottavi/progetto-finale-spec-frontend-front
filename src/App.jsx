import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokeListPage from './pages/PokeListPage'
import { GlobalProvider } from './contexts/PokeContext'
import PokeDetailPage from './pages/PokeDetailPage'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <GlobalProvider>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path='/pokemons' element={<PokeListPage />} />
            <Route path='/pokemons/:id' element={<PokeDetailPage />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
