import { useState } from 'react'
import './App.css'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Team from './pages/Team'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import ScrollTopButton from './components/ScrollTopButton'
import ChatPopup from './components/ChatPopup'
import Project from './pages/Project'
import ToolDetail from './components/ToolDetail'

function App() {

  return (
    <div className=''>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Team />} />
          <Route path='/service' element={<Services />} />
          <Route path='/career' element={<Careers />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project' element={<Project />} />
          <Route path='/tools/:id' element={<ToolDetail />} />
        </Routes>
        {/* <ChatPopup /> */}
        <ScrollTopButton />
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
