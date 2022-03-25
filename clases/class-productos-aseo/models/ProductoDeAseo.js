class ProductoDeAseo {
  colors;
  smells;
  quantity;
  price;
  statusMaterial;

  constructor({ colors, smells, quantity, price, statusMaterial }) {
    this.colors = colors;
    this.smells = smells;
    this.quantity = quantity;
    this.price = price;
    this.statusMaterial = statusMaterial;
  }
  getColors() {
    return this.colors.join(", ");
  }
  getPriceProducts() {
    return this.price * this.quantity;
  }
  getStatusMaterial() {
    return this.statusMaterial.join(", ");
  }
  getSmells() {
    return this.smells.join(", ");
  }
}
