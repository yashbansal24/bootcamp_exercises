const HumanPlayer = require('./humanPlayer');
const ComputerPlayer = require('./computerPlayer');
const readlineSync = require('readline-sync');

function nextTurnUtil(player,opp,limit,winnerName) {
  let guessWord = player.nextGuess();
  let response = opp.sendInfo(guessWord);
  if(response === limit+1) {
    return winnerName;
  }
  player.processInfo(guessWord,response);
  return "";
}

function nextTurn() {
  if(this.winner !== "")
    return;

  if(this.turnCount%2) {
    this.winner = nextTurnUtil(this.human,this.bot,this.limit,"YOU");
  } else {
    console.log("Computer's Turn: "+this.bot.nextGuess());
    this.winner = nextTurnUtil(this.bot,this.human,this.limit,"COMPUTER");
  }
  this.turnCount++;
}

function initGame() {
  let secretWord =
    readlineSync.question("Choose your secret word: ");
  while(secretWord.length !== this.limit) {
    secretWord = readlineSync.question(
      "Please choose a word of length "+this.limit+": ");
  }

  this.human = new HumanPlayer(this.limit,secretWord);
  this.bot = new ComputerPlayer(this.limit);
}

function startGame() {
  while(this.winner === "") {
    this.nextTurn();
  }
  console.log("Winner:",this.winner);
}

class Game {
  constructor(str) {
    this.limit = 0;
    if(str === "EASY") this.limit = 4;
    else if(str === "MEDIUM") this.limit = 5;
    else if(str === "HARD") this.limit = 6;

    this.winner = "";
    this.turnCount = 1;

    this.nextTurn = nextTurn;
    this.start = startGame;
    this.init = initGame;

  }
}

module.exports = Game;
