import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId

    // Configuration des points du mesh
    const points = []
    const numPoints = 6

    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 300 + Math.random() * 400,
        hue: 220 + Math.random() * 60, // Tons bleus-violets
      })
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    const animate = () => {
      // Effacer avec une légère traînée
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Mettre à jour les positions des points
      points.forEach((point, index) => {
        point.x += point.vx
        point.y += point.vy

        // Rebondir sur les bords
        if (point.x < -point.radius / 2) point.x = canvas.width + point.radius / 2
        if (point.x > canvas.width + point.radius / 2) point.x = -point.radius / 2
        if (point.y < -point.radius / 2) point.y = canvas.height + point.radius / 2
        if (point.y > canvas.height + point.radius / 2) point.y = -point.radius / 2
      })

      // Créer le gradient radial pour chaque point
      points.forEach((point, index) => {
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, point.radius
        )

        // Couleurs harmonieuses
        const colors = [
          `hsla(${point.hue}, 30%, 15%, 0.15)`,
          `hsla(${point.hue + 30}, 25%, 20%, 0.1)`,
          `hsla(${point.hue + 60}, 20%, 25%, 0.05)`,
          'transparent',
        ]

        gradient.addColorStop(0, colors[0])
        gradient.addColorStop(0.4, colors[1])
        gradient.addColorStop(0.7, colors[2])
        gradient.addColorStop(1, colors[3])

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

      // Ajouter un overlay subtil pour la cohérence
      ctx.fillStyle = 'rgba(10, 10, 10, 0.3)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      {/* Canvas pour le mesh gradient animé */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />

      {/* Overlay avec bruit subtil pour la texture */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette subtile */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-radial-gradient from-transparent to-mimesis-black/50" />
    </>
  )
}

