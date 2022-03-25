class Animal {
  quantityLegs;
  colors;
  skinsTypes;
  sexTypes;
  age;

  constructor({ quantityLegs, colors, skinsTypes, sexTypes, age }) {
    this.quantityLegs = quantityLegs;
    this.colors = colors;
    this.skinsTypes = skinsTypes;
    this.sexTypes = sexTypes;
    this.age = age;
  }
  getQuantityLegs() {
    return this.quantityLegs.join(", ");
  }

  getColors() {
    return this.colors.join(", ");
  }
  getSkinsTypes() {
    return this.skinsTypes.join(", ");
  }
  getSexTypes() {
    return this.sexTypes.join(", ");
  }
}
