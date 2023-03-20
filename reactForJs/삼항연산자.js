// let person = null;
let person = { name: "grace", age: 100 };

if (person) {
  console.log(person.name);
} else {
  console.log("there is no person");
}

console.log(person ? person.name : "there is no person");
