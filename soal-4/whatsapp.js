import { pisah as pisahNamaKontak, gabung as gabungDataKontak } from "./kontak.js";

const kontakLengkap = "Rizqi, 08123456789";

const hasilPisah = pisahNamaKontak(kontakLengkap);
console.log("Hasil Pisah:", hasilPisah); 

const hasilGabung = gabungDataKontak(hasilPisah[0], hasilPisah[1]);
console.log("Hasil Gabung:", hasilGabung); 
