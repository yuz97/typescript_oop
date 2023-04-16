class Animal {
   name: string;
   feet: number;

   constructor(name: string, feet: number) {
      this.name = name;
      this.feet = feet;
   }
}

interface Fish extends Animal {
   swim(): void;
}

class Shark implements Fish {
   age: number;
   name: string;
   feet: number;

   constructor(age: number, name: string, feet: number) {
      //   super(name, feet); super error /tidak dapat dipanggil
      this.age = age;
      this.name = name;
      this.feet = feet;
   }
   swim(): void {
      console.log("shark is swimming into ocean");
   }
}

const fish = new Shark(100, "martil", 0);
console.log(fish);
console.log(fish.age);

fish.swim();
