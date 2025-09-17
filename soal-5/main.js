import buku from "./buku.js";

const daftarBuku = [
  { judul: "Atomic Habits", pengarang: "Carol Dweek", halaman: 120 },
  { judul: "Seni Berbicara", pengarang: "Supriyanto", halaman: 200 },
  { judul: "Cara jadi milyader", pengarang: "Budi Mulyono", halaman: 180 },
];

console.log(buku.hitungJumlah(daftarBuku));
console.log(buku.cariBuku(daftarBuku, "Seni Berbicara"));
console.log(buku.cariBuku(daftarBuku, "Budi Mulyono"));
console.log(buku.bukuTebal(daftarBuku));
