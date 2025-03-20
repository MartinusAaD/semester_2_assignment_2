import storeData from "./storeData.js";
import Product from "./product.js";

const productForm = document.querySelector(".medicine-management__form");

productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  storeData();
  productForm.reset();
});
