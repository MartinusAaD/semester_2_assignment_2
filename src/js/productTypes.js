import Product from "./product.js";

// Capsule
class ProductTypeCapsule extends Product {
  constructor(name, type, manufacturer, expiryDate, quantity, shell, material) {
    super(name, type, manufacturer, expiryDate, quantity);
    this.shell = shell; // Hard or Soft
    this.material = material; // Gelatin or Vegetable
  }
}

// Inhaler
class ProductTypeInhaler extends Product {
  constructor(name, type, manufacturer, expiryDate, quantity, inhalerType) {
    super(name, type, manufacturer, expiryDate, quantity);
    this.inhalerType = inhalerType; // Puffer or Powder
  }
}

// Liquid
class ProductTypeLiquid extends Product {
  constructor(name, type, manufacturer, expiryDate, quantity, liquidType) {
    super(name, type, manufacturer, expiryDate, quantity);
    this.liquidType = liquidType; // elixir, solution, suspension or syrup
  }
}

// Needle
class ProductTypeNeedle extends Product {
  constructor(name, type, manufacturer, expiryDate, quantity, bevel) {
    super(name, type, manufacturer, expiryDate, quantity);
    this.bevel = bevel; // Standard, short or true short bevel
  }
}

// Patch
class ProductTypePatch extends Product {
  constructor(name, type, manufacturer, expiryDate, quantity, patchType) {
    super(name, type, manufacturer, expiryDate, quantity);
    this.patchType = patchType; // Single-layer drug-in-adhesive, Two-layer drug-in-adhesive, Reservoir, Matrix or Vapor patch
  }
}

// Pill
class ProductTypePill extends Product {
  constructor(
    name,
    type,
    manufacturer,
    expiryDate,
    quantity,
    pillShape,
    pillQuantity
  ) {
    super(name, type, manufacturer, expiryDate, quantity);
    this.pillShape = pillShape; // Round, Oval or Capsule-shaped
    this.pillQuantity = pillQuantity;
  }
}
