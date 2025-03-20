class ProductsManagement {
  static viewProducts = () => {
    const productsList = JSON.parse(localStorage.getItem("productsList")) || [];
    const productsContainer = document.querySelector(".products-container");

    productsContainer.innerHTML = "";

    productsList.forEach((product) => {
      const productContainer = document.createElement("divs");
      const productName = document.createElement("h3");
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
      productType.textContent = product.type;
      productId.textContent = product.id;
      productManufacturer.textContent = product.manufacturer;
      productExpiryDate.textContent = product.expiryDate;
      productQuantity.textContent = product.quantity;
    });
  };
  static addProduct = () => {
    // Query Selectors
    const productName = document.querySelector(".form__product-name-input");
    const productType = document.querySelector(".form__product-type"); //Select -> Option
    const productId = document.querySelector(".form__product-id-input");
    const productManufacturer = document.querySelector(".form__manufacturer"); //Select -> Option
    const productExpiryDate = document.querySelector(
      ".form__expiration-date-input"
    );
    const productQuantity = document.querySelector(".form__quantity-input");

    // Store Values
  };
}

export default ProductsManagement;
