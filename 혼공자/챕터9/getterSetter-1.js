// 정사각형 클래스
class Square {
  #length;
  //이 위치에 해당 속성을 private 속성으로 사용하겠다고 미리 선언

  constructor(length) {
    this.setLength(length);
  }

  setLength(value) {
    if (value <= 0) {
      throw "길이는 0보다 커야 합니다.";
    }
    this.#length = value;
  }

  getLength(value) {
    return this.#length;
  }

  getPerimeter() {
    return 4 * this.length;
  }
  getArea() {
    return this.#length * this.#length;
  }
}

//클래스 사용하기
const square = new Square(10);
console.log(`한 변의 길이는 ${square.getLength()}`);

//예외발생
square.setLength(-10);
