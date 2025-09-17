export default function buatSiswa(nama, nim) {
  return {
    id: Date.now().toString(36),
    nama,
    nim,
    enrolled: [],   // array kode kursus
    grades: {}      // { kodeKursus: [nilai1, nilai2, ...] }
  };
}

export const contohFlagSiswa = true;
