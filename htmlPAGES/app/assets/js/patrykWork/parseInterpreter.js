// Patryk Poborca CS 424 UIC
/*
The parser is initiailzed here along with its global variables, any interpretation etc comes through here.
for now just adding functionality, but setting functionality is capable
*/
var parserQueries = []; // 2D array which holds scope in [x]0, and filters in [x][>0]
var pSCOPE; var pFILTER; var pDISPLAY; var pTXT; var parserTable;

function p_initInterp(scope, filterby, display, text)
{//^^ are ID's of html elements, 2 dropdowns, display div, and a text area
pSCOPE = $("#"+scope); pFILTER = $("#"+ filterby); pDISPLAY = $("#"+ display);  pTXT = $("#"+text);

pSCOPE.on('change', function(){if(pSCOPE.val() == "..") return; p_setQuery(); p_upDisplay(); p_upVisualElements();});
pFILTER.on('change',function(){if(pFILTER.val() == "..") return; p_cWrapper($(this).find(":selected").text(), -2);  p_upDisplay();  p_upVisualElements();});
p_initQuery(); 
p_initPTable();

var ii = "appearances";
parserQueries['lookup'] = {   
"Related Characters" : {"i" : ii, a: "globalCharGroups"}, 
"Characters" : { "i" : 7, "a" : "allCharByAppearAmt" }, 
"Writers" : { "i" : ii, "a" : "globalWriterList"},
"Show Runner" : {"i" : ii, "a" : "globalRunnerList"},
"Directors" : {"i" : ii, "a" : "globalDirectorList"}, 
"Jobs" : {"i": ii, "a" : "globalJobs"},
"Location" : {'i': 1, 'a' : 'locationsByAppearAmt'},
'Voice Actor' : {'i': 2, 'a': 'allVoiceActorsByAppearanceCount'},
'Seasons' : {'i' : '-1', 'a' : 'episodesInSeasons'},
'All Episodes' : {'i' : 1, 'a' : 'allEpisodesByNumber'}
}//["Characters", "Seasons","Related Characters", "Location", "Voice Actor", "Show Runner", "Writers", "Directors", "Jobs"];



var starting = 0;
for(var aa= 0; aa < episodesInSeasons.length; aa++)
	{
	if(aa != 0) starting = parserQueries['lookup']['Season: '+(aa)]['r'];
	parserQueries['lookup']['Season: '+(aa+1)] = {
	'i' : 1,
	'a' : 'allEpisodesByNumber',
	'r' : ((aa+1)* episodesInSeasons[aa]),
	's' : starting}
	};

	
pSCOPE.trigger('change');	
}
function p_upDisplay()
{
pDISPLAY.empty();
 var sTring = "";
	for(var a = 0; a < parserQueries.length; a++)
			{sTring = "";
			sTring+= "<span class = 'pRemove' id = 'pp"+a+"'> ";
			for(var b =0; b < parserQueries[a].length; b++)
				for(key in parserQueries[a][b])
					{sTring+=  key +" = " + parserQueries[a][b][key] + "<br>"; 
					//if(a != 0 && b != 0)
						//{console.log(parserQueries[a][b][key]); console.log(parserQueries['lookup'][parserQueries[a][b][key]]);}
						}
			sTring+= "</span>";
			pDISPLAY.append(sTring);
		}
}

function visualWrapper()
{
var arr = p_grabArrays();

console.log(arr);
var r_val = [];
r_val[0] = "";
var temp = [];
var count = 0;


for(var a= 0; a < arr[1].length; a++) // 1= scope
	r_val[a+1] = arr[1][a];

	
for(var a = 1; a < arr.length; a ++)
{
count = 0;
temp =[];
temp[0] ='reserved';
	for(var b= 0; b < arr[a][1].length; b++)
	{
	if(arr[a][1][b] == true || arr[a][1][b] > 0) count ++;
	temp.push({ data: ((arr[a][1][b]== true)? 1 : 0), color : ""});  
	}
temp[0] ={data: count, color : ""};
r_val.push(temp);
}
console.log(r_val);
console.log("^^^");

$("#genTable").empty();
initTable(r_val.length, r_val[0].length, "genTable", r_val, true, false);  
}

