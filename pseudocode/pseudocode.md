BACKGROUND


Play again button will reset the board and clear. 
<!-- // -->
Arrays will hold the secret word(s) and also keep track of the guesses. 
const = secret word 
const = # wrong guess
const = alphabet ID'd by getElementByID
let = guesses by player
//
Cached items would probably be the h1 element or something. 
++
Divs that hold the secret word lines
" _ _ _ _ _ "
++
Divs that hold the alphabet
++ 
play button
++
disappearing objects! (blocks, shapes, images etc...)
<!-- // -->
addEventListeners =
alphabet buttons (divs)
play again button (button)
= 27 different options to click? 
<!-- // -->

probably 5 wrong guesses before the game is over. 

Array will hold all the letters (26)
they will be held in divs. (unless a table is better). 

constants will hold # of wrong guess as well as player ID. The solution array will also be a const. 

<!--  -->

Game starts on page load. 

Include a prompt or instructions on how to start the game. "select a letter"

1: user will click a letter. 
2: letter is evaluated. 
2a if letter is included in answer word > display letter & green out selected letter
2b if letter is NOT included in answer word > remove spaceman's limb && grey out selected letter.
3 repeat cycle && include additional instructions or prompt "x tries left"
4 if word is guessed correctly in 6 guesses > display congratulatory message
5 if word is NOT guessed correctly in 6 guesses > display losing message and display play again button


<!--  -->

functions list: 
