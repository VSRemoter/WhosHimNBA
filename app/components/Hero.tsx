'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Hero() {
  const router = useRouter()

  const handleExploreMABSOS = () => {
    router.push('/masbos')
  }

  return (
    <section className="relative h-[66.67vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black to-yellow-900 opacity-50"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-8 text-yellow-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          WhosHim NBA
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl mb-10 text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Modelling Player Performances Using Advanced Statistics & Betting Odds
        </motion.p>
        <motion.button
          className="bg-yellow-600 text-white px-10 py-4 rounded-full font-semibold text-xl shadow-lg hover:bg-yellow-700 transition duration-300 flex items-center justify-center mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleExploreMABSOS}
        >
          Explore MASBOS <ArrowRight className="ml-3 w-6 h-6" />
        </motion.button>
      </div>
    </section>
  )
}

