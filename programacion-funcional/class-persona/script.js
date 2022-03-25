const mujerPerson = person({
  firstName: "Maria",
  lastName: "Herrera",
  documentNumber: 1073775642,
  age: "23",
  gender: "femenino",
});

console.log(mujerPerson.getFullName());

console.log(mujerPerson.getDocumentNumber());

console.log(mujerPerson.getAgeAndGender());

const hombrePerson = person({
  firstName: "Jesús",
  lastName: "Torres",
  documentNumber: 39821564,
  age: "45",
  gender: "masculino",
});
console.log(hombrePerson.getFullName());

console.log(hombrePerson.getDocumentNumber());

console.log(hombrePerson.getAgeAndGender());
