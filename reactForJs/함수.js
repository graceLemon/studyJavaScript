//이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하시오
//매개변수로 전달받은 이름을 반환하게 함수를 수정하시오

function greet(name) {
  console.log(`내 이름은 ${name}이다.`);
  return name;
}

const name = greet("지영");
