// dropdownLinker, links premade checkmark flag and a dropdown along with a prev element which features the "text" info of the sort config Patryk Poborca

//array structures...


//



function createOption(grab, holdVal, parent,select)
{
	if(!select)
	return "<option current = '"+grab+"' class= 'genOption"+grab+ "' parent = '"+ parent +"' value='" + holdVal+"'>\n"+ holdVal +" </option>";
	return  "<option selected = 'selected' current ='"+ grab+"' class = 'genOption"+grab+ "' parent = '"+ parent +"' value='" + holdVal+"'>\n"+ holdVal +" </option>";
}



function initDropDowns()
{

repopulate("ScopeChoice", "resetScope", 0, true);
$("#ScopeChoice").enterKey(changeScope); //step into on enter key.
}

//used to determine what array to fetch.
function changeScope()
{
//repopulate("ScopeChoice", "resetScope", 0, true);
var choice = $("#ScopeChoice").val();
repopulate("ScopeChoice", choice, 0, true);

}



function repopulate(dropdown, grab, range, Sort)
{
// fetch data here to repopulate the lists and sort and finally repopulate the lists.
//clearDrop(dropdown); //clears all populated elements

var index =0;
var parent = $("#"+dropdown).attr('current');
$("#"+dropdown).empty(); // clear old data
switch(grab)
{
	case "Characters":
	index =0;
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
	return;
	break;
}

var sTring = "";
var chosen;
if(grab == "Characters")
chosen = p_fetchCharIndex(index, range); // fetches a certain amount of characters, and returns one of their "indexes" aka = 0 names
if(index == -1)
{
chosen = ["Characters", "Seasons","Character Group", "Location", "Voice Actor", "Show Runner", "Director"];
if(grab == "resetFilter")
chosen.splice(chosen.indexof(range), 1); // since range isn't used for this parse, we use it to store the val currently being parsed
}




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
