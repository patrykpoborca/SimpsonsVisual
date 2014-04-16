// dropdownLinker, links premade checkmark flag and a dropdown along with a prev element which features the "text" info of the sort config Patryk Poborca

function initDropdowns()
{


}


function attachCheck(checkbox, dropdown, extra)
{
$("#"+checkbox).attr("flag", "true");
$("#"+checkbox).prev().text("Numeric Sort "+ extra);
$("#"+checkbox).on("change", function(){

repopulate(dropdown);
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

function p_valueByIndex(character, index)
{
if(index ==0) return character;

return -1;
}


function repopulate(dropdown, grab, range)
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
var charHolder = p_fetchCharIndex(index, 0);
var holdVal = p_valueByIndex(charHolder[x], index);
for(var x = 0 ; x < charHolder.length; x++)
{
holdVal = p_valueByIndex(charHolder[x], index);
sTring += "<option class = 'genOption"+grab+ "' value='" + holdVal+"'>\n"+ holdVal +" </option>"; //<option value="debug1">
}
//sTring += " </select>";
//console2D(sTring);
$("#"+dropdown).append(sTring);
}
