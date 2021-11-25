import { ANSWER } from './constant.js';

export function compareInputNumbers(computerInputNumbers, userInputNumbers) {
  let ball = 0;
  let strike = 0;
  for (let i = 0; i < computerInputNumbers.length; i++) {
    if (computerInputNumbers[i] === userInputNumbers[i]) {
      strike += 1;
    } else if (computerInputNumbers.includes(userInputNumbers[i])) {
      ball += 1;
    }
  }
  return { ball, strike };
}

export function makeResultString(comparedResult) {
  const resultArray = [];

  if (comparedResult.ball) {
    resultArray.push(`${comparedResult.ball}볼`);
  }
  if (comparedResult.strike) {
    resultArray.push(`${comparedResult.strike}스트라이크`);
  }
  if (resultArray.length === 0) {
    resultArray.push('낫싱');
  }
  return resultArray.join(' ');
}

export function showResultString(resultString, $resultDiv, $restartButton) {
  if (resultString === ANSWER) {
    $resultDiv.innerHTML = `
        🎉 <b>정답을 맞추셨습니다!</b> 🎉
        <br>
        게임을 새로 시작하시겠습니까?
      `;
    $resultDiv.appendChild($restartButton);
    return;
  }
  $resultDiv.innerHTML = resultString;
}
