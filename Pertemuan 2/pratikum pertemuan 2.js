const nama = "Muhammad Daffa";
const jurusan = "Teknik Informatika";
const tl = 2005;

const greeting = `Hallo, nama saya ${nama}, umur saya ${2025 - tl}`;

const result = 90;

if (result >= 90) {
    console.log("Nilai A");
} else if (result >= 80) {
    console.log("Nilai B");
} else if (result >= 70) {
    console.log("Nilai C");
} else {
    console.log("Nilai D");
}

// Fungsi deklarasi
function umur(bod) {
    const year = 2025;
    return year - bod;
}

// Fungsi ekspresi
const eksAge = function (bod1) {
    const year = 2025;
    return year - bod1;
}

// Arrow function (diperbaiki)
const arrAge = (bod2) => 2025 - bod2;

console.log(arrAge(2005)); // Output: 20
console.log(eksAge(2005)); // Output: 20
console.log(umur(2005));   // Output: 20

console.log(result);       // Output: 90
console.log(greeting);     // Output: Hallo, nama saya Muhammad Daffa, umur saya 20
