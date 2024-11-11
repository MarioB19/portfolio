'use client'

import { motion } from 'framer-motion'

const skillKeys = [
  "react", "nextjs", "firebase", "expressjs", "flutter",
  "git", "github", "mysql", "mongodb", "tailwindcss"
]

export function Skills({ t }) {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <motion.h2 
        className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t.title}
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skillKeys.map((skillKey, index) => (
          <motion.div
            key={skillKey}
            className="bg-gray-800 text-blue-300 px-4 py-2 rounded-full border border-green-500 hover:border-blue-500 transition-colors duration-300"
            whileHover={{ 
              scale: 1.1, 
              boxShadow: '0 0 8px rgba(0, 255, 0, 0.5)',
              color: '#4ade80', // green-400
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {t[skillKey]}
          </motion.div>
        ))}
      </div>
    </section>
  )
}