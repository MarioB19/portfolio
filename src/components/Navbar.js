'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from 'lucide-react'

export function Navbar() {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-green-600 text-transparent bg-clip-text"
          whileHover={{ scale: 1.05 }}
        >
          MB
        </motion.div>
        <div className="flex space-x-4">
          <Button variant="ghost" size="icon" className="text-green-400 hover:text-blue-300">
            <Mail className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-green-400 hover:text-blue-300">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-green-400 hover:text-blue-300">
            <Linkedin className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}