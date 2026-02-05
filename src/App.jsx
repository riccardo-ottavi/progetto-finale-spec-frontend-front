import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokeListPage from './pages/PokeListPage'
import { GlobalProvider } from './contexts/PokeContext'
import PokeDetailPage from './pages/PokeDetailPage'
import NavBar from './components/NavBar'
import ComparatorPage from './pages/ComparatorPage'

function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<PokeListPage />} />
            <Route path='/pokemons/:id' element={<PokeDetailPage />} />
            <Route path="/comparatore" element={<ComparatorPage />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
