// dropdownLinker, links premade checkmark flag and a dropdown along with a prev element which features the "text" info of the sort config Patryk Poborca

function initDropdowns()
{


}


function attachCheck(checkbox, dropdown, extra)
{
$("#"+checkbox).attr("flag", "true");
$("#"+checkbox).prev().text("Numeric Sort "+ extra);
$("#"+checkbox).on("change", function(){


if($(this).attr("flag") == "true")
	{
	$(this).attr("flag", "false");
	$(this).prev().text("Alphabetic Sort "+ extra);
	}
	else
	{
	$(this).attr("flag", "true");
	$(this).prev().text("Numeric Sort "+ extra);
	}
});


}

function clearDrop(dropdown)
{

$("#"+dropdown +" > option").each(function()
{
$(this).remove();
});

}

function createOption(grab, holdVal)
{
	return "<option class = 'genOption"+grab+ "' value='" + holdVal+"'>\n"+ holdVal +" </option>";
}

function repopulate(dropdown, grab, range, Sort)
{
// fetch data here to repopulate the lists and sort and finally repopulate the lists.
//clearDrop(dropdown); //clears all populated elements
//todo fetch
//todo append
var index =0;
$("#"+dropdown).empty(); // clear old data
switch(grab)
{
	case "characters":
	index =0;
	break;
	
	default:
	console.log("Wrong param at repop grab");
	index = 0;
	break;
}

var sTring = "";
var charHolder = p_fetchCharIndex(index, range); // fetches a certain amount of characters, and returns one of their "indexes" aka = 0 names


var holdVal;
for(var x = 0 ; x < charHolder.length; x++)
{
	if(index ==0)
	{
		holdVal = charHolder[x];
		sTring += createOption(grab, holdVal); //<option value="debug1">
	}
}
//sTring += " </select>";
//console2D(sTring);
$("#"+dropdown).append(sTring);
}
