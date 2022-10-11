  /*----- constants -----*/
//word bank that will be randomized and be the secret word. 
const WORD_BANK = ['CRATE','SLANT', 'TRACE', 'ROAST', 'BEANS', 'ADIEU' ]; 
//number of guesses that the player gets
const MAX_GUESSES = 5;
// do I need to include the entire alphabet to run through? 
// const LETTERS = ['a'];
  /*----- state variables -----*/

let blankSpaces;

let solutionWord; //randomly generated word is held here. 

let remainingTries; // how many tries left

let letter; //letter of word

let result; //if you guessed the word before tries runs out

let selectedLetters = []; // the player choice goes in here 


  /*----- cached elements  -----*/
// const letterSelect = document.getElementById('keyboard');
const keyboardLetters = document.querySelectorAll('keyboard > p');
const playAgainButton = document.querySelector('button');
const gameMessage = document.getElementById('message');
const wordEl = document.getElementById('guess');
// V -- could this be just 'space 1' since the field is only one element?
// const blankSpaces = document.getElementById('guess');

  /*----- event listeners -----*/
document.getElementById('keyboard').addEventListener('click', playerChoice);
playAgainButton.addEventListener('click', resetGame);
// letterSelect.addEventListener('click', playerChoice);
// document.querySelector('button').addEventListener('click', resetGame)

  /*----- functions -----*/

function render() {
    renderSolution();

}
  
  
init();
  
function init() {
    remainingTries = 5;
    solutionWord = randomWord();
    selectedLetters = [];
    solutionWord.forEach(function() {
        let letterEl = document.createElement('div');
        wordEl.appendChild(letterEl);
    })
    render();
}
    
function playerChoice(event) {
    if (event.target.tagName !== 'P' ||
    selectedLetters.includes(event.target.innerText)
    ) return;
    selectedLetters.push(event.target.innerText)
    if (solutionWord.includes(event.target.innerText)) {
        render();
    } else {
        remainingTries -= 1;
        render();
    }
};
    
function renderSolution() {
    let letterEls = [...document.querySelectorAll('#guess > div')];
    solutionWord.forEach(function(letter, idx) {
        if (selectedLetters.includes(letter)) {
            letterEls[idx].innerHTML = letter;
        }
    })
};

function checkLetter() {

}

// function renderWord() {
//     let letterEls = [...document.querySelectorAll(‘#word > div’)];
//     word.forEach(function(letter, idx) {
//         if (userChoice.includes(letter)) {
//             letterEls[idx].innerHTML = letter;
//         }
//     })
// }




function randomWord() {
   let wordIdx = Math.floor(Math.random() * WORD_BANK.length)
   solutionWord = WORD_BANK[wordIdx].split('');
   return solutionWord;
};






//This is moving the innertext of the click to the userChoiceArray
// function playerChoice(event) {
//     // userChoice = (event.target).innerText;
//     if(event.target.tagName !== 'P') return;
//     // userChoice[0] = event.target.innerText;
//     userChoice.push(event.target.innerText);
// }
// use this in determining if there is a winner later
// if(userChoice.length > MAX_GUESSES) return "you lose";


        
        //This is done
        // this generates a random word from the WORD_BANK at the start of game.
        // Then it splits it 

        
        
        function resetGame() {
            blankSpaces = ['null','null','null', 'null', 'null',];
            selectedLetters = ['null','null','null', 'null', 'null',];
            solutionWord = randomWord();
            // render();
        }
        
        // function randomWord() {
            //    let wordIdx = Math.floor(Math.random() * WORD_BANK.length)
            //    currentWord = WORD_BANK[wordIdx];
//    return currentWord.split('');
// };




//    This function will take the letter selected by the player and 
// check it against the currentWord. 

// we need to loop through the "currentWord" variable and see if it matches the letter that the player selected. 

// function renderBoard() {
// this function will take the information from playerChoice and update
// the board accordingly. 
// 1 add letter to blank space. 2remove piece of spaceman. 
// 3 grey out letter on keyboard. 
// }



let currentGuess;

let solution = 'BEANS';

let solutionArray = solution.split('');

function isGuessInSolution(letter) {
    return solutionArray.includes(letter);
}

document.getElementById('keyboard').addEventListener('click', playTurn);

function playTurn(event) {
    currentGuess = event.target.innerText;
    if (selectedLetters.includes(currentGuess)) return;
    let correctGuess = isGuessInSolution(currentGuess);
    if(correctGuess === true) {
    // what happens if it is correct? 
   
    changeLetterSquareGreen(event.target);
    // display correct letter
    } else { 
    // what happens if it is not correct?
    changeLetterSquareGrey(event.target);
        // remove spaceman limb
    }
}

function changeLetterSquareGreen(target) {
    target.style.backgroundColor = 'green';
}
function changeLetterSquareGrey(target) {
    target.style.backgroundColor = 'grey';
}