function p_upVisualElements(query)
{
var arr = p_grabArrays();

//p_examineElements(arr);
	

}
/*

todo:
3 stages
1- set scope to element arr[1] (because arr starts at 1
2- loop through filters for(var a=2; a < arr.length; a++) and && (or, or [advanced feature]) all filters together
3- loop through and "and" the filter flags with the scope flag

*/

//iterates through scope and filters of p_grabArrays
function p_examineElements(arr)
{
	console.log("$$$$$$$$$$$$$$$$$");
	console.log(arr[1][0][1].length);
	console.log("^^^^^^^^^^^");
	var test = 33;
	var count = 0;
	
	var scope = arr[1];
	var r_val = []; //adds base array	
	for(var a = 2; a < arr.length; a ++) //go through filters
	{	
		if(arr[a].length != null) //in case it's a single element
		{
			for(var b = 0; b < arr[a].length; b++) //go through actual list of people/things
			{
			
				for(var c =0; c < arr[a][b][1].length; c++) //go through the boolean list
				{
				
				}
			}
		}
		else //single element
		{
		}

	}
	
	if(scope.length != null) // in case single element
	{
	if(arr['lookup'][0] == "locationsByAppearAmt")
	{
	//replace arr of locationsByAppearAmt case with t/f table
	}
		for(var a= 0; a < scope.length; a++) //list of labels, scope arguments
		{
			
			for(var b=0; b < scope[a].length; b++)//boolean list
			{
			if(arr['lookup'][0] != 'allVoiceActorsByAppearanceCount')
			scope[a][b] = (scope[a][b] && r_val[a][b]); 
			else
			scope[a][b] = (0 < scope[a][b] && r_val[a][b]); 
			}
		
		}
	}
	else//single element
	{
	
	}
	
}

// grabs the CURRENT selection by iterating through where the current query pointer is..
function p_grabArrays() // returns a array of scope and its filters
{
var temp;
var parent;
var quer = []; // 0 -> scope, 0< filters 'lookup' = types
quer['lookup'] = [];
	for(var a = 1; a < parserQueries[p_Q()].length; a ++)
	{
		
		
		//console.log(parserQueries[p_Q()]);
		temp = parserQueries['lookup'][parserQueries[p_Q()][a]['term']];
		
		
		if(temp == null)
		{
		var finalChoice = $(document.activeElement).find(":selected").attr('current'); // 'previous' division (despite
		var value = $(document.activeElement).find(":selected").text();
		temp = parserQueries['lookup'][$(document.activeElement).find(":selected").attr('current')];
		
		
				
		//console.log(value + " = "+ value.indexOf('-Ep')  + " -> " + finalChoice);
		
		quer[a] =(isNaN(temp['i'])) ? p_fetchAnon(temp['a'], ['name', temp['i']], -1, -1) : p_populateArr(temp['a'], [0, temp['i']]);
		
		
		if(value.indexOf('-Ep') != -1) 
			value = value.substring(0, value.indexOf('-Ep')); //cut off extra string
			
			
		var crazy = quer[a].length;
		
		value = (value[value.length-1] == ' ') ? value.substring(0, value.length-1) : value;
		//alert("hhhh " +quer[a].length);
		for(var aa = 0; aa < crazy; aa ++) //look for segment, grab the cut... we only care about ONE cause this is nitty gritty choice
			{
				if(quer[a][aa][0] == value)
					{
					
					quer[a] = [quer[a][aa]];
					crazy = true; //used as flag
					break;
					}
			}
		if(crazy === true)
			{
			quer['lookup'][a] = temp['a'];
			continue;
			}
		console.log("vallll =@#QRE$#$@$#@ " );
		
		break;		//exit state, when at bottom level of iteration...
		}
		
	//////////////////////////===================================================================================================
		
		
		//alert(temp);
		if(parserQueries[p_Q()][a]['term'] != 'Seasons')
			{quer[a] =(isNaN(temp['i'])) ? p_fetchAnon(temp['a'], ['name', temp['i']], -1, -1) : p_populateArr(temp['a'], [0, temp['i']]); // is the index a number, if so, cut from different things
			}
			
		else {quer[a]=[];
		var tempHold = eval(temp['a']); // number of season, aka name
		
			for(var zz = 0; zz < tempHold.length; zz++)
				quer[a].push([tempHold[zz], getSeasonTF(zz+1)]);
		
		
		}
		
		
		if(temp['r'] != null) //cuts away a range
			{
				quer[a].splice(0, temp['s']);
				quer[a].splice(temp['r']);	
			}
			quer['lookup'][a] = temp['a'];
	}	
	
return quer; //returns at least quer[0] = scope, quer[1+] = filter
}



