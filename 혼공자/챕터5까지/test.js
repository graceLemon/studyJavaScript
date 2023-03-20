/*
문제.
- 요구사항: `persons` 변수로 입력받은 값의 사람들에게 맥주 주문을 받습니다.
성인(19세 이상)인 경우에만 맥주 주문을 받아 맥주를 제공할 수 있도록 해주세요.
- 성인에게 주문을 받은 경우 `"맥주 나왔습니다! [주문한 사람 이름]님"` 처럼 출력합니다.
- 미성년자에게 주문을 받은 경우 `"나이 더 먹고 오세요! [주문한 사람 이름]님"` 처럼 출력합니다.
*/

// function isAudlt(person) {
//   return person.age >= 19;
// }

// function orderBeer(person) {
//   if(isAudlt(person)) {
//     console.log('맥주 나왔습니다.'+person.name+'님');
//   } else {
//     console.log('나이 더 먹고 오세요!'+person.name+'님');
//   }
// }

// const persons = [
//   {name: "이보리", age: 19},
//   {name: "박보리", age: 18}
// ];

// for (const person of persons) {
//   orderBeer(person);
// }


/*
문제
반복문을 이용하여 다음의 배열의 값을 하나씩 차례대로 출력해보세요.

for(초기화 구문; 조건문; 증감문) { 명령문 }

*/

// const example = ['apple','banana','mango','kiwi','melon'];

// for( i=0; i<example.length; i++) {
//   console.log(example[i]);
// }