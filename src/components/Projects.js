'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Proyecto Daskalos",
    description: "Plataforma de tutorías de matemáticas galardonada con la Beca Ford Philanthropy Fellowship.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "VoluntRED",
    description: "Plataforma de voluntariado social que obtuvo una inversión de $1500 para su incubación.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "ODS Jalisco",
    description: "Iniciativas para promover los Objetivos de Desarrollo Sostenible en Jalisco.",
    image: "/placeholder.svg?height=200&width=300"
  }
]

export function Projects() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <h2 className="text-4xl font-bold mb-10 text-center text-green-400">Proyectos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gray-900 border-blue-500 border-2 overflow-hidden hover:shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle className="text-green-400">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-300">{project.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}