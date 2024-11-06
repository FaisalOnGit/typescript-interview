"use strict";
// tipe data dasar
let namaSaya = "Kontoll";
let umur = 21;
let isAlive = true;
console.log({ namaSaya });
console.log({ umur });
console.log({ isAlive });
// any type default kalo tidak assign type
let random;
random = 1;
random = "sa";
// dua type data dalam satu variabel
let twoTypes;
twoTypes = 2;
twoTypes = "asaassas";
// array biasa
let array;
array = ["mama", "papah"];
// tuple array
let tuple;
tuple = ["123", 1];
let custom;
custom = {
    nama: "ilham",
    isBoolean: true,
};
// function
function tambah(a, b) {
    return a + b;
}
console.log(tambah(1, 2));
function sensus(orang) {
    console.log(`Hasil sensus penduduk di jawa barat
    Nama : ${orang.nama}
    Umur : ${orang.umur}
    Daerah : ${orang.daerah}`);
}
function sensus2(orang) {
    console.log(`Hasil sensus penduduk di jawa barat
    Nama : ${orang.nama}
    Umur : ${orang.umur}
    Dusun : ${orang.dusun}`);
}
const Jabar = {
    nama: "asep",
    umur: 20,
    isMarried: false,
    daerah: "Bandung",
};
const Jatim = {
    nama: "asep",
    umur: 20,
    isMarried: false,
    dusun: "Ngawi",
};
sensus(Jabar);
sensus2(Jatim);
