// 정사각형 클래스
class Square {
  #length;
  //이 위치에 해당 속성을 private 속성으로 사용하겠다고 미리 선언

  constructor(length) {
    this.length = length;
  }

  get length() {
    return this.#length;
  }

  get perimeter() {
    return this.#length * 4;
  }

  get area() {
    return this.#length * this.#length;
  }

  set length(length) {
    if (length <= 0) {
      throw "길이는 0보다 커야합니다.";
    }
    this.#length = length;
  }
}

//클래스 사용하기
const squareA = new Square(10);
console.log(`한 변의 길이는 ${squareA.length}`);
console.log(`둘레: ${squareA.perimeter}`);
console.log(`넓이: ${squareA.area}`);

//예외발생
const squareB = set Square(-10);
