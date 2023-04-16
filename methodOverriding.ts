class Hewan3 {
   name = "";
   kaki = 4;

   bernafas(): void {
      console.log("bernafas");
   }
}

class Hewan4 extends Hewan3 {
   bernafas(): void {
      console.log("malas bernafas");
   }
}

const katak = new Hewan4();
console.log((katak.name = "katak merah"));
console.log(katak.kaki);
