'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const traitCategories = [
  {
    title: "Best Offensive Players",
    description: "Players who excel in scoring and creating opportunities.",
    slug: "best-offensive-players"
  },
  {
    title: "Best Shooters",
    description: "Players with exceptional shooting accuracy from various ranges.",
    slug: "best-shooters"
  },
  {
    title: "Best 3&D Players",
    description: "Players who excel in both three-point shooting and defense.",
    slug: "best-3-and-d-players"
  },
  {
    title: "Best Offensive Rebounders",
    description: "Players who dominate in securing offensive rebounds.",
    slug: "best-offensive-rebounders"
  },
  {
    title: "Best Playmakers",
    description: "Players with exceptional passing and court vision.",
    slug: "best-playmakers"
  },
  {
    title: "Best Players Under 30",
    description: "Top-performing players who are under 30 years old.",
    slug: "best-players-under-30"
  }
]

export default function PlayerTraits() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-10 text-yellow-500 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Player Traits
        </motion.h2>
        <motion.p
          className="text-xl mb-12 text-gray-300 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Discover which players excel in specific categories based on our MASBOS analysis.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {traitCategories.map((category, index) => (
            <motion.div
              key={category.slug}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-yellow-500">{category.title}</h3>
              <p className="text-gray-300 mb-6">{category.description}</p>
              <Link
                href={`/player-traits/${category.slug}`}
                className="bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-700 transition duration-300"
              >
                View Rankings
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

