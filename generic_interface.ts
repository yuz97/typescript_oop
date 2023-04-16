interface Generics<T> {
   propA: T;
}

const genericsFunction = <T>(value: T): Generics<T> => {
   const data: Generics<T> = {
      propA: value,
   };

   return data;
};

console.log(genericsFunction<string>("addakojo"));
console.log(genericsFunction<number>(547232));
