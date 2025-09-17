export const enroll = (siswa, kodeKursus) => {
  if (!siswa || !kodeKursus) return siswa;
  // jika sudah terdaftar, kembalikan apa adanya
  if (siswa.enrolled.includes(kodeKursus)) return siswa;
  return {
    ...siswa,
    enrolled: [...siswa.enrolled, kodeKursus],
    grades: { ...siswa.grades }, // keep grades same
  };
};
