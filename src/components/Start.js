'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center bg-gradient-to-b from-black via-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-green-600 text-transparent bg-clip-text">
          Mario Brandon Muro Ramos
        </h1>
        <p className="text-2xl text-blue-400 mb-8">Desarrollador de Software & Innovador Social</p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button className="bg-green-600 hover:bg-green-700 text-black font-bold">
            Descubre mis proyectos
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}