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

// let selectedLetters = []; // the player choice goes in here 


  /*----- cached elements  -----*/
// const letterSelect = document.getElementById('keyboard');
const keyboardLetters = document.querySelectorAll('keyboard > p');
const playAgainButton = document.querySelector('button');
const gameMessage = document.getElementById('message');
const wordEl = document.getElementById('guess');
// V -- could this be just 'space 1' since the field is only one element?
// const blankSpaces = document.getElementById('guess');

  /*----- event listeners -----*/
// document.getElementById('keyboard').addEventListener('click', playerChoice);
playAgainButton.addEventListener('click', resetGame);
// letterSelect.addEventListener('click', playerChoice);
// document.querySelector('button').addEventListener('click', resetGame)

  /*----- functions -----*/

function render() {
    // renderSolution();

}
  
  
// init();
  
// function init() {
//     remainingTries = 5;
//     solutionWord = randomWord();
//     SelectedLetters = [];
//     solutionWord.forEach(function() {
//         let letterEl = document.createElement('div');
//         wordEl.appendChild(letterEl);
//     })
//     render();
// }
    
// function playerChoice(event) {
//     if (event.target.tagName !== 'P' ||
//     SelectedLetters.includes(event.target.innerText)
//     ) return;
//     SelectedLetters.push(event.target.innerText)
//     if (solutionWord.includes(event.target.innerText)) {
//         render();
//     } else {
//         remainingTries -= 1;
//         render();
//     }
// };
    
// function renderSolution() {
//     let letterEls = [...document.querySelectorAll('#guess > div')];
//     solutionWord.forEach(function(letter, idx) {
//         if (SelectedLetters.includes(letter)) {
//             letterEls[idx].innerHTML = letter;
//         }
//     })
// };

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
            SelectedLetters = ['null','null','null', 'null', 'null',];
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

// --------------------------------------------------------------------

const WORD_BANK1 = ['CRATES','BACKED', 'TRACES', 'BARELY', 'CLOSER', 'CLIENT' ]; 

// let correctGuessLetters = [];
let wrongGuessLetters = [];
let correctGuessLetters = [];
// const imagePath = `images/spaceman-0${wrongGuessLetters.length}.png`;

let remainingGuesses = 6
let imagePath = `images/spaceman-0${remainingGuesses}.png`;

let currentGuess;

let solution = [];

let selectedLetters = [];

// let solutionArray = solution.split('');



//cached elements
const correctLetter = document.querySelectorAll('guess > div');
const spaceManImage = document.getElementById("spaceman");
const inGameMessage = document.getElementById('livesLeft');

// const removeObject = document.getElementById('spaceman5');
// document.getElementById('keyboard').addEventListener('click', playTurn);
document.getElementById('keyboard').addEventListener('click', playerLetterSelect);

// functions
// randomWordGenerator();
initialize();

function playerLetterSelect(event) {
    if(event.target.tagName !== 'P') return;
    currentGuess = event.target.innerText;
    // if (selectedLetters.includes(currentGuess)) return;
    let correctGuess = isGuessInSolution(currentGuess);
    if(correctGuess === true) {
        //create an array of the correct letters as they are selected.
        correctGuessLetters.push(event.target.innerText)
        console.log(correctGuessLetters)
        changeLetterSquareGreen(event.target);
        // display correct letter
        displayCorrectLetter(event.target);
    } else { 
        // what happens if it is not correct?
        wrongGuessLetters.push(event.target.innerText);
        console.log(wrongGuessLetters)
        changeLetterSquareGrey(event.target);
        remainingGuesses--;
    }
    render()
}

function render() {
    renderImage()
}

function renderImage() {
    spaceManImage.innerHTML = `<img src="images/spaceman-0${remainingGuesses}.png">`
}

function displayCorrectLetter(target) {
    correctLetter.innerText = currentGuess;
//add selected letter to a new element. 

}

function changeLetterSquareGreen(target) {
    target.style.backgroundColor = 'green';
}

function changeLetterSquareGrey(target) {
    target.style.backgroundColor = 'grey';
    
}

function removeSpacemanLimb() {
    imagePath
}

function isGuessInSolution(letter) {
    return solution.includes(letter);
}

function randomWordGenerator() {
    let wordIndex = Math.floor(Math.random() * WORD_BANK1.length)
    solution = WORD_BANK1[wordIndex].split('');
    return solution;
 };

function initialize() {
    solution = randomWordGenerator();
    solution.forEach(function() {
        let letterEl = document.createElement('div');
        wordEl.appendChild(letterEl);
    })
    render();
}

// function renderSolutionv2(target) {
//     //pushes the correctly selected letter to a new div element. 
//     let targetLetter = [...document.getElementById('guess')];
//     solution.forEach(function(letter, idx) {
//         if (currentGuess.includes(solution)) {
//             letterEls[idx].innerHTML = letter;
//         }
//     };