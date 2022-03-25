const mamiferoAnimal = animal({
  quantityLegs: ["4", "2"],
  colors: ["amarrillo", "café", "negro"],
  skinsTypes: ["pelo", "plumas", ""],
  sexTypes: ["Macho", "Hembra"],
  age: "2 años",
});
console.log(mamiferoAnimal.getQuantityLegs());
console.log(mamiferoAnimal.getSkinsTypes());
console.log(mamiferoAnimal.getColors());
console.log(mamiferoAnimal.getSexTypes());

const marinoAnimal = animal({
  quantityLegs: ["0", "5"],
  colors: ["amarrillo", "rojo", "verde", "azul"],
  skinsTypes: ["Escamas"],
  sexTypes: ["Macho", "Hembra", "hermafrodita"],
  age: "15 años",
});
console.log(marinoAnimal.getQuantityLegs());
console.log(marinoAnimal.getSkinsTypes());
console.log(marinoAnimal.getColors());
console.log(marinoAnimal.getSexTypes());
