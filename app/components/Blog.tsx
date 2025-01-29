'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: "The Impact of MASBOS on Team Strategy",
    excerpt: "Exploring how teams are adapting their gameplay based on MASBOS insights.",
    date: "2023-06-15",
    slug: "impact-of-masbos-on-team-strategy"
  },
  {
    id: 2,
    title: "Rising Stars: Predicting the Next MVP with MASBOS",
    excerpt: "Using our advanced analytics to forecast potential MVP candidates for the upcoming season.",
    date: "2023-06-10",
    slug: "predicting-next-mvp-with-masbos"
  },
  {
    id: 3,
    title: "Defensive Dominance: MASBOS and DPOY Predictions",
    excerpt: "How MASBOS is revolutionizing our understanding of defensive impact in basketball.",
    date: "2023-06-05",
    slug: "masbos-and-dpoy-predictions"
  },
]

export default function Blog() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-10 text-yellow-500 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Basketball Blog and Research
        </motion.h2>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: post.id * 0.2 }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-yellow-500">{post.title}</h3>
              <p className="text-xl text-gray-300 mb-6">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">{post.date}</span>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-xl text-yellow-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

