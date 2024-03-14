"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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

export type Dosen = {
  nama: string;
  no: number;
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
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <Link href=''>Chat Wa Dosen</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
