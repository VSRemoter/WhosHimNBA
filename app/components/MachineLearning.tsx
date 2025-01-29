'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function MachineLearning() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">The Power of Machine Learning</h2>
          <p className="text-xl mb-6">
            Our advanced algorithms analyze thousands of data points to provide unparalleled insights into player performance, team dynamics, and game strategies.
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>Real-time performance predictions</li>
            <li>Injury risk assessment</li>
            <li>Opponent strategy analysis</li>
            <li>Player development tracking</li>
          </ul>
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Machine Learning in Basketball"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}

