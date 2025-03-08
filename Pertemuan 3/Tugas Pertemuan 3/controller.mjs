import users from "./data.mjs";

// Fungsi untuk menampilkan semua data
const index = () => {
    console.log("\ Daftar Users:");
    users.map((user, idx) => {
        console.log(`${idx + 1}. ${user.nama}, ${user.umur} tahun, ${user.alamat}, Email: ${user.email}`);
    });
};

// Fungsi untuk menambahkan data
const store = (user) => {
    users.push(user);
    console.log(` Data ${user.nama} berhasil ditambahkan.`);
};

// Fungsi untuk menghapus data berdasarkan nama
const destroy = (nama) => {
    const index = users.findIndex(user => user.nama === nama);
    if (index !== -1) {
        users.splice(index, 1);
        console.log(` Data ${nama} berhasil dihapus.`);
    } else {
        console.log(`⚠️ Data ${nama} tidak ditemukan.`);
    }
};

export { index, store, destroy };
