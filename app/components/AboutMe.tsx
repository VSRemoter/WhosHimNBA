"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutMe() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8 text-[#e94560] text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          <motion.div
            className="w-48 h-48 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full"
            />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#e94560]">John Doe</h3>
            <p className="text-gray-300 mb-4">
              I'm a passionate basketball analyst and the creator of MASBOS. With over 10 years of experience in sports
              analytics, I've developed a deep understanding of the game and its underlying statistics.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Former college basketball player</li>
              <li>Master's degree in Sports Analytics</li>
              <li>Published author on advanced basketball statistics</li>
              <li>Regular contributor to major sports networks</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

