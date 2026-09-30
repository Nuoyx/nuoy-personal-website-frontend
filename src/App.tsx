import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import Projects from './pages/projects/Projects'
import Artworks from './pages/artworks/Artworks'
import Blogs from './pages/blogs/Blogs'
import ProjectInProgress from './pages/page-in-progress/ProjectInProgress'
import Chatbot from './components/chatbot/Chatbot'
import Header from './components/header/Header'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/artworks" element={<Artworks />} />
        <Route path="/projects/in-progress" element={<ProjectInProgress />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Chatbot />
    </>
  )
}

export default App
