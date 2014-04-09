

var dkGlobalOverviewTable = {};

dkGlobalOverviewTable.popupInfoPasser = "";



function tableClick() {
	console.log("Clicked on the table");
}


function fillOverviewTable() {

	var contents = "<table onmouseout='hideInfoBox()' onmousemove='showInfoBox()'>\n";

	contents += '<tr><th colspan="4"></th>';


	var lineContent = "";
	//var seasonCount = 30;
	//var epsPerSeason = 20;

	var seasonArray ;//= [4,5,3,5];
	//real:
	seasonArray =  [13, 22, 24, 22, 22, 25, 25,25, 25, 23, 22, 21, 22, 22, 22, 21, 22, 22, 20, 21, 23, 22, 22, 22, 18];

	var totaleps = 0;
	for(var i = 0; i < seasonArray.length; i++){
		totaleps += seasonArray[i];
	}




	//make one header tag per season.
	for(var i = 0; i < seasonArray.length; i++ ){
		lineContent += '<th colspan="' + seasonArray[i] + '">S' + (i+1) + "</th>\n"
	}
	contents += lineContent + "</tr>";

	/*
	contents +="<tr>";
	lineContent = '<tr><th colspan="4"></th>';
	//make eps listings
	for(var i = 1; i <= seasonCount * epsPerSeason; i++ ){
		lineContent += '<th>E ' + i + "</th>\n";
	}
	contents += lineContent + "</tr>";
	//contents += '<td>Lost</td>';
	*/

	var charList = [["Bart", [1,2,3,4,5,6,7,11,12,13,16]], ["Lisa", [2,3,4,5,7,8,9,10,11,12,13,14,15]], ["Homer",[1,2,3,4,5,6,7,8,9,10,11,12,13,14]] ];
	lineContent = "";



	var inTheEps;
	for(var i = 0; i < charList.length; i++){
		lineContent += '<tr><th class="name" colspan="4">' + charList[i][0] + '</th>\n';

		for(var e = 1; e <= totaleps; e++ ){

			inTheEps = false;
			for(var a = 0; a < charList[i][1].length; a++){
				if(charList[i][1][a] == e){
					inTheEps = true;
					break;
				}
			}

			if(inTheEps){ //this would be a check if char is in that eps.

				lineContent += '<td class="inThatEps" onmouseout="hideInfoBox()"'+
				'onmousemove="showInfoBox(\''+ charList[i][0] +'\',\'' + e +'\', true)"'+
				'onclick="showPopupControlBox(\''+ charList[i][0] +'\')"'+
				'></th>\n';
			}
			else{
				lineContent += '<td class="notInThatEps" onmouseout="hideInfoBox()"'+
				'onmousemove="showInfoBox(\''+ charList[i][0] +'\',\'' + e +'\', false)"'+
				'onclick="showPopupControlBox(\''+ charList[i][0] +'\')"'+
				'></th>\n';
			}
		}
		lineContent += "</tr>\n";
	}
	contents += lineContent;

	document.getElementById("overviewTable").innerHTML = contents;

}



function hideInfoBox() {

	document.getElementById("testArrayContents").style.top = 1500;
	document.getElementById("testArrayContents").style.left = 0;


}


function showInfoBox(iname, iepisode, inEps) {

	if(iname != null){
		var infoTextAsOne = "" + iname + "<br>Episode:" + iepisode;

		//console.log("Before the print:");
		//console.log("Inside of the show info:" + infoTextAsOne);

		document.getElementById("testArrayContents").innerHTML = infoTextAsOne;
		document.getElementById("testArrayContents").style.top = event.clientY - 30;
		document.getElementById("testArrayContents").style.left = event.clientX - 30;
		if(inEps){
			document.getElementById("testArrayContents").style.backgroundColor = '#278627';
		}
		else{
			document.getElementById("testArrayContents").style.backgroundColor = '#8A8A8A';
		}
	}
}



function hidePopupControlBox() {
	console.log("hide");
	document.getElementById("popupControlBox").style.top = 1500;
	document.getElementById("popupControlBox").style.left = 0;
}

function showPopupControlBox(iname) {


	if(iname != null){
		var infoTextAsOne = "Controls for:" + iname;
		infoTextAsOne += '<button onclick="hidePopupControlBox()">Hide</button>';

		//console.log("Before the print:");
		//console.log("Inside of the show info:" + infoTextAsOne);

		document.getElementById("popupControlBox").innerHTML = infoTextAsOne;
		document.getElementById("popupControlBox").style.top = event.clientY - 130;
		document.getElementById("popupControlBox").style.left = event.clientX - 130;
	}
}


