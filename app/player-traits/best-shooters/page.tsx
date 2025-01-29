import TraitRanking from "../../components/TraitRanking"

const players = [
  { rank: 1, name: "Stephen Curry", age: "-", mp: 941, sq: 100, threeFgPercent: "41.1%", threePa: 10.8 },
  { rank: 2, name: "Payton Pritchard", age: "-", mp: 1083, sq: 90.1, threeFgPercent: "41.7%", threePa: 8.0 },
  { rank: 3, name: "Kyrie Irving", age: "-", mp: 1068, sq: 88.9, threeFgPercent: "43.2%", threePa: 6.9 },
  { rank: 4, name: "AJ Green", age: "-", mp: 761, sq: 88.4, threeFgPercent: "44.2%", threePa: 5.2 },
  { rank: 5, name: "Luke Kennard", age: "-", mp: 556, sq: 87.9, threeFgPercent: "46.5%", threePa: 4.4 },
  { rank: 6, name: "Duncan Robinson", age: "-", mp: 804, sq: 87.8, threeFgPercent: "38.0%", threePa: 6.4 },
  { rank: 7, name: "Klay Thompson", age: "-", mp: 947, sq: 87.7, threeFgPercent: "37.9%", threePa: 7.8 },
  { rank: 8, name: "Brice Sensabaugh", age: "-", mp: 517, sq: 87.4, threeFgPercent: "40.8%", threePa: 4.6 },
  { rank: 9, name: "Buddy Hield", age: "-", mp: 883, sq: 86.7, threeFgPercent: "37.6%", threePa: 7.3 },
  { rank: 10, name: "Collin Sexton", age: "-", mp: 1094, sq: 86.1, threeFgPercent: "41.6%", threePa: 4.6 },
]

export default function BestShooters() {
  return (
    <TraitRanking
      title="Best Shooters"
      description="Which players are the most accurate shooters? Formula: &quot;Shooting Quality (SQ)&quot; Advanced Statistic, Filtered For >300 Minutes, And 3FG% > 35%"
      players={players}
      columns={[
        { key: "rank", label: "Rank" },
        { key: "name", label: "Name" },
        { key: "age", label: "Age" },
        { key: "mp", label: "MP" },
        { key: "sq", label: "SQ" },
        { key: "threeFgPercent", label: "3FG%" },
        { key: "threePa", label: "3PA" },
      ]}
    />
  )
}

