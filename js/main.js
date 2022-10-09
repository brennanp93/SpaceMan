  /*----- constants -----*/
const WORD_BANK = ['CRATE','SLANT', 'TRACE', 'ROAST', 'BEANS', 'ADIEU' ]; 
const MAX_GUESSES = 5;
const LETTERS = 
  /*----- state variables -----*/
let winner;
let

  /*----- cached elements  -----*/
const resetButton = document.querySelector('button');
const gameMessage = document.getElementById('message');
const blankSpace = document.getElementById('guess');

  /*----- event listeners -----*/
document.getElementById('keyboard').addEventListener('click', playerChoice);
document.querySelector('button').addEventListener('click', resetGame)

  /*----- functions -----*/