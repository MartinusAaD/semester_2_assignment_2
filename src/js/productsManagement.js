import appState from "./appState";
import currentProductId from "./currentProductId";
import { productTypeChange } from "./formManager";
import Product from "./product";
import {
  ProductTypeCapsule,
  ProductTypeInhaler,
  ProductTypeLiquid,
  ProductTypeNeedle,
  ProductTypePatch,
  ProductTypePill,
} from "./productTypes";

class ProductsManagement {
  static viewProducts = () => {
    const productsList = JSON.parse(localStorage.getItem("productsList")) || [];
    const productsContainer = document.querySelector(".products-container");

    productsContainer.innerHTML = "";

    productsList.forEach((product) => {
      const productContainer = document.createElement("div");
      const productName = document.createElement("h2");
      const productList = document.createElement("ul");
      const productListInner = document.createElement("ul");
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
      productList.append(productType, productListInner);

      productContainer.classList.add("product-container");
      productName.classList.add("product-name");
      productList.classList.add("product-list");
      productListInner.classList.add("product-list-inner");
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
        product.productType
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

      switch (product.productType) {
        case "capsule":
          const capsuleShell = document.createElement("li");
          const capsuleMaterial = document.createElement("li");

          productListInner.append(capsuleShell, capsuleMaterial);

          capsuleShell.innerHTML = `<strong>Capsule Shell:</strong> ${capitalizeFirstLetter(
            product.capsuleShell
          )}`;
          capsuleMaterial.innerHTML = `<strong>Capsule Material:</strong> ${capitalizeFirstLetter(
            product.capsuleMaterial
          )}`;
          break;

        case "inhaler":
          const inhalerType = document.createElement("li");

          productListInner.append(inhalerType);

          inhalerType.innerHTML = `<strong>Inhaler Type:</strong> ${capitalizeFirstLetter(
            product.inhalerType
          )}`;
          break;

        case "liquid":
          const liquidType = document.createElement("li");

          productListInner.append(liquidType);

          liquidType.innerHTML = `<strong>Liquid Type:</strong> ${capitalizeFirstLetter(
            product.liquidType
          )}`;
          break;

        case "needle":
          const needleBevel = document.createElement("li");

          productListInner.append(needleBevel);

          needleBevel.innerHTML = `<strong>Needle Bevel:</strong> ${capitalizeFirstLetter(
            product.needleBevel
          )}`;
          break;

        case "patch":
          const patchType = document.createElement("li");

          productListInner.append(patchType);

          patchType.innerHTML = `<strong>Patch Type:</strong> ${capitalizeFirstLetter(
            product.patchType
          )}`;
          break;

        case "pill":
          const pillShape = document.createElement("li");
          const pillQuantity = document.createElement("li");

          productListInner.append(pillShape, pillQuantity);

          pillShape.innerHTML = `<strong>Pill Shape:</strong> ${capitalizeFirstLetter(
            product.pillShape
          )}`;
          pillQuantity.innerHTML = `<strong>Pill Quantity:</strong> ${capitalizeFirstLetter(
            product.pillQuantity
          )}`;

          break;

        default:
          break;
      }

      productList.append(
        productId,
        productManufacturer,
        productExpiryDate,
        productQuantity
      );

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
    productQuantity,
    // Type Specific
    capsuleShell,
    capsuleMaterial,
    inhalerType,
    liquidType,
    needleBevel,
    patchType,
    pillShape,
    pillQuantity
  ) => {
    const productsList = JSON.parse(localStorage.getItem("productsList")) || [];

    let newProduct;
    switch (productType) {
      case "capsule":
        newProduct = new ProductTypeCapsule(
          productName,
          productType,
          productId,
          productManufacturer,
          productExpiryDate,
          productQuantity,
          capsuleShell,
          capsuleMaterial
        );
        break;

      case "inhaler":
        newProduct = new ProductTypeInhaler(
          productName,
          productType,
          productId,
          productManufacturer,
          productExpiryDate,
          productQuantity,
          inhalerType
        );
        break;

      case "liquid":
        newProduct = new ProductTypeLiquid(
          productName,
          productType,
          productId,
          productManufacturer,
          productExpiryDate,
          productQuantity,
          liquidType
        );
        break;

      case "needle":
        newProduct = new ProductTypeNeedle(
          productName,
          productType,
          productId,
          productManufacturer,
          productExpiryDate,
          productQuantity,
          needleBevel
        );
        break;

      case "patch":
        newProduct = new ProductTypePatch(
          productName,
          productType,
          productId,
          productManufacturer,
          productExpiryDate,
          productQuantity,
          patchType
        );
        break;

      case "pill":
        newProduct = new ProductTypePill(
          productName,
          productType,
          productId,
          productManufacturer,
          productExpiryDate,
          productQuantity,
          pillShape,
          pillQuantity
        );
        break;

      default:
        break;
    }
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

    // Type specific
    const capsuleShell = document.querySelector(
      ".product-type__capsule-shell-select"
    );
    const capsuleMaterial = document.querySelector(
      ".product-type__capsule-material-select"
    );
    const inhalerType = document.querySelector(
      ".product-type__inhaler-type-select"
    );
    const liquidType = document.querySelector(
      ".product-type__liquid-type-select"
    );
    const needleBevel = document.querySelector(".product-type__needle-Bevel");
    const patchType = document.querySelector(".product-type__patch-type");
    const pillShape = document.querySelector(".product-type__pill-shape");
    const pillQuantity = document.querySelector(
      ".product-type_pill-quantity-input"
    );

    const formContainer = document.querySelector(
      ".medicine-management__container"
    );
    formContainer.classList.add("medicine-management__container--active");

    const productToEdit = productsList.find(
      (product) => product.id === productUniqueId
    );

    productName.value = productToEdit.name;
    productType.value = productToEdit.productType;
    productId.value = productToEdit.id;
    productManufacturer.value = productToEdit.manufacturer;
    productExpiryDate.value = productToEdit.expiryDate;
    productQuantity.value = productToEdit.quantity;

    switch (productType.value) {
      case "capsule":
        capsuleShell.value = productToEdit.capsuleShell;
        capsuleMaterial.value = productToEdit.capsuleMaterial;
        break;

      case "inhaler":
        inhalerType.value = productToEdit.inhalerType;
        break;

      case "liquid":
        liquidType.value = productToEdit.liquidType;
        break;

      case "needle":
        needleBevel.value = productToEdit.needleBevel;
        break;

      case "patch":
        patchType.value = productToEdit.patchType;
        break;

      case "pill":
        pillShape.value = productToEdit.pillShape;
        pillQuantity.value = productToEdit.pillQuantity;
        break;

      default:
        break;
    }

    appState.editState = productToEdit.id;
  };

  static updateProduct = (
    productName,
    productType,
    productId,
    productManufacturer,
    productExpiryDate,
    productQuantity,
    // Type Specific
    capsuleShell,
    capsuleMaterial,
    inhalerType,
    liquidType,
    needleBevel,
    patchType,
    pillShape,
    pillQuantity
  ) => {
    const productsList = JSON.parse(localStorage.getItem("productsList")) || [];
    const productToUpdate = productsList.find(
      (product) => product.id === productId
    );

    if (productToUpdate) {
      productToUpdate.name = productName;
      productToUpdate.productType = productType;
      productToUpdate.id = productId;
      productToUpdate.manufacturer = productManufacturer;
      productToUpdate.expiryDate = productExpiryDate;
      productToUpdate.quantity = productQuantity;

      // Clear unnecessary properties and re-apply
      delete productToUpdate.capsuleShell;
      delete productToUpdate.capsuleMaterial;
      delete productToUpdate.inhalerType;
      delete productToUpdate.liquidType;
      delete productToUpdate.needleBevel;
      delete productToUpdate.patchType;
      delete productToUpdate.pillShape;
      delete productToUpdate.pillQuantity;

      switch (productType) {
        case "capsule":
          productToUpdate.capsuleShell = capsuleShell;
          productToUpdate.capsuleMaterial = capsuleMaterial;
          break;

        case "inhaler":
          productToUpdate.inhalerType = inhalerType;
          break;

        case "liquid":
          productToUpdate.liquidType = liquidType;
          break;

        case "needle":
          productToUpdate.needleBevel = needleBevel;
          break;

        case "patch":
          productToUpdate.patchType = patchType;
          break;

        case "pill":
          productToUpdate.pillShape = pillShape;
          productToUpdate.pillQuantity = pillQuantity;
          break;

        default:
          break;
      }

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
