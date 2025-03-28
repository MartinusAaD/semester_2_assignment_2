import appState from "./appState.js";
import currentProductId from "./currentProductId.js";
import Product from "./product.js";
import ProductsManagement from "./productsManagement.js";
import { productTypeReset, productTypeChange } from "./formManager";

document.addEventListener("DOMContentLoaded", () => {
  ProductsManagement.viewProducts();
  productTypeReset;
  productTypeChange;
});

const addProductButton = document.querySelector(".product-button-add");
const formContainer = document.querySelector(".medicine-management__container");
const productForm = document.querySelector(".medicine-management__form");
const confirmEditButton = document.querySelector(".form-button-submit");
const cancelButton = document.querySelector(".form-button-cancel");

addProductButton.addEventListener("click", () => {
  formContainer.classList.add("medicine-management__container--active");
});

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
  productTypeReset();
});

cancelButton.addEventListener("click", () => {
  productForm.reset();
  formContainer.classList.remove("medicine-management__container--active");
  appState.editState = null;
  confirmEditButton.textContent = "Submit";
  productTypeReset();
});

// Delete Modal

const deleteModal = document.querySelector(".delete-modal");

const deleteModalButtonConfirm = document.querySelector(
  ".delete-modal__button-confirm"
);
const deleteModalButtonCancel = document.querySelector(
  ".delete-modal__button-cancel"
);

deleteModalButtonConfirm.addEventListener("click", () => {
  ProductsManagement.removeProduct(currentProductId.productUniqueId);
  deleteModal.classList.remove("delete-modal--active");
});

deleteModalButtonCancel.addEventListener("click", () => {
  deleteModal.classList.remove("delete-modal--active");
});
