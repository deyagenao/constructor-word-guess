// Requiring the Letter constructor function from the external js file
var Letter = require("./letter.js");

// Word constructor function that depends on the Letter constructor
var Word = function(inputSpecificWord){
    this.specificWord = inputSpecificWord;
    this.letters = [];
    this.addLetters = function(){
        for (i of this.specificWord){
            this.letters.push(new Letter(i));
        }
    };
    this.toString = function(){
        var displayLettersArray = [];
        for (var i=0; i< this.letters.length; i++){
            displayLettersArray.push(this.letters[i].revealLetter());
        };
        var displayWord = displayLettersArray.join(" ");
        console.log(displayWord);
    };
    this.guessLetters = function(chr){
        chr = chr.toLowerCase();
        for (var i = 0; i < this.letters.length; i++){
            this.letters[i].checkLetterGuessed(chr);
        };
    }
}

// Exporting the word constructor 
module.exports = Word;



// testing
// var newWord = new Word ("boyfriend");
// newWord.addLetters();
// console.log(newWord.letters);

// newWord.toString();
// newWord.guessLetters("b");

// newWord.toString();

