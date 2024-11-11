'use client'

import { motion } from 'framer-motion'

const skills = [
  "React", "Next.js", "Firebase", "Express.js", "Flutter",
  "Git", "GitHub", "MySQL", "MongoDB", "Tailwind CSS"
]

export function Skills() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <h2 className="text-4xl font-bold mb-10 text-center text-green-400">Habilidades Tecnológicas</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 text-blue-300 px-4 py-2 rounded-full border border-green-500 hover:border-blue-500 transition-colors duration-300"
            whileHover={{ scale: 1.1, boxShadow: '0 0 8px rgba(0, 255, 0, 0.5)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  )
}