// Interface and initializer for UI elements and other js functions | Patryk Poborca

var dataParams = {};

//used to update values AND initialize on load
function updateItem(name, param)
{
dataParams[name] = param;
}

function getElement(name)
{
return dataParams[name];
}

function debugLogCom()
{
	for(var x in dataParams)
	{
		console.log(x + " = " + dataParams[x]);
	}
}



// custom function methods for initiation
function initUI()
{
	// hiding stuff... moving stuff around...
	$("#expandSelectors").hide();	
	//
	$("#toggler").toggle(  // to toggle the nav bar
	 function()
	 {
	 //$("#sideBar").slideUp(500);
	  $("#sideBar").animate({width : "0px", height : "0px"},1180, function(){$("#sideBar").hide();});
	  $("#sideBar *").each(function(){$(this).hide();});
	  
	 $("#chart_div").animate({left:"50px"}, 1000);
	 $("#expandSelectors").slideUp();
	 $("#expandSliders").text("Show Sliders");
	 $(this).animate({width : "50px"}, 1000);
	 }
	 ,
	 function()
	 {
	 $("#sideBar").show();
	 $("#sideBar").animate({width : "250px"},500, 
		 function(){ 
		  $("#sideBar").animate({height : "500px"}, 500, 
			function(){
			 $("#sideBar *").each(function(){$(this).show();});
			 });
		 });
	  
	 
	 $(this).animate({width : "250px"});
	  $("#chart_div").animate({left:"255px"});
	  $("#sideBar").slideDown();
	 }
	 ); // end of nav bar toggle

	$("#expandSliders").toggle(
	function()
	{
	$("#expandSliders").text("Hide Sliders");
	$("#expandSelectors").slideDown();
	
	},
	function()
	{
		$("#expandSliders").text("Show Sliders");
		$("#expandSelectors").slideUp();	
	}
	);
}