//사각형을 나타내는 클래스를 선언하고 사용

class Rectangle {
  constructor(width, height) {
    // 생성자함수
    this.width = width;
    this.height = height;
  }

  //사각형의 둘레를 구하는 메소드
  getPerimeter() {
    return 2 * (this.width + this.height);
  }

  //사각형의 넓이를 구하는 메소드
  getArea() {
    return this.width * this.height;
  }
}

// 정사각형 클래스
class Square extends Rectangle {
  //square클래스가 자식 클래스이다.
  constructor(length) {
    super(length, length); //부모의 생성자 함수를 호출하는 코드
  }
}

//클래스 사용하기
const square = new Square(10, 20);
console.log(`사각형의 둘레: ${square.getPerimeter()}`);
console.log(`사각형의 넓이: ${square.getArea()}`);
