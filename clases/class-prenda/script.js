const camisaPrenda = new Prenda({
  colors: ["Negro", "blanco"],
  sizes: ["l", "xl", "m"],
  quantity: 30,
  decorations: ["lentejuelas", "escarcha"],
  cloths: ["algodón", "anti-fluido"],
});

console.log(
  "las camisas llevan  los siguentes colores",
  camisaPrenda.getColors()
);

console.log("Las tallas de las camisas son ", camisaPrenda.getSizes());

console.log(
  "La decoración de las camisas llevan",
  camisaPrenda.getDecorations()
);
console.log("el tipo de tela de las camisas es", camisaPrenda.getCloths());

const mediaPrenda = new Prenda({
  colors: ["rosado", "verde"],
  sizes: ["32", "34", "40"],
  quantity: 50,
  decorations: ["flores", "bordes"],
  cloths: ["algodón", "seda"],
});
console.log(
  "Las medias llevan los siguientes colores",
  mediaPrenda.getColors()
);

console.log(" las tallas de las medias son", mediaPrenda.getSizes());

console.log("La decoración de las medias son", mediaPrenda.getDecorations());

console.log("el tipo de tela de las medias es", mediaPrenda.getCloths());
