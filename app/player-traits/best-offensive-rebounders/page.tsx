import { offensiveReboundersData } from '../data/playerData'
import DataTable from '../components/DataTable'

export default function BestOffensiveRebounders() {
  const columns = [
    { header: 'Rank', accessor: 'rank' },
    { header: 'Name', accessor: 'name' },
    { header: 'MP', accessor: 'mp' },
    { header: 'ORPG', accessor: 'orpg' },
    { header: 'OREB%', accessor: 'orebPercent' },
    { header: 'Putbacks', accessor: 'putbacks' },
    { header: '2nd Chance', accessor: 'secondChance' }
  ]

  return (
    <DataTable
      data={offensiveReboundersData}
      columns={columns}
      title="Best Offensive Rebounders"
      description="Players who dominate in securing offensive rebounds and creating second-chance opportunities."
    />
  )
}

