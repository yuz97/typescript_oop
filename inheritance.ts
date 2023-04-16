class Hewan2 {
   name: string;
   kaki: number;

   constructor(name: string, kaki: number) {
      this.name = name;
      this.kaki = kaki;
   }

   bernafas() {
      console.log("bernafas");
   }
}

class Kucing extends Hewan2 {
   warna: string;
   constructor(warna: string, name: string, kaki: number) {
      super(name, kaki);
      this.warna = warna;
   }
}

const kucing = new Kucing("Orange", "anggora", 4);
console.log(kucing);
console.log(kucing.bernafas());
