// 객체선언
const students = [];
students.push({ 이름: "구름", 국어: 87, 영어: 98, 수학: 88, 과학: 70 });
students.push({ 이름: "별이", 국어: 92, 영어: 98, 수학: 80, 과학: 80 });
students.push({ 이름: "겨울", 국어: 76, 영어: 90, 수학: 88, 과학: 60 });
students.push({ 이름: "바다", 국어: 98, 영어: 90, 수학: 80, 과학: 90 });

//students 배열 내부의 객체 모두에 메소드를 추가
for (const student of students) {
  student.getSum = function () {
    return this.국어 + this.영어 + this.수학 + this.과학;
  };

  student.getAverage = function () {
    return this.getSum() / 4;
  };
}

//출력
let output = "이름\t총점\t평균\n";
for (const s of students) {
  output += `${s.이름}\t${s.getSum()}점\t${s.getAverage()}점\n`;
}
console.log(output);
