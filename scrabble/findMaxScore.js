const wordScore = require('./scorecalc');

function getMaxScoreWord(legalWords) {
    let maxWord = {'word':'','score':-1};
    for (let word of legalWords){
        let calcWord = wordScore.wordscore(word);

        if ( calcWord.score > maxWord.score){
            maxWord.word=word;
            maxWord.score = calcWord.score;
        }
    }
    return maxWord;
}

module.exports = {
    getMaxScoreWord : getMaxScoreWord
};
