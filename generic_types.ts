type Generics2<T> = T;

const genericFunct = <T>(value: T): Generics2<T> => {
   return value;
};

console.log(genericFunct<string>("apel"));
