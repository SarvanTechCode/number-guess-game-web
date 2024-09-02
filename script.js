'use strict';

let specialNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector(`.number`).textContent = '?';
document.querySelector(`.score`).textContent = score;
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔️ please enter number');
  } else if (guess === specialNumber) {
    displayMessage('😇 correct  numebr');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector(`.number`).textContent = specialNumber;
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== specialNumber) {
    if (score > 1) {
      score--;
      document.querySelector(`.score`).textContent = score;

      displayMessage(
        guess > specialNumber
          ? '😇 your number is to high'
          : '😇 your number is to low'
      );
    } else {
      displayMessage('😇 you lost the game');
      document.querySelector(`.score`).textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  specialNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(`.score`).textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(34,34,34)';
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector(`.number`).textContent = '?';
});
