//NAMA : PUTRI INDRIYANTI

//deklarasi variabel
let saldo = 0;
let inputSaldo;
let keinginan;
let n;

//fungsi tambahSaldo
function tambahSaldo(n){
    saldo += n;
    return saldo;
}

//fungsi kurangiSaldo
function kurangiSaldo(n){
    saldo -= n;
    return saldo;
}

//BAGIAN utama
do {
     choice = window.prompt (`
    Pilih kondisi yang anda inginkan!
    1. Menambah saldo
    2. Mengurangi saldo`);
    
    switch (choice) {
        case '1':
            // Tambah saldo
            inputSaldo = Number(window.prompt ('Masukkan jumlah saldo yang ingin ditambah : '));
            saldo = tambahSaldo(inputSaldo);
            break;
        case '2':
            // Kurangi saldo
            inputSaldo = Number(window.prompt ('Masukkan jumlah saldo yang ingin ditarik : '));
            saldo = kurangiSaldo(inputSaldo);
            break;
        default:
            alert('Pilihan tidak valid. Silakan coba lagi.');
    }
        pilihan = confirm ("Apakah ingin menambah/menarik saldo kembali?")
    }while (pilihan)
