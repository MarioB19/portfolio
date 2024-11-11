'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Calendar, Building2, CheckCircle, Clock } from 'lucide-react'

const EducationItem = ({ item, index, isSelected, onClick, t }) => (
  <motion.div
    layout
    onClick={() => onClick(index)}
    className={`cursor-pointer bg-gray-900 rounded-lg p-4 border-2 ${
      isSelected ? 'border-green-500' : 'border-blue-500'
    } hover:border-green-400 transition-all duration-300`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div layout className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <GraduationCap className={`h-8 w-8 ${isSelected ? 'text-green-400' : 'text-blue-400'}`} />
        <h3 className={`text-lg font-bold ${isSelected ? 'text-green-400' : 'text-blue-400'}`}>{item.degree}</h3>
      </div>
      {item.completed ? (
        <CheckCircle className="text-green-500 h-6 w-6" />
      ) : (
        <Clock className="text-yellow-500 h-6 w-6" />
      )}
    </motion.div>
    <AnimatePresence>
      {isSelected && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 space-y-2"
        >
          <div className="flex items-center space-x-2">
            <Building2 className="text-blue-300 h-5 w-5" />
            <p className="text-blue-300">{item.institution}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="text-gray-400 h-5 w-5" />
            <p className="text-gray-400">{item.period}</p>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {item.completed ? t.completed : t.inProgress}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
)

export function Education({ t }) {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const handleItemClick = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index)
  }

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
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {t.items.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <EducationItem
                item={item}
                index={index}
                isSelected={selectedIndex === index}
                onClick={handleItemClick}
                t={t}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}