'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

//Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

//Switch player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Initiate starting conditions
init();

//Rolling dice function
btnRoll.addEventListener('click', function () {
  if (playing) {
    //generate dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      //Add to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      /* current0El.textContent = currentScore; */ //Change later
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

//Hold function
btnHold.addEventListener('click', function () {
  if (playing) {
    //Add score to players total
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //Win or not
    if (scores[activePlayer] >= 100) {
      //Ends game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('player--active');
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

//New game (Reset)
btnNew.addEventListener('click', function () {
  init();

  /* playing = true;
  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  for (let i = 0; i < 2; i++) {
    document.getElementById(`current--${i}`).textContent = 0;
    document.getElementById(`score--${i}`).textContent = 0;
    document.querySelector(`.player--${i}`).classList.remove('player--winner');
    scores[i] = 0;
  } */
});
