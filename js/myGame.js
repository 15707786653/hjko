var randomNumber=Math.floor((Math.random()*101));   //取0到100之间的随机数
console.log(randomNumber);
// document.write(randomNumber);
var guessField=document.querySelector('.guessField');
console.log(guessField);
// console.log(guessField.value);

var guesses=document.querySelector('.guesses');
console.log(guesses);

var lastResult=document.querySelector('.lastResult');
// console.log(lastResult);
// console.log(lastResult.value);

var lowOrHi=document.querySelector('.lowOrHi');
// console.log(lowOrHi);
// console.log(lowOrHi.value);

var guessSubmit=document.querySelector('.guessSubmit');
// console.log(guessSubmit);
// console.log(guessSubmit.vaule);

var guessCoutn=1;
var resetButton;
guessField.focus();

function checkGuess(){
    // document.write('我是结论');
    guesses.textContent += guessField.value + " ";
    guesses.style.backgroundColor="red";
}

// checkGuess();

guessSubmit.addEventListener('click',checkGuess);