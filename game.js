'use strict';
var again = document.querySelector('.again');
var number = document.querySelector('.number');
var guess = document.querySelector('.guess');
var check = document.querySelector('.check');
var msg = document.querySelector('.message');
var score = document.querySelector('.score');
var highscore = document.querySelector('.highscore');
let randomnumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomnumber);
let scores = 20;
let checkno = () => {
  const guessno = Number(guess.value);
  console.log(guessno);
  if (!guess) {
    msg.textContent = 'no number';
  } else if (guessno === randomnumber) {
    msg.textContent = 'correct number';
    highscore.textContent = scores;
    number.textContent = randomnumber;
    document.querySelector('body').style.backgroundColor = 'green';
    number.style.width = '30rem';
    if (scores > highscore) {
      highscore.textContent = scores;
    }
  } else if (guessno > randomnumber) {
    if (scores > 0) {
      msg.textContent = 'too high !';
      scores--;
      console.log('k' + scores);
      score.textContent = scores;
    } else {
      msg.textContent = 'you lost the game!';
    }
  } else if (guessno < randomnumber) {
    if (scores > 0) {
      msg.textContent = 'too low !';
      scores--;
      console.log('k' + scores);
      score.textContent = scores;
    } else {
      msg.textContent = 'you lost the game!';
    }
  }
};
check.addEventListener('click', checkno);
var resetgame = () => {
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
  scores = 20;
  score.textContent = scores;
  msg.textContent = 'Start guessing...';
  number.textContent = '?';
  randomnumber = Math.trunc(Math.random() * 20) + 1;
  console.log('ra', randomnumber);
};
again.addEventListener('click', resetgame);



