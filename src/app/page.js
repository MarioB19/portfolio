'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Start'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>
      <motion.footer
        className="text-center py-8 text-green-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p>&copy; 2023 Mario Brandon Muro Ramos. Todos los derechos reservados.</p>
      </motion.footer>
    </div>
  )
}