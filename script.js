'use strict';
// Also one pretending option to do the same random value
// const number = Math.trunc(Math.random() * 20)
// Function to get a random value that needs to be guessed.
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

//function .message.textContent
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
function display(choose, string) {
  document.querySelector(choose).textContent = string;
}
//FUNCTION to chacnge the screen and width of the box number
function displayNumber(color, number) {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = number;
}
// Storing in value the random value needed to be found.
let right = (document.querySelector('.number').value = getRandomInt(20));

let score = 20;
document.querySelector('.highscore').textContent = 0;
const button = document.querySelector('.check');
let highScore = 0;
let scorer = 0;
// Logging the right value into the console
console.log(document.querySelector('.number').value);
// Setting a function to an 'Again' button so it gets reloaded;
// document.querySelector('.again').addEventListener('click', function () {
//   location.reload();
//   return;
// });
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  display('.score', score);
  display('.highscore', highScore);
  display('.btn.check', 'Проверить!');
  displayMessage('Отгадываем.');
  displayNumber('#222', '15rem');
  display('.number', '?');
  scorer = 0;
  right = getRandomInt(20);
  console.log(right);
});

// Setting a main function to a check button so it compares it with the value that is set and needs to be found.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Неправильный номер!';
  } else if (guess === right) {
    if (scorer === 0) {
      displayMessage('Правильный номер!');
      displayNumber('#60b347', '30rem');
      display('.btn.check', 'Продолжить!');
      display('.numebr', right);
      score++;
      display('.score', score);
      scorer++;
      if (highScore < score) {
        highScore = score;
        display('.highscore', highScore);
      }
    } else if (scorer === 1) {
      display('.btn.check', 'Проверить!');
      displayMessage('Отгадываем.');
      display('.number', '?');
      displayNumber('#222', '15rem');
      display('.guess', '');
      right = getRandomInt(20);
      console.log(right);
      scorer--;
    }
  } else if (guess !== right) {
    if (score >= 1) {
      document.querySelector('.message').textContent =
        guess > right ? 'Попробуйте меньшее число' : 'Попробуйте большее число';
      score--;
      display('.score', score);
    } else if (score === 0) {
      displayMessage('Вы проиграли:(');
    }
  }
});
// logic for the button 'continue'
document.querySelector('.cont').addEventListener('click', function () {
  displayMessage('Отгадываем.');
  display('.btn.check', 'Проверить!');
  display('.number', '?');
  displayNumber('#222', '15rem');
  display('.guess', '');
  scorer--;
  right = getRandomInt(20);
  console.log(right);
  // document.querySelector('.check').value = button.disabled = false;
});
