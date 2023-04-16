class Product {
   private _price = 0;
   private discount = 0.05;

   get price() {
      return this._price;
   }
   set price(price: number) {
      this._price = price - price * this.discount;
   }
}

const baju = new Product();
baju.price = 5000;
console.log(baju.price);
