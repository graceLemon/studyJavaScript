//meetAt 함수를  만들어라
//meetAt(2022) -> 결과 2022년
//meetAt(2032,3) -> 결과 2032년 3월
//meetAt(1987, 10, 28) ->결과 1987/10/28

// function meetAt(year, month, date) {
//   if (year) {
//     return `${year}년`;
//   } else if (year && month) {
//     return `${year}년 ${month}월`;
//   } else if (year && month && date) {
//     return `${year}/${month}/${date}`;
//   }
// }

// console.log(meetAt(2022, 1)); //2022 이라는 결과가 나온다.
//왜? 위에서 부터 함수가 저장되어 출력되어서...

function meetAt(year, month, date) {
  if (year && month && date) {
    return `${year}/${month}/${date}`;
  } else if (year && month) {
    return `${year}년 ${month}월`;
  } else if (year) {
    return `${year}년`;
  }
}

//좀더 간단히 바꾸려면..?

function meetAt(year, month, date) {
  if (date) {
    return `${year}/${month}/${date}`;
  } else if (month) {
    return `${year}년 ${month}월`;
  } else if (year) {
    return `${year}년`;
  }
}
