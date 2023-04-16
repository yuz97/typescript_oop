function getData(value: any) {
   return value;
}

const data1 = getData("test");
console.log(data1);

const data2 = getData(1234);
console.log(data2);

function getData2<T>(value: T) {
   return value;
}

const dataKe2 = getData2<string>("apel dan semangka");
console.log(dataKe2);

const dataKe3 = getData2<number>(2345);
console.log(dataKe3);
console.log(dataKe3.toFixed(2));
