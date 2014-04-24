/*
============================================================================================

Note: I set the chart's background to the Simpson's yellow. If you guys think it doesn't look good. Just delete/comment out
line 48 (backgroundColor: " ";)

============================================================================================
*/

var charaArray = new Array();
var seasonArray = new Array();



//fillArrayAllCharByAppearAmt();
//fillAllEpsArray();
generateSortedSeasons();

$().ready(function() {
	 top10VAAppearanceChart(0)
});

function chartFunc2(inArray) {
	if(inArray[0].length < 100) {
		var chart = new CanvasJS.Chart("chart_div", {
			backgroundColor: "beige",
			width: 1280,
			theme: "theme3",
			title: {
				text: "The Simpsons",
				fontSize: 30
			},
			axisX: {
				title: "Seasons",
				titleFontColor: "black",
				titleFontSize: 20,
				labelAutoFit: true,
				labelFontSize: 16,
				labelFontColor: "black",
				interval: 1,
				margin: 0,
				gridColor: "gray",
				tickColor: "gray"
			},
			axisY: {
				title: "Appearances of Characters",
				titleFontSize: 18,
				titleFontColor: "black",
				labelFontColor: "black",
				labelFontSize: 16,
				interval: 2,
				gridColor: "gray",
				tickColor: "gray"
			},
			legend: {
				fontFamily: "sans-serif",
				fontSize: 16,
				verticalAlign: "bottom",
				horizontalAlign: "center",
				cursor: "pointer",
				itemclick: function(e) {
					$("#superDiv").show();
					$("#chart_div").hide();
					$("#genTable").hide();
					givenACharacterNameFilloutTheView('superDiv', e.dataSeries.name);
				},
			},
			creditText: "",
			toolTip: {
				shared: true,
				//content: "{label} <br> {name}: {y}",
			},
			data: getTheValue(inArray),
		});
		//console.log(chart.options.data);
		//console.log(allEpisodesByNumber);
		chart.render();
	}
}

function getTheValue(theArray) {
				var data = [];
				for(var i = 1; i < theArray.length; i++) {
					var points = [];
					for(var j = 2; j < theArray[i].length; j++) {
						if(theArray[i][j] == true) {
							points.push({label: theArray[0][j], y: 1});
						} else {
							points.push({label: theArray[0][j], y: 0});
						}
					}
					var values = { 
						name: theArray[i][0], 
						type: "column",
						legendText: theArray[i][0],
						showInLegend: true,
						//color: "#0F6F9D",
						dataPoints: points,
					}
					data.push(values);
				}
				console.log(data);
				return data;
			}

