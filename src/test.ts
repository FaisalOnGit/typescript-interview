// tipe data dasar
let namaSaya: string = "Kontoll";
let umur: number = 21;
let isAlive: boolean = true;

console.log({ namaSaya });
console.log({ umur });
console.log({ isAlive });

// any type default kalo tidak assign type
let random;

random = 1;
random = "sa";

// dua type data dalam satu variabel
let twoTypes: number | string;

twoTypes = 2;
twoTypes = "asaassas";

// array biasa
let array: string[];

array = ["mama", "papah"];

// tuple array
let tuple: [string, number];
tuple = ["123", 1];

// custom type
type customType = {
  nama: string;
  angka?: number;
  isBoolean: boolean;
};

let custom: customType;

custom = {
  nama: "ilham",
  isBoolean: true,
};

// function

function tambah(a: number, b: number): number {
  return a + b;
}

console.log(tambah(1, 2));

// interface
interface iOrang {
  nama: string;
  umur: number;
  isMarried: boolean;
}

interface iJabar extends iOrang {
  daerah: string;
}

interface iJatim extends iOrang {
  dusun: string;
}

function sensus(orang: iJabar): void {
  console.log(`Hasil sensus penduduk di jawa barat
    Nama : ${orang.nama}
    Umur : ${orang.umur}
    Daerah : ${orang.daerah}`);
}

function sensus2(orang: iJatim): void {
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
