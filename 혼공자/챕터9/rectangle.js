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

const rectangle = new Rectangle(10, 20);
console.log(`사각형의 둘레: ${rectangle.getPerimeter()}`);
console.log(`사각형의 넓이: ${rectangle.getArea()}`);
