'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from './Cards/ProjectCard'
import { getProjects } from '@/data/projects'

export function Projects({ t }) {

  if (!t || !t.projects) {
    console.error('Translations for projects are missing')
    return null // or return a loading state or error message
  }

  const projects = getProjects(t)


  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
          {t.projects.title || 'Featured Projects'}
        </h2>
      </motion.div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              viewProjectText={t.projects.viewProject || 'View Project'}
              projectLink={project.projectLink}
              technologies={project.technologies}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  )
}