function generics<T>(arg: T): T {
   return arg;
}

const apel = generics<string>("apel");
const angka = generics<number>(345);
console.log(apel);
console.log(apel.length);
console.log(angka);

console.log("===========================================");

interface panjang {
   length: number;
}

function genericConstraint<T extends panjang>(arg: T): T {
   console.log(arg.length);
   return arg;
}

const a = genericConstraint("lima");
console.log(a);

const b = genericConstraint({ length: 5 });
console.log(b);
