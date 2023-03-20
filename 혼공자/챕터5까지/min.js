const min = function(배열) {
  let output = 배열[0]
  console.log(`처음 실행 때의 output = ${output}`)

  for(const value of 배열) {
    console.log(`현재 비교 대상 ${output}과 ${value} 중에 작은 것은?`)
    if (output > value) {
      output = value
    }
    console.log(`= ${output}`)
  }
  return output
}

console.log(min([52,273,32,103,275,24,57]))

// function min(array) {
//   let output = array[0]
//   for (const item of array) {
//     if(output> item) {
//       output = item
//     }
//   }
//   return output
// }

// const testArray = [52,273,32,103,275,24,57]
// console.log(`${testArray} 중에서`)
// console.log(`최솟값 = ${min(testArray)}`)