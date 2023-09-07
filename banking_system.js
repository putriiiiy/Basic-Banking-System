//class BankAccount
class BankAccount {
  //constractor
  constructor(saldo) {
      this.saldo = saldo;
  }

  //method deposit
  deposit(amount) {
      return new Promise((resolve) => {
          setTimeout(() => {
              this.saldo += amount;
              console.log(`SALDO terbaru Anda saat ini sebesar Rp. ${this.saldo}`);
              alert(`SALDO terbaru Anda saat ini sebesar Rp. ${this.saldo}`);
              resolve();
          }, 1000);
      });
  }

  //method withdraw
  withdraw(amount) {
      return new Promise((resolve) => {
          setTimeout(() => {
              if (amount <= this.saldo) {
                  this.saldo -= amount;
                  console.log(`SALDO terbaru Anda saat ini sebesar Rp. ${this.saldo}`);
                  alert(`SALDO terbaru Anda saat ini sebesar Rp. ${this.saldo}`);
              } else {
                  console.log(`Saldo Anda Tidak Cukup! Saldo Anda hanya sebesar Rp.${this.saldo}`);
                  alert(`Saldo Anda Tidak Cukup! Saldo Anda hanya sebesar Rp.${this.saldo}`);
              }
              resolve();
          }, 1000);
      });
  }
}


let inputSaldo; //deklarasi variabel inputSaldo
const account = new BankAccount(0); // membuat objek baru dengan Saldo awal default adalah 0

//fungsi main menggunakan async await
async function main() {
      do {
          choice = window.prompt(`
              Pilih kondisi yang Anda inginkan!
              1. Menambah saldo
              2. Mengurangi saldo`);

          switch (choice) {
              case '1':
                //tambah saldo
                  inputSaldo = Number(window.prompt('Masukkan jumlah saldo yang ingin ditambah : '));
                  await account.deposit(inputSaldo);
                  break;
              case '2':
                //kurangi saldo
                  inputSaldo = Number(window.prompt('Masukkan jumlah saldo yang ingin ditarik : '));
                  await account.withdraw(inputSaldo);
                  break;
              default:
                  console.log('Pilihan tidak valid. Silakan coba lagi.');
                  break;
          }

          pilihan = confirm('Apakah ingin menambah/menarik saldo kembali?');
      } while (pilihan);
  };


main();
