//public biasa diakses oleh seluruh class (parent dan child)
//protected --//-- dan bersifat protect
//private hanya bisa diakses dlm class tersendiri(parent atau child) bersifat privasi

class Hewan4 {
   public name: string;
   private kaki: number;
   protected mamalia: boolean;
   constructor(name: string, kaki: number, mamalia: boolean) {
      this.name = name;
      this.kaki = kaki;
      this.mamalia = mamalia;
   }
}

class Monyet extends Hewan4 {
   private menyusui: boolean; //tidak bisa diakses diluar class
   private makanan: string; //tidak bisa diakses diluar class

   constructor(
      menyusui: boolean,
      makanan: string,
      name: string,
      kaki: number,
      mamalia: boolean
   ) {
      super(name, kaki, mamalia);
      this.menyusui = menyusui;
      this.makanan = makanan;
   }

   getMonyet() {
      if (this.menyusui == true) {
         console.log(
            `anak monyet ini masih menyusui dan makanannya ${this.makanan}`
         );
      }
   }
}

const ape = new Monyet(true, "pisang", "ape", 4, true);
ape.getMonyet();
