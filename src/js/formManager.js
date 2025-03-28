const productType = document.querySelector(".form__product-type"); //Select -> Option
const productTypesExtra = document.querySelectorAll(".product-type__container");

export const productTypeReset = () => {
  productTypesExtra.forEach((category) => {
    category.style.display = "none";
  });
};

export const productTypeChange = () => {
  productTypesExtra.forEach((category) => {
    if (category.className.includes(productType.value)) {
      category.style.display = "flex";
      console.log(category);
    } else {
      console.log(category);
      category.style.display = "none";
    }
  });
};

productType.addEventListener("change", productTypeChange);

export default { productTypeReset, productTypeChange };
