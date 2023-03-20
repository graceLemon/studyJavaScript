//Destructuring

let person = {
  name: "grace",
  age: 100,
};

// let name = person.name
// let age = person['age']

let { name, age } = person;

console.log(name, age);

let array = [1, 2, 3, 4];
let [a, b, ...rest] = array; //파라미터문법

console.log(a, b);
