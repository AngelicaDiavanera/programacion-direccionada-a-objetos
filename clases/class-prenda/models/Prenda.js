class Prenda {
  colors;
  sizes;
  quantity;
  decorations;
  cloths;

  constructor({ colors, sizes, quantity, decorations, cloths }) {
    this.colors = colors;
    this.sizes = sizes;
    this.quantity = quantity;
    this.decorations = decorations;
    this.cloths = cloths;
  }
  getColors() {
    return this.colors.join(", ");
  }
  getSizes() {
    return this.sizes.join(", ");
  }
  getDecorations() {
    return this.decorations.join(", ");
  }
  getCloths() {
    return this.cloths.join(", ");
  }
}
