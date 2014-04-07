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

var charaArray = new Array();
var seasonArray = new Array();

$().ready(function () {
	var chart = new CanvasJS.Chart("chart_div", {
		theme: "theme3",
		title: {
			text: "The Simpsons"
		},
		legend: {
			fontFamily: "sans-serif"
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
				dataPoints: [
					{label: "Season 1", y: getEpi("Bart")},
					{label: "Season 2", y: 15},
					{label: "Season 3", y: getEpi("Lisa")},
					{label: "Season 4", y: 20},
				]
			}, 
			{
				name: "Lisa",
				type: "column",
				legendText: "Lisa",
				showInLegend: true,
				dataPoints: [
					{label: "Season 1", y: 1},
					{label: "Season 2", y: 15},
					{label: "Season 3", y: getEpi()},
					{label: "Season 4", y: 20},
				]
			}, 
		],
	});
	//console.log(chart.options.data);
	chart.render();
});

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
			values["color"] = "#9ACD32";
		}
		data.push(values);
	}
	//console.log(data);
	return data;
}

function createChart() {
	//console.log(generateData());
	var chart = new CanvasJS.Chart("chart_div", {
		theme: "theme3",
		legend: {
			fontFamily: "sans-serif"
		},
		creditText: "",
		toolTip: {
			shared: true
		},
		data: generateData(),
	});
	chart.render();
}



function getValue(sel) {
	if(sel.id == "Seasons") {
		seasonArray = $(sel).val();
	} else if (sel.id == "Characters") {
		charaArray = $(sel).val();
	}
	if(seasonArray.length >= 1 && charaArray.length >= 1) {
		createChart();
	}
	//console.log(theValue);
	//createChart(theValue);
}