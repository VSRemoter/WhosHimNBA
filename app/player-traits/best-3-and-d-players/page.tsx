import TraitRanking from '../../components/TraitRanking'

const players = [
  { name: "Mikal Bridges", team: "Brooklyn Nets", masbosScore: 26.7, traitSpecificStat: "1.8 SPG" },
  { name: "OG Anunoby", team: "Toronto Raptors", masbosScore: 25.9, traitSpecificStat: "1.9 SPG" },
  { name: "Robert Covington", team: "Los Angeles Clippers", masbosScore: 23.8, traitSpecificStat: "1.4 SPG" },
  { name: "Jrue Holiday", team: "Milwaukee Bucks", masbosScore: 27.5, traitSpecificStat: "1.5 SPG" },
  { name: "Klay Thompson", team: "Golden State Warriors", masbosScore: 26.5, traitSpecificStat: "0.7 SPG" },
  { name: "Marcus Smart", team: "Boston Celtics", masbosScore: 25.3, traitSpecificStat: "1.5 SPG" },
  { name: "Lonzo Ball", team: "Chicago Bulls", masbosScore: 24.8, traitSpecificStat: "1.8 SPG" },
  { name: "Paul George", team: "Los Angeles Clippers", masbosScore: 28.6, traitSpecificStat: "1.5 SPG" },
  { name: "Matisse Thybulle", team: "Portland Trail Blazers", masbosScore: 22.1, traitSpecificStat: "1.7 SPG" },
  { name: "Dorian Finney-Smith", team: "Dallas Mavericks", masbosScore: 23.4, traitSpecificStat: "1.0 SPG" },
]

export default function Best3AndDPlayers() {
  return (
    <TraitRanking
      title="Best 3&D Players"
      description="Players who excel in both three-point shooting and defense."
      players={players}
      traitStatLabel="SPG"
    />
  )
}

