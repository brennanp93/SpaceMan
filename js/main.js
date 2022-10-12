
const WORD_BANK = ['CRATES', 'BACKED', 'TRACES', 'BARELY', 'CLOSER', 'CLIENT'];

let wrongGuessLetters;

let correctGuessLetters;

let remainingGuesses = 5;

let solution;

//This will determine win logic. Value of Null, W for win or L for loss
let gameStatus;


//cached elements
const correctLetter = document.getElementById('guess');
const spaceManImage = document.querySelector("img");
const livesLeft = document.getElementById('livesLeft');
const playButton = document.getElementById('btn');
const gameMessage = document.getElementById('message');

// Event Listeners
document.getElementById('keyboard').addEventListener('click', playerLetterSelect);
playButton.addEventListener('click', initialize);
// functions

initialize();

function initialize() {
    wrongGuessLetters = [];
    correctGuessLetters = [];
    gameStatus = null;
    randomWordGenerator();
    render();
}

function randomWordGenerator() {
    let wordIndex = Math.floor(Math.random() * WORD_BANK.length)
    solution = WORD_BANK[wordIndex].split('');
    correctGuessLetters = solution.map(ltr => ltr === ' ' ? ' ' : '_')
    return correctGuessLetters;
};

function render() {
    renderImage();
    renderMessage();
    correctLetter.innerHTML = correctGuessLetters.join('');

}

function renderImage() {
    const imagePath = `images/spaceman-0${wrongGuessLetters.length}.png`;
    spaceManImage.src = imagePath;
}

function playerLetterSelect(event) {
    if (event.target.tagName !== 'P') return;
    currentGuess = event.target.textContent;
    // console.log(currentGuess)
    // if (selectedLetters.includes(currentGuess)) return;
    let correctGuess = isGuessInSolution(currentGuess);
    if (correctGuess === true) {
        //create an array of the correct letters as they are selected.
        displayCorrectLetter();
        console.log(correctGuessLetters)
        changeLetterSquareGreen(event.target);
        // display correct letter
        // displayCorrectLetter(event.target);
    } else {
        // what happens if it is not correct?
        wrongGuessLetters.push(event.target.innerText);
        console.log(wrongGuessLetters)
        changeLetterSquareGrey(event.target);
        // remainingGuesses--;
    }
    gameStatus = getGameStatus();
    render()
};

function getGameStatus() {
    if (!correctGuessLetters.includes('_')) return 'W';
    if (wrongGuessLetters.length > remainingGuesses) return 'L';
    return null;
};

function isGuessInSolution(letter) {
    return solution.includes(letter);
};


function changeLetterSquareGreen(target) {
    target.style.backgroundColor = 'green';
};

function changeLetterSquareGrey(target) {
    target.style.backgroundColor = 'black';

};

function renderMessage() {
    if (gameStatus === 'W') {
        gameMessage.innerText = `Congratulations!!`
    } else if (gameStatus === 'L') {
        gameMessage.innerText = `Oh no! You Lost! The secret word was ${solution.join('')}`
        
    } else {
        gameMessage.innerText = `Keep Playing! You have ${remainingGuesses - wrongGuessLetters.length + 1} guesses left `

    }
};


function displayCorrectLetter() {
   let index = solution.indexOf(currentGuess);
    correctGuessLetters.splice(index, 1, currentGuess);
};





// function renderWord() {
//     let letterChoice = [...document.querySelectorAll(‘#guess > div’)];
//     correctGuessLetters.forEach(function(letter, idx) {
//         if (userChoice.includes(letter)) {
//             letterChoice[idx].innerText = letter;
//         }
//     })