export const tambahNilai = (siswa, kodeKursus, nilai) => {
  if (!siswa || !kodeKursus) return siswa;
  const newGrades = { ...siswa.grades };
  const arr = Array.isArray(newGrades[kodeKursus])
    ? [...newGrades[kodeKursus]]
    : [];
  arr.push(nilai);
  newGrades[kodeKursus] = arr;
  return { ...siswa, grades: newGrades };
};

export const hitungRata = (siswa, kodeKursus = null) => {
  if (!siswa) return 0;
  if (kodeKursus) {
    const arr = siswa.grades[kodeKursus] || [];
    if (arr.length === 0) return 0;
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }
  const semuaNilai = Object.values(siswa.grades).flat();
  if (semuaNilai.length === 0) return 0;
  return semuaNilai.reduce((a, b) => a + b, 0) / semuaNilai.length;
};
