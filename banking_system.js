class BankAccount{
  constructor(){
    this.saldo = Number();
  }

deposit(amount){
  setTimeout(() => {
    this.saldo += amount;
    //alert(`SALDO terbaru Anda saat ini sebesar Rp. ${this.saldo}`);
    console.log(`SALDO terbaru Anda saat ini sebesar Rp. ${this.saldo}`);
    }, 1000);
}

withdraw(amount){
  setTimeout(() => {
    if(amount <= this.saldo){
      this.saldo -= amount;
      //alert(`SALDO terbaru Anda saat ini sebesar Rp. ${this.saldo}`);
      console.log(`SALDO terbaru Anda saat ini sebesar Rp. ${saldo}`);
    }else {
      console.log (`Saldo Anda Tidak Cukup! Saldo Anda hanya sebesar Rp. ${this.saldo}`);
    }
  }, 2000};
}
}

//pemanggilan class
let putri = new BankAccount();
putri.deposit(100000); // menambahkan saldo
putri.withdraw(20000); // mengambil saldo pada rekening
putri. withdrw (10000); // mengambil saldo, namun saldo tidak menucukupi



      
