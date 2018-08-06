function read_word(filename){
    var fs=require('fs');
    var list=fs.readFileSync(filename,'utf-8');
    list=list.split('\r\n');
    return list;
}

function return_word(){
    let list = read_word("word.txt")
    return list[0];
}

function create_dict(list)
{
    let map={};
    for(var i=0;i<list.length;i++){
            map[list[i]]=1;
    }
    return map;
}

function read_dict(filename){
    var fs=require('fs');
    var list=fs.readFileSync(filename,'utf-8');
    list=list.split('\r\n');
    return list
}

function return_dict(){
    list = read_dict("sowpods.txt")

    return create_dict(list);
}

function check_if_present(dict,word)
{
    return dict[word.toUpperCase()]>0;
}

function count_match(word1,word2) {
    a = word1;
    b = word2;

    let freq = {};
    for(let i=0;i<256;i++)
    {
        freq[String.fromCharCode(i)] = 0;
    }

    for(let i=0;i<a.length;i++)
        freq[a[i]]++;
    for(let i=0;i<b.length;i++)
        freq[b[i]]--;

    let count = 0;
    // console.log(a,b);
    // console.log(freq);
    Object.keys(freq).forEach(function(key) {
        if(freq[key] > 0)
            count+=Math.abs(freq[key]);
    });
    // console.log(Math.abs(freq['-']));
    return count<=Math.abs(freq['-'])



}

function rack_to_word(word_obj) {
    let ans = "";
    for(let i=0;i<word_obj.length;i++)
    {

        ans+=word_obj[i].letter.toString();
    }
    console.log(ans);
    return ans;

}
function find_all_that_satisfy(dict, word_obj){
    let isMatch = false;
    var word = rack_to_word(word_obj);
    var possible_words = [];
    let l = 0;
    for (let key in dict) {

        // isMatch = true;
        if(key.length<=word.length && count_match(key,word)==true)
            possible_words.push(key);
        // for(let j=0;j<word_obj.length;j++)
        // {
        //     if(word_obj[j].fixed == "Y" && word_obj[j].letter != key[j]) {
        //         isMatch = false;
        //     }
        // }
        //
        // if(isMatch){
        //     count_match()
        // }
    }
    // console.log(possible_words);
    return possible_words;
}

// var dict = return_dict();
// find_all_that_satisfy(dict,[{letter:"C",fixed:"N"},{letter:"M",fixed:"Y"},{letter:"A",fixed:"N"},{letter:"P",fixed:"N"}]);
module.exports = {
    return_dict: return_dict,
    check_if_present: check_if_present,
    return_word: return_word,
    find_all_that_satisfy: find_all_that_satisfy
};

//console.log(return_dict("clay","gold"));
