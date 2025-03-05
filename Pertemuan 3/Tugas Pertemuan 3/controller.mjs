import users from "./data.mjs";

const index = () => {
    console.log("Daftar Users:");
    users.map((user, index) => {
        console.log(`${index + 1}. ${user.nama}, ${user.umur} tahun, ${user.alamat}, Email: ${user.email}`);
    });
};

const store = (user) => {
    users.push(user);
    console.log("Data berhasil ditambahkan.");
};

const destroy = (nama) => {
    const index = users.findIndex(user => user.nama === nama);
    if (index !== -1) {
        users.splice(index, 1);
        console.log(`Data ${nama} berhasil dihapus.`);
    } else {
        console.log(`Data ${nama} tidak ditemukan.`);
    }
};

export { index, store, destroy };
