const camisaPrenda = prenda({
  colors: ["Negro", "blanco"],
  sizes: ["l", "xl", "m"],
  quantity: 30,
  decorations: ["lentejuelas", "escarcha"],
  cloths: ["algodón", "anti-fluido"],
});

console.log(camisaPrenda.getColors());

console.log(camisaPrenda.getSizes());

console.log(camisaPrenda.getDecorations());
console.log(camisaPrenda.getCloths());

const mediaPrenda = prenda({
  colors: ["rosado", "verde"],
  sizes: ["32", "34", "40"],
  quantity: 50,
  decorations: ["flores", "bordes"],
  cloths: ["algodón", "seda"],
});
console.log(mediaPrenda.getColors());

console.log(mediaPrenda.getSizes());

console.log(mediaPrenda.getDecorations());

console.log(mediaPrenda.getCloths());
