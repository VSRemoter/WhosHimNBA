"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const top10Categories = [
  {
    title: "Best Offensive Players",
    description: "Top 10 players who excel in scoring and creating opportunities.",
    slug: "best-offensive-players",
  },
  {
    title: "Best Shooters",
    description: "Top 10 players with exceptional shooting accuracy.",
    slug: "best-shooters",
  },
  {
    title: "Best Playmakers",
    description: "Top 10 players with exceptional passing and court vision.",
    slug: "best-playmakers",
  },
]

export default function Top10s() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-10 text-[#e94560] text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Top 10s
        </motion.h2>
        <motion.p
          className="text-xl mb-12 text-gray-300 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Analyze The Top 10 Players In Categories Using Analysis
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {top10Categories.map((category, index) => (
            <motion.div
              key={category.slug}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#e94560]">{category.title}</h3>
              <p className="text-gray-300 mb-6">{category.description}</p>
              <Link
                href={`/top-10s/${category.slug}`}
                className="bg-[#e94560] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#c73851] transition duration-300"
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

