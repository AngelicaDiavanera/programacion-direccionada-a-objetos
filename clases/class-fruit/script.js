const perasFruit = new Fruit({
  colors: ["amarillo", "verde"],
  weights: ["50grs", "10grs"],
  quantity: 100,
  size: "mediano",
  flavors: ["acido", "dulce"],
  texture: "lisa",
  price: 1200,
});
console.log("las peras tienen dos colores: ", perasFruit.getColors());
console.log(" el peso de una pera varia entre ", perasFruit.getWeights());
console.log("los sabores de las peras son: ", perasFruit.getFlavors());
console.log(
  "El precio total de la cantidad de peras a vender es de: ",
  perasFruit.getPriceTotal()
);

const manzanasFruit = new Fruit({
  colors: ["verde", "roja"],
  weights: ["60grs", "120grs"],
  quantity: 20,
  size: "grande",
  flavors: ["acido", "dulce"],
  texture: "lisa",
  price: 1800,
});
console.log("las manzanas tienen dos colores: ", manzanasFruit.getColors());
console.log(" el peso de una manzana varia entre ", manzanasFruit.getWeights());
console.log("los sabores de las manzanas son: ", manzanasFruit.getFlavors());
console.log(
  "El precio total de la cantidad de manzanas a vender es de: ",
  manzanasFruit.getPriceTotal()
);
