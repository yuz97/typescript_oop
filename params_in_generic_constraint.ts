function getProperty<T, U extends keyof T>(key: T, val: U) {
   return key[val];
}
const x = {
   a: 11,
   b: 34,
   c: 9,
};

console.log(getProperty(x, "b"));
