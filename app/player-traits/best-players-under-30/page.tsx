import TraitRanking from '../../components/TraitRanking'

const players = [
  { name: "Giannis Antetokounmpo", team: "Milwaukee Bucks", masbosScore: 33.2, traitSpecificStat: 28 },
  { name: "Luka Doncic", team: "Dallas Mavericks", masbosScore: 31.8, traitSpecificStat: 24 },
  { name: "Nikola Jokic", team: "Denver Nuggets", masbosScore: 35.7, traitSpecificStat: 28 },
  { name: "Joel Embiid", team: "Philadelphia 76ers", masbosScore: 32.5, traitSpecificStat: 29 },
  { name: "Jayson Tatum", team: "Boston Celtics", masbosScore: 29.8, traitSpecificStat: 25 },
  { name: "Devin Booker", team: "Phoenix Suns", masbosScore: 28.9, traitSpecificStat: 26 },
  { name: "Ja Morant", team: "Memphis Grizzlies", masbosScore: 29.5, traitSpecificStat: 23 },
  { name: "Zion Williamson", team: "New Orleans Pelicans", masbosScore: 28.7, traitSpecificStat: 22 },
  { name: "Donovan Mitchell", team: "Cleveland Cavaliers", masbosScore: 28.5, traitSpecificStat: 26 },
  { name: "Bam Adebayo", team: "Miami Heat", masbosScore: 27.6, traitSpecificStat: 25 },
]

export default function BestPlayersUnder30() {
  return (
    <TraitRanking
      title="Best Players Under 30"
      description="Top-performing players who are under 30 years old."
      players={players}
      traitStatLabel="Age"
    />
  )
}