function chartFunc() {
	var chart = new CanvasJS.Chart("chart_div", {
		backgroundColor: "beige",
		theme: "theme3",
		title: {
			text: "The Simpsons",
			fontSize: 30
		},
		axisX: {
			title: "Seasons",
			titleFontColor: "black",
			titleFontSize: 20,
			labelAutoFit: true,
			labelFontSize: 16,
			labelFontColor: "black",
			interval: 1,
			margin: 0,
			gridColor: "gray",
			tickColor: "gray"
		},
		axisY: {
			title: "Appearances of Characters",
			titleFontSize: 18,
			titleFontColor: "black",
			labelFontColor: "black",
			labelFontSize: 16,
			interval: 2,
			gridColor: "gray",
			tickColor: "gray"
		},
		legend: {
			fontFamily: "sans-serif",
			fontSize: 16,
			verticalAlign: "bottom",
			horizontalAlign: "center",
			cursor: "pointer",
			itemclick: function(e) {
				$("#superDiv").show();
				$("#chart_div").hide();
				$("#genTable").hide();
				givenACharacterNameFilloutTheView('superDiv', e.dataSeries.name);
			},
		},
		creditText: "",
		toolTip: {
			shared: true,
			//content: "{label} <br> {name}: {y}",
		},
		data: [
			{
				click: function(e) {
					console.log(e.dataPoint.label + " " + e.dataPoint.y);
				},
				cursor: "pointer",
				name: "Homer Simpson",
				type: "column",
				legendText: "Homer Simpson",
				showInLegend: true,
				/*indexLabel: "{y}",
				indexLabelPlacement: "outside",
				indexLabelOrientation: "horizontal",
				indexLabelFontColor: "black",
				indexLabelFontSize: 10,*/
				dataPoints: [
					{label: "Season 1", y:13},
					{label: "Season 2", y:22},
					{label: "Season 3", y:24},
					{label: "Season 4", y:22},
					{label: "Season 5", y:22},
					{label: "Season 6", y:25},
					{label: "Season 7", y:25},
					{label: "Season 8", y:25},
					{label: "Season 9", y:25},
					{label: "Season 10", y:23},
					{label: "Season 11", y:22},
					{label: "Season 12", y:21},
					{label: "Season 13", y:22},
					{label: "Season 14", y:22},
					{label: "Season 15", y:22},
					{label: "Season 16", y:21},
					{label: "Season 17", y:22},
					{label: "Season 18", y:22},
					{label: "Season 19", y:20},
					{label: "Season 20", y:21},
					{label: "Season 21", y:23},
					{label: "Season 22", y:22},
					{label: "Season 23", y:22},
					{label: "Season 24", y:22},
					{label: "Season 25", y:11},
				]
			},
			{
				click: function(e) {
					console.log(e.dataPoint.label + " " + e.dataPoint.y);
				},
				cursor: "pointer",
				name: "Marge Simpson",
				type: "column",
				legendText: "Marge Simpson",
				showInLegend: true,
				/*indexLabel: "{y}",
				indexLabelPlacement: "outside",
				indexLabelOrientation: "horizontal",
				indexLabelFontColor: "black",
				indexLabelFontSize: 10,*/
				dataPoints: generateDefaultData("Marge Simpson")
			},
			{
				click: function(e) {
					console.log(e.dataPoint.label + " " + e.dataPoint.y);
				},
				cursor: "pointer",
				name: "Bart Simpson",
				type: "column",
				legendText: "Bart Simpson",
				showInLegend: true,
				/*indexLabel: "{y}",
				indexLabelPlacement: "outside",
				indexLabelOrientation: "horizontal",
				indexLabelFontColor: "black",
				indexLabelFontSize: 10,*/
				dataPoints: generateDefaultData("Bart Simpson")
			},
			{
				click: function(e) {
					console.log(e.dataPoint.label + " " + e.dataPoint.y);
				},
				cursor: "pointer",
				name: "Lisa Simpson",
				type: "column",
				legendText: "Lisa Simpson",
				showInLegend: true,
				/*indexLabel: "{y}",
				indexLabelPlacement: "outside",
				indexLabelOrientation: "horizontal",
				indexLabelFontColor: "black",
				indexLabelFontSize: 10,*/
				dataPoints: generateDefaultData("Lisa Simpson")
			},
			{
				click: function(e) {
					console.log(e.dataPoint.label + " " + e.dataPoint.y);
				},
				cursor: "pointer",
				color: "#0F6F9D",
				name: "Maggie Simpson",
				type: "column",
				legendText: "Maggie Simpson",
				showInLegend: true,
				/*indexLabel: "{y}",
				indexLabelPlacement: "outside",
				indexLabelOrientation: "horizontal",
				indexLabelFontColor: "black",
				indexLabelFontSize: 10,*/
				dataPoints: generateDefaultData("Maggie Simpson")
			}
		],
	});
	//console.log(chart.options.data);
	//console.log(allEpisodesByNumber);
	chart.render();
} //End of chartFunc

//===========================================================================================================

