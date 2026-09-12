import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import Projects from './pages/projects/Projects'
import Artworks from './pages/artworks/Artworks'
import Blogs from './pages/blogs/Blogs'
import ProjectDetail from './pages/projects/project-detail/ProjectDetail'
import ProjectInProgress from './pages/page-in-progress/ProjectInProgress'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route  path="/projects" element={<Projects />} />
      <Route  path="/artworks" element={<Artworks />} />
      <Route path="/projects/:slug" element={<ProjectDetail />}/>
      <Route path="/projects/in-progress" element={<ProjectInProgress />}/>
      <Route  path="/blogs" element={<Blogs />} />
    </Routes>
  )
}

export default App
