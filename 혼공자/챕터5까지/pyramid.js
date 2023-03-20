//1.반쪽 피라미드 만들기

/*
let output =''

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < i; j++) {
  output += '*'
  }
  output +='\n'
}

console.log(output)

*/


//2.중첩 사용 가능

/*
for(let i = 0; i < 10; i++) {
  for(let j = 0; j < 10; j++) {
    for(let k = 0; k < 10; k++) {
    }
  }
}
*/


//3.횟수에 숫자 표현식이 올 수 있음.

/*
for(let j = 0; j < 10; j++) {}
for(let j = 0; j < [표현식]; j++) {}
i + 1
2 * i + 1
*/


//4.마름모 피라미드 만들기

/*
let output = ''

for(let i = 0; i < 9; i++) {
  for(let k = 0; k < 8-i; k++) {
    output  += ' '
  }

  for(let j = 0; j < (2 * i +1); j++) {
    output += '*'
  }
  output += '\n'
}

for(let i = 0; i < 10; i++) {
  for(let k = 0; k < i; k++) {
    output  += ' '
  }

  for(let j = 0; j < 2 * (9-i) + 1; j++) {
    output += '*'
  }
  output += '\n'
}

console.log(output)
*/


//5.피라미드 만들기(1)

/*
let output = ''

for(let i = 0; i < 9; i++) {
  for(let k = 0; k < 8-i; k++) {
    output  += ' '
  }

  for(let j = 0; j < (2 * i +1); j++) {
    output += '*'
  }
  output += '\n'
}

console.log(output)
*/

/*
//피라미드 분석해보기~!
//패턴
for(let i = 0; i < n; i++) {} 
반복문 내부를 n번 반복하는 식을 잘 외워두자

실행
output = ''
빈 문자열 선언

반복문 내부
i = 0
스택에 i를 0으로 초기화하고 올리고 내부의 반복문..
for(let j = 0; j < 1; j++) {} 
  output = '*'
내부적으로 1번 반복! 
하고 * 를 추가 하기 때문에 output 은 *
output ='*\n'
이후에 반복문을 벗어나 줄바꿔야 하기때문에 줄바꿈 문자 \n 추가 
 
그다음에 외부 반복문 실행
i = 1
for(let j = 0; j < i + 1; j++) {} 인데 
i 가 이미 1이니 1+1을 해여
for(let j = 0; j < 1 + 1; j++) {} 

for(let j = 0; j < 2; j++) {} 으로 바꿔 2번 반복!
  output = '*\n*'
  output = '*\n**'
output = '*\n**\n'
내부에서 이미 별을 추가하고 있기때문에 *을 한번,두번 붙이고

i = 2
for(let j = 0; j < 3; j++) {} 인데
3번 반복! 
  output = '*\n**\n*'
  output = '*\n**\n**'
  output = '*\n**\n***'
output = '*\n**\n***\n'
.
.
.
계속반복

*/

//다시 한번 만들어보기!!

let output = ''

for(let i = 0; i < 9; i++) {
  for(let k = 0; k < 8-i; k++) {
    output  += ' '
  }

  for(let j = 0; j < (2 * i +1); j++) {
    output += '*'
  }
  output += '\n'
}

console.log(output)


