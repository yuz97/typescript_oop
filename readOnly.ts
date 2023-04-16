interface Student {
   readonly name: string;
   readonly age: number;
}

const student1: Student = { name: "ridwan", age: 20 };
console.log(student1);

// student1.name = "amri"; // can't assign readonly property
// student1.age = 30; // can't assign readonly property
