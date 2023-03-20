const max = function(배열) {
  let output = 배열[0]
  console.log(`처음 실행 대의 output = ${output}`)
  for (const value of 배열) {
    console.log(`현재 비교 대상 ${output} 과 ${value} 중에 큰 것은?`)
    if (output < value) {
      output = value
    }
    console.log(`= ${output}`)
  }
  return output
}

console.log(max([52,273,32,103,275,24,57])) 