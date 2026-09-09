import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import Projects from './pages/projects/Projects'
import Artworks from './pages/artworks/Artworks'
import ProjectDetail from './pages/projects/project-detail/ProjectDetail'
import ProjectInProgress from './pages/page-in-progress/ProjectInProgress'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route  path="/projects" element={<Projects />} />
      <Route  path="/artworks" element={<ProjectInProgress />} />
      <Route path="/projects/:slug" element={<ProjectDetail />}/>
      <Route path="/projects/in-progress" element={<ProjectInProgress />}/>
      <Route  path="/blog" element={<ProjectInProgress />} />
    </Routes>
  )
}

export default App
