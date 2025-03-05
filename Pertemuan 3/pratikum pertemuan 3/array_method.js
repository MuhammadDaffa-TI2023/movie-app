const names = ["Daffa", "Angga", "Bagas"];

// Menggunakan forEach untuk menampilkan setiap nama
names.forEach(name => {
    console.log(`Name: ${name}`);
});

// Menggunakan map untuk menambahkan prefix "Mr/Mrs" ke setiap nama
const formattedNames = names.map(name => `Mr/Mrs ${name}`);

console.log(formattedNames);
