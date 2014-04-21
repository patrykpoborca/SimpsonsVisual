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

pSCOPE.on('change', function(){if(pSCOPE.val() == "..") return; p_setQuery(); p_upDisplay()});
pFILTER.on('change',function(){if(pFILTER.val() == "..") return; p_cWrapper($(this).val(), -2); console.log(parserQueries); p_upDisplay();});
p_initQuery(); 
p_initPTable();


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
					{sTring+=  key +" = " + parserQueries[a][b][key] + "<br>";}
			sTring+= "</span>";
			pDISPLAY.append(sTring);
		}
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
	parserQueries[spot][1]=({term: pSCOPE.val()});
	parserQueries[spot][2] =({term: pFILTER.val()});
	
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
	parserQueries[p_Q()][1] = {term : pSCOPE.val() }; //change the scope
	p_cWrapper(pFILTER.val(), -1);//change the filter
	console.log(parserQueries);
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
