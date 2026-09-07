import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import Projects from './pages/projects/Projects'
import Artworks from './pages/artworks/Artworks'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route  path="/projects" element={<Projects />} />
      <Route  path="/artworks" element={<Artworks />} />
    </Routes>
  )
}

export default App
