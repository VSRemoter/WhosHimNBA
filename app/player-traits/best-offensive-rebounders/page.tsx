import TraitRanking from '../../components/TraitRanking'

const players = [
  { name: "Andre Drummond", team: "Chicago Bulls", masbosScore: 24.5, traitSpecificStat: 4.2 },
  { name: "Steven Adams", team: "Memphis Grizzlies", masbosScore: 23.8, traitSpecificStat: 4.1 },
  { name: "Clint Capela", team: "Atlanta Hawks", masbosScore: 24.9, traitSpecificStat: 3.8 },
  { name: "Enes Freedom", team: "Free Agent", masbosScore: 22.1, traitSpecificStat: 3.7 },
  { name: "Jonas Valanciunas", team: "New Orleans Pelicans", masbosScore: 25.6, traitSpecificStat: 3.6 },
  { name: "Rudy Gobert", team: "Minnesota Timberwolves", masbosScore: 27.3, traitSpecificStat: 3.5 },
  { name: "Domantas Sabonis", team: "Sacramento Kings", masbosScore: 28.1, traitSpecificStat: 3.4 },
  { name: "Nikola Jokic", team: "Denver Nuggets", masbosScore: 35.7, traitSpecificStat: 3.3 },
  { name: "Mitchell Robinson", team: "New York Knicks", masbosScore: 23.9, traitSpecificStat: 3.2 },
  { name: "Jarrett Allen", team: "Cleveland Cavaliers", masbosScore: 26.2, traitSpecificStat: 3.1 },
]

export default function BestOffensiveRebounders() {
  return (
    <TraitRanking
      title="Best Offensive Rebounders"
      description="Players who dominate in securing offensive rebounds."
      players={players}
      traitStatLabel="ORPG"
    />
  )
}

