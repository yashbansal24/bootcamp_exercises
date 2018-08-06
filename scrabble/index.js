const dictmodule = require('./dictimport');
const wordGen = require('./wordGenerator');
const scoreCalc = require('./scorecalc');
const findMaxScore = require('./findMaxScore');

function getHighestWord(rack) {
  let possibleWords = wordGen.genPossibleWordsFromRack(rack);
  let legalWords = [];
  let dict = dictmodule.return_dict();
  for(let word of possibleWords) {
    if(dictmodule.check_if_present(dict,word) === true) {
      legalWords.push(word);
    }
  }

  return findMaxScore.getMaxScoreWord(legalWords);
}

function main() {
  console.log(getHighestWord('lewmoce'));
}

main();
