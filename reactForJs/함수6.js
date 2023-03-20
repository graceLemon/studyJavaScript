//돈을 매개 변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수

let unit = [50000, 10000, 5000, 1000, 500, 100];

function giveMechange(money) {
  for (let i = 0; i < unit.length; i++) {
    let num = Math.floor(money / unit[i]);
    console.log(`${unit[i]}X${num}`);
    money = money - unit[i] * num;
  }
}

giveMechange(12300);
