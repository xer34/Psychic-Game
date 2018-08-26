var wins = 0;
var losses = 0;
var guesses = 10;
var guessesArray = [];

var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var guessesText = document.getElementById("guessesText");

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

document.onkeyup = function(event) {

    var userGuess = event.key;

    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    if (userGuess === computerGuess) {
        wins++; }
    else if (userGuess != computerGuess) {
        losses++, guesses--; }
    
    guessesText.textContent = "You chose: " + userGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;

    }

