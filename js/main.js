//Constants
const WORD_BANK = ['ABDUCTIONS','UFO', 'COMET', 'SPACE', 'SHIP', 'STAR', 'PLANET', 'SOLAR', 'EARTHLING', 'ALIEN'];

// State Variables
let wrongGuessLetters;

let correctGuessLetters;

let remainingGuesses;

let solutionWord;

let gameStatus;


//cached elements
const correctLetter = document.getElementById('guess');
const spaceManImage = document.querySelector("img");
const livesLeft = document.getElementById('livesLeft');
const playButton = document.getElementById('btn');
const gameMessage = document.getElementById('message');
const keyboard = document.getElementById('keyboard');

// Event Listeners
keyboard.addEventListener('click', handleDrop);
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
    solutionWord = WORD_BANK[wordIndex].split('');
    correctGuessLetters = solutionWord.map(ltr => ltr === ' ' ? ' ' : '_')
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
        markLetterSquareCorrect(event.target);
    } else {
        wrongGuessLetters.push(event.target.innerText);
        markLetterSquareIncorrect(event.target);
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
    return solutionWord.includes(letter);
};

function markLetterSquareCorrect(target) {
    target.style.backgroundColor = 'limegreen';
    target.style.color = 'black';
};

function markLetterSquareIncorrect(target) {
    target.innerText = '*'
    target.style.color = 'red';
};

function renderMessage() {
    if (gameStatus === 'W') {
        gameMessage.innerText = `Congratulations!!`
    } else if (gameStatus === 'L') {
        gameMessage.innerText = `Oh no! You Lost! The secret word was ${solutionWord.join('')}`

    } else {
        gameMessage.innerText = `Keep Playing! You have ${remainingGuesses - wrongGuessLetters.length + 1} guesses left `

    }
};
function renderMessageV2() {
    
}

function displayCorrectLetter() {
    let index = solutionWord.indexOf(currentGuess);
    correctGuessLetters.splice(index, 1, currentGuess);
};

function refreshBoard() {
    window.location.reload()
};
