import {ambilNama, ambilNIm, ambilJurusan, ambilIpk} from "./mahasiswa.js";

const mahasiswa = {nama: "Sari Dewi", nim: 2024001, jurusan: "Informatika", ipk: 3.8}

console.log("nama: ", ambilNama(mahasiswa))
console.log("nim: ", ambilNIm(mahasiswa))
console.log("jurusan: ", ambilJurusan(mahasiswa))
console.log("ipk: ", ambilIpk(mahasiswa))