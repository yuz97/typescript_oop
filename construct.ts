class Hewan {
   name: string;
   food: string;
   constructor(name: string, food: string) {
      console.log("dipanggil terlebih dahulu");
      this.name = name;
      this.food = food;
   }
}

const hewan = new Hewan("kucing", "ikan");
console.log(hewan);
