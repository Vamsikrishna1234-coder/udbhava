import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "../src/components/Header.jsx"
import Home from "../src/pages/Home.jsx"
import AboutPage from "../src/pages/About.jsx"
import ServicesPage from "../src/pages/Services.jsx"
import PortfolioPage from "../src/pages/Portfolio.jsx"
import ContactPage from "../src/pages/Contact.jsx"
import Footer from "../src/components/Footer.jsx"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router> 
  )
}

export default App
