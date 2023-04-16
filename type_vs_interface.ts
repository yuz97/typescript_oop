type Buah = string;

interface BuahType {
   name: string;
}

class NamaBuah implements BuahType {
   name: string = "apel";
   color: string = "red";
   price: number = 2000;
}

const cherry: Buah = "cherry hijau";
console.log(cherry);

const apel = new NamaBuah();
console.log(apel);
