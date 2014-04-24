// Patryk Poborca CS 424 UIC

function p_charBySeason()
{
return p_CharBySeason(0, 9999, 0);
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
	

	var listOfChars = p_fetchChars(amount);
	
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
	
	//console.log("Size y = "+ finalArray.length +" size x = " + finalArray[0].length + "Ent 1: " + finalArray[1][1] + " Ent 2 = " + finalArray[1][25]);
	//console.log("hehrehrherhe");
	//console.log(finalArray);
	return finalArray;
}


/*
globalJobs
globalCharGroups
globalDirectorList
globalWriterList
globalRunnerList
*/ 

//fetches an ARRAY version of the index found... index is a string value, due to original arrays being object literals, choice indicates which of above you wish...
function p_fetchAnon(choice, index, min, max)
{
var holder = [];
var tempArray =[];
var length = 1;
var pos;
if( index instanceof Array) length = index.length;
var placeHolder= eval(choice); // quick and painless, you pass which array you want, which 'index' and what range

if(min + max >=0) // makes range a min/max
{
}
for(key in placeHolder)
{
	holder = [];
	for(var z = 0; z < length; z++)
	{
	pos = (index instanceof Array) ? index[z] : index;
		if(index instanceof Array)
		{
			holder.push(placeHolder[key][pos]);
			if(choice == "globalCharGroups" && pos == "name")
				holder[holder.length-1]+= "'s group";
		}
		else
		{
			holder = placeHolder[key][pos];
			if(choice == "globalCharGroups" && pos == "name")
				tempArray[tempArray.length-1]+= "'s group";
		}
	}
	tempArray.push(holder);
}
return tempArray;
}


function p_populateArr(which, cut)
{
var holder = eval(which); //locations/voiceactors etc.
var temp= [];
var tempR =[];
if( cut instanceof Array)
{

for(var a=0; a < holder.length; a++)
	{tempR = [];
	for(var b= 0; b < cut.length; b ++)
		tempR.push(holder[a][cut[b]])
		
	temp.push(tempR);
	}

}
else
{
for(var a=0; a < holder.length; a++)
	temp.push(holder[a][cut])
}
return temp;
}


// pass season as -1 to get all seasons, else specific season to "expand" season...
function p_populateSeasons(season)
{	
	var r_val = [];
	if(season == -1)
	{
		
		//r_val.push("All Episodes");
		for(var a =0 ; a < dkGlobalOverviewTable.arrayOfEpisodesInSeasons.length; a ++)
		{
		r_val.push("Season: " + (a+1));
		}
	}	
	else
	{
	//alert("hihi");
		for(var a=0; a < allEpisodesByNumber.length; a++)
		if(getSeasonOfEpisodeNumber(a+1) == season)
			r_val.push(allEpisodesByNumber[a][0] + " -Ep"+(a+1));

	}
return r_val;
}
var ppp = 0;
//
function p_iterateCharEpisodes(character) { //condition = function e.g. cond = function(){return true;}; .. todo?
	
	var r_val = [];

	for(var zz = 1; zz < dkGlobalOverviewTable.arrayOfEpisodesInSeasons.length+1; zz++) {
		r_val[zz] = 0; 
	}
	var gugle = 0;

	for(var a = 1; a <= character[7].length; a++) {	
		if(character[7][a] != false) {
			
			r_val[Number(getSeasonOfEpisodeNumber(a))] ++;
			
			
		}
	}
	r_val.splice(0, 1); //fix for Dylan's method change
	
	var debug_string = character[0] + " ";
	for(var x = 0; x < r_val.length; x ++)
		debug_string += r_val[x]+ " ";
	if(ppp == 0)
	//console.log(debug_string);
	ppp = 1;
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
		if(-1 != index.indexOf(y)) tempArray[x].push(charHolder[x][y]);
	}
return tempArray;
}

