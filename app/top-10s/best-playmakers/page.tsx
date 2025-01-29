import TraitRanking from "../../components/TraitRanking"

const players = [
  { rank: 1, name: "Chris Paul", masbos: 10.0, passerRating: 10, apg: 8.2, tov: 1.6, apgPercent: "38.8%" },
  { rank: 2, name: "Tyrese Haliburton", masbos: 9.7, passerRating: 9.4, apg: 8.8, tov: 1.9, apgPercent: "35.7%" },
  { rank: 3, name: "Tyus Jones", masbos: 9.6, passerRating: 9.2, apg: 6.1, tov: 1.3, apgPercent: "29.4%" },
  { rank: 4, name: "Nikola Jokic", masbos: 9.6, passerRating: 9, apg: 9.9, tov: 3.1, apgPercent: "43.9%" },
  { rank: 5, name: "Trae Young", masbos: 9.6, passerRating: 9, apg: 11.7, tov: 4.5, apgPercent: "47.5%" },
  { rank: 6, name: "Josh Giddey", masbos: 9.5, passerRating: 8.7, apg: 6.7, tov: 2.7, apgPercent: "31.9%" },
  { rank: 7, name: "LeBron James", masbos: 9.5, passerRating: 8.7, apg: 8.9, tov: 3.8, apgPercent: "43.8%" },
  { rank: 8, name: "Davion Mitchell", masbos: 9.5, passerRating: 8.6, apg: 4.5, tov: 1.7, apgPercent: "23.6%" },
  { rank: 9, name: "Draymond Green", masbos: 9.3, passerRating: 8.5, apg: 5.4, tov: 2.5, apgPercent: "26.4%" },
  { rank: 10, name: "Cade Cunningham", masbos: 9.2, passerRating: 8.2, apg: 9.3, tov: 4.5, apgPercent: "43.6%" },
]

export default function BestPlaymakers() {
  return (
    <TraitRanking
      title="Best Playmakers"
      description="The Top 10 Best Playmakers in the league, ranked by MASBOS and other playmaking metrics."
      players={players}
      columns={[
        { key: "rank", label: "Rank" },
        { key: "name", label: "Player" },
        { key: "masbos", label: "MASBOS" },
        { key: "passerRating", label: "PasserRating" },
        { key: "apg", label: "APG" },
        { key: "tov", label: "TOV" },
        { key: "apgPercent", label: "APG%" },
      ]}
    />
  )
}

