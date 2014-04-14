// jquery automatic checkmark placer and linker, true/false flag only. Patryk Poborca

function populateFlags() //wrapper method
{POPULATEFLAGS("", "flagger"); }

// iterates through all "flagger" class objects (if you used wrapper) otherwise specified classs under "cname" else implementation would include a parent feature to further narrow class
//names. Once found it binds the checkbox to the found flagger element
function POPULATEFLAGS(parent, cName)
{
var rR = Math.floor((Math.random()*100)+1);
var iterator = 0;
var tempID;
if(parent == "")
{
$("."+cName).each(function()
	{ 
	tempID = $(this).attr("id");
	$("<input type='checkbox' name='xxxx' id = '"+  cName+ rR + iterator +"' class = 'checkBox "+ cName+  "CLASS'> ").insertAfter($(this)); //hashing the class to avoid potential conflicts
	
	//$(this).css({"position": "relative", "left" : $(this).css("left") + 10+"px"}); <- todo add css styling to checkboxes.
	if(tempID == null) alert("ERROR: You forgot to add ID for populationFlags" );
	bindTwo(tempID, ""+cName+ rR + iterator+"");
	
	
	iterator++;});
	
}
else
{
//if we specify a parent... not needed implementation right now
}



// todo add some css styling for these checkboxes.....


}

function bindTwo(original ,checkBox)
{

$("#"+original).attr("flagMakerFlag", "false");
;
$("#"+checkBox).on('change',
function()
{ 
if($("#"+original).attr("flagMakerFlag") == "false") 
	$("#"+original).attr("flagMakerFlag", "true");
else
	$("#"+original).attr("flagMakerFlag", "false");
});
}


function canBeUsed(stringValue)
{
return ($("#"+stringValue).attr("flagMakerFlag") == "true");
}