// Generating a new chart showing the top 5 characters.
function updatingChartFunc(groupNum) {
	var groupNumber = groupNum;
	var chart = new CanvasJS.Chart("chart_div", {
		backgroundColor: "beige",
		theme: "theme3",
		title: {
			text: "The Simpsons",
			fontSize: 30
		},
		axisX: {
			title: "Seasons",
			titleFontColor: "black",
			titleFontSize: 20,
			labelAutoFit: true,
			labelFontSize: 16,
			labelFontColor: "black",
			interval: 1,
			margin: 0,
			gridColor: "gray",
			tickColor: "gray"
		},
		axisY: {
			title: "Appearances of Characters",
			titleFontSize: 18,
			titleFontColor: "black",
			labelFontColor: "black",
			labelFontSize: 16,
			interval: 2,
			gridColor: "gray",
			tickColor: "gray"
		},
		legend: {
			fontFamily: "sans-serif",
			fontSize: 18,
			verticalAlign: "bottom",
			horizontalAlign: "center",
			cursor: "pointer",
			itemclick: function(e) {
				$("#superDiv").show();
				$("#chart_div").hide();
				$("#genTable").hide();
				givenACharacterNameFilloutTheView('superDiv', e.dataSeries.name);
			},
		},
		creditText: "",
		toolTip: {
			shared: true,
			//content: "{label} <br> {name}: {y}",
		},
		data: generateDynamic(groupNum),
	});
	//console.log(generateDynamic(1));
	//console.log(chart.options.data);
	//console.log(allEpisodesByNumber);
	chart.render();
	var group = 4;
	var group2 = 0;
	var groupNumber2 = 0;
	var updateInterval = 300;
	
	// Add new character to chart based on their
	// index in Dylan's file
	var updateChart = function() {
		if(group != allCharByAppearAmt.length-1) {
			if(group < 4) {
				group = 4;
			}
			group++;
			groupNumber = group;
			group2 = group-4;
		}
		chart.options.data.push(appendToDynamic(group)[0]);
		if(chart.options.data.length > 5) {
			chart.options.data.shift();
			chart.options.data[0].color = "#369EAD";
			chart.options.data[1].color = "#C24642"
			chart.options.data[2].color = "#7F6084"
			chart.options.data[3].color = "#86B402"
			chart.options.data[4].color = "#0F6F9D"
		}
		//console.log(chart.options.data)
		
		chart.render();
		//clearInterval(interval);
	}
	
	// Adds the next 5 characters to the chart
	// Based on Dylan's file
	var updateGroup = function() {
		//if(groupNumber != (groupNumber / 5 + 5/(groupNumber % 5))) {
		if(groupNumber != allCharByAppearAmt.length) {	
			groupNumber = group+1;
			//console.log(groupNumber);
			group = groupNumber+4;
			//console.log(groupNumber);
			group2 = group-4;
		}
		//console.log(groupNumber)
		chart.options.data = generateDynamic(groupNumber);
		if(chart.options.data.length > 4) {
			chart.options.data[0].color = "#369EAD";
			chart.options.data[1].color = "#C24642"
			chart.options.data[2].color = "#7F6084"
			chart.options.data[3].color = "#86B402"
			chart.options.data[4].color = "#0F6F9D"
		}
		//console.log(chart.options.data);
		chart.render();
	}

	// Returns/shows the previous 5 characters on the chart
	// Based on Dylan's file
	var updateGroupM = function() {
		groupNumber2 = group2-5;
		if(groupNumber2 < 0) {
			groupNumber2 = 0;
		}
		group = groupNumber2+4;
		group2 = groupNumber2;
		if(group < 0) {
			group = 4;
		}
		chart.options.data = generateDynamic(groupNumber2);
		if(chart.options.data.length > 4) {
			chart.options.data[0].color = "#369EAD";
			chart.options.data[1].color = "#C24642"
			chart.options.data[2].color = "#7F6084"
			chart.options.data[3].color = "#86B402"
			chart.options.data[4].color = "#0F6F9D"
		}
		chart.render();
		//clearInterval(interval);
	}
	
	// Returns the character that was removed from the chart
	// Based on Dylan's files.  Ex. Choose updateChart,
	// Homer is gone. Choose updateChartM, Homer is in the
	// front of the chart.
	var updateChartM = function() {
		group2--;
		group = group2 + 4;
		groupNumber = group;
		console.log(groupNumber);
		if(group < 4) {
			group = 4;
		} 
		if(groupNumber < 0) {
			groupNumber = 0;
		}
		chart.options.data.unshift(appendToDynamic(group2)[0]);
		if(chart.options.data.length > 5) {
			chart.options.data.pop();
			chart.options.data[0].color = "#369EAD";
			chart.options.data[1].color = "#C24642"
			chart.options.data[2].color = "#7F6084"
			chart.options.data[3].color = "#86B402"
			chart.options.data[4].color = "#0F6F9D"
		}
		console.log(chart.options.data)
		
		chart.render();
		//clearInterval(interval);
	}
	
	$("#nextGroup").click(function () {
		updateGroup();
	});
	
	$("#lastGroup").click(function () {
		updateGroupM();
	});

	$("#next").click(function () {
		updateChart();
	});
	
	$("#last").click(function () {
		updateChartM();
	});		
	
	//var interval = setInterval(function() {updateChart()}, updateInterval);
	//top10VAChart(2);
} // End of updatingChartFunc()

