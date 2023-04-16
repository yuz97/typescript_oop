interface Teacher {
   name: string;
   age: number;
   phone?: string; //interface bersifar optional
}

const teacher: Teacher = { name: "rudi", age: 23 };

console.log(teacher);
