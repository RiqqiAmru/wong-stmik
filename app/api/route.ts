import { NextResponse } from "next/server";

const jadwal = require("../../data/gasal-22-23.json");
export async function GET() {
  return NextResponse.json(jadwal);
}
