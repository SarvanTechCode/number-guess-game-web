'use strict';

let specialNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector(`.number`).textContent = '?';
document.querySelector(`.score`).textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector(`.message`).textContent = '⛔️ please enter number';
  } else if (guess === specialNumber) {
    // document.querySelector(`.number`).textContent = specialNumber;
    document.querySelector(`.message`).textContent = '😇 correct  numebr';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector(`.number`).textContent = specialNumber;
    if (highScore < score) {
      highScore = score;
    }
  } else if (guess < specialNumber) {
    if (score > 1) {
      score--;
      document.querySelector(`.score`).textContent = score;

      document.querySelector(`.message`).textContent =
        '😇 your number is to low';
    } else {
      document.querySelector(`.message`).textContent = '😇 you lost the game';
      document.querySelector(`.score`).textContent = 0;
    }
  } else if (guess > specialNumber) {
    if (score > 1) {
      score--;
      document.querySelector(`.score`).textContent = score;

      document.querySelector(`.message`).textContent =
        '😇 your number is to high';
    } else {
      document.querySelector(`.message`).textContent = '😇 you lost the game';
      document.querySelector(`.score`).textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  specialNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.message`).textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(34,34,34)';
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector(`.number`).textContent = '?';
});
