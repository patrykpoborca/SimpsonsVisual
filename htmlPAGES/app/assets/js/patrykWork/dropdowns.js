// dropdownLinker, links premade checkmark flag and a dropdown along with a prev element which features the "text" info of the sort config Patryk Poborca

//array structures...


//



function createOption(grab, holdVal, parent,select)
{
console.log(grab);
	if(!select)
	return "<option current = '"+grab+"' class= 'genOption"+grab+ "' parent = '"+ parent +"' value='" + holdVal+"'>\n"+ holdVal +" </option>";
	return  "<option selected = 'selected' current ='"+ grab+"' class = 'genOption"+grab+ "' parent = '"+ parent +"' value='" + holdVal+"'>\n"+ holdVal +" </option>";
}



function initDropDowns()
{

repopulate("ScopeChoice", "resetScope", 0, false);
$("#ScopeChoice").enterKey(changeScope); //step into on enter key.
$("#ScopeChoice").dblclick(changeScope);


repopulate("filterBy", "resetFilter", "Characters", false);
$("#filterBy").enterKey(changeFilter); //step into on enter key.
$("#filterBy").dblclick(changeFilter);

}

//used to determine what array to fetch.
function changeScope()
{
//repopulate("ScopeChoice", "resetScope", 0, true);
var choice = $("#ScopeChoice").val();
repopulate("ScopeChoice", choice, 0, true);

}

function changeFilter()
{

}


function repopulate(dropdown, grab, range, Sort)
{
var trial = dropdown.index

// fetch data here to repopulate the lists and sort and finally repopulate the lists.
//clearDrop(dropdown); //clears all populated elements

var index =0;
var parent = $("#"+dropdown).find(":selected").attr('current');
var chosen;

switch(grab)
{
	case "Characters":
	index =0;
	chosen = p_fetchCharIndex(index, range); // fetches a certain amount of characters, and returns one of their "indexes" aka = 0 names
	break;
	
	case "Related Characters":
	index = 0;
	return; //todo
	break;
	
	case "..": //iterate up...
	index = 0;
	grab = $("#"+dropdown).find(":selected").attr("parent");
	repopulate(dropdown, grab, 0, Sort);
	return;
	break;
	
	case "resetScope":
	index = -1;
	break;
	
	case "resetFilter":
	index =-1;
	break;
	
	default:
	console.log("Wrong param at repop grab");
	index = 0;
	return; //exit
	break;
}
$("#"+dropdown).empty(); // clear old data

var sTring = "";




//root poopulate
if(index == -1)
{
chosen = ["Characters", "Seasons","Related Characters", "Location", "Voice Actor", "Show Runner", "Writer", "Director", "Jobs"];
if(grab == "resetFilter")
	chosen.splice(chosen.indexOf(range), 1); // since range isn't used for this parse, we use it to store the val currently being parsed
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
