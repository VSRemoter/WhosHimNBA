'use client'

import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Users } from 'lucide-react'

const features = [
  {
    icon: <BarChart3 className="h-12 w-12 mb-4 text-blue-400" />,
    title: 'Advanced Statistics',
    description: 'Dive deep into player and team performance metrics.',
  },
  {
    icon: <TrendingUp className="h-12 w-12 mb-4 text-green-400" />,
    title: 'Predictive Analysis',
    description: 'Forecast game outcomes and player performances.',
  },
  {
    icon: <Users className="h-12 w-12 mb-4 text-yellow-400" />,
    title: 'Team Dynamics',
    description: 'Understand and optimize team compositions and strategies.',
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

