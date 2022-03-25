const mujerPerson = new Person({
  firstName: "Maria",
  lastName: "Herrera",
  documentNumber: 1073775642,
  age: "23",
  gender: "femenino",
});

console.log("la mujer se llama ", mujerPerson.getFullName());

console.log("el numero de documento es  ", mujerPerson.getDocumentNumber());

console.log(
  "la edad y el género de la mujer son: ",
  mujerPerson.getAgeAndGender()
);

const hombrePerson = new Person({
  firstName: "Jesús",
  lastName: "Torres",
  documentNumber: 39821564,
  age: "45",
  gender: "masculino",
});
console.log("El hombre se llama ", hombrePerson.getFullName());

console.log("el numero de documento es  ", hombrePerson.getDocumentNumber());

console.log(
  "la edad y el género del hombre son: ",
  hombrePerson.getAgeAndGender()
);
