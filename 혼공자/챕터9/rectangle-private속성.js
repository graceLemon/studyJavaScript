//사각형을 나타내는 클래스를 선언하고 사용 -> 길이에 음수 들어가지 않게 수정하기

/*
class Square {
  constructor(length) {
    // 생성자함수
    this.length = length;
  }

  getPerimeter() {
    return 4 * this.length;
  }
  getArea() {
    return this.length * this.length;
  }
}

const square = new Square(-10);
console.log(`사각형의 둘레: ${square.getPerimeter()}`);
console.log(`사각형의 넓이: ${square.getArea()}`);
*/

class Square {
  constructor(length) {
    // 생성자함수
    if (length <= 0) {
      throw "길이는 0 보다 커야 합니다.";
    }
    this.length = length;
  }

  getPerimeter() {
    return 4 * this.length;
  }
  getArea() {
    return this.length * this.length;
  }
}

const square = new Square(-10);
console.log(`사각형의 둘레: ${square.getPerimeter()}`);
console.log(`사각형의 넓이: ${square.getArea()}`);
