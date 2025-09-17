export default {
  hitungJumlah: (daftarBuku) => daftarBuku.length,

  cariBuku: (daftarBuku, kunci) => 
    daftarBuku.find(b => b.judul === kunci || b.pengarang === kunci),

  bukuTebal: (daftarBuku) => 
    daftarBuku.filter(b => b.halaman > 150),
}
