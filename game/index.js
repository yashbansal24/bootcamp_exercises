const dict = require('./dict');
const commonLetterCount = require('./commonletters').commonLetterCount

const LIMIT = 6;
let secretWord = "HOLDER";
const anagramDict = dict.createAnagramDict(LIMIT);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

function uniqueAna() {
  let uDict = [];
  for(let w of Object.keys(anagramDict)) {
    let set = new Set(w.split(''));
    if(set.size === w.length)
      uDict.push(w);
  }
  return uDict;
}
let uniqueAnagrams = uniqueAna();
let possibleSecretAnagrams = [];

let commonCount = 0;
let count = 0;
while(commonCount !== LIMIT) {
  randomWord = uniqueAnagrams[0];
  commonCount = commonLetterCount(randomWord,secretWord);
  possibleSecretAnagrams = [];
  for(let w of uniqueAnagrams) {
    if(commonLetterCount(w,randomWord) === commonCount) {
      possibleSecretAnagrams.push(w);
    }
  }
  uniqueAnagrams = possibleSecretAnagrams.slice();
  console.log(uniqueAnagrams);
  count++;
  console.log(count);
}
