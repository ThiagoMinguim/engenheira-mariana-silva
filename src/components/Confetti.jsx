import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const colors = ['#fbbf24', '#f59e0b', '#d97706', '#ffffff', '#fde68a', '#ef4444']

function ConfettiPiece({ delay }) {
  const x = Math.random() * 100
  const rotation = Math.random() * 360
  const size = Math.random() * 8 + 4
  const color = colors[Math.floor(Math.random() * colors.length)]
  const duration = Math.random() * 2 + 3
  const shape = Math.random() > 0.5 ? 'rounded-full' : 'rounded-sm'

  return (
    <motion.div
      initial={{
        x: `${x}vw`,
        y: -20,
        rotate: 0,
        opacity: 1,
      }}
      animate={{
        y: '110vh',
        rotate: rotation + 720,
        opacity: [1, 1, 0],
      }}
      transition={{
        duration,
        delay,
        ease: 'linear',
      }}
      style={{
        width: size,
        height: size * (Math.random() + 0.5),
        backgroundColor: color,
      }}
      className={`fixed top-0 ${shape} z-50 pointer-events-none`}
    />
  )
}

export default function Confetti({ trigger }) {
  const [pieces, setPieces] = useState([])

  useEffect(() => {
    if (trigger) {
      const newPieces = Array.from({ length: 80 }, (_, i) => ({
        id: Date.now() + i,
        delay: Math.random() * 2,
      }))
      setPieces(newPieces)

      const timeout = setTimeout(() => setPieces([]), 6000)
      return () => clearTimeout(timeout)
    }
  }, [trigger])

  return (
    <AnimatePresence>
      {pieces.map((piece) => (
        <ConfettiPiece key={piece.id} delay={piece.delay} />
      ))}
    </AnimatePresence>
  )
}
