'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronRight, Bookmark, FileText, Cpu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const MotionLink = motion(Link)

export function ProjectCard({ title, description, image, viewProjectText, projectLink, technologies, t }) {
  const [isHovered, setIsHovered] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-blue-500/50 border-2 overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 h-full flex flex-col">
        <div className="p-4">
          <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden bg-gray-800 group">
            <Image 
              src={image} 
              alt={title}
              layout="fill"
              objectFit="contain"
              className="transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <MotionLink 
                href={projectLink} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button 
                  variant="outline" 
                  className="text-green-400 border-green-400 hover:bg-green-400 hover:text-gray-900 flex items-center space-x-2 backdrop-blur-sm"
                >
                  <span>{viewProjectText}</span>
                  <ExternalLink size={16} />
                </Button>
              </MotionLink>
            </div>
          </div>
        </div>
        <CardContent className="p-6 flex-1 flex flex-col">
          <motion.div 
            variants={childVariants}
            className="flex items-center space-x-2 mb-4"
          >
            <Bookmark className="text-green-400" size={24} />
            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              {title}
            </h3>
          </motion.div>
          <motion.div 
            variants={childVariants}
            className="mb-6 flex-1"
          >
            <div className="flex items-start space-x-2">
              <FileText className="text-blue-400 mt-1 flex-shrink-0" size={20} />
              <p className="text-blue-300 leading-relaxed text-lg font-light tracking-wide" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                {description}
              </p>
            </div>
          </motion.div>
        
          <motion.div 
            variants={childVariants}
            className="mb-4"
          >
            <div className="flex items-center space-x-2 mb-2">
              <Cpu className="text-purple-400" size={20} />
              <span className="text-purple-400 font-semibold">{!t.english ? "Tecnologías" : "Technologies"}</span>
            </div>
            <div className="flex flex-wrap gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-gray-800 rounded-lg p-3 shadow-md hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex flex-col items-center"
                  title={tech.name}
                >
                  <Image 
                    src={tech.icon} 
                    alt={tech.name} 
                    width={32} 
                    height={32} 
                  />
                  <span className="mt-2 text-xs text-gray-400">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-right"
              >
                <MotionLink 
                  href={projectLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-green-400 hover:text-blue-400 transition-colors duration-300 font-semibold text-base"
                  whileHover={{ x: 5 }}
                >
                  {t.learnMore}
                  <ChevronRight className="ml-1 h-5 w-5" />
                </MotionLink>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  )
}