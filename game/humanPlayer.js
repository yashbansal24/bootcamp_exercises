const readlineSync = require('readline-sync');
const Player = require('./player');

function nextGuess() {
  return readlineSync.question("Your Turn: ");
}

function processInfo(word,commonCount) {
  console.log("Guess Word:",word," CommonCount:",commonCount);
}

class HumanPlayer extends Player {
  constructor(limit,secretWord) {
    super(limit,secretWord);

    this.nextGuess = nextGuess;
    this.processInfo = processInfo;
  }
}

module.exports = HumanPlayer;
