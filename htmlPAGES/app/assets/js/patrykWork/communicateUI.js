// Interface and initializer for UI elements and other js functions | Patryk Poborca

var dataParams = {};
var globalSort = false;
var xxxx = 770;
var yyyy = 100;

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

	//initialization...
	//$('#superDiv').on('change', chartFunc());
	//chartFunc(); // eric's chart function
	
	initInteractiveTable(); // fill overview table
	$("#chart_div").hide(); //for king div
	$("#genTable").hide(); //for king div
	//repopulate("filterCEChoices", "characters", 10, false); //populates a drop down
	// hiding stuff... moving stuff around...
	initAnimations(); //initaites toggle/animation behaviours
	initDropDowns();
	p_initInterp("ScopeChoice", "filterBy", "queryParser", "hhh");
	//p_Directors();1
	top10VAChart(1);
	

}


function directionMath(element)
{
	var y = cutPx($("#" + element).css('top'));
	var x = cutPx($("#" + element).css('left'));
	
	return {
	directx : (x < 640) ? "left" : "right",
	directy : (y < 360) ? "top" : "bottom"
	};
}


function flipFlagsUi()
{
for(var z =0 ; z < animationQ.length; z++)
	animationQ[z]["status"] = !animationQ[z]["status"];		
}
	
//place dylans table stuff here!
function initInteractiveTable()
{
	var charList = [];
	//input only 20 characters for now. this can be changed later to take in an array holding characters.
	for(var i = 0; i < 10; i++){
		charList.push( allCharByAppearAmt[i]  );
}





	fillOverviewTable('overviewTable', charList, true);
	//findCharactersInGivenSeasonAndPopulateInteractiveTable('overviewTable', 1);


}






//Animation/Toggle related stuff

function initAnimations()
{
$("#sortButton").toggle(
	function()
	{
		globalSort = true;
		$("#sortButton").text("SortNum");
		
		repopulate("ScopeChoice",  $("#ScopeChoice").find(":selected").attr('current'), 0, false);
		repopulate("filterBy",  $("#filterBy").find(":selected").attr('current'), 0, false);
		//visualWrapper();
	},
	function()
	{
		globalSort = false;
		repopulate("ScopeChoice",  $("#ScopeChoice").find(":selected").attr('current'), 0, false);
		repopulate("filterBy",  $("#filterBy").find(":selected").attr('current'), 0, false);
		$("#sortButton").text("SortAlpha");
		
		
	});
	
	
	
	$("#expandSelectors").hide();	
	//animation stuff
	animationQ[0] = { name : "superDiv", status : true};//showing by default.
	animationQ.push({name : "chart_div", status : false}); //hidden
	animationQ.push({name : "genTable", status : false}); //hidden
	
	//////////////////////////////////////////////////////////////////
	$(".cornerDivs").hover(
	function()
	{
		
		$(this).animate({
		opacity : 1}
		, 1000);
	}
	,
	function()
	{
		$(this).animate({
		opacity : 0}
		, 1000);
	});
	
	var intervalVal = setInterval(function()
	{
			$(".cornerDivs").each(
			function()
			{
				$(this).animate({
			opacity : 1}
			, 2000,
				function()
				{
					$(this).animate({
					opacity : 0}
					, 1000);
				}
			
			);
		});
	
	},
	8000);
	
	setTimeout(function(){clearInterval(intervalVal);}, 30000);
	
	///////////////////////////////////////////////////////////////// TOGGLER  /////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////// TOGGLER  /////////////////////////////////////////////////////////////////
	
	
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
	
	
	
	///////////////////////////////////////////////////////////////// TOGGLER  /////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////// TOGGLER  /////////////////////////////////////////////////////////////////
	var hiderFunc = function()
	 {
										var direct = directionMath("sideBar");
		 var xx = direct["directx"];
		 var yy = direct["directy"];
		 console.log(xx + " " + yy);
		  $("#sideBar").animate({width : "0px", height : "0px", xx : "0px",  yy : "0px"},1180, function(){$("#sideBar").hide();});
		  $("#sideBar *").each(function(){$(this).hide();});
		  
		 $("#expandSelectors").slideUp();
		 $("#expandSliders").text("Show Sliders");
		 //end of other stuff
	 	 
	 };
	 
	 var showerFunc = function()
	 {
	 $("#sideBar").show();
	 $("#sideBar").animate({width : "270px", top: "100px", left : "500px", height : "200px"},500, 
		 function(){ 
		  $("#sideBar").animate({height : "500px"}, 500, 
			function(){
			 $("#sideBar *").each(function(){if($(this).attr('id') != "expandSelectors")$(this).show();});
			 });
		 });
	  
	  $("#sideBar").show();
	 
	
	 };
	
	/// hide stuff
	$("#hide").on('click', hiderFunc);
	
	///
	
	$(".cornerDivs").on('click', 
	function()
	{
	if($("#sideBar").is(":visible"))
		hiderFunc();
	else
		showerFunc();
	});
///////////////////////////////////////////////////////////////// TOGGLER  /////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////// TOGGLER  /////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////// TOGGLER  /////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////// TOGGLER  /////////////////////////////////////////////////////////////////	
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
///////////////////////////////////////////////////////////////// TOGGLER  /////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////// TOGGLER  /////////////////////////////////////////////////////////////////	

}


function initJqueryUi()
{
	$(".draggingClass").each(function(){$(this).draggable();});
	
}