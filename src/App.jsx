import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import AnimatedBackground from './components/AnimatedBackground'
import Chatbot from './components/Chatbot'
import Hero from './components/Hero'
import Services from './components/Services'
import Studio from './components/Studio'
import Contact from './components/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isLoaded, setIsLoaded] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollY = useRef(0)
  const scrollThreshold = 50

  // Handle scroll to hide/show navbar and add blur effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show navbar when scrolling up or at the top
      if (currentScrollY < scrollThreshold || currentScrollY < lastScrollY.current) {
        setIsNavVisible(true)
      } 
      // Hide navbar when scrolling down past threshold
      else if (currentScrollY > lastScrollY.current && currentScrollY > scrollThreshold) {
        setIsNavVisible(false)
      }
      
      // Add blur effect when scrolled past threshold
      setIsScrolled(currentScrollY > scrollThreshold)
      
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    
    const timer = setTimeout(() => {
      document.body.style.overflow = 'auto'
    }, 3000)

    setIsLoaded(true)

    return () => clearTimeout(timer)
  }, [])

  const navigateTo = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <Services />
      case 'studio':
        return <Studio />
      case 'contact':
        return <Contact />
      default:
        return <Hero onNavigate={navigateTo} />
    }
  }

  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <AnimatedBackground />
      
      {/* Interactive Chatbot */}
      <Chatbot />
      
      {/* Navigation Header - Auto-hiding with blur effect on scroll */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-16 lg:px-24 py-6 flex justify-between items-center transition-all duration-500 ${
          isScrolled ? 'bg-mimesis-black/80 backdrop-blur-2xl' : ''
        }`}
        initial={{ opacity: 1, y: 0 }}
        animate={{ 
          opacity: isNavVisible ? 1 : 0,
          y: isNavVisible ? 0 : -100,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo */}
        <Logo onClick={() => navigateTo('home')} />

        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: 'Home', page: 'home' },
            { name: 'Services', page: 'services' },
            { name: 'Studio', page: 'studio' },
            { name: 'Contact', page: 'contact' },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => navigateTo(item.page)}
              className={`interactive text-sm font-light tracking-widest uppercase transition-colors duration-300 relative group ${
                currentPage === item.page ? 'text-white' : 'text-mimesis-gray hover:text-white'
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-px bg-white transition-all duration-300 ${
                currentPage === item.page ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </button>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => navigateTo('home')}
            className={`interactive text-sm ${currentPage === 'home' ? 'text-white' : 'text-mimesis-gray'}`}
          >
            Home
          </button>
          <button
            onClick={() => navigateTo('services')}
            className={`interactive text-sm ${currentPage === 'services' ? 'text-white' : 'text-mimesis-gray'}`}
          >
            Services
          </button>
          <button
            onClick={() => navigateTo('studio')}
            className={`interactive text-sm ${currentPage === 'studio' ? 'text-white' : 'text-mimesis-gray'}`}
          >
            Studio
          </button>
          <button
            onClick={() => navigateTo('contact')}
            className={`interactive text-sm ${currentPage === 'contact' ? 'text-white' : 'text-mimesis-gray'}`}
          >
            Contact
          </button>
        </div>
      </motion.header>

      {/* Content */}
      <main className="relative z-10">
        {renderPage()}
      </main>
      
      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-mimesis-black z-50 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
            <motion.div
              className="w-2 h-2 bg-white/60 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }}
            />
            <motion.div
              className="w-2 h-2 bg-white/30 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

// Animated Logo Component
function Logo({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className="interactive group relative font-display text-xl md:text-2xl font-bold tracking-tight text-white"
      whileHover="hover"
    >
      <span className="relative z-10">MIMESIS</span>
      
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-violet-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 5 }}
        variants={{
          hover: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.3 }
          }
        }}
      >
        MIMESIS
      </motion.span>
      
      <motion.div
        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-violet-500 via-pink-500 to-purple-500"
        initial={{ scaleX: 0, opacity: 0 }}
        variants={{
          hover: { 
            scaleX: 1, 
            opacity: 1,
            transition: { duration: 0.3, ease: 'easeOut' }
          }
        }}
      />
      
      <motion.div
        className="absolute -top-2 -right-2 w-2 h-2 bg-pink-400 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        variants={{
          hover: { 
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            x: [0, 5, 0],
            y: [0, -5, 0],
            transition: { duration: 0.5, repeat: Infinity }
          }
        }}
      />
      <motion.div
        className="absolute -bottom-1 -left-2 w-1.5 h-1.5 bg-violet-400 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        variants={{
          hover: { 
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            x: [0, -5, 0],
            y: [0, 3, 0],
            transition: { duration: 0.5, repeat: Infinity, delay: 0.2 }
          }
        }}
      />
      <motion.div
        className="absolute top-0 right-0 w-1 h-1 bg-purple-400 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        variants={{
          hover: { 
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            transition: { duration: 0.5, repeat: Infinity, delay: 0.4 }
          }
        }}
      />
    </motion.button>
  )
}

export default App
