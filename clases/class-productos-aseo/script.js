const jabonProductoDeAseo = new ProductoDeAseo({
  colors: ["amarillo", "verde", "blanco", "azul"],
  smells: ["fresa", "chicle", "Manzanaverde"],
  quantity: 34,
  price: 5000,
  statusMaterial: ["líquido", "sólido"],
});

console.log(
  "el jabón tiene los siguentes colores",
  jabonProductoDeAseo.getColors()
);

console.log("El jabón tiene aromas a ", jabonProductoDeAseo.getSmells());

console.log(
  "La cantidad de jabones cuestan",
  jabonProductoDeAseo.getPriceProducts()
);
console.log(
  "El estado del jabón puede ser ",
  jabonProductoDeAseo.getStatusMaterial()
);

const suavisanteProductoDeAseo = new ProductoDeAseo({
  colors: ["azul", "verde", "rosado", "blanco"],
  smells: ["chicle", "Manzanaverde", "lavanda", "bébe"],
  quantity: 49,
  price: 7000,
  statusMaterial: ["líquido", "sólido"],
});

console.log(
  "el suavisante tiene los siguentes colores",
  suavisanteProductoDeAseo.getColors()
);

console.log(
  "El suavizante tiene aromas a ",
  suavisanteProductoDeAseo.getSmells()
);

console.log(
  "La cantidad de suavizantes cuestan",
  suavisanteProductoDeAseo.getPriceProducts()
);
console.log(
  "El estado del suavizante puede ser ",
  suavisanteProductoDeAseo.getStatusMaterial()
);
