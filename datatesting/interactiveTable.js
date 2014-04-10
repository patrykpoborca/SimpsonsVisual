

var dkGlobalOverviewTable = {};

dkGlobalOverviewTable.popupInfoPasser = "";
dkGlobalOverviewTable.showIconInPopup = true;
dkGlobalOverviewTable.arrayOfEpisodesInSeasons =  [13, 22, 24, 22, 22, 25, 25,25, 25, 23, 22, 21, 22, 22, 22, 21, 22, 22, 20, 21, 23, 22, 22, 22, 18];


/*
List of functions so can search by name.
tableClick
fillOverviewTable
hideInfoBox
showInfoBox
hidePopupControlBox
showPopupControlBox
getEpsNumber
fetchImgUrlOfChar
toggleCharIconsOnPopup


*/


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

	var charList = [];

	for(var i = 0; i < 20; i++){
		charList.push( allCharByAppearAmt[i]  );
	}

	lineContent = "";



	var inTheEps;

	var inEpsArrayCheck = [];

	for(var i = 0; i < totaleps; i++){
		inEpsArrayCheck.push(false);
	}

	for(var i = 0; i < charList.length; i++){
		lineContent += '<tr><th class="name" colspan="4">' + charList[i][0] + '</th>\n';


		//set the eps possibilities to false
		for(var a = 0; a < totaleps; a++){
			inEpsArrayCheck[a] = false;
		}

		//fill out that array for the character.
		//chars [  name, full, first appear, alias, jobs, relatives, voice actors, episode appearances   ]

		for(var epc = 0; epc < charList[i][7].length;epc++){
			var tmpEpNum = getEpsNumber(charList[i][7][epc]);

			if(tmpEpNum > 0 && tmpEpNum <= totaleps){
				inEpsArrayCheck[tmpEpNum-1] = true;
			}
		}


		//for each of the possible episodes being shown.
		for(var e = 1; e <= totaleps; e++ ){


			if(inEpsArrayCheck[e -1]){ //this would be a check if char is in that eps.

				lineContent += '<td class="inThatEps" onmouseout="hideInfoBox()"'+
				'onmousemove="showInfoBox(\''+ charList[i][0] +'\',\'' + e +'\', true)"'+
				'onclick="showPopupControlBox(\''+ charList[i][0] +'\', '+e+',' + getSeasonOfEpisodeNumber(e)+' )"'+
				'></th>\n';
			}
			else{
				lineContent += '<td class="notInThatEps" onmouseout="hideInfoBox()"'+
				'onmousemove="showInfoBox(\''+ charList[i][0] +'\',\'' + e +'\', false)"'+
				'onclick="showPopupControlBox(\''+ charList[i][0] +'\', '+e+',' + getSeasonOfEpisodeNumber(e)+' )"'+
				'></th>\n';
			}
		}
		lineContent += "</tr>\n";
	}
	contents += lineContent;

	document.getElementById("overviewTable").innerHTML = contents;

}



function hideInfoBox() {

	document.getElementById("testArrayContents").style.top = 0;
	document.getElementById("testArrayContents").style.left = 0;

	document.getElementById("testArrayContents").innerHTML = "";

}


function showInfoBox(iname, iepisode, inEps) {

	if(iname != null){
		var infoTextAsOne = "" + iname + "<br>";
		//console.log("Before the print:");
		//console.log("Inside of the show info:" + infoTextAsOne);

		if(inEps){
			document.getElementById("testArrayContents").style.backgroundColor = '#278627';
			infoTextAsOne += "IS in ";
		}
		else{
			document.getElementById("testArrayContents").style.backgroundColor = '#8A8A8A';
			infoTextAsOne += "NOT in ";
		}
		infoTextAsOne +=  "Episode:" + iepisode + "<br>";

		if(dkGlobalOverviewTable.showIconInPopup){
		infoTextAsOne += "<img width='100px' height='100px' src='" + fetchImgUrlOfChar(iname) + "'></img>";
		}

		document.getElementById("testArrayContents").innerHTML = infoTextAsOne;
		document.getElementById("testArrayContents").style.top = event.clientY - 30;
		document.getElementById("testArrayContents").style.left = event.clientX - 30;
	}
}



function hidePopupControlBox() {
	console.log("hide");
	document.getElementById("popupControlBox").style.top = 0;
	document.getElementById("popupControlBox").style.left = 0;
	document.getElementById("popupControlBox").innerHTML = "";
}

function showPopupControlBox(pcbName, pcbEps, pcbSeason ) {


	if(pcbName != null){
		var infoTextAsOne = "Controls for:" + pcbName;
		infoTextAsOne += '<button onclick="hidePopupControlBox()">Hide</button><br>';
		infoTextAsOne += 'Search by character: <button onclick="alert(\'Search by character: Not yet implemented\')">'+pcbName+'</button><br>';
		infoTextAsOne += 'Search by Episode: <button onclick="alert(\'Search by Episode: Not yet implemented\')">'+pcbEps+'</button><br>';
		infoTextAsOne += 'Search by Season: <button onclick="alert(\'Search by Season: Not yet implemented\')">'+pcbSeason+'</button><br>';

		//console.log("Before the print:");
		//console.log("Inside of the show info:" + infoTextAsOne);

		document.getElementById("popupControlBox").innerHTML = infoTextAsOne;
		document.getElementById("popupControlBox").style.top = event.clientY - 130;
		document.getElementById("popupControlBox").style.left = event.clientX - 130;
	}
}



function getSeasonOfEpisodeNumber( epsNumber ){

	if(epsNumber > 0){
		for(var i = 0; i < dkGlobalOverviewTable.arrayOfEpisodesInSeasons.length; i++){
			epsNumber -= dkGlobalOverviewTable.arrayOfEpisodesInSeasons[i];
			if(epsNumber <= 0){
				return i;
			}
		}

	}
	return null;


} //end 


function getEpsNumber(epsName) {
	var retval = -1;

	//Array follows format: name, number, prodcode, origAirDate, showRunner[], writtenBy[], directedBy[]
	for(var e = 0; e < allEpisodesByNumber.length; e++){

		if(allEpisodesByNumber[e][0] == epsName){
			retval = allEpisodesByNumber[e][1];
			break;
		}

	}

	return retval;
} //end get eps number

function fetchImgUrlOfChar( charName) {


	for(var i =0; i < imageUrlsForCharacters.length; i++){
		if(charName == imageUrlsForCharacters[i][0]){
			return imageUrlsForCharacters[i][1];
		}
	}
} //end fetch url img of char

function toggleCharIconsOnPopup() {
dkGlobalOverviewTable.showIconInPopup = ! dkGlobalOverviewTable.showIconInPopup;
}


