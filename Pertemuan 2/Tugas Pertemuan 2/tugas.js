const employees = [
    { name: "MUhammad Daffa", gol: "A", status: "NIKAH" },
    { name: "Muhammad Andika", gol: "B", status: "BELUM" },
    { name: "Hydir", gol: "C", status: "NIKAH" },
    { name: "Andika Sulisto", gol: "B", status: "BELUM" },
    { name: "Akbarsyah", gol: "A", status: "NIKAH" },
    { name: "Muhammad Rizky", gol: "B", status: "BELUM" },
    { name: "Rivky Putra", gol: "C", status: "NIKAH" },
    { name: "Abudzar", gol: "A", status: "BELUM" },
    { name: "Rafly Armansyah", gol: "A", status: "NIKAH" },
    { name: "Aby Sofyan", gol: "B", status: "BELUM" }
];

const salaryData = [
    { gol: "A", baseSalary: 10000000, allowance: 2000000 },
    { gol: "B", baseSalary: 8000000, allowance: 1500000 },
    { gol: "C", baseSalary: 5000000, allowance: 1000000 }
];

employees.forEach(emp => {
    const salaryInfo = salaryData.find(s => s.gol === emp.gol);
    
    // Hitung tunjangan berdasarkan status
    const empAllowance = emp.status === "NIKAH" ? salaryInfo.allowance : 0;
    
    // Hitung total gaji
    const totalSalary = salaryInfo.baseSalary + empAllowance;

    // Tampilkan informasi gaji karyawan
    console.log(`Nama: ${emp.name}`);
    console.log(`Golongan: ${emp.gol}`);
    console.log(`Status: ${emp.status}`);
    console.log(`Gaji Pokok: Rp ${salaryInfo.baseSalary.toLocaleString()}`);
    console.log(`Tunjangan: Rp ${empAllowance.toLocaleString()}`);
    console.log(`Total Gaji: Rp ${totalSalary.toLocaleString()}`);
    console.log("----------------------------");
});