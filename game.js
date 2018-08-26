var wins = 0;
var losses = 0;
var guesses;
var guessesArray = [];
var remainingGuess = 10;

var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var guessesText = document.getElementById("guessesText");
var remainingGuessText = document.getElementById("remainingGuessText");
var guessesArrayText = document.getElementById("guessesArrayText");

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

document.onkeyup = function(event) {

    var userGuess = event.key;

    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    if (userGuess === computerGuess) {
        wins ++; remainingGuess = 10; }
    if (userGuess != computerGuess) {
        remainingGuess -- }
    if (remainingGuess <=0) {
        losses ++; 
        remainingGuess = 10;
        guessesArray = [];  }
    if (userGuess != computerGuess) {
        guessesArray.push(userGuess) }
 
        
    guessesText.textContent = "You chose: " + userGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    remainingGuessText.textContent = "Remaining Guesses: " + remainingGuess;
    guessesArrayText.textContent = "Your Guesses: " + guessesArray;

}