if(isNaN(range)) // returns min/max of a range
{
for(var x = range[0]; x < range[1]; x++)
	tempArray.push(charHolder[x][index]);

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





/////////////////////////////////////////////// pre-load processing stuff...

function p_Directors()
{


for(var master = 4; master < 7; master ++)
{
var ic = {}; //initial count
var temp;
var inner =0;
var nakedArr =[];
			for(var a=0; a < allEpisodesByNumber.length; a++)
			{	
				temp = allEpisodesByNumber[a];
					inner = master;
						for(var b = 0; b < temp[inner].length; b++)
							{
							if(ic[temp[inner][b]] == null)
								ic[temp[inner][b]] = {count : 1, type : inner, name : temp[inner][b], appearances : nakedArr};
								else 
									{ic[temp[inner][b]]["count"]++; //show runner, director, writer
									}
							}	
			
			}
			
			var tempArray = [];
			
			var individual;
			
			

				for(z in ic)
				{
					individual = ic[z];		
					tempArray[z] = new Array();
						for(var a=0; a < allEpisodesByNumber.length; a++)
					{	
						
						temp = allEpisodesByNumber[a];
						tempArray[z][a] = (temp[master].indexOf(individual["name"]) != -1) ? true : false;			
					}
				}
				
			var iterate =0;
				for(z in ic)
				{
				 for(h in ic[z])
					ic[z][h] = (h == "appearances") ? tempArray[z] : ic[z][h];
					
					}
					
				if(master == 6)  {globalDirectorList = ic;
				}
				if(master == 5) 
				{globalWriterList =ic;
				
				}
				if(master == 4) {
				globalRunnerList = ic;
				var hole = JSON.stringify(globalRunnerList);
				console.log(hole);
				}
				//console.log(ic);
			
}
			/*
var STRING = "";
STRING+=("[");	

	for(z in ic)
{

	
	
	 STRING+=("[");
	 STRING += 
	for(var a = 0; a < ic[z]["appearances"].length; a++)
		{
		if(a +1 != ic[z]["appearances"].length) STRING+=(" " +   ic[z]["appearances"][a] + ",");
		else  STRING+=(" " +   ic[z]["appearances"][a] + "]");
		}
	
	STRING+=("]")
}	
STRING+=("]");
console.log(STRING);*/
}


function patriarch(arr, index)
{
var allC = allCharByAppearAmt;
var holder = p_fetchCharIndex(0, 0);
var indexer;
for(key in arr)
{
var temp = arr[key];
indexer = holder.indexOf(temp["member1"]);
if(allC[index][5].indexOf(temp["member1"]) != -1 && allC[indexer][5].indexOf(allC[index][0]) != -1)
	{ return key;}
}

return false;
}


function p_Groups()
{


for(var master = 4; master < 6; master ++)
{
var ic = {}; //initial count
var temp;
var inner =0;
var nakedArr =[];
var finder =false;
var holder;

			for(var a=0; a < allCharByAppearAmt.length; a++)
			{	
				temp = allCharByAppearAmt[a];
					inner = master;
					
						for(var b = 0; b < temp[inner].length; b++) //iterating inner array of certain slot.
							{
							
							if(master == 5)
							{
							
							finder = patriarch(ic, a);
							if(finder != false)
							{
							ic[finder]["members"]++;
							ic[finder]["member"+ic[finder]["members"]] = temp[0];
							}
							else
							{
							ic[temp[0]] = {members : 1, type : inner, name : temp[0], appearances : nakedArr, member1: temp[0]};
							
							}
							
							break; // only one iteration per line of this...
							}
								if(master == 4)
								{
									if(ic[temp[inner][b]] == null)
										{
										
											ic[temp[inner][b]] = {members : 1, type : inner, name : temp[inner][b], appearances : nakedArr, member1: temp[0]};
											
										}
										else 
											{ic[temp[inner][b]]["members"]++; // job. family.
											ic[temp[inner][b]]["member" + ic[temp[inner][b]]["members"]] = temp[0];
											}
								}
							}	
			
			}
			
			var tempArray = [];
			
			var individual;
			
			var tempWipe = {};
			for(key in ic)
			{
			if(ic[key]["members"] >= 2) tempWipe[key] = ic[key];
			}
			ic = tempWipe;
						
temp = p_fetchCharIndex(0, 0);
				for(z in ic)
				{
					individual = ic[z];		
					tempArray[z] = new Array();
					
						for(var a=0; a < temp.length; a++)
					{	
						
						
						for(var pumpChars = 1; pumpChars < ic[z]["members"] +1; pumpChars++)
						{
						
						if(allCharByAppearAmt[temp.indexOf(individual["member"+pumpChars])][7][a]) {tempArray[z][a] = true; break;} 
							else  tempArray[z][a] = false;			
						}
					}
				}
			var iterate =0;
				for(z in ic)
				{
				 for(h in ic[z])
					ic[z][h] = (h == "appearances") ? tempArray[z] : ic[z][h];
					
					}
					
				
			if(master == 5) globalCharGroup = ic;
			else globalJobs = ic;
			
}
var hole = JSON.stringify(globalCharGroup);
console.log(hole);
//console.log(globalJobs);
//console.log(globalCharGroup);
}


