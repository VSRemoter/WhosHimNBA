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
              src="/LinkedIn Photo.jpg"
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
            <h3 className="text-2xl font-semibold mb-4 text-[#e94560]">Shant Bolat</h3>
            <p className="text-gray-300 mb-4">
              I started WhosHim NBA, as a fun side project, trying to see if I could build 
              a NBA Statistics dashboard, with a modern, sleek build. I'm a big fan of the NBA,
              and I love to watch and analyze the games. I'm also a big fan of
              numbers, building things. As a stat nerd, my favorite player in 
              the league is Nikola Jokic, and LeBron James, and my favorite team is the 
              New York Knicks. 

              Building, and developing this website was a fun, challenging expierence. 
              I'm almost certain, I will comeback to this project, and add more features, 
              expand and hopefully bring some competition. The NBA Statistics niche
              definitely needs more competition, and I hope to bring some to the table. 
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Bachelor of Science in Quantitative Finance</li>
              <li>Bachelor of Science in Quantitative Finance</li>
              <li>Published author on advanced basketball statistics</li>
              <li>Regular contributor to major sports networks</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

