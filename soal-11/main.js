import { pendapatan, pengeluaran, totalPendapatan, totalPengeluaran } from "./keuangan/index.js";

const gaji = totalPendapatan()
const biaya = totalPengeluaran()

console.log("Total pemasukkan", gaji)
console.log("Total pengeluaran", biaya)
console.log("Total uang sisa", gaji - biaya)