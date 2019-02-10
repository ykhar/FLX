'use strict';
const start = confirm('Do you want to play a game?');
let maxNumber, totalPrize, attempts, userNumber, attemptPrize, maxPrize;

 
if (start === true) {
  do {
    maxPrize = 10;
    attemptPrize = [10, 5, 2];
    totalPrize = 0;
    maxNumber = 5;
    attempts = 3;
    do {
      let random = Math.round(Math.random() * maxNumber);
      console.log(random);
      for (attempts; attempts > 0; attempts--) {
        var prize = attemptPrize.shift();
        userNumber = +prompt(
        `Enter a number from 0 to ${maxNumber}\n` +
        `Attempts left: ${attempts}\n` +
        `Total prize: ${totalPrize}\n` +
        `Possible prize on current attempt: ${prize}`
        ); 
        var currentPrize = prize;
        if (userNumber === random) {
          var coninue = confirm(`Congratulation! Your prize is: ${currentPrize}$. Do you want to continue?`);
          totalPrize += currentPrize;
          maxNumber *= 2;
          prize = maxPrize * 3;
          break;
          } 
        }  
      if (userNumber !== random) {
        break;
      }
    } while (coninue === true);
    alert(`Thank you for a game. Your prize is: ${currentPrize}$.`);
  } while (confirm('Do you want to play again?'));
} else {
  alert('You did not become a millionaire, but can.');
}