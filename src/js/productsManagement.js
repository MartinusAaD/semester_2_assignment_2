import appState from "./appState";
import currentProductId from "./currentProductId";
import { productTypeChange } from "./formManager";
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

      const toolsContainer = document.createElement("div");
      const editButton = document.createElement("button");
      const deleteButton = document.createElement("button");

      productsContainer.append(productContainer);
      productContainer.append(productName, toolsContainer, productList);
      toolsContainer.append(editButton, deleteButton);
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

      toolsContainer.classList.add("product-tools-container");
      editButton.classList.add("product__edit-button", "product__tools-button");
      deleteButton.classList.add(
        "product__delete-button",
        "product__tools-button"
      );

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

      editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
      deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

      editButton.addEventListener("click", () => {
        this.populateEditForm(product.id);
        productTypeChange();

        const confirmEditButton = document.querySelector(".form-button-submit");
        confirmEditButton.textContent = "Confirm Edit";
      });

      deleteButton.addEventListener("click", () => {
        const deleteModal = document.querySelector(".delete-modal");

        const deleteModalMessage = document.querySelector(
          ".delete-modal__message"
        );

        deleteModalMessage.textContent = `Are you sure you want to delete "${product.name}"?`;
        deleteModal.classList.add("delete-modal--active");

        currentProductId.productUniqueId = product.id;
      });

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
  };

  static populateEditForm = (productUniqueId) => {
    const productsList = JSON.parse(localStorage.getItem("productsList")) || [];

    const productName = document.querySelector(".form__product-name-input");
    const productType = document.querySelector(".form__product-type"); //Select -> Option
    const productId = document.querySelector(".form__product-id-input");
    const productManufacturer = document.querySelector(".form__manufacturer"); //Select -> Option
    const productExpiryDate = document.querySelector(
      ".form__expiration-date-input"
    );
    const productQuantity = document.querySelector(".form__quantity-input");

    const formContainer = document.querySelector(
      ".medicine-management__container"
    );
    formContainer.classList.add("medicine-management__container--active");

    const productToEdit = productsList.find(
      (product) => product.id === productUniqueId
    );

    productName.value = productToEdit.name;
    productType.value = productToEdit.type;
    productId.value = productToEdit.id;
    productManufacturer.value = productToEdit.manufacturer;
    productExpiryDate.value = productToEdit.expiryDate;
    productQuantity.value = productToEdit.quantity;

    appState.editState = productToEdit.id;
  };

  static updateProduct = (
    productName,
    productType,
    productId,
    productManufacturer,
    productExpiryDate,
    productQuantity
  ) => {
    const productsList = JSON.parse(localStorage.getItem("productsList")) || [];
    const productToUpdate = productsList.find(
      (product) => product.id === productId
    );

    if (productToUpdate) {
      productToUpdate.name = productName;
      productToUpdate.type = productType;
      productToUpdate.productId = productId;
      productToUpdate.manufacturer = productManufacturer;
      productToUpdate.expiryDate = productExpiryDate;
      productToUpdate.quantity = productQuantity;

      localStorage.setItem("productsList", JSON.stringify(productsList));
      this.viewProducts();
      appState.editState = null;
    }
  };

  static removeProduct = (productUniqueId) => {
    const productsList = JSON.parse(localStorage.getItem("productsList")) || [];
    const filteredProducts = productsList.filter(
      (product) => product.id !== productUniqueId
    );
    localStorage.setItem("productsList", JSON.stringify(filteredProducts));
    this.viewProducts();
    productUniqueId = "";
  };
}

export default ProductsManagement;
