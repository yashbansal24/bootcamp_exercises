function wordstomap(a)
{
	var map=[];
	for(let i=0;i<a.length;i++)
    {
    	if(map[a[i]]==undefined)
    		map[a[i]]=1;
    	else
    		map[a[i]]++;
    }
    return map;
}
function commonletters(a,b)
{
	var map=wordstomap(a);
	var count=0;
	for(let i=0;i<b.length;i++)
	{
		if(map[b[i]]!=undefined&&map[b[i]]!="used")
		{
			count++;
			map[b[i]]="used";
		}
	}
	return count;
}

module.exports = {
  commonLetterCount: commonletters
}
