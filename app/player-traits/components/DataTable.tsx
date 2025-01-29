'use client'

import React from 'react'

interface TableProps {
  data: Record<string, any>[];
  columns: {
    header: string;
    accessor: string;
  }[];
  title: string;
  description: string;
}

export default function DataTable({ data, columns, title, description }: TableProps) {
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <div className="flex justify-center p-4">Loading...</div>
  }

  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.accessor} className="px-4 py-2">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={column.accessor} className="px-4 py-2">
                    {row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-gray-600">{description}</p>
    </div>
  )
} 