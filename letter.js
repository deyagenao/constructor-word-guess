// Constructor Function for creating new Letter objects
var Letter = function(inputSpecificLetter){
    this.specificLetter = inputSpecificLetter;
    this.guessed = false;
    this.revealLetter = function(){
        if (this.guessed){
            return this.specificLetter;
        }else{
            return "_";
        }
    };
    this.checkLetterGuessed = function (chr) {
        if (chr === this.specificLetter){
            this.guessed = true;
        }else{
            this.guessed = false;
        }
    };

}

// Exporting the Letter constructor
module.exports = Letter;



// // testing 
// var newLetter = new Letter ("a");

// console.log(newLetter.specificLetter);
// console.log(newLetter.revealLetter());
// newLetter.checkLetterGuessed("a");
// console.log(newLetter.revealLetter());