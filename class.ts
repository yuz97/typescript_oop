class Hello {
   name: string;
   age: number;

   constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
   }

   getSapa(): void {
      console.log(`halo nama saya ${this.name},usia saya ${this.age}`);
   }

   get nama(): void {
      this.name;
   }

   get umur(): void {
      this.age;
   }
   set nama(name: string) {
      return (this.name = name);
   }

   set umur(age: string) {
      return (this.age = age);
   }
}

let sapa = new Hello("Andika", 22);
sapa.getSapa();
console.log((sapa.nama = "ridwan"));
console.log((sapa.umur = 17));
