function read_word(filename){
    var fs=require('fs');
    var list=fs.readFileSync(filename,'utf-8');
    list=list.split('\r\n');
    return list
}

function list_of_letters(){
    let list = read_word("word.txt")
    return list[0].split('');
}

module.exports = {
    list_of_letters: list_of_letters()
};

console.log(list_of_letters());
