class Fruit {
  colors;
  weights;
  quantity;
  sizes;
  flavors;
  texture;
  price;

  constructor({ colors, weights, quantity, sizes, flavors, texture, price }) {
    this.colors = colors;
    this.weights = weights;
    this.quantity = quantity;
    this.sizes = sizes;
    this.flavors = flavors;
    this.texture = texture;
    this.price = price;
  }
  getColors() {
    return this.colors.join(", ");
  }
  getWeights() {
    return this.weights.join(", ");
  }
  getSizes() {
    return this.sizes.join(", ");
  }
  getFlavors() {
    return this.flavors.join(", ");
  }
  getPriceTotal() {
    return this.price * this.quantity;
  }
}
