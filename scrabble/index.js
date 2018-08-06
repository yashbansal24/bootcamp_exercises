const dictmodule = require('./dictimport');
const wordGen = require('./wordGenerator');
const scoreCalc = require('./scorecalc');
const findMaxScore = require('./findMaxScore');

const dict = dictmodule.return_dict();

function passesConstraints(word,rackConstraints) {
  for(let constraint of rackConstraints) {
    if(constraint.second) {
      //console.log(constraint);
      if(word.indexOf(constraint.second) - word.indexOf(constraint.first) !== constraint.diff)
        return false;
    }
    else if(constraint.first) {
      return (word.indexOf(constraint.first) !== -1);
    }
  }
  return true;
}

function getHighestWord(rack,constraints) {
  let legalWords = dictmodule.find_all_that_satisfy(dict,rack);
  let allowedWords = [];
  for(let w of legalWords) {
    if(passesConstraints(w,constraints)) {
      allowedWords.push(w);
    }
  }
  //console.log(allowedWords);
  return findMaxScore.getMaxScoreWord(allowedWords,rack);
}

let sampleInputs = [
  {
    rack: [
      {letter:'W', pos:-1},
      {letter:'E', pos:-1},
      {letter:'-', pos:-1},
      {letter:'C', pos:-1},
      {letter:'O', pos:-1},
      {letter:'M', pos:-1},
      {letter:'E', pos:-1}
    ],
    constraints: [{first: 'L', second: 'M', diff:2}]
  }
];

function main() {
  for(let input of sampleInputs) {
    //console.log(input.rack);
    console.log(getHighestWord(input.rack,input.constraints));
  }
}

main();
