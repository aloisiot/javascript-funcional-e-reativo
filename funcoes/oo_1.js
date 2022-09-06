class Product {
  constructor(name, price, discount) {
    this.name = name;
    this._price = price;
    this._discount = discount;
  }

  set price(value) {
    if (value > 0) {
      this._price = value;
    }
  }

  set discount(percent) {
    if (percent >= 0 && percent <= 1) {
      this._discount = percent;
    }
  }

  get discountPrice() {
    return this._price * (1 - this._discount);
  }
}

const product = new Product("Melancia", 15, 0);
product.price = 12;
product.price = -1;
product.discount = 0.1;

const p2 = Object.defineProperty(product, "category", {
  value: "food",
  enumerable: true,
  writable: true,
});

product.category = "electronic";

console.log(Object.keys(product));
console.log(Object.values(product));

console.log(Object.keys(p2));
console.log(Object.values(p2));
