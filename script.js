'use strict';
// Stoaring values
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const dice = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scores = [0, 0];
let randomNumber = 0;
let currentScore = 0;
let activePlayer = 0;

// Starting conditions
score0.textContent = 0;
score1.textContent = 0;
current0.textContent = 0;
current1.textContent = 0;
dice.classList.add('hidden');

const disableBtn = function () {
  btnRoll.disabled = true;
  btnHold.disabled = true;
  // btnNew.disabled = true;
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

//randomizer function
const randomRoll = function () {
  randomNumber = Math.trunc(Math.random() * 6) + 1;
  return randomNumber;
};

//function for reset
const reset = function () {
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  dice.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  currentScore = 0;
  activePlayer = 0;
  for (let i = 0; i < scores.length; i++) {
    scores[i] = 0;
  }
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  btnRoll.disabled = false;
  btnHold.disabled = false;
  btnRoll.classList.remove('hidden');
  btnHold.classList.remove('hidden');
};

// Rolling button functionality
btnRoll.addEventListener('click', function () {
  randomRoll();
  dice.classList.remove('hidden');
  dice.src = `dice-${randomNumber}.png`;

  if (randomNumber !== 1) {
    currentScore += randomNumber;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    switchPlayer();
  }
  console.log(randomNumber);
});

//restores all values
btnNew.addEventListener('click', reset);

// holding button functionality
btnHold.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  console.log(scores);

  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    document.querySelector('.dice').classList.add('hidden');
    btnRoll.disabled = true;
    btnHold.disabled = true;
    btnRoll.classList.add('hidden');
    btnHold.classList.add('hidden');
  } else {
    switchPlayer();
  }
});
