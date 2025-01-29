import { shootersData } from '../data/playerData'
import DataTable from '../components/DataTable'

export default function Best3AndDPlayers() {
  const columns = [
    { header: 'Rank', accessor: 'rank' },
    { header: 'Name', accessor: 'name' },
    { header: 'MP', accessor: 'mp' },
    { header: 'SQ', accessor: 'sq' },
    { header: '3FG%', accessor: 'threeFgPercent' },
    { header: '3PA', accessor: 'threePA' }
  ]

  return (
    <DataTable
      data={shootersData}
      columns={columns}
      title="Best 3 and D Players"
      description="Which players are the most accurate shooters? Formula: 'Shooting Quality (SQ)' Advanced Statistic, Filtered For >300 Minutes, And 3FG% > 35%"
    />
  )
}

