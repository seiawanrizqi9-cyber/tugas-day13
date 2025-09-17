import * as Platform from "./platform/index.js";
import { tambahKursus, daftarKursus, daftarEnroll } from "./platform/kursus/index.js";
import { buatSiswa } from "./platform/siswa/index.js";
import { tambahNilai, hitungRata, generateReport as reportStudent } from "./platform/index.js";

tambahKursus("JS101", "Dasar JavaScript", 0);
tambahKursus("WEB201", "Pembuatan Website", 0);
tambahKursus("DB301", "Database Dasar", 0);
console.log("Kursus tersedia:", daftarKursus.map(k => k.kode + "-" + k.nama).join(", "));

const s1 = buatSiswa("Rizqi", "2025001");
const s2 = buatSiswa("Dina", "2025002");
console.log("\nSiswa terdaftar:", s1.nama, "&", s2.nama);

const s1_enrolled = daftarEnroll(s1, "JS101");
const s2_enrolled = daftarEnroll(s2, "WEB201");

const s1_after1 = tambahNilai(s1_enrolled, "JS101", 85);
const s1_after2 = tambahNilai(s1_after1, "JS101", 90);
const s1_final = tambahNilai(s1_after2, "DB301", 75);

const s2_after1 = tambahNilai(s2_enrolled, "WEB201", 80);
const s2_final = tambahNilai(s2_after1, "WEB201", 88);

console.log("\n--- Report S1 ---");
console.log(reportStudent(s1_final));

console.log("\n--- Report S2 ---");
console.log(reportStudent(s2_final));

console.log("\nAkses via namespace:");
console.log("Kursus (namespace) contoh daftar:", Platform.Kursus.daftarKursus.map(k => k.kode).join(", "));
console.log("Rata-rata S1 overall (pakai hitungRata):", hitungRata(s1_final).toFixed(2));
