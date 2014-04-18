/*
data[x][y]=
{
type : "Character" || "Episode" || "MultiEpisodes" || "MultiCharacters" || "VoiceActor" || "Location" || "Group" || "Director" || "Showrunner" ,
	param1
	{
		name : "Homer Simpson" || "Episode Name" || etc.,
		data : "1" || "10" || "Some_Numeric_Value_here",
		index : "179" || "1000", // is the ID in the Type's array to fetch this entry (for hover functionality)
	},
	param2
	{
		name : "Homer Simpson" || "Episode Name" || etc.,
		data : "1" || "10" || "Some_Numeric_Value_here",
		index : "179" || "1000", // is the ID in the Type's array to fetch this entry (for hover functionality)
	},
	....
	paramN
	{
		name : "Homer Simpson" || "Episode Name" || etc.,
		data : "1" || "10" || "Some_Numeric_Value_here",
		index : "179" || "1000", // is the ID in the Type's array to fetch this entry (for hover functionality)
	}
};

================================================================================================================================Simulated Scope/Filter
Scope:
	Choose
	-> Character(s)
	-> Character Groups
	-> Seasons (Broken down by All... Season 1 -> season 25... Episode 1 .... Episode N
	-> Voice Actors
	-> Location
	
Filter By:
	Choose
	-> Character(s)
	...
	-> Location
	-> - (minus) Chosen Scope.. or any weird combos we may find.
	
	
Example of Query with multiple Scopes -> filters 

----------------------------------------------
Query
----------------------------------------------
$C=Homer_Bart_xxx+E=10 30+V=Some Name				  
----------------------------------------------
Line Chart => Y axis = Homer, Bart
		   => X axis = some Name + episodes 10-30 aka episodes in which the voice actor was in (if we get the data I sent an email about, other wise we'd disable +V= for 
		   the Episode/Season scope and have a selection of say... episodes 10-30 which featured the nuclear power plant
		   
Pie Chart => y axis = GROUPING (where both bart AND homer show up, only 1 paramater in the literal object)
		  => x axis = """ (same as earlier)

delimiters are 
	"_" = spacer within a scope or filter (aka white space seperating two entries... so +E=10_30  is episodes 10 AND 30
	" " = white space within one argument, so names "Bart Simpson" or "10 30" aka 10 THROUGH 30
	"+(v||c||e||s||g||l)=" 
		"+(v||c||e||s||g||l)!="  //special case
	"$(v||c||e||s||g||l)="
		"$(v||c||e||s||g||l)!=" //special case
		"+" = add filter  //can add multiple filters
		"v" = voice actor
		"c" = character
		"e" = episode
		"s" = season
		"g" = group
		"l" = location
	"=" = end of scope, or filter addition
	"$" = scope selector
		"!" = Not filter, placed at end of selector,see special cases. Means to grab everything BUT selection
		
		
		*** NOTE*** special case might or might not be implemented...
You can edit a query by hand if you wish.
*/

//example of how to parse the 2d array of literal objects + sub objects that will be passed to you Eric. I think it's pretty informative/conclusive (might have errors, couldn't test obviously)
function some_chart_function_to_call(arr)
{
var required_saved_data;
var xLength = arr[0].length;
var yLength = arr.length;
var paramCount = arr[1][1].length -1; // cannot be x == 0 && y ==0 because it's an empty location, will be == null
var saveType = arr[1][1]["type"];
var yourRequiredChartData = [][];
var DATA_points = [][];
var chartPlot = [];

for(var a =1; a < arr.length; a ++) //start from [1][1] so that you can properly call the row header info
{
	for(var b =1; b < arr[a].length; b++)
	{	
		for(var c = 0; c < paramCount; c++)
		{
			required_saved_data[a][b].push( {index : arr[a][b]["param"+c]["index"], type : saveType}  ); //for lookup functionality
			
			DATA_points[b][c] = {label : arr[a][b]["param"+c]["name"], y : arr[a][b]["param"+c]["data"]}; // labels for chart
			
		}
		
	}
		for(var b = 1; b < paramCount; b++) //reiterate 
			chartPlot.push(
			{
			name : arr[a][b],
			type : "line",
			legendText: arr[a][0],
			showInLegend : true,
			dataPoints : DATA_points[b]
			});
	DATA_points = [][]; //clear labels
	
}

//use charPlot to graph the graph now....
//save required_saved_data somewhere... for hover data...

}


