import { v4 as uuidv4 } from "uuid";
class Product {
  constructor(name, type, id, manufacturer, expiryDate, quantity) {
    this.name = name;
    this.type = type;
    this.id = uuidv4();
    this.manufacturer = manufacturer;
    this.expiryDate = expiryDate;
    this.quantity = quantity;
  }
}

export default Product;
