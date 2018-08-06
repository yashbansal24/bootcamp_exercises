
function getMaxScoreWord(legalWords) {
    let maxWord = {'word':'','score':-1};
    for (let word of legalWords){
        if (word.score > maxWord.score){
            maxWord = word;
        }
    }
    return maxWord;
}

console.log(getMaxScoreWord([{'word':'sdgreg','score':34},{'word':'sdg3dd','score':21},{'word':'frref','score':929},{'word':'sdgh234','score':3}]));

module.exports = {
    getMaxScoreWord : getMaxScoreWord
};