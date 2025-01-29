import TraitRanking from '../../components/TraitRanking'

const players = [
  { name: "Chris Paul", team: "Phoenix Suns", masbosScore: 27.8, traitSpecificStat: 10.7 },
  { name: "Trae Young", team: "Atlanta Hawks", masbosScore: 27.9, traitSpecificStat: 10.2 },
  { name: "James Harden", team: "Philadelphia 76ers", masbosScore: 29.1, traitSpecificStat: 10.7 },
  { name: "Luka Doncic", team: "Dallas Mavericks", masbosScore: 31.8, traitSpecificStat: 8.0 },
  { name: "Nikola Jokic", team: "Denver Nuggets", masbosScore: 35.7, traitSpecificStat: 9.8 },
  { name: "Russell Westbrook", team: "Los Angeles Clippers", masbosScore: 25.6, traitSpecificStat: 7.5 },
  { name: "Darius Garland", team: "Cleveland Cavaliers", masbosScore: 26.4, traitSpecificStat: 7.8 },
  { name: "Ja Morant", team: "Memphis Grizzlies", masbosScore: 29.5, traitSpecificStat: 8.1 },
  { name: "Tyrese Haliburton", team: "Indiana Pacers", masbosScore: 27.2, traitSpecificStat: 10.4 },
  { name: "LaMelo Ball", team: "Charlotte Hornets", masbosScore: 27.2, traitSpecificStat: 8.4 },
]

export default function BestPlaymakers() {
  return (
    <TraitRanking
      title="Best Playmakers"
      description="Players with exceptional passing and court vision."
      players={players}
      traitStatLabel="APG"
    />
  )
}

