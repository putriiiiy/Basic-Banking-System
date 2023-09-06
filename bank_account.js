//NAMA : PUTRI INDRIYANTI

//deklarasi variabel
let saldo = 0;
let inputSaldo;
let keinginan;

//fungsi tambahSaldo
function tambahSaldo(){
    inputSaldo = window.prompt (`SALDO saat ini sebesar = ${saldo} \nMasukkan jumlah saldo yang ingin Anda tambah!`);
    saldo += +inputSaldo;
    alert(`SALDO terbaru Anda saat ini sebesar = ${saldo}`);
}

//fungsi kurangiSaldo
function kurangiSaldo(){
    inputSaldo = window.prompt (`SALDO saat ini sebesar = ${saldo} \nMasukkan jumlah saldo yang ingin anda kurangi!`);
    saldo -= +inputSaldo;
    alert(`SALDO terbaru Anda saat ini sebesar = ${saldo}`);
}

//BAGIAN utama
do {
     keinginan = window.prompt (
    `\t#INFORMASI SALDO SAAT INI# \n\t\t\t SALDO = ${saldo}\n
    Pilih kondisi yang anda inginkan!
    1. Menambah saldo
    2. Mengurangi saldo
    3. Selesai`);
    
    switch (keinginan) {
        case '1':
            // Tambah saldo
            tambahSaldo();
            break;
        case '2':
            // Kurangi saldo
            kurangiSaldo();
            break;
        case '3':
            // Keluar dari perulangan
            alert (`Saldo terbaru Anda saat ini sebesar = ${saldo} \nSELESAI \nTERIMAKASIH`);
            break;
        default:
            alert('Pilihan Anda tidak valid. Silakan pilih 1, 2, atau 3.');
    }
    }while (keinginan != '3')