//===========================================================================================================

// Displays the 10 VA in groups. Group 1, would be the 1st ten VA
// Group 2 would be the 11th to 20th VA.
function top10VAChart(group) {
	var dataArray = [];
	var vaArray = roleCountOfVA();
	for(var i = 10*(group-1); i < 10*group; i++) {
		dataArray.push(vaArray[0].dataPoints[i]);
	}
	//console.log(dataArray);
	var chart = new CanvasJS.Chart("chart_div", {
		backgroundColor: "#beige",
		//theme: "theme3",
		width: 1280,
		title: {
			text: "The Simpsons VA",
			fontSize: 30
		},
		axisX: {
			title: "Voice Actors",
			titleFontSize: 20,
			titleFontColor: "black",
			labelAutoFit: true,
			labelFontSize: 14.5,
			labelFontColor: "black",
			interval: 1,
			margin: 0,
			gridColor: "gray",
			tickColor: "gray"
		},
		axisY: {
			title: "Roles Played",
			titleFontSize: 20,
			titleFontColor: "black",
			labelFontColor: "black",
			gridColor: "gray",
			tickColor: "gray"
		},
		legend: {
			fontFamily: "sans-serif",
			verticalAlign: "bottom",
			horizontalAlign: "center",
			cursor: "pointer",
			itemclick: function(e) {
				$("#superDiv").show();
				$("#chart_div").hide();
				$("#genTable").hide();
				// If there is a method to call a specific VA
				//givenACharacterNameFilloutTheView('superDiv', e.dataSeries.name);
			},
		},
		creditText: "",
		data: [
			{
				type: "column",
				dataPoints: dataArray,
			}
		],
	});
	chart.render();
}  // End of top10VAChart

//===========================================================================================================

