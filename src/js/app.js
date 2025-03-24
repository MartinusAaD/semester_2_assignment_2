import appState from "./appState.js";
import Product from "./product.js";
import ProductsManagement from "./productsManagement.js";

document.addEventListener("DOMContentLoaded", () => {
  ProductsManagement.viewProducts();
});

const productForm = document.querySelector(".medicine-management__form");
const confirmEditButton = document.querySelector(".form-button-submit");
const cancelButton = document.querySelector(".form-button-cancel");

productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Query Selectors
  const productName = document.querySelector(".form__product-name-input");
  const productType = document.querySelector(".form__product-type"); //Select -> Option
  const productId = document.querySelector(".form__product-id-input");
  const productManufacturer = document.querySelector(".form__manufacturer"); //Select -> Option
  const productExpiryDate = document.querySelector(
    ".form__expiration-date-input"
  );
  const productQuantity = document.querySelector(".form__quantity-input");

  //

  if (!appState.editState) {
    ProductsManagement.addProduct(
      productName.value,
      productType.value,
      productId.value,
      productManufacturer.value,
      productExpiryDate.value,
      productQuantity.value
    );
  } else {
    ProductsManagement.updateProduct(
      productName.value,
      productType.value,
      productId.value,
      productManufacturer.value,
      productExpiryDate.value,
      productQuantity.value
    );
  }

  productForm.reset();

  confirmEditButton.textContent = "Submit";
});

cancelButton.addEventListener("click", () => {
  productForm.reset();
  appState.editState = null;
  confirmEditButton.textContent = "Submit";
});
