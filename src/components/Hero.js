'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const TypewriterText = ({ text, delay = 0, typingSpeed = 150, pauseDuration = 2000 }) => {
  const controls = useAnimation()
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let currentIndex = 0
    let isDeleting = false
    let timeoutId

    const typeCharacter = () => {
      if (!isDeleting && currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex))
        currentIndex++
        timeoutId = setTimeout(typeCharacter, typingSpeed)
      } else if (isDeleting && currentIndex > 0) {
        setDisplayedText(text.slice(0, currentIndex))
        currentIndex--
        timeoutId = setTimeout(typeCharacter, typingSpeed / 2)
      } else {
        isDeleting = !isDeleting
        timeoutId = setTimeout(typeCharacter, pauseDuration)
      }
    }

    controls.start({ opacity: 1, y: 0, transition: { delay, duration: 0.5 } })
    timeoutId = setTimeout(typeCharacter, delay * 1000)

    return () => clearTimeout(timeoutId)
  }, [text, controls, delay, typingSpeed, pauseDuration])

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="inline-block"
    >
      {displayedText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.7 }}
        className="inline-block w-0.5 h-6 bg-green-400 ml-1 align-middle"
      />
    </motion.span>
  )
}

const FuturisticButton = ({ children }) => {
  return (
    <motion.button
      className="relative group bg-gradient-to-r from-blue-500 to-green-500 text-black font-bold text-lg px-8 py-3 rounded-full overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 flex items-center justify-center">
        {children}
        <ChevronRight className="ml-2 h-5 w-5" />
      </span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600"
        initial={{ x: "100%" }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        initial={{ boxShadow: "0 0 0 0 rgba(59, 130, 246, 0)" }}
        whileHover={{ boxShadow: "0 0 20px 5px rgba(59, 130, 246, 0.7)" }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}

export function Hero({ t }) {
  const [key, setKey] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setKey(prevKey => prevKey + 1)
    }, 15000) // Reinicia la animación cada 15 segundos

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="min-h-[80vh] flex items-center justify-center text-center bg-gradient-to-b from-black via-gray-900 to-black p-4 -mb-20">
      <div className="max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-green-600 text-transparent bg-clip-text">
          <TypewriterText key={`title-${key}`} text={t.title} typingSpeed={150} />
        </h1>
        <p className="text-xl sm:text-2xl text-blue-400 mb-8 h-16">
          <TypewriterText key={`subtitle-${key}`} text={t.subtitle} delay={4} typingSpeed={100} />
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 8, duration: 0.5 }}
        >
          <FuturisticButton>{t.cta}</FuturisticButton>
        </motion.div>
      </div>
    </section>
  )
}