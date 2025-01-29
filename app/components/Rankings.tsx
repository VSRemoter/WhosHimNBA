"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const rankingCategories = ["MVP", "Best Players", "6MAN"]

const playerData = {
  MVP: [
    { name: "Nikola Jokic", masbos: 10, lebron: 6.34, darko: 6.47, epm: 9.2, per: 32.87 },
    { name: "Shai Gilgeous-Alexander", masbos: 9.9, lebron: 6.56, darko: 5.97, epm: 8.2, per: 30.88 },
    { name: "Giannis Antetokounmpo", masbos: 9.8, lebron: 4.3, darko: 6.04, epm: 5.8, per: 30.05 },
    { name: "Karl-Anthony Towns", masbos: 9.7, lebron: 4.19, darko: 3.19, epm: 3.8, per: 26.68 },
    { name: "Jayson Tatum", masbos: 9.6, lebron: 4.77, darko: 5.66, epm: 5.4, per: 23.03 },
  ],
  "Best Players": [
    { name: "Nikola Jokic", masbos: 10, lebron: 6.34, darko: 6.47, epm: 9.2, per: 32.87 },
    { name: "Gilgeous-Alexander", masbos: 9.9, lebron: 6.56, darko: 5.97, epm: 8.2, per: 30.88 },
    { name: "Giannis Antetokounmpo", masbos: 9.8, lebron: 4.3, darko: 6.04, epm: 5.8, per: 30.05 },
    { name: "Luka Doncic", masbos: 9.7, lebron: 4.16, darko: 5.9, epm: 6.3, per: 24.67 },
    { name: "Jayson Tatum", masbos: 9.6, lebron: 4.77, darko: 5.66, epm: 5.4, per: 23.03 },
  ],
  "6MAN": [
    { name: "Payton Pritchard", masbos: 10, lebron: 1.95, darko: 0.98, epm: 2.2, per: 18.1 },
    { name: "Amen Thompson", masbos: 7.6, lebron: 1.29, darko: 2.3, epm: 2.4, per: 18.0 },
    { name: "De'Andre Hunter", masbos: 8.5, lebron: 0.21, darko: 0.11, epm: 0.0, per: 17.3 },
    { name: "Santi Aldama", masbos: 6.5, lebron: 2.05, darko: 0.65, epm: 1.4, per: 18.6 },
    { name: "Bradley Beal", masbos: 4.8, lebron: -1.08, darko: -0.76, epm: -1.2, per: 14.6 },
  ],
}

const getBestValue = (data: any[], key: string) => {
  return Math.max(...data.map((item) => Number.parseFloat(item[key]) || 0))
}

export default function Rankings() {
  const [activeCategory, setActiveCategory] = useState("MVP")

  const currentPlayerData = playerData[activeCategory as keyof typeof playerData]

  const bestPlayerValues = {
    masbos: getBestValue(currentPlayerData, "masbos"),
    lebron: getBestValue(currentPlayerData, "lebron"),
    darko: getBestValue(currentPlayerData, "darko"),
    epm: getBestValue(currentPlayerData, "epm"),
    per: getBestValue(currentPlayerData, "per"),
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-10 text-[#e94560] text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Rankings
        </motion.h2>
        <div className="mb-8 flex justify-center space-x-4">
          {rankingCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition-colors duration-300 text-xl ${
                activeCategory === category
                  ? "bg-[#e94560] text-white"
                  : "text-gray-300 hover:bg-[#e94560] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <motion.div
          className="bg-black bg-opacity-50 p-6 rounded-lg overflow-x-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-3xl font-semibold mb-6 text-[#e94560]">{activeCategory} Rankings</h3>
          {activeCategory === "MVP" && (
            <p className="text-gray-300 mb-4">
              MVP Ranks based off of: EPM, LEBRON, DARKO, & PER Advanced Stats & Filtered for Odds, Team Seed, and
              whether or not they won MVP the year before
            </p>
          )}
          {activeCategory === "Best Players" && (
            <p className="text-gray-300 mb-4">
              Players ranked based on MASBOS + unfiltered for Team Seeding, Odds, and whether or not they won the MVP in
              the previous year
            </p>
          )}
          {activeCategory === "6MAN" && (
            <p className="text-gray-300 mb-4">
              Players ranked by MASBOS + Must be accompanied and shit on the bench (can not be a starting player for
              majority of the season). Ranking is based on LEBRON, DARKO, EPM and PER as Team Seed and other parameters
              don't contribute much
            </p>
          )}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-[#e94560]">Player Name</TableHead>
                <TableHead className="text-[#e94560]">MASBOS</TableHead>
                <TableHead className="text-[#e94560]">LEBRON</TableHead>
                <TableHead className="text-[#e94560]">DARKO</TableHead>
                <TableHead className="text-[#e94560]">EPM</TableHead>
                <TableHead className="text-[#e94560]">PER</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPlayerData.map((player, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{player.name}</TableCell>
                  <TableCell className={player.masbos === bestPlayerValues.masbos ? "text-green-400 font-bold" : ""}>
                    {player.masbos.toFixed(1)}
                  </TableCell>
                  <TableCell className={player.lebron === bestPlayerValues.lebron ? "text-green-400 font-bold" : ""}>
                    {player.lebron.toFixed(2)}
                  </TableCell>
                  <TableCell className={player.darko === bestPlayerValues.darko ? "text-green-400 font-bold" : ""}>
                    {player.darko.toFixed(2)}
                  </TableCell>
                  <TableCell className={player.epm === bestPlayerValues.epm ? "text-green-400 font-bold" : ""}>
                    {player.epm.toFixed(1)}
                  </TableCell>
                  <TableCell className={player.per === bestPlayerValues.per ? "text-green-400 font-bold" : ""}>
                    {player.per.toFixed(1)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  )
}

