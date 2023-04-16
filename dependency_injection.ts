class Store {
   private name = "Store A";
   private profit = 1000;

   getName(): string {
      return this.name;
   }

   getProfit(): number {
      return this.profit;
   }
}

class Food {
   private store: Store;
   private name: string;
   private price: number;

   constructor(name: string, price: number) {
      this.name = name;
      this.price = price;

      this.store = new Store();
   }

   sell(): void {
      console.log(
         `${this.name} keuntungan ${
            this.store.getProfit() + this.price
         } harga asli ${this.price} dan keuntungan ${this.store.getProfit()}`
      );
   }
}

interface Istore {
   name: string;
   profit: number;
   getProfit(): number;
}

class TokoLama implements Istore {
   name = "Toko Setia Budi";
   profit = 12000;

   getName(): string {
      return this.name;
   }

   getProfit(): number {
      return this.profit;
   }
}

class TokoBaru implements Istore {
   name = "Toko Alam";
   profit = 15000;

   getName(): string {
      return this.name;
   }

   getProfit(): number {
      return this.profit;
   }
}

class SusuIndomilk {
   private store: Istore;
   private name: string;
   private price: number;

   constructor(store: Istore, name: string, price: number) {
      this.store = store;
      this.name = name;
      this.price = price;
   }
}

const roti = new Food("roti", 2000);
console.log(roti);
roti.sell();

const tokoLama = new TokoLama();
const tokoBaru = new TokoBaru();

const susu1 = new SusuIndomilk(tokoLama, "susu indomilk coklat", 6200);
const susu2 = new SusuIndomilk(tokoBaru, "susu indomilk coklat", 7000);

console.log(susu1);
console.log(susu2);
