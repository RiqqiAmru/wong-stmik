"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Jadwal = {
  kode: string;
  makul: string;
  kelas: string;
  hari: string;
  jam: string;
  ruang: string;
  dosen: string;
}

export const columns: ColumnDef<Jadwal>[] = [
  {
    accessorKey: "kode",
    header: "Kode",
  },
  {
    accessorKey: "makul",
    header: "Mata Kuliah",
  },
  {
    accessorKey: "kelas",
    header: "Kelas",
  },
  {
    accessorKey: "hari",
    header: "Hari",
  },
  {
    accessorKey: "jam",
    header: "Jam",
  },
  {
    accessorKey: "ruang",
    header: "Ruang",
  },
  {
    accessorKey: "dosen",
    header: "Dosen",
  },
]
