

var dkGlobalOverviewTable = {};

dkGlobalOverviewTable.popupInfoPasser = "";
dkGlobalOverviewTable.showIconInPopup = true;
dkGlobalOverviewTable.arrayOfEpisodesInSeasons =  [13, 22, 24, 22, 22, 25, 25,25, 25, 23, 22, 21, 22, 22, 22, 21, 22, 22, 20, 21, 23, 22, 22, 22, 11];

dkGlobalOverviewTable.inEpsColor = '#278627';
dkGlobalOverviewTable.notInEpsColor = '#2B2B2B';
dkGlobalOverviewTable.inEpsColor3 = '#389738';
dkGlobalOverviewTable.notInEpsColor3 = '#3C3C3C';
dkGlobalOverviewTable.inEpsColorHi = '#006345';
dkGlobalOverviewTable.notInEpsColorHi = '#005234';

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


	//determine how many episodes are being tracked to figure out how big to make the table.
	var totaleps = 0;
	for(var i = 0; i < dkGlobalOverviewTable.arrayOfEpisodesInSeasons.length; i++){
		totaleps += dkGlobalOverviewTable.arrayOfEpisodesInSeasons[i];
	}

	//make one header tag per season. it should span as many columns as that season has episodes.
	for(var i = 0; i < dkGlobalOverviewTable.arrayOfEpisodesInSeasons.length; i++ ){
		lineContent += '<th colspan="' + dkGlobalOverviewTable.arrayOfEpisodesInSeasons[i] + '">' + (i+1) + "</th>\n"
	}
	contents += lineContent + "</tr>";

	//this will hold the characters to be displayed on the table.
	var charList = [];
	//input only 20 characters for now. this can be changed later to take in an array holding characters.
	for(var i = 0; i < 20; i++){
		charList.push( allCharByAppearAmt[i]  );
	}


	lineContent = "";

	for(var i = 0; i < charList.length; i++){


		//contain the names on one line
		if(charList[i][0].length > 12){ lineContent += '<tr><th class="name" colspan="4">' + charList[i][0].substring(0,12) + '</th>\n'; }
		else{ lineContent += '<tr><th class="name" colspan="4">' + charList[i][0] + '</th>\n'; }
		

		//fill out that array for the character.
		//chars [  name, full, first appear, alias, jobs, relatives, voice actors, episode appearances   ]


		//for each of the possible episodes being shown.
		for(var e = 1; e <= totaleps; e++ ){

			lineContent+= '<td id="ovtIDr' + i + 'c' + e + '" ';

			//this would be a check if char is in that eps.
			if(charList[i][7][e -1]){  lineContent += '<td class="inThatEps '; }
			else{ lineContent += '<td class="notInThatEps '; }

			lineContent += 'ovtRow' + i;
			lineContent += ' ovtCol' + getSeasonOfEpisodeNumber(e); //this needs to be season
			lineContent += '" onmouseout="hideInfoBox('+i+','+e+')" onmousemove="showInfoBox(\''+ charList[i][0] +'\',\'' + e;

			if(charList[i][7][e -1]){  lineContent += '\', true,'+i+','+e+')"'; }
			else{ lineContent += '\', false,'+i+','+e+')"'; }

			lineContent += 'onclick="showPopupControlBox(\''+ charList[i][0] +'\', '+e+',' +
			  getSeasonOfEpisodeNumber(e)+' )"'+ '></th>\n';
			

			/* Previous code used without needed highlight row.

			lineContent += '<td class="inThatEps boarder" onmouseout="hideInfoBox()"'+
			'onmousemove="showInfoBox(\''+ charList[i][0] +'\',\'' + e +'\', true)"'+
			'onclick="showPopupControlBox(\''+ charList[i][0] +'\', '+e+',' + getSeasonOfEpisodeNumber(e)+' )"'+
			'></th>\n';

			lineContent += '<td class="notInThatEps" onmouseout="hideInfoBox()"'+
			'onmousemove="showInfoBox(\''+ charList[i][0] +'\',\'' + e +'\', false)"'+
			'onclick="showPopupControlBox(\''+ charList[i][0] +'\', '+e+',' + getSeasonOfEpisodeNumber(e)+' )"'+
			'></th>\n';
			//*/

		}
		lineContent += "</tr>\n";
	}
	contents += lineContent;

	document.getElementById("overviewTable").innerHTML = contents;

	//seed the color
	for(var row = 0; row < charList.length; row++){
		for(var col = 1; col < totaleps; col++){
			if(row %2 == 0){
				if(document.getElementById('ovtIDr' + row + 'c' + col).className.search('notInThatEps') >= 0){
					document.getElementById('ovtIDr' + row + 'c' + col).style.backgroundColor = dkGlobalOverviewTable.notInEpsColor;
				}
				else{  document.getElementById('ovtIDr' + row + 'c' + col).style.backgroundColor = dkGlobalOverviewTable.inEpsColor;}
			}
			else{
				if(document.getElementById('ovtIDr' + row + 'c' + col).className.search('notInThatEps') >= 0){
					document.getElementById('ovtIDr' + row + 'c' + col).style.backgroundColor = dkGlobalOverviewTable.notInEpsColor3;
				}
				else{  document.getElementById('ovtIDr' + row + 'c' + col).style.backgroundColor = dkGlobalOverviewTable.inEpsColor3;}
			}
		}
	}



}



