const commonLetterCount = require('./commonletters').commonLetterCount;

function sendInfo(word) {
  if(word === this.secretWord)
    return this.limit+1;
  return commonLetterCount(this.secretWord,word);
};

class Player {
  constructor(limit,secretWord) {
    this.limit = limit;
    this.secretWord = secretWord;

    this.sendInfo = sendInfo;
  }
}

module.exports = Player;
