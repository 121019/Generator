function getRandomNumber() {
  return Math.floor(Math.random() * 10000) + 1;
}

function add() {
  let num1 = getRandomNumber();
  let num2 = getRandomNumber();
  let correctAnswer = num1 + num2;
  return { correctAnswer, num1, num2 };
}

export default add;
