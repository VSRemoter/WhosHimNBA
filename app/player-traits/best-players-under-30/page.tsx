import { playersUnder30Data } from '../data/playerData'
import DataTable from '../components/DataTable'

export default function BestPlayersUnder30() {
  const columns = [
    { header: 'Rank', accessor: 'rank' },
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: 'age' },
    { header: 'PPG', accessor: 'ppg' },
    { header: 'MASBOS', accessor: 'masbos' },
    { header: 'Win Shares', accessor: 'winShares' },
    { header: 'VORP', accessor: 'vorp' }
  ]

  return (
    <DataTable
      data={playersUnder30Data}
      columns={columns}
      title="Best Players Under 30"
      description="Top-performing players who are under 30 years old, ranked by overall impact and potential."
    />
  )
}

