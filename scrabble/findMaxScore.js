const wordScore = require('./scorecalc');

function getMaxScoreWord(legalWords,rack) {
    let maxWord = [];
    let maxScore = -1;
    for (let word of legalWords){
        let calcWord = wordScore.wordscore(word,rack);

        if ( calcWord.score > maxScore){
            maxScore = calcWord.score;
            maxWord = [];
            maxWord.push({'word':word,'score':calcWord.score});
        }else if(calcWord.score == maxScore){
            maxWord.push({'word':word,'score':calcWord.score});
        }
    }
    return maxWord;
}

module.exports = {
    getMaxScoreWord : getMaxScoreWord
};
