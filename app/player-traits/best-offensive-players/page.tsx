import TraitRanking from '../../components/TraitRanking'

const players = [
  { name: "Kevin Durant", team: "Phoenix Suns", masbosScore: 31.5, traitSpecificStat: 29.1 },
  { name: "Joel Embiid", team: "Philadelphia 76ers", masbosScore: 32.5, traitSpecificStat: 33.1 },
  { name: "Giannis Antetokounmpo", team: "Milwaukee Bucks", masbosScore: 33.2, traitSpecificStat: 31.1 },
  { name: "Stephen Curry", team: "Golden State Warriors", masbosScore: 30.9, traitSpecificStat: 29.4 },
  { name: "Luka Doncic", team: "Dallas Mavericks", masbosScore: 31.8, traitSpecificStat: 32.4 },
  { name: "Damian Lillard", team: "Portland Trail Blazers", masbosScore: 29.7, traitSpecificStat: 32.2 },
  { name: "Devin Booker", team: "Phoenix Suns", masbosScore: 28.9, traitSpecificStat: 27.8 },
  { name: "Jayson Tatum", team: "Boston Celtics", masbosScore: 29.8, traitSpecificStat: 30.1 },
  { name: "Donovan Mitchell", team: "Cleveland Cavaliers", masbosScore: 28.5, traitSpecificStat: 28.3 },
  { name: "Trae Young", team: "Atlanta Hawks", masbosScore: 27.9, traitSpecificStat: 26.2 },
]

export default function BestOffensivePlayers() {
  return (
    <TraitRanking
      title="Best Offensive Players"
      description="Players who excel in scoring and creating opportunities."
      players={players}
      traitStatLabel="PPG"
    />
  )
}

