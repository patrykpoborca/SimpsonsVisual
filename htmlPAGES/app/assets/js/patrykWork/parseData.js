function p_charBySeason()
{
return p_CharBySeason(0, 9999, 9999);
}


//real func, above is wrapper, min = min appearances, max appearances, amount = quantity of fetches over all 
function p_CharBySeason(min, max, amount) {
	var printFunc = function() {
		var debugString = "";
		for(var it = 0; it < finalArray.length; it++) {
			debugString = "Rows = ";
				
			for(var it2= 0; it2< finalArray[it].length; it2++) {
				debugString+= finalArray[it][it2]+ " ";
				if(finalArray.length == 1)
					console.log("kkk " + finalArray[it][it2]); 
			}
			if(finalArray.length != 1)
				console.log(debugString);
		}
	}
//////////////////////////////

var episodesRow = [];
	episodesRow[0] = "";
	for(var ii = 1; ii < dkGlobalOverviewTable.arrayOfEpisodesInSeasons.length +1; ii++) {
		episodesRow.push(ii);
	}
		
	var listOfChars = p_fetchChars(0);
	var finalArray = [];

	finalArray.push(episodesRow);

	var temp = [];
	var holder ;
	for(var firstTier = 0; firstTier < listOfChars.length; firstTier++) {//start at 1 to avoid dead spot 0/0 
		temp[0] = listOfChars[firstTier][0]; //save name
		holder = p_iterateCharEpisodes(listOfChars[firstTier]);
		for(var secondTier = 0; secondTier < holder.length; secondTier++)
			temp.push(holder[secondTier]);
		finalArray.push(temp);
		temp = [];
	}
	
	console.log("Size y = "+ finalArray.length +" size x = " + finalArray[0].length + "Ent 1: " + finalArray[1][1] + " Ent 2 = " + finalArray[1][25]);
	return finalArray;
}
var p_count =0;
//
function p_iterateCharEpisodes(character) { //condition = function e.g. cond = function(){return true;}; .. todo?
	p_count ++;
	var r_val = [];

	for(var zz = 0; zz < dkGlobalOverviewTable.arrayOfEpisodesInSeasons.length; zz++) {
		r_val[zz] = 0; 
	}
	var gugle = 0;

	for(var a = 0; a < character[7].length; a++) {	
		if(character[7][a] != false) {
			r_val[Number(getSeasonOfEpisodeNumber(a))] ++;
		}
	}
	var debug_string = character[0] + " ";
	for(var x = 0; x < r_val.length; x ++)
		debug_string += r_val[x];
	//console.log(debug_string);
	return r_val;
}

// fetches a range of characters and a certain index from them
function p_fetchCharIndex(index, range)
{

var charHolder = p_fetchChars(range);
if(range == 0) range = charHolder.length;
var tempArray = [];
if(isNaN(index))
{

for(var x = 0; x < range; x++)
	{
	tempArray.push([]);
	for(var y = 0; y < charHolder[0].length; y++)
		if(-1 != index.indexOf(y))tempArray[x].push(charHolder[x][y]);
	}
return tempArray;
}


for(var x = 0; x < range; x++)
	tempArray.push(charHolder[x][index]);
	
return tempArray;
}

//fetches entire char object 
function p_fetchChars(amount) {
	if(amount == 0) amount = allCharByAppearAmt.length;
		var charList = [];
	for(var x = 0; x < amount; x ++)
		charList.push(allCharByAppearAmt[x]);
	return charList;		
}

//post process stuff....
var globalCharGroups = {};
var globalDirectorList ={};
/*
function p_Directors()
{
var ic = {}; //initial count
var temp;
	for(var a=0; a < allEpisodesByNumber.length; a++)
	{	
		temp = allEpisodesByNumber[a];
		for(v
		ic[temp[
		
		for(var c = 0; c
	}

}
*/
function p_Groups()
{

var hold = p_fetchCharIndex([0, 4, 5], 0)
//console1D(hold[0]);
}






	
/////////////////////////// debug functions... save
function console1D(arr)
{
console.log("Debug: \n");
	for(var x =0; x < arr.length; x++)
		console.log(arr[x]);
}

function console2D(arr) {
	var debugstring = "";
	for(var first = 0; first < arr.length; first ++) {
		debugstring = "";
		for(var second = 0; second < arr[first].length; second++) {
			debugstring+= arr[first][second] + " ";
		}
	console.log(debugstring);
	}
}

