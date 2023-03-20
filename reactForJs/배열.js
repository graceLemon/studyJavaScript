let fruit = ["banana", "apple", "grape", "mango"];

// pop(): 마지막에 있는 아이템을 뺌
// push("아이템"): 배열 끝네 아이템 추가,배열의 최종 길이 리턴
// includes("아이템"): 배열에 아이템이 포함되어 있으면 true 아니면 false 리턴
// indexOf("아이템"): 아이템의 인덱스 번호를 리턴

// slice(시작점,끝점): 시작점 ~ 끝점(미포함)까지 배열을 복사해서 리턴
// 중요! slice 는 기존의 배열을 건드리지 않고 똑! 떼어서 새로운 배열을 만든다.
// 따라서 다시 fruit 를 리턴 했을때 다시 같은 배열을 리턴,일부 아이템을 빼서 새 배열을 만들고 싶으면 이렇게!

// splice(시작점,개수): 시작점부터 개수만큼 실제 배열에서 아이템 제거
// 중요! splice는 기존의 배열이 잘림! 내가 기존 배열을 바꿔야하면 이렇게!

//length : 배열함수는 아니지만 배열의 크기를 리턴

//-> 배열 함수는 어떻게 쓰일까?

// 어레이에 마지막 아이템 "Zebra" 제거하기
animals.pop();
console.log(animals);

// 주어진 어레이에 "Dog" 추가하기
animals.push("Dog");
console.log(animals);

//주어진 어레이에 "Mosquito","Mouse","Mule" 추가하기
animals.push("Mosquito", "Mouse", "Mule");
console.log(animals);

//해당 어레이에는 "Human"이 있는가?
console.log(animals.includes("Human"));

//해당 어레이에는 "Cat" 이 있는가?
console.log(animals.includes("Cat"));

//"Red deer"을  "Deer"로 바꾸시오
animals[animals.indexOf("Red deer")] = "Deer";
console.log(animals);

//"Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오
animals.splice(animals.indexOf("Spider"), 3);
console.log(animals);

// "Tiger"이후의 값을 제거하시오
animals.splice(animals.indexOf("Tiger"));
console.log(animals);

//"B"로 시작되는 아이템인 "Baboon"부터 "Bison"까지 가져와 새로운 어레이에 저장하시오
let newList = animals.slice(
  animals.indexOf("Baboon"),
  animals.indexOf("Bison") + 1
);
console.log(newList);
