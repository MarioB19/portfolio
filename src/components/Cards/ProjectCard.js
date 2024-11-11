'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProjectCard({ title, description, image, viewProjectText }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-gray-900 border-blue-500 border-2 overflow-hidden hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
            <Button variant="outline" className="text-green-400 border-green-400 hover:bg-green-400 hover:text-gray-900">
              {viewProjectText}
            </Button>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-green-400">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-blue-300">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}