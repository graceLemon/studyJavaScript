let person = { name: "grace", age: 100 };

let person2 = { ...person }; //person 객체가 복사되어 새로운 객체가 하나 더 생성됨 즉 person객체 != person2객체
let person3 = person; // 바로 할당하게 되면 객체의 주소값만 복사된다. 즉, 객체는 하나이고 그 겍체를 참조하는 변수가 두 개

console.log(person == person2);
console.log(person == person3);

let a = [1, 2];
let b = [...a, 3];

console.log(b);

let c = [...a, ...b];
console.log(c);
