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


function repopulate(dropdown)
{
// fetch data here to repopulate the lists and sort and finally repopulate the lists.
//clearDrop(dropdown); //clears all populated elements
//todo fetch
//todo append
}
