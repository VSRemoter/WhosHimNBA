"use client"

import { motion } from "framer-motion"
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Line, ComposedChart } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const masbosData = [
  { level: "Good Season", score: 10, color: "#FFD700" },
  { level: "All-time Great", score: 20, color: "#FFA500" },
  { level: "Amazing", score: 30, color: "#FF4500" },
  { level: "GOAT Level", score: 40, color: "#FF0000" },
]

const lineData = [{ score: 0 }, { score: 15 }, { score: 30 }, { score: 45 }]

export default function MASBOS() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-10 text-[#e94560] text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          MASBOS: Mixture of Advanced Statistics and Betting Odd Scores
        </motion.h2>
        <motion.p
          className="text-2xl mb-8 text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          The Mixture of Advanced Statistics and Betting Odd Scores (MASBOS), is an all-in-one metric that perspectives
          from other Advanced Statistics (such as Box Plus-Minus, Estimated Plus-Minus, RAPTOR, and DARKO) to estimate a
          player's overall value while accounting for Betting Odds from the house (using Pinnacle).
        </motion.p>
        <motion.div
          className="text-xl mb-8 text-gray-300 space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p>
            The purpose of our system is to notice whether or not, using the perspectives of multiple Advanced
            Statistics, that capture information such as a player's impact, on/off ratings, offensive load, defensive
            versatility, etc, helps with modeling a player's overall status.
          </p>
          <p>
            The problem with other traditional All-in-one metrics such as Player Efficiency Rating (PER), or Box
            Plus-Mins (BPM), is that they tend to overrate and underrate various aspects of the game. PER & BPM both do
            not account for Team Seed. PER & BPM do not account for the fact that previous MVPs do have an effect on a
            player's odds of winning (Voter Fatigue). We hope that by incorporating Betting Odds, and impact ratings, we
            can create an All-in-one statistic, that may not perfectly model a player's offense or defensive metrics but
            does a good enough job modeling everything about a player.
          </p>
          <p>
            To prevent overfitting, we only took a few parameters, that we thought would best fit the overall message of
            our MASBOS statistic. We took betting odds and combined them with DARKO (The most popular metric used in NBA
            Box Office Teams due to its forecasting nature), Luck-adjusted player Estimate using a Box prior to
            Regularized ON-off (LEBRON) which measures Impact, Estimated Plus-Minus (EPM), another impact metric tends
            to favorite Defensive Ability and On-Off over LEBRON, and finally ,PER (Player Efficiency Rating), as it
            does a great job modeling a player's efficiency (their True Shooting, Impact Per Minute, how many numbers
            they put it adjusted for their time, etc).
          </p>
        </motion.div>
        <motion.ul
          className="list-disc list-inside text-xl text-gray-300 space-y-4 mb-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <li>Incorporates player efficiency, plus-minus, and win shares</li>
          <li>Factors in real-time betting odds for more accurate predictions</li>
          <li>Provides a single, easy-to-understand score for player impact</li>
          <li>Updates dynamically throughout the season</li>
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Card className="bg-black bg-opacity-50">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-[#e94560]">MASBOS Score Interpretation</CardTitle>
              <CardDescription className="text-xl text-gray-300">
                Understanding the impact of MASBOS Scores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  score: {
                    label: "MASBOS Score",
                    color: "#e94560",
                  },
                }}
                className="h-[400px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={masbosData}>
                    <XAxis
                      dataKey="level"
                      type="category"
                      tick={{ fill: "#e94560" }}
                      axisLine={{ stroke: "#e94560" }}
                    />
                    <YAxis type="number" domain={[0, 50]} tick={{ fill: "#e94560" }} axisLine={{ stroke: "#e94560" }} />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="score" fill="url(#colorGradient)">
                      {masbosData.map((entry, index) => (
                        <motion.rect
                          key={`bar-${index}`}
                          initial={{ width: 0 }}
                          animate={{ width: entry.score * 10 }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      ))}
                    </Bar>
                    <Line
                      data={lineData}
                      type="monotone"
                      dataKey="score"
                      stroke="#e94560"
                      strokeWidth={2}
                      dot={{ fill: "#e94560", r: 4 }}
                    />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#e94560" />
                        <stop offset="33%" stopColor="#e94560" />
                        <stop offset="66%" stopColor="#e94560" />
                        <stop offset="100%" stopColor="#e94560" />
                      </linearGradient>
                    </defs>
                  </ComposedChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="mt-8 text-xl text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <p className="mb-4">When looking at MASBOS, the score is interpreted as follows:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              10.0+ is considered a good season (a player who overall contributes to winning and is a positive asset)
            </li>
            <li>
              20.0+ is considered an All-Star level player (think Zion Williamson, a player who has a great impact on a
              team on the winning side)
            </li>
            <li>
              30.0+ is considered Amazing (think MVP-level, your Shai Gilgeous-Alexander, Giannis Antetekoumpo etc)
            </li>
            <li>40.0+ is considered GOAT Level (Think Jordan, LeBron etc)</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

