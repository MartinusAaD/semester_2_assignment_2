import Product from "./product.js";

// Capsule
export class ProductTypeCapsule extends Product {
  constructor(
    name,
    productType,
    id,
    manufacturer,
    expiryDate,
    quantity,
    capsuleShell,
    capsuleMaterial
  ) {
    super(name, productType, id, manufacturer, expiryDate, quantity);
    this.capsuleShell = capsuleShell; // Hard or Soft
    this.capsuleMaterial = capsuleMaterial; // Gelatin or Vegetable
  }
}

// Inhaler
export class ProductTypeInhaler extends Product {
  constructor(
    name,
    productType,
    id,
    manufacturer,
    expiryDate,
    quantity,
    inhalerType
  ) {
    super(name, productType, id, manufacturer, expiryDate, quantity);
    this.inhalerType = inhalerType; // Puffer or Powder
  }
}

// Liquid
export class ProductTypeLiquid extends Product {
  constructor(
    name,
    productType,
    id,
    manufacturer,
    expiryDate,
    quantity,
    liquidType
  ) {
    super(name, productType, id, manufacturer, expiryDate, quantity);
    this.liquidType = liquidType; // elixir, solution, suspension or syrup
  }
}

// Needle
export class ProductTypeNeedle extends Product {
  constructor(
    name,
    productType,
    id,
    manufacturer,
    expiryDate,
    quantity,
    needleBevel
  ) {
    super(name, productType, id, manufacturer, expiryDate, quantity);
    this.needleBevel = needleBevel; // Standard, short or true short needleBevel
  }
}

// Patch
export class ProductTypePatch extends Product {
  constructor(
    name,
    productType,
    id,
    manufacturer,
    expiryDate,
    quantity,
    patchType
  ) {
    super(name, productType, id, manufacturer, expiryDate, quantity);
    this.patchType = patchType; // Single-layer drug-in-adhesive, Two-layer drug-in-adhesive, Reservoir, Matrix or Vapor patch
  }
}

// Pill
export class ProductTypePill extends Product {
  constructor(
    name,
    productType,
    id,
    manufacturer,
    expiryDate,
    quantity,
    pillShape,
    pillQuantity
  ) {
    super(name, productType, id, manufacturer, expiryDate, quantity);
    this.pillShape = pillShape; // Round, Oval or Capsule-shaped
    this.pillQuantity = pillQuantity;
  }
}

export default {
  ProductTypeCapsule,
  ProductTypeInhaler,
  ProductTypeLiquid,
  ProductTypeNeedle,
  ProductTypePatch,
  ProductTypePill,
};
