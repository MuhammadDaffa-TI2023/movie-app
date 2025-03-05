// Mengimpor data pengguna
import users from "./data.mjs";

// Fungsi untuk menampilkan semua pengguna
export const index = () => {
    users.forEach(user => {
        console.log(`Name: ${user.name}, Age: ${user.age}`);
    });
};

// Fungsi utama yang memanggil index
export const main = () => {
    console.log("Menampilkan semua pengguna:");
    index();
};
