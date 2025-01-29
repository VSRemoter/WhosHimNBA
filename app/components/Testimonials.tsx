'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    quote: "HoopSmart Analytics has revolutionized our team's strategy. We've seen a 30% improvement in our win rate.",
    author: "Coach John Smith",
    team: "LA Dunkers",
  },
  {
    quote: "The insights provided by HoopSmart have been invaluable for my personal development as a player.",
    author: "Sarah Johnson",
    team: "NY Ballers",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-indigo-900">
      <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <p className="text-lg mb-4">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <Image
                src="/placeholder.svg?height=50&width=50"
                alt={testimonial.author}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-300">{testimonial.team}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

