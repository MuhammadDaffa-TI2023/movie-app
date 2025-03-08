import { index, store, destroy } from "./controller.mjs";

const main = () => {
    // Tambahkan dua data baru
    store({ nama: "Kiki Ramadhan", umur: 30, alamat: "Jl. Kenangan 11", email: "kiki.r@example.com" });
    store({ nama: "Lina Maharani", umur: 31, alamat: "Jl. Harmoni 12", email: "lina.m@example.com" });

    // Tampilkan semua data
    index();

    // Hapus satu data
    destroy("Eka Saputra");

    // Tampilkan data setelah penghapusan
    index();
};

main();
