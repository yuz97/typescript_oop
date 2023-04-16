class Hewan {
   name = "kucing";
}

class Baru<T> {
   class: T;

   constructor(value: T) {
      this.class = value;
   }
}

const hewan = new Hewan();
const baru = new Baru(hewan);
console.log(baru);
