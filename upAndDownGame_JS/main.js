//랜덤번호 지정
//유저의 번호를 입력한다. 그리고 go 라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면-> 맞췄습니다!
//랜덤 번호가 < 유저번호 Down!
//랜덤 번호가 > 유저번호 Up!
//Reset버튼을 누르면 게임이 리셋
//5번의 기회를 다쓰면 게임이 끝(더이상 추측 불가,버튼 disable)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다.
//유저가 이미 입력한 숫자를 입력하면 알려준다.

let computerNum = 0;
let playButton = document.getElementById("play-button");
let resetButton = document.getElementById("reset-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let chanceArea = document.getElementById("chance-area");
let gameOver = false;
let chances = 5;

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus");

function pickRandomNum() {
  //Math.random 0~1 숫자를 랜덤으로 골라주는 함수
  //Math.floor 소수값을 버리는 함수
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100사이 숫자를 입력해 주세요";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent =
      "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요";
  }
  chances--;
  chanceArea.textContent = `남은기회:${chances}번`;
  console.log("chance", chances);

  if (userValue < computerNum) {
    resultArea.textContent = "Up";
    console.log("up");
  } else if (userValue > computerNum) {
    resultArea.textContent = "Down";
    console.log("down!");
  } else {
    resultArea.textContent = "정답";
    console.log("정답");
  }

  //입력한 값을 히스토리 배열에 저장
  history.push(userValue);
  console.log(history);

  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  //user input 창이 깨끗하게 정리되고
  userInput.value = "";
  // 새로운 번호가 생성되고
  pickRandomNum();

  resultArea.textContent = "결과값이 나온다.";
}
pickRandomNum();
