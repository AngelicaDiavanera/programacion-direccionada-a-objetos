const jabonProductoDeAseo = productoDeAseo({
  colors: ["amarillo", "verde", "blanco", "azul"],
  smells: ["fresa", "chicle", "Manzanaverde"],
  quantity: 34,
  price: 5000,
  statusMaterial: ["líquido", "sólido"],
});

console.log(jabonProductoDeAseo.getColors());

console.log(jabonProductoDeAseo.getSmells());

console.log(jabonProductoDeAseo.getPriceProducts());
console.log(jabonProductoDeAseo.getStatusMaterial());

const suavisanteProductoDeAseo = productoDeAseo({
  colors: ["azul", "verde", "rosado", "blanco"],
  smells: ["chicle", "Manzanaverde", "lavanda", "bébe"],
  quantity: 49,
  price: 7000,
  statusMaterial: ["líquido", "sólido"],
});

console.log(suavisanteProductoDeAseo.getColors());

console.log(suavisanteProductoDeAseo.getSmells());

console.log(suavisanteProductoDeAseo.getPriceProducts());
console.log(suavisanteProductoDeAseo.getStatusMaterial());
