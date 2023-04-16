abstract class KupuKupu {
   type: string;

   constructor(type: string) {
      this.type = type;
   }

   makan(): void {
      console.log(`${this.type} menghisap nektar yang berasal dari bunga`);
   }

   abstract bergerak(): void;
}

class Kupu1 extends KupuKupu {
   constructor(type: string) {
      super(type);
   }
   bergerak(): void {
      console.log(`kupu-kupu bergerak dengan cara terbang`);
   }
}

const kupu1 = new Kupu1("kupu-kupu orange");
kupu1.makan();
console.log(kupu1.bergerak());