function hideInfoBox(row, col) {

	document.getElementById("testArrayContents").style.top = 0;
	document.getElementById("testArrayContents").style.left = 0;

	document.getElementById("testArrayContents").innerHTML = "";

	//for each row
	for(var radj = 0; radj <= row; radj++){
		//get the episodes 
		for(var radjCol = 1; getSeasonOfEpisodeNumber(radjCol) <= getSeasonOfEpisodeNumber(col); radjCol++){
			//if in that column
			if(  (getSeasonOfEpisodeNumber(radjCol) == getSeasonOfEpisodeNumber(col)) ||
				 ( radj == row)
				){
				if(radj %2 == 0){
					if(document.getElementById('ovtIDr' + radj + 'c' + radjCol).className.search('notInThatEps') >= 0){
						document.getElementById('ovtIDr' + radj + 'c' + radjCol).style.backgroundColor = dkGlobalOverviewTable.notInEpsColor;
					}
					else{  document.getElementById('ovtIDr' + radj + 'c' + radjCol).style.backgroundColor = dkGlobalOverviewTable.inEpsColor;}
				}
				else{
					if(document.getElementById('ovtIDr' + radj + 'c' + radjCol).className.search('notInThatEps') >= 0){
						document.getElementById('ovtIDr' + radj + 'c' + radjCol).style.backgroundColor = dkGlobalOverviewTable.notInEpsColor3;
					}
					else{  document.getElementById('ovtIDr' + radj + 'c' + radjCol).style.backgroundColor = dkGlobalOverviewTable.inEpsColor3;}
				}
			}
		}
	}

}


function showInfoBox(iname, iepisode, inEps, row, col) {

	if(iname != null){
		var infoTextAsOne = "" + iname + "<br>";
		//console.log("Before the print:");
		//console.log("Inside of the show info:" + infoTextAsOne);

		if(inEps){
			document.getElementById("testArrayContents").style.backgroundColor = dkGlobalOverviewTable.inEpsColor;
			infoTextAsOne += "IS in ";
		}
		else{
			document.getElementById("testArrayContents").style.backgroundColor = dkGlobalOverviewTable.notInEpsColor;
			infoTextAsOne += "NOT in ";
		}
		infoTextAsOne +=  "Episode:" + iepisode + "<br>";

		//if(dkGlobalOverviewTable.showIconInPopup){ infoTextAsOne += "<img width='100px' height='100px' src='" + fetchImgUrlOfChar(iname) + "'></img>"; }

		document.getElementById("testArrayContents").innerHTML = infoTextAsOne;
		document.getElementById("testArrayContents").style.top = event.clientY - 30;
		document.getElementById("testArrayContents").style.left = event.clientX - 30;


	//for each row
	for(var radj = 0; radj <= row; radj++){
		//get the episodes 
		for(var radjCol = 1; getSeasonOfEpisodeNumber(radjCol) <= getSeasonOfEpisodeNumber(col); radjCol++){
			//if in that column
			if(  (getSeasonOfEpisodeNumber(radjCol) == getSeasonOfEpisodeNumber(col)) ||
				 ( radj == row)
				){
				if(radj %2 == 0){
					if(document.getElementById('ovtIDr' + radj + 'c' + radjCol).className.search('notInThatEps') >= 0){
						document.getElementById('ovtIDr' + radj + 'c' + radjCol).style.backgroundColor = dkGlobalOverviewTable.notInEpsColorHi;
					}
					else{  document.getElementById('ovtIDr' + radj + 'c' + radjCol).style.backgroundColor = dkGlobalOverviewTable.inEpsColorHi;}
				}
				else{
					if(document.getElementById('ovtIDr' + radj + 'c' + radjCol).className.search('notInThatEps') >= 0){
						document.getElementById('ovtIDr' + radj + 'c' + radjCol).style.backgroundColor = dkGlobalOverviewTable.notInEpsColorHi;
					}
					else{  document.getElementById('ovtIDr' + radj + 'c' + radjCol).style.backgroundColor = dkGlobalOverviewTable.inEpsColorHi;}
				}
			}
		}
	}




	} //end if params were not null
} //end show info box



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


