// Min/Max slider, not dynamic adjustments, saves data upon pressing form's button Patryk Poborca

//wrapper for this assignment
function InitSlider(SLIDER, TEXT) { return initSlider(SLIDER, TEXT, $("#"+SLIDER).attr("min"), $("#"+SLIDER).attr("max"), $("#"+SLIDER).attr("step"));}

// *************************

//set's min/max of slider
	function initSlider(SLIDER, TEXT, MIN, MAX, STEP){
	 
	 if(MAX == MIN){ MIN = MAX - STEP; console.log("Error catch: initslider max == min");}  // error catch, can't have both equal to each other!!! 
	 
	 $("#"+SLIDER).attr("min", MIN); 
	 $("#"+SLIDER).attr("max", MAX);
	  $("#"+SLIDER).attr("step", STEP);
	$('#'+SLIDER).on('change', function()
		{
		$('#'+TEXT).val($('#'+SLIDER).val());
		
		});

$('#'+TEXT).on('keyup', function()
	{
		if($(this).val() > MAX)
		$(this).val(MAX);

		if($(this).val() < MIN)
		$(this).val(MIN);
		
		$('#'+SLIDER).val($('#'+TEXT).val());
	});

	

$('#'+TEXT).blur(
function() { if($(this).val() == '') $(this).val(0); $('#'+SLIDER).val($('#'+TEXT).val()); }); // updates both fields to min's min on loss of focus and 0 field.

return { slider : SLIDER, text : TEXT};
	// slider code
	
	}
	
function swapBoolDelay()
{

}
var mutexLock = false;	
// Binds the click action of a BUTTON html object to updating the values of the sliders into UICOM
function bindSliders(MIN, MAX, BUTTON)
{
	
	if($('#'+MIN["slider"]).attr("step") != $('#'+MAX["slider"]).attr("step")) 
		{ $('#'+MIN["slider"]).attr("step", $('#'+MIN["slider"]).attr("step")); console.log("Error catch : bindsliders(min, max) Step != Step2");}//error
	
	
	var mSlider = "#" + MIN['slider'];
	var maxSlider = "#" + MAX['slider'];
	
	$(mSlider).on('change', 
function()
{	
	
	if($(this).val() >= $(mSlider).val() && !mutexLock)
	{$(maxSlider).val($(this).val() + $(this).attr('step'));
	mutexLock = true;}
});	


$(maxSlider).on('change', 
setTimeout(function()
{
	
	if($(this).val() <= $(mSlider).val() && !mutexLock)
	{
	$(mSlider).val($(this).val() - $(this).attr('step'));
	mutexLock = true;}
}, 1));	
	
	
/*		
	$("#"+BUTTON).on('click', function()
	{
		updateItem(MIN["slider"], $('#'+MIN["slider"]).val());
		updateItem(MAX["slider"], $('#'+MAX["slider"]).val());
		if($('#'+MIN["slider"]).val() >= $('#'+MAX["slider"]).val())
			{$('#'+MIN["slider"]).val($('#'+MAX["slider"]).val() - $('#'+MIN["slider"]).attr("step"));
			$('#'+MIN["text"]).val($('#'+MAX["slider"]).val() - $('#'+MIN["slider"]).attr("step"));
			alert("Remember min slider has to be < max slider");
			}
			
	});*/
}	
	

