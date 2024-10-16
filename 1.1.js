const slotMachine = document.querySelector('.slot-machine');
const reels = document.querySelectorAll('.reel');
const spinButton = document.querySelector('.spin-button');
const winMessage = document.querySelector('.win-message');

let symbols = ['Cherry', 'Lemon', 'Orange', 'Plum', 'Watermelon', 'Grapes', 'Seven', 'Bell', 'Bar'];
let winningCombinations = [
  ['Cherry', 'Cherry', 'Cherry'],
  ['Lemon', 'Lemon', 'Lemon'],
  ['Orange', 'Orange', 'Orange'],
  ['Plum', 'Plum', 'Plum'],
  ['Watermelon', 'Watermelon', 'Watermelon'],
  ['Grapes', 'Grapes', 'Grapes'],
  ['Seven', 'Seven', 'Seven'],
  ['Bell', 'Bell', 'Bell'],
  ['Bar', 'Bar', 'Bar']
];

spinButton.addEventListener('click', spinReels);

function spinReels() {
  reels.forEach((reel) => {
    reel.classList.add('spinning');
    setTimeout(() => {
      reel.classList.remove('spinning');
      let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      reel.querySelector('.symbol').textContent = randomSymbol;
    }, 2000);
  });


setTimeout(checkForWin, 1000);
}

function checkForWin() {
  let reel1Symbol = reels[0].querySelector('.symbol').textContent;
  let reel2Symbol = reels[1].querySelector('.symbol').textContent;
  let reel3Symbol = reels[2].querySelector('.symbol');

  let reel3img = reel3Symbol.querySelector('.symbol1')

  let winningCombination = winningCombinations.find((combination) => {
    return combination[0] === reel1Symbol && combination[1] === reel2Symbol && combination[2] === reel3Symbol;
  });

  if (winningCombination) {
    winMessage.textContent = `You won! ${winningCombination[0]} x3`;
    winMessage.style.display = 'block';
  } else {
    winMessage.textContent = 'Better luck next time!';
    winMessage.style.display = 'block';
  }
}