const req = {
    body: {
        name: "daffa",
        age: 21,
        major: "Informatika"
    }
};

// Destructuring key dari objek req.body
const { name, age, major } = req.body;
console.log(name, age, major);

// Destructuring array
const family = ["daffa", "dika"];

// Menampilkan elemen array dengan indeks
console.log(family[0], family[1], family[2]); // family[2] akan undefined karena hanya ada 2 elemen

// Destructuring array dengan default value
const [husband, son, wife = "Tidak ada"] = family;
console.log(husband, son, wife);

// Rest Parameter
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2)); // Output: 3

// Dengan rest parameter
function sum1(...numbers) {
    let hasil = 0;
    for (const number of numbers) {
        hasil += number;
    }
    return hasil;
}
console.log(sum1(1, 2, 3, 4, 5)); // Output: 15
console.log(sum1(1, 2)); // Output: 3

// Contoh tanpa spread
const user = {
    name: "daffa",
    major: "Informatika"
};

const number = {
    // Menyalin properti secara manual
    name: user.name,
    major: user.major,
    age: 21
};

console.log(number); // Output: { name: 'daffa', major: 'Informatika', age: 21 }

// Contoh dengan spread operator
const newUser = {
    ...user,
    age: 21
};

console.log(newUser); // Output: { name: 'daffa', major: 'Informatika', age: 21 }
