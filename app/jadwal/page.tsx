import { Jadwal, columns, Dosen } from "./component/columns"
import { DataTable } from "./component/data-table"

async function getData(): Promise<Jadwal[]> {
  // Fetch data from your API here.
  const staticData = await fetch(`${process.env.BASE_URL}/api`, { cache: 'force-cache' })
  const data = await staticData.json()
  return data.jadwal;
}


export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold ">Jadwal Kuliah </h1>
      <p className="mb-3 text-muted-foreground">STMIK WP Pekalongan Tahun Ajaran 2022/2023</p>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
