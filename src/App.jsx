import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar/NavBar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Allproducts from './pages/Allproducts'
import AboutMain from './pages/AboutMain'
import Support from './pages/Support'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import { initNavbarScrollTrigger, cleanupScrollTrigger } from './script'

function App() {
  useEffect(() => {
    // Initialize the navbar scroll trigger when component mounts
    initNavbarScrollTrigger()
    
    // Cleanup function to remove ScrollTrigger instances when component unmounts
    return () => {
      cleanupScrollTrigger()
    }
  }, [])

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/all-products" element={<Allproducts />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
    </Router>
  )
}

export default App
