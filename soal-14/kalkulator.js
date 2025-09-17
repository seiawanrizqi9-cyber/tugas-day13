import { kasir, total } from "./kasir/index.js";

const belanja = kasir.total(42000, 35000, 60000, 71000, 94000)
const pajak = kasir.pajak(belanja)
const diskon = kasir.diskon(belanja)
const hasil = belanja + pajak - diskon
const bayar = 320000
const sisa = kasir.sisa(bayar, hasil)

console.log("Total belanja:", belanja);
console.log("Total pajak:", pajak);
console.log("Total diskon:", diskon);
console.log("Total yang harus dibayar:", hasil);
console.log("Total uang sisa:", sisa);