const person = ({ firstName, lastName, documentNumber, age, gender }) => {
  const getFullName = () => {
    return firstName + " " + lastName;
  };
  const getDocumentNumber = () => {
    return documentNumber;
  };
  const getAgeAndGender = () => {
    return age + " " + gender;
  };
  return {
    firstName,
    lastName,
    documentNumber,
    age,
    gender,
    getFullName,
    getDocumentNumber,
    getAgeAndGender,
  };
};
