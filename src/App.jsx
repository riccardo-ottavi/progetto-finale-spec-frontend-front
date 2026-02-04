import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokeListPage from './pages/PokeListPage'
import { GlobalProvider } from './contexts/PokeContext'
import PokeDetailPage from './pages/PokeDetailPage'

function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PokeListPage />} />
            <Route path='/:id' element={<PokeDetailPage />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
