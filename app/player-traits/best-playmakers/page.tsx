import { playmakersData } from '../data/playerData'
import DataTable from '../components/DataTable'

export default function BestPlaymakers() {
  const columns = [
    { header: 'Rank', accessor: 'rank' },
    { header: 'Name', accessor: 'name' },
    { header: 'MASBOS', accessor: 'masbos' },
    { header: 'PasserRating', accessor: 'passerRating' },
    { header: 'APG', accessor: 'apg' },
    { header: 'TOV', accessor: 'tov' },
    { header: 'APG%', accessor: 'apgPercent' }
  ]

  return (
    <DataTable
      data={playmakersData}
      columns={columns}
      title="Best Playmakers"
      description="The Top 10 Best Playmakers in the league, ranked by MASBOS and other playmaking metrics."
    />
  )
}

