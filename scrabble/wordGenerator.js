function genCombinations(str) {
  let res = new Set();
  let f = function(prefix,chars) {
    for(var i=0;i<chars.length;++i) {
      res.add(prefix+chars[i]);
      f(prefix+chars[i], chars.slice(i+1));
    }
  }
  f('',str.split(''));
  return Array.from(res);
}

function genPermutations(string) {
    if (string.length < 2) return string; // This is our break condition

    var permutations = []; // This array will hold our permutations

    for (var i=0; i<string.length; i++) {
        var char = string[i];

        // Cause we don't want any duplicates:
        if (string.indexOf(char) != i) // if char was used already
            continue;           // skip it this time

        var remainingString = string.slice(0,i) + string.slice(i+1,string.length); //Note: you can concat Strings via '+' in JS

        for (var subPermutation of genPermutations(remainingString))
            permutations.push(char + subPermutation)

    }
    return permutations;
}

function genPossibleWordsFromRack(rack) {
  let combos = genCombinations(rack);
  let res = [];
  for(let tmp of combos) {
    res = [].concat(res,genPermutations(tmp));
  }
  return res;
}

module.exports = {
  genPossibleWordsFromRack: genPossibleWordsFromRack
};

//console.log(genPossibleWordsFromRack('yes'));
