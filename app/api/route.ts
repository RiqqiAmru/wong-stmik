import { NextResponse } from "next/server";
// import { jadwal, getKode } from "../../data/jadwal";
import { get } from "http";

const jadwal = require("../../data/gasal-22-23.json");
export async function GET() {
  return NextResponse.json(jadwal);
}
