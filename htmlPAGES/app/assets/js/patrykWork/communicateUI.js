// Interface and initializer for UI elements and other js functions | Patryk Poborca

var dataParams = {};

//used to update values AND initialize on load
function updateItem(name, param)
{
//console.log(name + " == " + param);	
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

var animationQ = [];

// custom function methods for initiation
function initUI()
{

	//animation stuff
	animationQ[0] = { name : "superDiv", status : true};//showing by default.
	animationQ.push({name : "chart_div", status : false}); //hidden
	animationQ.push({name : "genTable", status : false}); //hidden
	$("#genTable").toggle(function(){
	$(this).empty();
	var HOLD = wrapForTable(p_charBySeason());
	initTable(HOLD.length, HOLD[0].length, "genTable", HOLD, true, false); // rows, columns, divID, data, display 
	HOLD = [];
	}
	,
	function()
	{
	$(this).empty();
	var HOLD = wrapForTable(p_charBySeason());
	initTable(HOLD.length, HOLD[0].length, "genTable", HOLD, false, false); // rows, columns, divID, data, display 
	HOLD = [];
	}	
	);
	
	//initialization...
	$('#superDiv').on('change', chartFunc());
	fillArrayAllCharByAppearAmt();
	fillAllEpsArray();
	chartFunc();
	$("#chart_div").hide(); //for king div
	$("#genTable").hide(); //for king div
	
	// hiding stuff... moving stuff around...
	$("#expandSelectors").hide();	
	//
	$("#toggler").toggle(  // to toggle the nav bar
	 function()
	 {
	  $("#sideBar").animate({width : "0px", height : "0px"},1180, function(){$("#sideBar").hide();});
	  $("#sideBar *").each(function(){$(this).hide();});
	 $("#expandSelectors").slideUp();
	 $("#expandSliders").text("Show Sliders");
	 $(this).animate({width : "50px"}, 1000);
	 //end of other stuff
	 for(var z =0 ; z < animationQ.length; z++)
	 	{var x = animationQ[z];
		if(x["status"])
			$("#" + x['name']).animate({left:"50px"}, 1000);
			}
	
	 
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
	  
	 
	 $(this).animate({width : "255px"});
	  $("#sideBar").slideDown();
	   for(var z =0 ; z < animationQ.length; z++)
	 	{var x = animationQ[z];
		if(x["status"])
			$("#" + x['name']).animate({left:"255px"}, 1000);
			}
	  
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
	
	$("#sendData").toggle(
	function()
	{
	$("#superDiv").hide();
	$("#chart_div").show();
	console.log($("#chart_div").css('width'));
	$("#genTable").show();
	flipFlagsUi();
	}
	,
	function()
	{
	$("#superDiv").show();
	$("#chart_div").hide();
	$("#genTable").hide();
	flipFlagsUi();
	});
	
	
}


function flipFlagsUi()
{
for(var z =0 ; z < animationQ.length; z++)
	animationQ[z]["status"] = !animationQ[z]["status"];		
}
		

