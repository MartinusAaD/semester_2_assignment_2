class Validation {
  static validateForm(productType, validationMessage) {
    const fieldsToValidate = [
      { name: "product-name", message: "Please enter product name!" },
      { name: "product-type", message: "Please choose a product type!" },
    ];

    switch (productType) {
      case "capsule":
        fieldsToValidate.push(
          {
            name: "capsule-shell",
            message: "Please select a capsule shell type!",
          },
          {
            name: "capsule-material",
            message: "Please select the capsules material!",
          }
        );
        break;

      case "inhaler":
        fieldsToValidate.push({
          name: "inhaler-type",
          message: "Please select the type of inhaler!",
        });
        break;

      case "liquid":
        fieldsToValidate.push({
          name: "liquid-type",
          message: "Please select a liquid type!",
        });
        break;

      case "needle":
        fieldsToValidate.push({
          name: "needle-bevel",
          message: "Please select the needles bevel!",
        });
        break;

      case "patch":
        fieldsToValidate.push({
          name: "patch-type",
          message: "Please select the type of patch!",
        });
        break;

      case "pill":
        fieldsToValidate.push(
          {
            name: "pill-shape",
            message: "Please select the shape of the pill!",
          },
          {
            name: "pill-quantity",
            message: "Please enter the amount of pills!",
          }
        );
        break;

      default:
        break;
    }

    // Pushing after type for correct validation order
    fieldsToValidate.push(
      { name: "manufacturer", message: "Please select a manufacturer!" },
      { name: "expiry-date", message: "Please select an expiry date!" },
      { name: "quantity", message: "Please enter the products quantity!" }
    );

    for (let field of fieldsToValidate) {
      const inputField = document.querySelector(`[id=${field.name}]`);
      inputField.classList.remove("form__invalid-input");

      inputField.addEventListener("input", () => {
        inputField.classList.remove("form__invalid-input");
        validationMessage.style.display = "none";
      });

      if (!inputField.value.trim()) {
        validationMessage.style.display = "block";
        validationMessage.textContent = field.message;
        inputField.classList.add("form__invalid-input");
        return false;
      }
    }
    return true;
  }
}

export default Validation;
