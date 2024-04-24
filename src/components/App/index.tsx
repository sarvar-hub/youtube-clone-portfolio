import Navbar from '@/components/Navbar'
import './style.css'
import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import Video from '@/pages/Video'
import { useState } from 'react'

function App() {
  const [sidebar, setSidebar] = useState<boolean>(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  )
}

export default App

