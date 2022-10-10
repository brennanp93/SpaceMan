  /*----- constants -----*/
//word bank that will be randomized and be the secret word. 
const WORD_BANK = ['CRATE','SLANT', 'TRACE', 'ROAST', 'BEANS', 'ADIEU' ]; 
//number of guesses that the player gets
const MAX_GUESSES = 5;
// do I need to include the entire alphabet to run through? 
// const LETTERS = ['a'];
  /*----- state variables -----*/

let blankSpaces;
let currentWord;

  /*----- cached elements  -----*/
const letterSelect = document.getElementById('keyboard');
const playAgainButton = document.querySelector('button');
const gameMessage = document.getElementById('message');
// V -- could this be just 'space 1' since the field is only one element?
// const blankSpaces = document.getElementById('guess');

  /*----- event listeners -----*/
document.getElementById('keyboard').addEventListener('click', playerChoice);
// letterSelect.addEventListener('click', playerChoice);
playAgainButton.addEventListener('click', resetGame);
// document.querySelector('button').addEventListener('click', resetGame)

  /*----- functions -----*/


function resetGame(event) {
    blankSpaces = ['null','null','null', 'null', 'null',];
    currentWord = randomWord();
    console.log(event.target)
    // render();
}

function randomWord() {
   let wordIdx = Math.floor(Math.random() * WORD_BANK.length)
   return WORD_BANK[wordIdx]
};
























function playerChoice(event) {
   const letter = innerText(event.target);
//    This function will take the letter selected by the player and 
// check it against the currentWord. 
} 

function renderBoard() {
// this function will take the information from playerChoice and update
// the board accordingly. 
// 1 add letter to blank space. 2remove piece of spaceman. 
// 3 grey out letter on keyboard. 
}

// this generates a random word from the WORD_BANK at the start of game. 
