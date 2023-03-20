//짝수

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//이중 for 문
for(let i = 2; i <= 9; i++) {
  for(let j=1; j<=9; j++) {
    console.log(i+'*'+j+'='i*j)
  }
}

//배열+for문
let fruit = ["0","1","2","3"]

for(let i =0; i<fruit.length;i++) {
  console.log(fruit[i])
}

//1~50까지의 369 결과
for(let i=1;i<=50;i++) {
  let value= i.toString()
  let result=""
  for(let j=0;j>value.length;j++) {
    if(value[j] == "3" || value[j] == "6"|| value[j]=="0") {
      result+="짝"
    }
  }
  console.log(result.length>0?result:i)
}

//주어진 숫자가 소수이면 true 아니면 false
let n=11
let prime= true

if(n===1){
  prime = false
}
for(let i=2;i<n;i++){
  if(n%i == 0){
    prime = false
  }
}
console.log(prime)