/*google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
	var data = google.visualization.arrayToDataTable([
		['Year', 'Sales', 'Expenses'],
		['2004',  1000,      400],
		['2005',  1170,      460],
		['2006',  660,       1120],
		['2007',  1030,      540]
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

For the lines of code that you see y: some integer value, I was thinking that we need a method or something to count the
amount of appearances through that particular season.  In some of the entries, I wrote a generic method call getEpi that
returns a number for testing and it works fine.

Advice: Whoever wants to or if I do it after figuring out a way to access that data that I need.  The function to get the episode
count may need to take in the character name and the season for faster searching.

============================================================================================
*/

var charaArray = new Array();
var seasonArray = new Array();

fillArrayAllCharByAppearAmt();
fillAllEpsArray();
generateSortedSeasons();

$().ready(function () {
	var chart = new CanvasJS.Chart("chart_div", {
		theme: "theme3",
		title: {
			text: "The Simpsons",
			fontSize: 30
		},
		axisX: {
			title: "Seasons",
			margin: 0
		},
		axisY: {
			title: "Appearances of Characters",
			titleFontSize: 20
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
			shared: true
		},
		data: [
			{
				name: "Bart",
				type: "column",
				legendText: "Bart",
				showInLegend: true,
				dataPoints: generateDefaultData("Bart"),
			}
		],
	});
	//console.log(chart.options.data);
	chart.render();
});

function generateDefaultData(name) {
	var points = [];
	for(var i = 0; i < allCharByAppearAmt.length; i++) {
		if(allCharByAppearAmt[i][0].match(name)) {
			var index = 0;
			var k = 0;
			var appearances = 0;
			for(var j = 0; j < allCharByAppearAmt[i][7].length; j++) {
				if(allCharByAppearAmt[i][7][j] == episodesSortedIntoSeasons[index][1][k][0]) {
					appearances++;
					k++;
					if(k == episodesSortedIntoSeasons[index][1].length) {
						points.push({label: episodesSortedIntoSeasons[index][0].toString(), y: appearances});
						k = 0;
						index++;
						appearances = 0;
					}
				} else {
					k++;
					if(k == episodesSortedIntoSeasons[index][1].length) {
						points.push({label: episodesSortedIntoSeasons[index][0].toString(), y: appearances});
						k = 0;
						if(index > episodesSortedIntoSeasons.length) {
							return points;
						}
						index++;
						appearances = 0;
					}
					j--;
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
			// A function call to switch to a more focused chart.  Which will show all the episode in the seasons and show if the characters showed up in the episode
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

function getEpisodeBySeason(charaName, seasonNum) {
	/*
	var numOfAppearances = 0;
	for(var i = 0; i < someArray.length; i++) {
		if(someArray.name == charaName) {
			for(var j = 0; j < someArray2.length; j++) {
				for(var k = 0; k < someArray.name.seasonArray; k++) {
					if(someArray.name.seasonArray[k] == someArray2.seasonNum[j]) {
						numOfAppearances++;
					}
				}
			}
		}
	}
	return numOfAppearances;
	*/
}

function destroyChart() {
	$("#chart_div").html("");
}

function getValue(sel) {
	//console.log(allEpisodesByNumber);
	console.log(episodesSortedIntoSeasons);
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