function top10VAAppearanceChart(group) {
	var groupNumber = group;
	//console.log(dataArray);
	var chart = new CanvasJS.Chart("chart_div", {
		backgroundColor: "beige",
		//theme: "theme3",
		width: 1198,
		title: {
			text: "The Simpsons VA",
			fontSize: 30
		},
		axisX: {
			title: "Voice Actors",
			titleFontSize: 20,
			titleFontColor: "black",
			labelAutoFit: true,
			labelFontSize: 14.5,
			labelFontColor: "black",
			interval: 1,
			margin: 0,
			gridColor: "gray",
			tickColor: "gray"
		},
		axisY: {
			title: "Appearances Per Episode",
			titleFontSize: 20,
			titleFontColor: "black",
			labelFontColor: "black",
			gridColor: "gray",
			tickColor: "gray"
		},
		legend: {
			fontFamily: "sans-serif",
			fontSize: 18,
			verticalAlign: "bottom",
			horizontalAlign: "center",
			cursor: "pointer",
			itemclick: function(e) {
				$("#superDiv").show();
				$("#chart_div").hide();
				$("#genTable").hide();
				// If there is a method to call a specific VA
				//givenACharacterNameFilloutTheView('superDiv', e.dataSeries.name);
			},
		},
		toolTip: {
			shared: true
		},
		creditText: "",
		data: appearanceCountOfVA(group),
	});
	chart.render();
	
	var group = 4;
	var group2 = 0;
	var groupNumber2 = 0;
	var updateInterval = 300;
	
	// Add new character to chart based on their
	// index in Dylan's file
	var updateChart = function() {
		if(group != allCharByAppearAmt.length-1) {
			if(group < 4) {
				group = 4;
			}
			group++;
			groupNumber = group;
			group2 = group-4;
		}
		chart.options.data.push(appearanceCountOfVA(group)[0]);
		if(chart.options.data.length > 5) {
			chart.options.data.shift();
		}
		console.log(chart.options.data)
		
		chart.render();
		//clearInterval(interval);
	}
	
	// Adds the next 5 characters to the chart
	// Based on Dylan's file
	var updateGroup = function() {
		//if(groupNumber != (groupNumber / 5 + 5/(groupNumber % 5))) {
		if(groupNumber != allCharByAppearAmt.length) {	
			groupNumber = group+1;
			//console.log(groupNumber);
			group = groupNumber+4;
			//console.log(groupNumber);
			group2 = group-4;
		}
		//console.log(groupNumber)
		chart.options.data = appearanceCountOfVA(groupNumber);
		//console.log(chart.options.data);
		chart.render();
	}

	// Returns/shows the previous 5 characters on the chart
	// Based on Dylan's file
	var updateGroupM = function() {
		groupNumber2 = group2-5;
		if(groupNumber2 < 0) {
			groupNumber2 = 0;
		}
		group = groupNumber2+4;
		group2 = groupNumber2;
		if(group < 0) {
			group = 4;
		}
		chart.options.data = appearanceCountOfVA(groupNumber2);
		chart.render();
		//clearInterval(interval);
	}
	
	// Returns the character that was removed from the chart
	// Based on Dylan's files.  Ex. Choose updateChart,
	// Homer is gone. Choose updateChartM, Homer is in the
	// front of the chart.
	var updateChartM = function() {
		group2--;
		group = group2 + 4;
		groupNumber = group;
		console.log(groupNumber);
		if(group < 4) {
			group = 4;
		} 
		if(groupNumber < 0) {
			groupNumber = 0;
		}
		chart.options.data.unshift(appearanceCountOfVA(group2)[0]);
		if(chart.options.data.length > 5) {
			chart.options.data.pop();
		}
		console.log(chart.options.data)
		
		chart.render();
		//clearInterval(interval);
	}
	
	$("#nextGroup").hide();
	$("#lastGroup").hide();
	$("#next").hide();
	$("#last").hide();
	
	$("#vNextGroup").click(function () {
		updateGroup();
	});
	
	$("#vLastGroup").click(function () {
		updateGroupM();
	});

	$("#vNext").click(function () {
		updateChart();
	});
	
	$("#vLast").click(function () {
		updateChartM();
	});	
} // End of top10VAAppearanceChart()

//===========================================================================================================

function roleCountOfVA() {
	var data = [];
	var points = [];
	for(var i = 0; i < voiceActorsByCharAmount.length; i++) {
		var va = {label: voiceActorsByCharAmount[i][0].toString(), y: voiceActorsByCharAmount[i][1].length};
		points.push(va);
	}
	var values = {
		type: "column",
		dataPoints: points,
	}
	data.push(values);
	console.log(data);	
	return data;
} // End of roleCountOfVA

//===========================================================================================================

function appearanceCountOfVA(groupNum) {
	var data = [];
	var groupNumber = groupNum;
	for(var i = 0; i < 5; i++) {
		var points = [];
		for(var j = 0; j < 10; j++) {
			var va = {
				label: j+1, 
				y: allVoiceActorsByAppearanceCount[groupNumber][2][j]
			};
			points.push(va);
			//console.log(points);
		}
		var values = {
			type: "column",
			name: allVoiceActorsByAppearanceCount[groupNumber][0],
			legendText: allVoiceActorsByAppearanceCount[groupNumber][0],
			showInLegend: true,
			dataPoints: points,
		}
		data.push(values);
		groupNumber++;
		//console.log(data);
	}
	console.log(data);	
	return data;
} // End of appearanceCountOfVA()


