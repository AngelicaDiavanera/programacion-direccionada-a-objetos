const perasFruit = fruit({
  colors: ["amarillo", "verde"],
  weights: ["50grs", "10grs"],
  quantity: 100,
  size: "mediano",
  flavors: ["acido", "dulce"],
  texture: "lisa",
  price: 1200,
});
console.log(perasFruit.getColors());
console.log(perasFruit.getWeights());
console.log(perasFruit.getFlavors());
console.log(perasFruit.getPriceTotal());

const manzanasFruit = fruit({
  colors: ["verde", "roja"],
  weights: ["60grs", "120grs"],
  quantity: 20,
  size: "grande",
  flavors: ["acido", "dulce"],
  texture: "lisa",
  price: 1800,
});
console.log(manzanasFruit.getColors());
console.log(manzanasFruit.getWeights());
console.log(manzanasFruit.getFlavors());
console.log(manzanasFruit.getPriceTotal());
