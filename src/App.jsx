import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokeListPage from './pages/PokeListPage'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PokeListPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
