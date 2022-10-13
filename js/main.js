//Constants
const WORD_BANK = ['UFO', 'COMET', 'SPACE', 'SHIP', 'STAR', 'PLANET', 'SOLAR', 'EARTHLING', 'ALIEN'];

// State Variables
let wrongGuessLetters;

let correctGuessLetters;

let remainingGuesses;

let solution;

let gameStatus;


//cached elements
const correctLetter = document.getElementById('guess');
const spaceManImage = document.querySelector("img");
const livesLeft = document.getElementById('livesLeft');
const playButton = document.getElementById('btn');
const gameMessage = document.getElementById('message');


// Event Listeners
document.getElementById('keyboard').addEventListener('click', handleDrop);
playButton.addEventListener('click', refreshBoard);

// functions
initialize();

function initialize() {
    wrongGuessLetters = [];
    correctGuessLetters = [];
    gameStatus = null;
    remainingGuesses = 5;
    randomWordGenerator();
    render();
};

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

};

function renderImage() {
    const imagePath = `images/spaceman-0${wrongGuessLetters.length}.png`;
    spaceManImage.src = imagePath;
};

function handleDrop(event) {
    if (event.target.tagName !== 'P') return;
    currentGuess = event.target.textContent;
    let correctGuess = isGuessInSolution(currentGuess);
    if (correctGuess === true) {
        displayCorrectLetter();
        console.log(correctGuessLetters)
        changeLetterSquareGreen(event.target);
    } else {
        wrongGuessLetters.push(event.target.innerText);
        console.log(wrongGuessLetters)
        changeLetterSquareGrey(event.target);
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
    target.style.backgroundColor = 'limegreen';
    target.style.color = 'black';
};

function changeLetterSquareGrey(target) {
    target.innerText = '*'
    target.style.color = 'red';
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

function refreshBoard() {
    window.location.reload()
};
