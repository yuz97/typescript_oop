class Ayam {
   // static warna: string = "orange dan hitam";
   static warna = "orange dan hitam";

   static warnaBulu() {
      console.log(`ayam ini memiliki bulu berwarna ${this.warna}`);
   }

   getWarna(): string {
      //return this.warna; error pada static method
      return Ayam.warna;
   }
}

console.log(Ayam.warnaBulu());

const ayam1 = new Ayam();
console.log(ayam1.getWarna());
