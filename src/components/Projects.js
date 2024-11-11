'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from './Cards/ProjectCard'

export function Projects({ t }) {
  const projects = [
    {
      key: 'daskalos',
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      key: 'voluntRED',
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      key: 'odsJalisco',
      image: "/placeholder.svg?height=200&width=300"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
          {t.title}
        </h2>
      </motion.div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                title={t[project.key].title}
                description={t[project.key].description}
                image={project.image}
                viewProjectText={t.viewProject}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}