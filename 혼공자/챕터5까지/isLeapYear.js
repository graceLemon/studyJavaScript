// 윤년계산하기
// 4로 나누어 떨어지는 해는 윤년이다.
// 하지만 100으로 나누어 떨어지는 해는 윤년이 아니다.
// 하지만 400으로 나누어 떨어지는 해는 윤년이다.

//const { type } = require("express/lib/response")

// const isLeapYear = function(연도) {
//   return (연도 % 4 === 0) && (연도 % 100 !== 0) || (연도 % 400 === 0)

// }

// console.log(`2020년은 윤년일까? === ${isLeapYear(2020)}`)

const isLeapYear = function(연도) {
  if(typeof(연도) === 'undefined') {
    연도 = new Date().getFullYear()
  }
  
  console.log(`연도 : ${연도}`)

  return (연도 % 4 === 0)
    && (연도 % 100 !== 0)
    || (연도 % 400 ===  0)
}

console.log(isLeapYear())