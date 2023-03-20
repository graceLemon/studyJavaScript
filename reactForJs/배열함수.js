let num = ["1", "2", "3", "4"];

// 1. forEach : 반환값이 없다, 단순 for문과 같이 작동한다.

// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

// for 문을 쓰지 않고...
// function printNum(item) {
//   console.log(item);
// }
// num.forEach(printNum);

//더 간단하게..
// num.forEach(function (item) {
//   console.log(item);
// });

//모던자바스크립트로
// num.forEach((item) => {
//   console.log(item);
// });

//인덱스도 포함해서
// num.forEach((item,index) => {
//   console.log(item);
// });

// 2.map : 반환값을 배열에 담아 반환한다.반드시 return 붙여주고 array 안에 객체가 있을때
// 원하는 key 값만 모아서 반환가능

// let data = num.map((item) => {
//   return item;
// });
// console.log(data);

// let data = num.map((item) => {
//   return item + "뭔가 붙여주고 싶을때";
// });
// console.log(data);

// 예를 들면 리스트가 있고 키값이 이름이 포함되어 있고 이름만 보고 싶다면 이렇게..
// let data = numList.map((item) => {
//   return item.name
// });
// console.log(data);

// 조건에 맞춰 반환도 가능
// let data2 = numList.map((item) => {
//   return item.age == 23
// });
// console.log(data2);

//3.비슷한 애들..
// filter: 조건에 충족하는(true) 아이템만 배열에 담아 반환한다.

// let data3 = numList.filter((item) => {
//   return item.startWith("A")
// });
// console.log(data2);

// some: 조건에 충족하는 아이템이 하나라도 있으면 true 반환, 아니면 flase.

// let data3 = numList.some((item) => {
//   return item.startWith("A")
// });
// console.log(data3);

// every: 모든 배열에 아이템이 조건을 충족하면 true 반환, 아니면 false.
// let data3 = numList.every((item) => {
//   return item.startWith("A")
// });
// console.log(data3);

// find : 조건에 충족하는 아이템 하나만 반환(여러개라면 첫번째것만 반환)
// let data3 = numList.find((item) => {
//   return item.startWith("A")
// });
// console.log(data3);

// findIndex : 조건에 충족하는 아이템의 인덱스값 반환 (여러개라면 첫번째아이템의 인덱스번호만 반환)
// let data3 = numList.findIndex((item) => {
//   return item.startWith("A")
// });
// console.log(data3);
