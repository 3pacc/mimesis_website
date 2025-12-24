import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth cursor movement
  const cursorX = useSpring(mouseX, { damping: 25, stiffness: 700 })
  const cursorY = useSpring(mouseY, { damping: 25, stiffness: 700 })

  const followerX = useSpring(mouseX, { damping: 50, stiffness: 500 })
  const followerY = useSpring(mouseY, { damping: 50, stiffness: 500 })

  useEffect(() => {
    // Initial position off-screen
    mouseX.set(window.innerWidth)
    mouseY.set(window.innerHeight)

    const updateMousePosition = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Detect hoverable elements
    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('[role="button"]') ||
        e.target.closest('.interactive') ||
        e.target.classList.contains('interactive')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: -8,
          y: -8,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { duration: 0.2, ease: 'easeOut' },
          opacity: { duration: 0.1 },
        }}
      >
        <div className="w-4 h-4 bg-white rounded-full" />
      </motion.div>

      {/* Larger cursor follower */}
      <motion.div
        ref={followerRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference"
        style={{
          translateX: followerX,
          translateY: followerY,
          x: -24,
          y: -24,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isVisible ? 0.5 : 0,
        }}
        transition={{
          scale: { duration: 0.3, ease: 'easeOut' },
          opacity: { duration: 0.2 },
        }}
      >
        <div className="w-12 h-12 border-2 border-white rounded-full" />
      </motion.div>

      {/* Additional ring effect on hover */}
      <motion.div
        className="fixed top-0 left-0 z-[9997] pointer-events-none mix-blend-difference"
        style={{
          translateX: followerX,
          translateY: followerY,
          x: -40,
          y: -40,
        }}
        animate={{
          scale: isHovering ? 1.5 : 0,
          opacity: isHovering ? 0.3 : 0,
        }}
        transition={{
          scale: { duration: 0.4, ease: 'easeOut' },
          opacity: { duration: 0.2 },
        }}
      >
        <div className="w-20 h-20 border border-white rounded-full" />
      </motion.div>
    </>
  )
}