//===========================================================================================================

function generateDefaultData(name) {
	var points = [];
	var pattern = new RegExp("^"+name+"$");
	for(var i = 0; i < allCharByAppearAmt.length; i++) {
		var index = 0;
		var k = 0;
		var appearances = 0;
		if(allCharByAppearAmt[i][0].match(pattern)) {
			for(var j = 0; j < allCharByAppearAmt[i][7].length; j++) {
				if(allCharByAppearAmt[i][7][j] == true) {
					appearances++;
						k++;
						if(k == episodesSortedIntoSeasons[index][1].length) {
						//console.log(i);
						points.push({label: episodesSortedIntoSeasons[index][0].toString(), y: appearances});
						k = 0;
						index++;
						appearances = 0;
					}
				} else {
					k++;
					if(k == episodesSortedIntoSeasons[index][1].length) {
						//console.log(i);
						points.push({label: episodesSortedIntoSeasons[index][0].toString(), y: appearances});
						k = 0;
						if(index == episodesSortedIntoSeasons.length-1) {
							return points;
						}
						index++;
						appearances = 0;
					}
				}
			}
		}
	}
	return points;
} // End of generateDefaultData

//===========================================================================================================

// Creates a chart using groups of 5 character at a time, currently uses
// Dylan's numerically sorted files.
function generateDynamic(groupNum) {
	var dataAS = [];
	var groupNumber = groupNum;
	for(var i = 0; i < 5; i++) {
		var points = [];
		var index = 0;
		var k = 0;
		var appearances = 0;
		if(i == allCharByAppearAmt.length) {
			return dataAS;
		}
		for(var j = 0; j < allCharByAppearAmt[groupNumber][7].length; j++) {
			if(allCharByAppearAmt[groupNumber][7][j] == true) {
				appearances++;
				k++;
				if(k == episodesSortedIntoSeasons[index][1].length) {
					//console.log(i);
					points.push({label: episodesSortedIntoSeasons[index][0].toString(), y: appearances});
					k = 0;
					index++;
					appearances = 0;
				}
			} else {
				k++;
				if(k == episodesSortedIntoSeasons[index][1].length) {
					//console.log(i);
					points.push({label: episodesSortedIntoSeasons[index][0].toString(), y: appearances});
					k = 0;
					index++;
					appearances = 0;
				}
			}
		}
		//console.log(i + "=" + groupNumber);
		if(i == (groupNum+4)) {
			var values = { 
				name: allCharByAppearAmt[groupNumber][0], 
				type: "column",
				legendText: allCharByAppearAmt[groupNumber][0],
				showInLegend: true,
				color: "#0F6F9D",
				dataPoints: points,
			}
		} else {
			var values = {
				click: function(e) {
					console.log(e);
				},
				name: allCharByAppearAmt[groupNumber][0], 
				type: "column",
				legendText: allCharByAppearAmt[groupNumber][0],
				showInLegend: true,
				dataPoints: points,
			}
		}
		groupNumber++;
		dataAS.push(values);
		//console.log(groupNumber);
	}
	//console.log(dataAS);
	return dataAS;
} // End of generateDynamic

//===========================================================================================================

