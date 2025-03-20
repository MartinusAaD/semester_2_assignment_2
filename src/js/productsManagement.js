import Product from "./product";

class ProductsManagement {
  static viewProducts = () => {
    const productsList = JSON.parse(localStorage.getItem("productsList")) || [];
    const productsContainer = document.querySelector(".products-container");

    productsContainer.innerHTML = "";

    productsList.forEach((product) => {
      const productContainer = document.createElement("divs");
      const productName = document.createElement("h2");
      const productList = document.createElement("ul");
      const productType = document.createElement("li");
      const productId = document.createElement("li");
      const productManufacturer = document.createElement("li");
      const productExpiryDate = document.createElement("li");
      const productQuantity = document.createElement("li");

      productsContainer.append(productContainer);
      productContainer.append(productName, productList);
      productList.append(
        productType,
        productId,
        productManufacturer,
        productExpiryDate,
        productQuantity
      );

      productContainer.classList.add("product-container");
      productName.classList.add("product-name");
      productList.classList.add("product-list");
      productType.classList.add("product-type");
      productId.classList.add("product-id");
      productManufacturer.classList.add("product-manufacturer");
      productExpiryDate.classList.add("product-expiry-date");
      productQuantity.classList.add("product-quantity");

      productName.textContent = product.name;
      productType.innerHTML = `<strong>Product Type:</strong> ${capitalizeFirstLetter(
        product.type
      )}`;
      productId.innerHTML = `<strong>Product Id:</strong> ${capitalizeFirstLetter(
        product.id
      )}`;
      productManufacturer.innerHTML = `<strong>Manufacturer:</strong> ${capitalizeFirstLetter(
        product.manufacturer.toString().replace(/-/g, " ")
      )}`;
      productExpiryDate.innerHTML = `<strong>Expiry Date:</strong> ${product.expiryDate}`;
      productQuantity.innerHTML = `<strong>Quantity:</strong> ${product.quantity}`;

      // Capitalize first letter
      function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    });
  };
  static addProduct = (
    productName,
    productType,
    productId,
    productManufacturer,
    productExpiryDate,
    productQuantity
  ) => {
    const productsList = JSON.parse(localStorage.getItem("productsList")) || [];

    console.log(productQuantity);

    const newProduct = new Product(
      productName,
      productType,
      productId,
      productManufacturer,
      productExpiryDate,
      productQuantity
    );

    productsList.push(newProduct);
    localStorage.setItem("productsList", JSON.stringify(productsList));
    this.viewProducts();

    // Store Values
  };
}

export default ProductsManagement;
