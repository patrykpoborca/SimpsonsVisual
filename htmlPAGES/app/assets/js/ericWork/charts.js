/*google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
var data = google.visualization.arrayToDataTable([
['Year', 'Sales', 'Expenses'],
['2004', 1000, 400],
['2005', 1170, 460],
['2006', 660, 1120],
['2007', 1030, 540]
]);

var options = {
title: 'Company Performance',
hAxis: {title: 'Year', titleTextStyle: {color: 'red'}}
};

var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
chart.draw(data, options);
var handler = function(e) {
var parts = e.targetID.split('#');
if (parts.indexOf('label') >= 0) {
var idx = parts[parts.indexOf('label') + 1];
alert(data.getValue(0, parseInt(idx)));
}
};
google.visualization.events.addListener(chart, 'click', handler);
}*/

/*
============================================================================================

Note: I set the chart's background to the Simpson's yellow. If you guys think it doesn't look good. Just delete/comment out
line 48 (backgroundColor: " ";)

============================================================================================
*/

var charaArray = new Array();
var seasonArray = new Array();

console.log(allEpisodesByNumber);

//fillArrayAllCharByAppearAmt();
//fillAllEpsArray();
generateSortedSeasons();

function chartFunc() {
	var chart = new CanvasJS.Chart("chart_div", {
		backgroundColor: "#FFD90F",
		theme: "theme3",
		title: {
			text: "The Simpsons",
			fontSize: 30
		},
		axisX: {
			title: "Seasons",
			titleFontColor: "black",
			labelAutoFit: true,
			labelFontSize: 20,
			labelFontColor: "black",
			interval: 1,
			margin: 0,
			gridColor: "gray",
			tickColor: "gray"
		},
		axisY: {
			title: "Appearances of Characters",
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
			//itemclick: function
		},
		creditText: "",
		toolTip: {
			shared: true,
		},
		data: [
			{
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
}

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
}

function generateData() {
	var data = [];
	for(var i = 0; i < charaArray.length; i++) {
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
}

function createSeasonChart() {
	//console.log(generateData());
	var chart = new CanvasJS.Chart("chart_div", {
		theme: "theme3",
		title: {
			text: "Appearance by Season",
			fontSize: 30
		},
		axisX: {
			title: "Seasons",
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
			// A function call to switch to a more focused chart. Which will show all the episode in the seasons and show if the characters showed up in the episode
			//itemclick: function
		},
		creditText: "",
		toolTip: {
			shared: true
		},
		data: generateData(),
	});
	chart.render();
}

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
}

function destroyChart() {
	$("#chart_div").html("");
}

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