//////////////////////////////Backbone logic holding below

// Query Holder
function p_initQuery() 
{ 
	var spot = (parserQueries.length == 0) ? 1 : parserQueries.length -1;
	if(spot == 1)
		parserQueries[0] = {}; // keeps track of current querry
		
	parserQueries[spot] =[];
	parserQueries[spot][0] = {currentFilter : 2}; // keeps track of the filter we're currently working on.
	parserQueries[spot][1]=({term: pSCOPE.find(":selected").text()});
	parserQueries[spot][2] =({term: pFILTER.find(":selected").text()});
	
	parserQueries[0] =  {currentQuery : parserQueries.length-1}; //initing a new query, changes workign directory 
}

function p_Q(){ return parserQueries[0]["currentQuery"];}
function p_F() { return parserQueries[p_Q()][0]["currentFilter"];} //get functions RE : LITERAL!!!
function p_SF(pos)//set filter (pos)
 {
 pos=(pos ==-1)? parserQueries[p_Q()].length-1 : pos;
 parserQueries[p_Q()][0]["currentFilter"] = pos; }
 
 function p_cWrapper(str, pos){ p_changeFilter({term : str}, pos);} // wrapper for pure strings
 
function p_changeFilter(str, pos) // changes certain filter, -1 to "push" another filter, -2 to mod current filter
{
	if(pos == -1)
	{
	parserQueries[p_Q()].push(str); p_SF(-1);
	}
	else if(pos == -2)
	{parserQueries[p_Q()][p_F()] = (str);}
	else {parserQueries[p_Q()][pos] = (str); p_SF(pos);}
}

function p_clearFilters(pos)
{pos = (pos == -1) ? p_Q() : pos;
parserQueries[pos].splice(2, parserQueries[pos].length);	
}
function p_changeQuery(id){parserQueries[0] = { currentQuery : id};}//changes pointer to cur Query

function p_setQuery()
{
	p_clearFilters(-1);//clears all filters of our current direct
	parserQueries[p_Q()][1] = {term : pSCOPE.find(":selected").text() }; //change the scope
	p_cWrapper(pFILTER.find(":selected").text(), -1);//change the filter
	
}

function p_initPTable()
{
parserTable = {};
parserTable["$"] = "scope";
parserTable["C"] = "allCharByAppearAmt"; //"Character";
//parserTable["#"] = 
parserTable["+"] =  "" //"filter";
parserTable["v"] = //"Voice Actor";
parserTable["s"] = "Seasons";
parserTable["g"] = "Related Characters";
parserTable["l"] = "Location";
parserTable["="] = "done";
parserTable["!"] = "!";
parserTable["*"] = "*";
parserTable["e"] = ""
//"Related Characters", "Location", "Voice Actor", "Show Runner", "Writers", "Directors", "Jobs"];
}


//todo, advanced feature... probably not going to make this.
function relationShip(scope, filter)
{
/*
idea: each array holder has a category, a listing of all episodes meaning to be compared is say "0", 
scope = listing in x axis -> y axis is their existance, e.g. all seasons, each season has x episodes in the y direction
filter = quantity which limits the y axis

so if we choose season 10, it has x episodes, but only 1 / 0 values. obviously all 1, but then the filter comes into play. 
*/

}

// converts array of episode names for a entity into a t/f table of appearnces
function fetchTF(arr)
{
var t = p_fetchAnon("allEpisodesByNumber", 0, -1, -1);
var r_val =[];
for(var a =0; a < t.length; a++) r_val.push(false);

for(var a=0; a < arr.length; a++)
	if(t.indexOf(arr[a]) != -1 ) r_val[a] = true;
	
return r_val;
}

function getSeasonTF(num)
{
var hold = parserQueries['lookup']["Season: " + num];
var t = p_fetchAnon("allEpisodesByNumber", 1, -1, -1);
var r_val = [];

for(var a = 0; a < t.length; a++)
	r_val.push(false);
	
for(var a =hold['s']; a < hold['r']; a++)
	r_val[a] = true;

return r_val;
}

