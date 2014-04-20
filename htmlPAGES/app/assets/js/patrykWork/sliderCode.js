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
	  MAX = Number(MAX); //stupid error stuff...
	  MIN = Number(MIN);
	  //end of setting all wrapper values
	  
	  //bind slider to text
	$('#'+SLIDER).on('change', function()
		{
		$('#'+TEXT).val($('#'+SLIDER).val());
		sendData(SLIDER);
		});



	//function for when you enter datat to change 
var textFunc = function()
	{
		
		 if($(this).val() == '') //incase you enter/blur with no entries
		 	$(this).val(0); $('#'+SLIDER).val($('#'+TEXT).val()); 	
		
		if($(this).val() > MAX) // exceed highest val
		{
			$(this).val(MAX);
		}
		if($(this).val() < MIN) //exceed lowest val
		$(this).val(MIN); 
		
		$('#'+SLIDER).val($('#'+TEXT).val());
		
		
		globalFlag = SLIDER;
		$(".sliderFlag").trigger('change'); //updates sliders in case you exceeded max.
		globalFlag = "";
		//sendData(SLIDER);
	}	
	
$('#'+TEXT).on('blur', textFunc);	
$("#" + TEXT).enterKey(textFunc); //plugin script
	



return { slider : SLIDER, text : TEXT};
	// slider code
	
	}
	
var globalFlag = "";
	
function globalCondition(stringN)
{
return (globalFlag == "") ? true : globalFlag == stringN;
}
	
//used as a lookup for any entries you might add..
function sendData(sliderName)
{
	 updateItem(sliderName, Number($("#"+sliderName).val()));
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
		if($(this).attr('id') == MIN["slider"]  && $(this).val() >= $(maxSlider).val()  && globalCondition($(this).attr('id')))
		{
			
			$(maxSlider).val(Number($(this).val()) + Number($(this).attr('step')));
			$(maxSlider).trigger('change');
			
		}
		else
			if($(this).attr('id') == MAX["slider"]  && $(this).val() <= $(minSlider).val()  && globalCondition($(this).attr('id')))
		{
			$(minSlider).val(Number($(this).val()) - Number($(this).attr('step')));
			$(minSlider).trigger('change');
			
		}
				
	});
	

}	
	
	

$.fn.enterKey = function (fnc) {
    return this.each(function () {
        $(this).keypress(function (ev) {
            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
            if (keycode == '13') {
                fnc.call(this, ev);
            }
        })
    })
}
