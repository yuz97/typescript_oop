class Burung {
   private kaki = 2;

   getKaki(): number {
      return this.kaki;
   }

   terbang(): void {
      console.log("terbang");
   }

   async makan(): Promise<string> {
      //    await
      return "burung memakan biji padi";
   }
}

const burung = new Burung();
console.log(burung.getKaki());
burung.terbang();
console.log(burung.makan());
