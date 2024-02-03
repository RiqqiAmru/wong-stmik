import { redirect } from "next/navigation"

redirect

export default function Home() {
  return (
    redirect('/jadwal')
  )
}
