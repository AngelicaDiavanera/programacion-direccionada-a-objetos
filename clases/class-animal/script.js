const mamiferoAnimal = new Animal({
  quantityLegs: ["4", "2"],
  colors: ["amarrillo", "café", "negro"],
  skinsTypes: ["pelo", "plumas", ""],
  sexTypes: ["Macho", "Hembra"],
  age: "2 años",
});
console.log("El mamifero tiene ", mamiferoAnimal.getQuantityLegs(), "patas");
console.log(
  "El tipo de piel de un mamifero puede ser ",
  mamiferoAnimal.getSkinsTypes()
);
console.log(
  "El color de un mamifero puede llegar ha ser ",
  mamiferoAnimal.getColors()
);
console.log(
  "El tipo de sexo en un mamifero puede ser  ",
  mamiferoAnimal.getSexTypes()
);

const marinoAnimal = new Animal({
  quantityLegs: ["0", "5"],
  colors: ["amarrillo", "rojo", "verde", "azul"],
  skinsTypes: ["Escamas"],
  sexTypes: ["Macho", "Hembra", "hermafrodita"],
  age: "15 años",
});
console.log("El animal marino tiene ", marinoAnimal.getQuantityLegs(), "patas");
console.log(
  "El tipo de piel de un animal marino puede ser ",
  marinoAnimal.getSkinsTypes()
);
console.log(
  "El color de animal marino puede llegar ha ser ",
  marinoAnimal.getColors()
);
console.log(
  "El tipo de sexo en un animal marino puede ser  ",
  marinoAnimal.getSexTypes()
);
