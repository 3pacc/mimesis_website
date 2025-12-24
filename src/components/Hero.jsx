import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// Stagger configuration
const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

// Text that changes color based on cursor position
function DynamicColorText({ text, className = '' }) {
  const containerRef = useRef(null)
  const mouseX = useMotionValue(50)
  const [isHovering, setIsHovering] = useState(false)

  // Smooth mouse position
  const smoothMouseX = useSpring(mouseX, { damping: 20, stiffness: 500 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = (x / rect.width) * 100
      mouseX.set(Math.max(0, Math.min(100, percentage)))
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => {
      setIsHovering(false)
      mouseX.set(50)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('mouseenter', handleMouseEnter)
      container.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseenter', handleMouseEnter)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [mouseX])

  // Color interpolation
  const colorValue = useTransform(smoothMouseX, [0, 50, 100], ['#22d3ee', '#fafafa', '#f472b6'])
  const glowColor = useTransform(smoothMouseX, [0, 50, 100], [
    'rgba(34, 211, 238, 0.4)',
    'rgba(255, 255, 255, 0.2)',
    'rgba(244, 114, 182, 0.4)'
  ])

  const words = text.split(' ')

  return (
    <h2 ref={containerRef} className={`font-display font-bold leading-[0.95] tracking-tight mb-8 ${className}`}>
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className="inline-block mr-4 md:mr-6 last:mr-0 relative"
          animate={{
            color: isHovering ? colorValue : '#ffffff',
          }}
          style={{
            textShadow: isHovering ? `0 0 30px ${glowColor}` : 'none',
          }}
        >
          {word}
        </motion.span>
      ))}
    </h2>
  )
}

export default function Hero({ onNavigate }) {
  const title = "We shape digital chaos"
  const subtitle = "Digital experiences that inspire"
  const year = "Est. 2025"

  return (
    <section className="relative min-h-screen flex flex-col justify-between p-8 md:p-16 lg:p-24 overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/3 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 120, 240],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 right-1/3 w-72 h-72 bg-pink-600/15 rounded-full blur-3xl"
        />
      </div>

      {/* Main hero content - Centered */}
      <main className="flex-1 flex flex-col justify-center items-center text-center py-20 relative z-10">
        <div className="max-w-6xl">
          {/* Title with fade-in opacity animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <DynamicColorText
              text={title}
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl"
            />
          </motion.div>

          {/* Static subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <p className="text-lg md:text-xl text-mimesis-gray font-light tracking-wide max-w-2xl">
              {subtitle}
            </p>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="mt-16 flex flex-wrap gap-4 justify-center"
          >
            <motion.button
              onClick={() => onNavigate && onNavigate('services')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-12 py-4 bg-white text-black font-semibold tracking-widest uppercase text-sm rounded-full overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Start a Project
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.button>
            
            <motion.button
              onClick={() => onNavigate && onNavigate('studio')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-12 py-4 bg-transparent border border-white/30 text-white font-semibold tracking-widest uppercase text-sm rounded-full overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                View Portfolio
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.button>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <p className="text-xs text-mimesis-gray/60 font-light tracking-widest uppercase">
            {year}
          </p>
        </motion.div>
      </footer>

      {/* Floating elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute top-1/4 right-8 lg:right-16 w-32 h-32 lg:w-48 lg:h-48 border border-white/5 rounded-full animate-float"
        style={{ animationDelay: '0s' }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
        className="absolute bottom-1/4 left-8 lg:left-16 w-24 h-24 lg:w-32 lg:h-32 border border-white/10 rounded-full animate-float"
        style={{ animationDelay: '2s' }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4 }}
        className="absolute top-1/3 left-1/4 w-16 h-16 lg:w-20 lg:h-20 border border-white/5 rounded-full animate-float"
        style={{ animationDelay: '4s' }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
    </section>
  )
}

export { DynamicColorText }
