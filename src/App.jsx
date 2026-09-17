import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Contacto from './components/Contacto'
import Servicios from './components/Servicios'
import Metodologia from './components/Metodologia'
import WspFlotante from './components/WspFlotante'

function App() {
  
    const [language, setLanguage] = useState('es')
    const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'cyber-dark' : 'cyber-light'}`}>
      <Navbar 
          language={language} 
          setLanguage={setLanguage} 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} />

          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/contacto" element={<Contacto language={language} />} />

            <Route path="/servicios" element={<Servicios language={language} />} />

            <Route path="/metodologia" element={<Metodologia language={language} />} />
          </Routes>
          
      <Footer lang={language} />

      <WspFlotante language={language} />
    
    </div>
    
  )
}

export default App
