namespace NamespaceExample {
   export class Hewan2 {}
   export const kodok = new Hewan2();
}

// namespace utk membungkus class jika terdapat nama class pada file lain

const semut = new NamespaceExample.Hewan2();
console.log(semut);
