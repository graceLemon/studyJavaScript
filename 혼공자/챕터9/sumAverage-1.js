// getSumOf() 와 getAverageOf() 로 함수를 만들고 매개변수로 학생 객체를 받아 총합과 평균을 구한다.

// 객체의 속성과 기능을 만드는 부분

// 객체선언
const students = [];
students.push({ 이름: "구름", 국어: 87, 영어: 98, 수학: 88, 과학: 70 });
students.push({ 이름: "별이", 국어: 92, 영어: 98, 수학: 80, 과학: 80 });
students.push({ 이름: "겨울", 국어: 76, 영어: 90, 수학: 88, 과학: 60 });
students.push({ 이름: "바다", 국어: 98, 영어: 90, 수학: 80, 과학: 90 });

// 객체를 처리하는 함수 선언
function getSumOf(student) {
  return student.국어 + student.영어 + student.수학 + student.과학;
}

function getAverageOf(student) {
  return getSumOf(student) / 4;
}

// 객체를 활용하는 부분 - 출력
let output = "이름\t총점\t평균\n";
for (const s of students) {
  output += `${s.이름}\t${getSumOf(s)}점\t${getAverageOf(s)}점\n`;
}

console.log(output);
