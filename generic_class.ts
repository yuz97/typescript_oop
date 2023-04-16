interface Generic3<T> {
   buah: T;
   methodA(): T;
}

class GenericClass<T> implements Generic3<T> {
   buah: T;

   constructor(buah: T) {
      this.buah = buah;
   }

   methodA(): T {
      return this.buah;
   }
}

const dataKu = new GenericClass<string>("semangka");
console.log(dataKu);
console.log(dataKu.methodA());
