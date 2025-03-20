import Product from "./product.js";
import ProductsManagement from "./productsManagement.js";

const productForm = document.querySelector(".medicine-management__form");

productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  ProductsManagement.addProduct();
  productForm.reset();
});
