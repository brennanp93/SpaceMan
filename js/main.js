//Constants
const WORD_BANK = ['ABDUCTIONS', 'UFO', 'COMET', 'SPACE', 'SHIP', 'STAR', 'PLANET', 'SOLAR', 'EARTHLING', 'ALIEN', 'CELESTIAL', 'GALACTIC', 'QUASAR', 'INTERGALACTIC'];


// State Variables
let wrongGuessLetters;

let correctGuessLetters;

let remainingGuesses;

let solutionWord;

let gameStatus;


//cached elements
const correctLetter = document.getElementById('guess');
const spaceManImage = document.querySelector("img");
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
    playButton.style.visibility = 'hidden';
    randomWordGenerator();
    render();
};

function randomWordGenerator() {
    let wordIndex = Math.floor(Math.random() * WORD_BANK.length)
    solutionWord = WORD_BANK[wordIndex].split('');
    correctGuessLetters = solutionWord.map(ltr => ltr === ' ' ? ' ' : '_');
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
    if (event.target.tagName !== 'P' || gameStatus !== null) return;
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
        gameMessage.innerText = `Congratulations!! You saved the spaceman!`
        playButton.style.visibility = 'visible';
    } else if (gameStatus === 'L') {
        gameMessage.innerText = `Oh no! You Lost! The secret word was ${solutionWord.join('')}`
        playButton.style.visibility = 'visible';
    } else {
        gameMessage.innerText = `You have ${remainingGuesses - wrongGuessLetters.length + 1} guesses left `

    }
};

function displayCorrectLetter() {
    solutionWord.forEach(function(letter, index) {
        if (currentGuess === letter) {
            correctGuessLetters[index] = currentGuess;
        } 
    })
}

function refreshBoard() {
    return window.location.reload()
};
