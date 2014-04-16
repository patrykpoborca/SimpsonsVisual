
function p_charBySeason()
{
var printFunc = function()
{
var debugString = "";
for(var it = 0; it < finalArray.length; it++)
	{
		debugString = "Rows = ";
		
		for(var it2= 0; it2< finalArray[it].length; it2++)
			{debugString+= finalArray[it][it2]+ " ";
			
			if(finalArray.length == 1)
			console.log("kkk " + finalArray[it][it2]); }
			
			if(finalArray.length != 1)console.log(debugString);
	}
}
//////////////////////////////

var episodesRow = [];
episodesRow[0] = "";
for(var ii = 1; ii < dkGlobalOverviewTable.arrayOfEpisodesInSeasons.length +1; ii++)
	{episodesRow.push(ii);}
	

var listOfChars = p_fetchChars(0);

var finalArray = [];

finalArray.push(episodesRow);

		
	



var temp = [];
var holder ;
for(var firstTier = 0; firstTier < listOfChars.length; firstTier++) //start at 1 to avoid dead spot 0/0
{
	temp[0] = listOfChars[firstTier][0]; //save name
	holder = p_iterateCharEpisodes(listOfChars[firstTier]);
	for(var secondTier = 0; secondTier < holder.length; secondTier++)
	temp.push(holder[secondTier]);
	finalArray.push(temp);
	temp = [];
}



return finalArray;
}
var p_count =0;
//
function p_iterateCharEpisodes(character) //condition = function e.g. cond = function(){return true;}; .. todo?
{
	p_count ++;
	var r_val = [];
	
	for(var zz = 0; zz < dkGlobalOverviewTable.arrayOfEpisodesInSeasons.length; zz++) 
	{r_val[zz] = 0; }
	var gugle = 0;
	
	for(var a = 0; a < character[7].length; a++)
	{	
		if(getSeasonOfEpisodeNumber(getEpsNumber(character[7][a])) != null)
		{
		r_val[Number(getSeasonOfEpisodeNumber(getEpsNumber(character[7][a])))] ++;
		}
	}
	var debug_string = character[0] + " ";
	for(var x = 0; x < r_val.length; x ++)
		debug_string += r_val[x];
	//console.log(debug_string);
	return r_val;
}

function p_fetchCharIndex(index, range)
{
var charHolder = p_fetchChars(range);
if(range == 0) range = charHolder.length;

var tempArray = [];

for(var x = 0; x < range; x++)
	tempArray.push(charHolder[x][index]);
	
return tempArray;
}


function p_fetchChars(amount)
{
if(amount == 0) amount = allCharByAppearAmt.length;
var charList = [];
for(var x = 0; x < amount; x ++)
	charList.push(allCharByAppearAmt[x]);

	return charList;		
	}


	
/////////////////////////// debug functions... save
function console1D(arr)
{
console.log("Debug: \n");
	for(var x =0; x < arr.length; x++)
		console.log(arr[x]);
}

function console2D(arr)
{
	var debugstring = "";
	for(var first = 0; first < arr.length; first ++)
	{
	debugstring = "";
	for(var second = 0; second < arr[first].length; second++)
	{
	debugstring+= arr[first][second] + " ";
		}
	console.log(debugstring);
	}
}