// Adds the next character to the chart and removes the first
// character from the chart
function appendToDynamic(charaIndex) {
	var dataAS = [];
	var points = [];
	var index = 0;
	var k = 0;
	var appearances = 0;
	for(var j = 0; j < allCharByAppearAmt[charaIndex][7].length; j++) {
		if(allCharByAppearAmt[charaIndex][7][j] == true) {
			appearances++;
			k++;
			if(k == episodesSortedIntoSeasons[index][1].length) {
				//console.log(i);
				points.push({label: episodesSortedIntoSeasons[index][0].toString(), y: appearances});
				k = 0;
				index++;
				appearances = 0;
			}
		} else {
			k++;
			if(k == episodesSortedIntoSeasons[index][1].length) {
				//console.log(i);
				points.push({label: episodesSortedIntoSeasons[index][0].toString(), y: appearances});
				k = 0;
				index++;
				appearances = 0;
			}
		}
	}
	var values = { 
		name: allCharByAppearAmt[charaIndex][0], 
		type: "column",
		legendText: allCharByAppearAmt[charaIndex][0],
		showInLegend: true,
		dataPoints: points,
	}
	
	dataAS.push(values);
	//console.log(dataAS);
	//console.log(dataAS);
	return dataAS;
} // End of appendToDynamic

//===========================================================================================================

function generate5CharaData(seasonNum, arrayOfChara) {
	var data = [];
	for(var i = 0; i < arrayOfChara.length; i++) {
		var points = [];
		for(var j = 0; j < seasonArray.length; j++) {
			var seasons = {label: seasonArray[j].toString(), y: 20}
			points.push(seasons);
		}
		var values = { 
			name: charaArray[i], 
			type: "column",
			legendText: charaArray[i],
			showInLegend: true,
			dataPoints: points,
		}
		if(charaArray.length == 1) {
			values["color"] = "#FFD90F";
		}
		data.push(values);
	}
	//console.log(data);
	return data;
} // End of generate5CharaData

//===========================================================================================================
//values["color"] = "#FFD90F";

function createSeasonChart(seasonNum) {
	//console.log(generateData());
	var chart = new CanvasJS.Chart("chart_div", {
		theme: "theme3",
		title: {
			text: "Appearance by Season",
			fontSize: 30
		},
		axisX: {
			title: "Season" + seasonNum,
			margin: 0
		},
		axisY: {
			title: "# of Appearances",
			titleFontSize: 20
		},
		legend: {
			fontFamily: "sans-serif",
			verticalAlign: "bottom",
			horizontalAlign: "center",
			cursor: "pointer",
			// A function call to switch to a more focused chart.  
			// Which will show all the episode in the seasons and show if the characters showed up in the episode
			//itemclick: function
		},
		creditText: "",
		toolTip: {
			shared: true
		},
		data: generateData(),
	});
	chart.render();
} // End of createSeasonChart()

//===========================================================================================================

// Get the number of appearances in a given season with a specific character name
function getEpisodeBySeason(charaName, seasonNum) {
	var numOfAppearances = 0;
	var episodeCount = 0;
	var index = 0;
	while(index != (seasonNum-1)) {
		for(var i = 0; i < episodesSortedIntoSeasons[index][1].length; i++) {
			episodeCount++;
			if(i == episodesSortedIntoSeasons[index][1].length - 1) {
				index++;
				i = -1;
				if(index == (seasonNum-1)) {
					break;
				}
			}
		}
	}
	
	for(var i = 0; i < allCharByAppearAmt.length; i++) {
		if(allCharByAppearAmt[i][0] == charaName) { 
			for(var j = 0; j < episodesSortedIntoSeasons[index][1].length; j++) {
				if(allCharByAppearAmt[i][7][episodeCount] == true) {
					numOfAppearances++;
				}
				episodeCount++;
			}
		}
	}
	return numOfAppearances;
} // End of getEpisodeBySeason

//===========================================================================================================

function destroyChart() {
	$("#chart_div").html("");
}

//===========================================================================================================

function getValue(sel) {
	//console.log(allEpisodesByNumber);
	//console.log(episodesSortedIntoSeasons);
	console.log(allCharByAppearAmt);
	if(sel.id == "Seasons") {
		seasonArray = $(sel).val();
	} else if (sel.id == "Characters") {
		charaArray = $(sel).val();
	}
	if(seasonArray.length >= 1 && charaArray.length >= 1) {
		createSeasonChart();
	}
	//console.log(theValue);
	//createChart(theValue);
}