'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { translations } from '@/data/translations'

export default function Home() {
  const [language, setLanguage] = useState('es')
  const t = translations[language]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar language={language} setLanguage={setLanguage} />
      <main>
        <Hero t={t.hero} />
        <Projects t={t.projects} />
        <Skills t={t.skills} />
      </main>
      <motion.footer
        className="text-center py-8 text-green-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p>&copy; 2023 Mario Brandon Muro Ramos. {t.footer.rights}</p>
      </motion.footer>
    </div>
  )
}