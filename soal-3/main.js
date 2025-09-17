import hitungTotalPoin, { POIN_BONUS, POIN_maksimal } from "./game.js";

const skor = [200, 150, 300, 180, 120]
const hasil = hitungTotalPoin(skor)

console.log(hasil)