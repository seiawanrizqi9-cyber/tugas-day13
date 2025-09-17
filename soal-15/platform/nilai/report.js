export default function generateReport(siswa) {
  if (!siswa) return "Siswa tidak ditemukan";
  const perKursus = Object.keys(siswa.grades).map(kode => {
    const arr = siswa.grades[kode];
    const avg = arr.length ? (arr.reduce((a,b)=>a+b,0)/arr.length).toFixed(2) : "0.00";
    return `${kode}: rata-rata ${avg} (${arr.length} nilai)`;
  });
  const overall = (function(){
    const semua = Object.values(siswa.grades).flat();
    if (semua.length === 0) return "0.00";
    return (semua.reduce((a,b)=>a+b,0)/semua.length).toFixed(2);
  })();
  return `Rapor ${siswa.nama} (NIM: ${siswa.nim})\nEnrolled: ${siswa.enrolled.join(", ") || "-"}\nOverall: ${overall}\nPer Kursus:\n- ${perKursus.join("\n- ")}`;
}
