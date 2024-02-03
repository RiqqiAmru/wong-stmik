import { expect, test } from "vitest";

/**
 * displaying form to submit user class
 * @path /jadwal
 * @method GET
 *
 */
test("GET /jadwal", async () => {
  const res = await fetch("http://localhost:3000/api");
  expect(res.status).toBe(200);
  const body = await res.json();
  expect(body).toHaveProperty("jadwal");
  expect(body).toHaveProperty("jadwal[0].hari");
  expect(body).toHaveProperty("jadwal[0].kode");
  expect(body).toHaveProperty("jadwal[0].makul");
  expect(body).toHaveProperty("jadwal[0].kelas");
  expect(body).toHaveProperty("jadwal[0].dosen");
  expect(body).toHaveProperty("jadwal[0].jam");
  expect(body).toHaveProperty("jadwal[0].ruang");

  expect(body).toHaveProperty("dosen");
  expect(body).toHaveProperty("dosen[0].nama");
  expect(body).toHaveProperty("dosen[0].no");
});
