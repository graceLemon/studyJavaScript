//findSmallestElement 의 arr인자는 숫자 값으로만 이루어진 배열이다.
//arr 의 값들 중 가장 작은 값을 리턴
//만일 arr가 비어있으면 0을 리턴
//예를 들어 다음과 같은 배열이 input 으로 들어왔다면 1리턴

function findSmallestElement(arr) {
  if (arr.length == 0) {
    return 0;
  }
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (result > arr[i]) {
      result = arr[i];
    }
  }
  return result;
}

console.log(findSmallestElement([100, 200, 3, 0, 2, 1]));
