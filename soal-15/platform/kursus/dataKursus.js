export const daftarKursus = []; // kita simpan kursus di array ini (mutable for demo)

export const tambahKursus = (kode, nama, harga = 0) => {
  const kursus = { kode, nama, harga };
  daftarKursus.push(kursus);
  return kursus;
};

export const cariKursus = (kode) => daftarKursus.find(k => k.kode === kode);
