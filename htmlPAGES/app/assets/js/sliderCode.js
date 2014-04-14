// Min/Max slider, added dynamic adjustments for min >= max... Patryk Poborca

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
	
//used as a lookup for any entries you might add..
function sendData()
{
	
}


// binds both sliders min/max to one another so they can't exceed the other. MAKE SURE SURE TO have max.max == min.max + step  and max.min -step = min.min....

	function bindSliders(MIN, MAX)
{
	 
	
	if($('#'+MIN["slider"]).attr("step") != $('#'+MAX["slider"]).attr("step")) 
		{ $('#'+MIN["slider"]).attr("step", $('#'+MIN["slider"]).attr("step")); console.log("Error catch : bindsliders(min, max) Step != Step2");}//error
	
	
	var minSlider = "#" + MIN['slider'];
	var maxSlider = "#" + MAX['slider'];
	
	//slider flag required for this to be used,,, class = "sliderFlag"
	$(".sliderFlag").on('change',
	function()
	{ 
		if($(this).attr('id') == MIN["slider"]  && $(this).val() >= $(maxSlider).val())
		{
			$(maxSlider).val(Number($(this).val()) + Number($(this).attr('step')));
			$(maxSlider).trigger('change');
		}
		else
			if($(this).attr('id') == MAX["slider"]  && $(this).val() <= $(minSlider).val())
		{			
			$(minSlider).val(Number($(this).val()) - Number($(this).attr('step')));
			$(minSlider).trigger('change');
		}
				
	});
	

}	
	

