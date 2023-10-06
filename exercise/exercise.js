const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const infoSelected = {
  id : person.id,
  age : person.age
}



const json = JSON.stringify(infoSelected);

console.log(json); // Should return: { id: 1, age: 25 }

