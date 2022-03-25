class Person {
  firstName;
  lastName;
  documentNumber;
  age;
  gender;

  constructor({ firstName, lastName, documentNumber, age, gender }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.documentNumber = documentNumber;
    this.age = age;
    this.gender = gender;
  }
  getFullName() {
    return this.firstName + this.lastName;
  }
  getDocumentNumber() {
    return this.documentNumber;
  }
  getAgeAndGender() {
    return this.age + this.gender;
  }
}
