interface Android {
   name: string;
   menu(): void;
   home(): void;
   back(): void;
}

class Xiaomi implements Android {
   name: string;
   constructor(name: string) {
      this.name = name;
   }
   menu(): void {
      console.log("tombol menu ditekan");
   }
   home(): void {
      console.log("tombol home ditekan");
   }
   back(): void {
      console.log("tombol back ditekan");
   }
}

const android1 = new Xiaomi("redmi note 7");
console.log(android1.menu());
