import TraitRanking from "../../components/TraitRanking"

const players = [
  { rank: 1, name: "Nikola Jokic", oMasbos: 10.0, oLebron: 6.1, oDarko: 5.0, oBpm: 10.6, oEpm: 7.6 },
  { rank: 2, name: "Shai Gilgeous-Alexander", oMasbos: 9.8, oLebron: 5.3, oDarko: 4.1, oBpm: 8.4, oEpm: 5.9 },
  { rank: 3, name: "Luka Doncic", oMasbos: 9.6, oLebron: 4.1, oDarko: 4.7, oBpm: 5.6, oEpm: 5.2 },
  { rank: 4, name: "Jalen Brunson", oMasbos: 9.4, oLebron: 3.9, oDarko: 3.5, oBpm: 5.0, oEpm: 5.4 },
  { rank: 5, name: "Jayson Tatum", oMasbos: 9.4, oLebron: 3.7, oDarko: 3.6, oBpm: 5.1, oEpm: 4.0 },
  { rank: 6, name: "Stephen Curry", oMasbos: 9.4, oLebron: 2.3, oDarko: 3.8, oBpm: 6.0, oEpm: 5.4 },
  { rank: 7, name: "Devin Booker", oMasbos: 9.2, oLebron: 3.6, oDarko: 3.2, oBpm: 3.3, oEpm: 5.1 },
  { rank: 8, name: "Damian Lillard", oMasbos: 9.2, oLebron: 3.2, oDarko: 3.4, oBpm: 4.6, oEpm: 4.0 },
  { rank: 9, name: "Giannis Antetokounmpo", oMasbos: 9.1, oLebron: 3.6, oDarko: 2.6, oBpm: 6.1, oEpm: 4.6 },
  { rank: 10, name: "Tyrese Haliburton", oMasbos: 9.1, oLebron: 3.0, oDarko: 3.2, oBpm: 4.4, oEpm: 5.0 },
]

export default function BestOffensivePlayers() {
  return (
    <TraitRanking
      title="Best Offensive Players"
      description="Top 10 offensive players ranked by O-MASBOS (Offensive MASBOS) and other offensive metrics."
      players={players}
      columns={[
        { key: "rank", label: "Rank" },
        { key: "name", label: "Name" },
        { key: "oMasbos", label: "O-MASBOS" },
        { key: "oLebron", label: "O-LEBRON" },
        { key: "oDarko", label: "O-DARKO" },
        { key: "oBpm", label: "O-BPM" },
        { key: "oEpm", label: "O-EPM" },
      ]}
    />
  )
}

