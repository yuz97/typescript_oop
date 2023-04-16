interface Vehicle {
   name: string;
   wheels: number;
}

interface Car extends Vehicle {
   doors: number;
}

class Honda implements Car {
   //    name: string = "Civic";
   //    wheels: number = 4;
   //    doors: number = 5;
   name = "Civic";
   wheels = 4;
   doors = 5;
}

const honda = new Honda();
console.log(honda.name);
console.log(honda.wheels);
console.log(honda.doors);
