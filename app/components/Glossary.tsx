"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface GlossaryTerm {
  term: string
  definition: string
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: "SQ (Shooting Quality)",
    definition:
      "Measures an NBA player's ability to shoot the ball efficiently, while factoring other things like spacing, the fact that 3s > 2s, etc, converted on a 1-100 scale (1 being the worst, 100 being the best).",
  },
  {
    term: "MASBOS",
    definition:
      "Mixture of Advanced Statistics and Betting Odd Scores. An all-in-one metric that combines perspectives from other Advanced Statistics to estimate a player's overall value while accounting for Betting Odds.",
  },
  {
    term: "LEBRON",
    definition:
      "Luck-adjusted player Estimate using a Box prior Regularized ON-off. Measures a player's total contribution to their team's success.",
  },
  {
    term: "DARKO",
    definition:
      "Daily Adjusted and Regressed Kalman Optimized. A predictive metric that projects a player's future performance based on their past performance and various other factors.",
  },
  {
    term: "BPM (Box Plus/Minus)",
    definition:
      "A box score-based metric that estimates a player's contribution to the team's performance, measured in points above or below league average per 100 possessions.",
  },
  {
    term: "EPM (Estimated Plus-Minus)",
    definition:
      "An advanced metric that estimates a player's impact on team performance, accounting for teammates, opponents, and other contextual factors.",
  },
  {
    term: "PER (Player Efficiency Rating)",
    definition:
      "A per-minute rating of a player's productivity, summarizing all of a player's positive accomplishments, subtracting negative accomplishments, and returning a per-minute rating of a player's performance.",
  },
]

export default function Glossary() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-10 text-[#e94560] text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Advanced Statistics Glossary
        </motion.h2>
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          {glossaryTerms.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-[#e94560]">{item.term}</h3>
              <p className="text-gray-300">{item.definition}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

