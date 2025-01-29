import { offensivePlayersData } from '../data/playerData'
import DataTable from '../components/DataTable'

export default function BestOffensivePlayers() {
  const columns = [
    { header: 'Rank', accessor: 'rank' },
    { header: 'Name', accessor: 'name' },
    { header: 'O-MASBOS', accessor: 'oMasbos' },
    { header: 'O-LEBRON', accessor: 'oLebron' },
    { header: 'O-DARKO', accessor: 'oDarko' },
    { header: 'O-BPM', accessor: 'oBpm' },
    { header: 'O-EPM', accessor: 'oEpm' }
  ]

  return (
    <DataTable
      data={offensivePlayersData}
      columns={columns}
      title="Best Offensive Players"
      description="Top 10 offensive players ranked by O-MASBOS (Offensive MASBOS) and other offensive metrics."
    />
  )
}

