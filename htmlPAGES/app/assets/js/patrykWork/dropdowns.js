// dropdownLinker, links premade checkmark flag and a dropdown along with a prev element which features the "text" info of the sort config Patryk Poborca
// Patryk Poborca CS 424 UIC

//array structures...


//




function createOption(grab, holdVal, parent,select)
{

	if(!select)
	return "<option current = '"+grab+"' class= 'genOption"+grab+ "' parent = '"+ parent +"' value='" + holdVal+"'>"+ holdVal +"</option>";
	return  "<option selected = 'selected' current ='"+ grab+"' class = 'genOption"+grab+ "' parent = '"+ parent +"' value='" + holdVal+"'>"+ holdVal +"</option>";
}
//todo sorting flag...


function initDropDowns()
{

repopulate("ScopeChoice", "resetScope", 0, false);
$("#checkScopeText").on('click', changeScope);

$("#ScopeChoice").on('change', function(){
   
var temp= $("#ScopeChoice").find(":selected").val();
var meh = ["Characters", "Seasons","Related Characters", "Location", "Voice Actor", "Show Runner", "Writers", "Directors", "Jobs"];



if(meh.indexOf(temp) != -1)
	{
	currentScope = temp;
	repopulate("filterBy", "resetFilter", 0, false);
	}
});

repopulate("filterBy", "resetFilter", "Seasons", false);
$("#filterCEText").on('click', changeFilter);
$("#ScopeChoice").trigger('change');
}

var p_rootOptionsArray = ["Seasons", "Characters", "Related Characters", "Location", "Voice Actor", "Show Runner", "Writers", "Directors", "Jobs"];
//used to determine what array to fetch.
function changeScope()
{tempDrop = "#ScopeChoice";
//repopulate("ScopeChoice", "resetScope", 0, true);
var choice = $("#ScopeChoice").val();
var temporary = p_rootOptionsArray.indexOf(choice) ;
currentScope = (temporary != -1) ? p_rootOptionsArray[temporary] : currentScope; 

repopulate("ScopeChoice", choice, 0, false);
$("#ScopeChoice").trigger('change');
$("#filterBy").trigger('change');

}

function changeFilter()
{ tempDrop = "#filterBy";
var choice = $("#filterBy").val();
repopulate("filterBy", choice, 0, false);
$("#filterBy").trigger('change');
}



var currentScope;
var parentStruct = {}; // used to iterate back through parents.

function repopulate(dropdown, grab, range, Sort)
{
Sort = globalSort;
//console.log("What is this : grab = " + grab + "  range = " + range);



// fetch data here to repopulate the lists and sort and finally repopulate the lists.
//clearDrop(dropdown); //clears all populated elements

var index =0;
var parent = $("#"+dropdown).find(":selected").attr('current'); //weird naming convention, but in the curent layer, parent is current, (gets added as parent to later nodes)
if(grab != "..")
	parentStruct[parent] = $("#"+dropdown).find(":selected").attr('parent')
var chosen;

//if(range == 0) currentScope = grab; // we use this as a flag because filter's will use range to eliminate the current scope

switch(grab)
{
	case "Characters":
	index =0;
	chosen = p_fetchCharIndex(index, range); // fetches a certain amount of characters, and returns one of their "indexes" aka = 0 names
	break;
	
	case "Related Characters":
	index = 0; 
	chosen = p_fetchAnon("globalCharGroups", "name", -1, -1);
	break;
	
	case "Seasons":
	chosen = p_populateSeasons(-1)
	break;
	
	case "..": //iterate up...
	index = 0;
	console.log(" HHHH === " + $("#"+dropdown).find(":selected").attr("current"));
	grab = parentStruct[parent]; //$("#"+dropdown).find(":selected").attr("parent");
	if($("#"+dropdown).find(":selected").attr("current") == 'Seasons') grab = (dropdown == 'ScopeChoice') ? 'resetScope' : 'resetFilter';
	repopulate(dropdown, grab, 0, Sort);
	return;
	break;
	
	case "Voice Actor":
	index =0;
	chosen = p_populateArr("voiceActorsByCharAmount", 0);
	break;
	
	case "Location":
	index =0;
	chosen = p_populateArr("locationsByAppearAmt", 0);
	break;
	
	case "resetScope":
	index = -1;
	break;
	
	case "resetFilter":
	
	index =-1;
	break;
	
	case "Show Runner":
	chosen = p_fetchAnon("globalRunnerList", "name", -1, -1);
	break;
	
	case "Writers":
	chosen = p_fetchAnon("globalWriterList", "name", -1, -1);
	break;
	
	case "Directors":
	chosen = p_fetchAnon("globalDirectorList", "name", -1, -1);
	break;
	
	case "Jobs":
	chosen = p_fetchAnon("globalJobs", "name", -1, -1);
	break;
	
	
	default:
	if(typeof(grab) == "string" && grab.indexOf("Season: ") != -1)
	{
		chosen = p_populateSeasons(Number(grab.slice(8)));
		//console.log("!!!!" +Number(grab.slice(8)));
		break;
	}
	
	
	//console.log("endof DropDowns");
	index = 0;
	return; //exit
	break;
}
$("#"+dropdown).empty(); // clear old data

var sTring = "";


//root poopulate
if(index == -1)
{
chosen = ["Seasons", "Characters", "Related Characters", "Location", "Voice Actor", "Show Runner", "Writers", "Directors", "Jobs"];
if(grab == "resetFilter")
	{chosen.splice(chosen.indexOf(currentScope), 1);} // since range isn't used for this parse, we use it to store the val currently being parsed
else
	chosen = ["Seasons"];
}
// eo root populate

if(Sort) 
	chosen.sort();

if(index != -1)
sTring += createOption(grab,  "..", parent, false); //iterate up option to go back up

for(var x = 0 ; x < chosen.length; x++)
{		
		sTring += createOption(grab,  chosen[x], parent,(x == 0)); //<option selected = "onlyifx==1" value="debug1"> 
}

//sTring += " </select>";
//console2D(sTring);
$("#"+dropdown).append(sTring);
}
