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

function create_dict(list,input,out)
{
    let map={};
    for(var i=0;i<list.length;i++){
        if(list[i].length==input.length)
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

function return_dict(input,out){
    list = read_dict("sowpods.txt")

    if(input.length != out.length)
        console.log("invalid")
    return create_dict(list,input,out);
}

function check_if_present(dict,word)
{
    return dict[word]>0
}

module.exports = {
    return_dict: return_dict,
    check_if_present: check_if_present,
    return_word: return_word
};

//console.log(return_dict("clay","gold"));
