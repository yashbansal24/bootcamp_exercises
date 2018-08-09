function read_dict(filename){
    let fs=require('fs');
    let list=fs.readFileSync(filename,'utf-8');
    list=list.split('\r\n');
    return list;
}
function create_dict(wordList,length) {
    let wordListOfLength = [];
    for (let word of wordList){
        if(word.length === length){
            wordListOfLength.push(word);
        }
    }
    return wordListOfLength;
}

function return_dict(length){
    list = read_dict("sowpods.txt");
    return create_dict(list,length);
}

function createAnagramDict(length){
    let list = return_dict(length);
    let anagramDict = {};
    for (let word of list){
        let sortedWord = word.split('').sort().join('');
        if(anagramDict.hasOwnProperty(sortedWord)){
            anagramDict[sortedWord].push(word);
        } else {
            let wordArray = [];
            wordArray.push(word);
            anagramDict[sortedWord] = wordArray;
        }
    }
    return anagramDict;
}

module.exports = {
    createAnagramDict: createAnagramDict
};
