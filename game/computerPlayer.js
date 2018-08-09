const Player = require('./player');
const dict = require('./dict');
const commonLetterCount = require('./commonletters').commonLetterCount;

function uniqueAnagrams(anagramDict) {
  let uDict = [];
  for(let w of Object.keys(anagramDict)) {
    let set = new Set(w.split(''));
    if(set.size === w.length)
      uDict.push(w);
  }
  return uDict;
}

function nextGuess() {
  if(this.guessState.index >= 0) {
    return this.anagramDict[this.guessState.anagram][this.guessState.index];
  }
  return this.anagramDict[this.uniqueAnagrams[0]][0];
}

function processInfo(word,commonCount) {
  if(commonCount === this.limit+1) {
    this.oppWord = word;
    return;
  }
  else if(commonCount === this.limit) {
    this.guessState = {
      anagram: this.uniqueAnagrams[0],
      index: this.guessState.index+1
    }
    return;
  }

  let possibleSecretAnagrams = [];
  for(let w of this.uniqueAnagrams) {
    if(commonLetterCount(w,word) === commonCount) {
      possibleSecretAnagrams.push(w);
    }
  }
  this.uniqueAnagrams = possibleSecretAnagrams.slice();
}

function chooseSecretWord(limit) {
  if(limit === 4) return "STIR";
  if(limit === 5) return "CHOIR";
  if(limit === 6) return "STABLE";
}

class ComputerPlayer extends Player {
  constructor(limit) {
    super(limit,chooseSecretWord(limit));
    this.anagramDict = dict.createAnagramDict(limit);
    this.uniqueAnagrams = uniqueAnagrams(this.anagramDict);

    this.guessState = {anagram: "", index: -1};

    this.nextGuess = nextGuess;
    this.processInfo = processInfo;
  }
}

module.exports = ComputerPlayer;

// let bot = new ComputerPlayer(6,"STABLE");
// console.log(bot.nextGuess(),1);
// bot.processInfo(bot.nextGuess(),3);
// console.log(bot.nextGuess(),2);
// bot.processInfo(bot.nextGuess(),3);
// console.log(bot.nextGuess(),3);
// bot.processInfo(bot.nextGuess(),6);
// console.log(bot.nextGuess(),4);
// bot.processInfo(bot.nextGuess(),6);
// console.log(bot.nextGuess(),5);
// bot.processInfo(bot.nextGuess(),6);
// console.log(bot.nextGuess(),5);
// bot.processInfo(bot.nextGuess(),6);
// console.log(bot.nextGuess(),5);
// bot.processInfo(bot.nextGuess(),6);
// console.log(bot.nextGuess(),5);
// bot.processInfo(bot.nextGuess(),6);
// console.log(bot.nextGuess(),5);
// bot.processInfo(bot.nextGuess(),7);
// console.log(bot.nextGuess(),5);
