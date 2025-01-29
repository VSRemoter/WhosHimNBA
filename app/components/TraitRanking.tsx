"use client"

import { motion } from "framer-motion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Player {
  [key: string]: string | number
}

interface Column {
  key: string
  label: string
}

interface TraitRankingProps {
  title: string
  description: string
  additionalDescription?: string
  players: Player[]
  columns: Column[]
}

export default function TraitRanking({
  title,
  description,
  additionalDescription,
  players,
  columns,
}: TraitRankingProps) {
  const getBestValue = (key: string) => {
    return Math.max(
      ...players.map((player) =>
        typeof player[key] === "number" ? (player[key] as number) : Number.parseFloat(player[key] as string) || 0,
      ),
    )
  }

  const bestValues = columns.reduce(
    (acc, column) => {
      acc[column.key] = getBestValue(column.key)
      return acc
    },
    {} as Record<string, number>,
  )

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-6 text-[#e94560] text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {title}
        </motion.h2>
        <motion.div
          className="bg-black bg-opacity-50 p-6 rounded-lg overflow-x-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHead key={column.key} className="text-[#e94560]">
                    {column.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {players.map((player, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <TableCell
                      key={column.key}
                      className={player[column.key] === bestValues[column.key] ? "text-green-400 font-bold" : ""}
                    >
                      {player[column.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <motion.p
            className="text-lg mt-6 text-gray-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {description}
          </motion.p>
          {additionalDescription && (
            <motion.p
              className="text-lg mt-6 text-gray-300 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {additionalDescription}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

