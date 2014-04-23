

var dkGlobalOverviewTable = {};

dkGlobalOverviewTable.popupInfoPasser = "";
dkGlobalOverviewTable.showIconInPopup = true;
dkGlobalOverviewTable.arrayOfEpisodesInSeasons = 
     [13, 22, 24, 22, 22, 25, 25,25, 25, 23, 22, 21, 22, 22, 22, 21, 22, 22, 20, 21, 23, 22, 22, 22, 11];
     // 1  2   3    4  5   6   7  8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25

dkGlobalOverviewTable.totalEps = 0;

dkGlobalOverviewTable.inEpsColor = '#278627';
dkGlobalOverviewTable.notInEpsColor = '#2B2B2B';
dkGlobalOverviewTable.inEpsColor3 = '#389738';
dkGlobalOverviewTable.notInEpsColor3 = '#3C3C3C';
dkGlobalOverviewTable.inEpsColorHi = '#006345';
dkGlobalOverviewTable.notInEpsColorHi = '#005234';

dkGlobalOverviewTable.overviewRowLimit = 25;

dkGlobalOverviewTable.divPassing;

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


function fillOverviewTable(divIdToFill, arrayOfCharacters, enableHighlight) {
	dkGlobalOverviewTable.divPassing = divIdToFill;

	//placing this here does not cause the page load first.
	//will probably need to go in the method that calls this.
	//document.getElementById(divIdToFill).innerHTML = "<h1>Loading...</h1>";

	var contents = "";
	contents += "<div id='ovtPictureToggle'></div><div><h1>Overview</h1></div>\n";
	contents += "<table onmouseout='hideInfoBox()' onmousemove='showInfoBox()'>\n";

	contents += '<tr><th colspan="4"></th>';


	var lineContent = "";


	//determine how many episodes are being tracked to figure out how big to make the table.
	var totaleps = allCharByAppearAmt[0][7].length;
	console.log("Double check this, the total eps should be 541:" + totaleps);

	dkGlobalOverviewTable.totalEps = totaleps;

	//make one header tag per season. it should span as many columns as that season has episodes.
	for(var i = 0; i < dkGlobalOverviewTable.arrayOfEpisodesInSeasons.length; i++ ){
		lineContent += '<th colspan="' + dkGlobalOverviewTable.arrayOfEpisodesInSeasons[i] + '">' + (i+1) + "</th>\n"
	}
	contents += lineContent + "</tr>";


	lineContent = "";

	var ovtRowsToFill = dkGlobalOverviewTable.overviewRowLimit;
	if(arrayOfCharacters.length < dkGlobalOverviewTable.overviewRowLimit){ ovtRowsToFill = arrayOfCharacters.length;}

	for(var i = 0; i < ovtRowsToFill; i++){


		var appearCounter = 0;
		for(var epc = 0; epc < arrayOfCharacters[i][7].length;epc++){
			if(arrayOfCharacters[i][7][epc]){appearCounter++;}
		}

		//contain the names on one line
		var shorterName = arrayOfCharacters[i][0];
		if(shorterName.search(" ") != -1){ shorterName = shorterName.substring(0, shorterName.search(" "));	}
		if(shorterName.length > 7) { shorterName = shorterName.substring(0,7);}

		lineContent += '<tr><th class="name" colspan="4">' + shorterName +'('+appearCounter+')</th>\n';
		

		//fill out that array for the character.
		//chars [  name, full, first appear, alias, jobs, relatives, voice actors, episode appearances   ]


		//for each of the possible episodes being shown.
		for(var e = 1; e <= totaleps; e++ ){

			lineContent+= '<td id="ovtIDr' + i + 'c' + e + '" ';

			//this would be a check if char is in that eps.
			if(arrayOfCharacters[i][7][e -1]){  lineContent += '<td class="inThatEps '; }
			else{ lineContent += '<td class="notInThatEps '; }

			lineContent += 'ovtRow' + i;
			lineContent += ' ovtCol' + getSeasonOfEpisodeNumber(e); //this needs to be season
			lineContent += '" onmouseout="hideInfoBox('+i+','+e+')" onmousemove="showInfoBox(\''+ arrayOfCharacters[i][0] +'\',\'' + e;

			var highlightRow = 0; //highlight start disabled.
			var highlightCol = 0; //if true then give it the char and episode row/column.
			if(enableHighlight){ highlightRow = i; highlightCol = e; }

			if(arrayOfCharacters[i][7][e -1]){  lineContent += '\', true,'+i+','+e+')"'; }
			else{ lineContent += '\', false,'+i+','+e+')"'; }

			lineContent += 'onclick="showPopupControlBox(\''+ arrayOfCharacters[i][0] +'\', '+e+',' +
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

	document.getElementById(divIdToFill).innerHTML = contents;
	document.getElementById(divIdToFill).innerHTML += "<div id='ovtMouseOverPane' style='visibility:hidden;'></div>";
	document.getElementById(divIdToFill).innerHTML += "<div id='ovtMouseClickPane'style='visibility:hidden;'></div>";



	//seed the color
	for(var row = 0; row < ovtRowsToFill; row++){
		for(var col = 1; col <= totaleps; col++){
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

	//edit the top lvl description. Edit2: actually, unsure how to proceed at the moment.
	//may need to be removed if doesn't exist in the end app.
	document.getElementById('ovtPictureToggle').innerHTML = '<button onclick="toggleCharIconsOnPopup()">Toggle character icons</button></p>';

	$(".inThatEps").css("border", "0px");
	$(".notInThatEps").css("border", "0px");
} //end filloverview table



function hideInfoBox(row, col) {

	document.getElementById("ovtMouseOverPane").style.top = 0;
	document.getElementById("ovtMouseOverPane").style.left = 0;
	document.getElementById("ovtMouseOverPane").style.visibility = 'hidden';

	document.getElementById("ovtMouseOverPane").innerHTML = "";

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
			document.getElementById("ovtMouseOverPane").style.backgroundColor = dkGlobalOverviewTable.inEpsColor;
			infoTextAsOne += "&nbsp&nbspIS in ";
		}
		else{
			document.getElementById("ovtMouseOverPane").style.backgroundColor = dkGlobalOverviewTable.notInEpsColor;
			infoTextAsOne += "&nbsp&nbspNOT in ";
		}
		infoTextAsOne +=  "Episode:" + iepisode + "<br>";

		//if(dkGlobalOverviewTable.showIconInPopup){ infoTextAsOne += "<img width='100px' height='100px' src='" + fetchImgUrlOfChar(iname) + "'></img>"; }

		document.getElementById("ovtMouseOverPane").innerHTML = infoTextAsOne;
		document.getElementById("ovtMouseOverPane").style.visibility = "visible";
		document.getElementById("ovtMouseOverPane").style.top = event.clientY - 30;
		document.getElementById("ovtMouseOverPane").style.left = event.clientX - 30;


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
	document.getElementById("ovtMouseClickPane").style.visibility = 'hidden';
	document.getElementById("ovtMouseClickPane").style.top = 0;
	document.getElementById("ovtMouseClickPane").style.left = 0;
	document.getElementById("ovtMouseClickPane").innerHTML = "";
}

function showPopupControlBox(pcbName, pcbEps, pcbSeason ) {


	if(pcbName != null){
		var infoTextAsOne = "";
		infoTextAsOne += '<button onclick="hidePopupControlBox()">X</button><br>';
		if(pcbName.length > 0){
			infoTextAsOne += '&nbsp&nbspSearch by character: <button onclick="givenACharacterNameFilloutTheView(\''+dkGlobalOverviewTable.divPassing+'\',\''+pcbName+'\')">'+pcbName+'</button><br>';
		}
		if(pcbEps >=0){
			infoTextAsOne += '&nbsp&nbspSearch by Episode: <button onclick="givenAnEpisodeFillADiv(\''+dkGlobalOverviewTable.divPassing+'\','+(pcbEps-1)+')">'+pcbEps+'</button><br>';
		}
		if(pcbSeason >=0){
			infoTextAsOne += '&nbsp&nbspSearch by Season: <button onclick="findCharactersInGivenSeasonAndPopulateInteractiveTable(\''+dkGlobalOverviewTable.divPassing+'\', '+pcbSeason+')">'+pcbSeason+'</button><br>';
		}

		//console.log("Before the print:");
		//console.log("Inside of the show info:" + infoTextAsOne);

		document.getElementById("ovtMouseClickPane").innerHTML = infoTextAsOne;
		document.getElementById("ovtMouseClickPane").style.visibility = 'visible';
		document.getElementById("ovtMouseClickPane").style.top = event.clientY - 130;
		document.getElementById("ovtMouseClickPane").style.left = event.clientX - 130;
	}
}



/**This is based off episode number(not index) and season number (not index)*/
function getSeasonOfEpisodeNumber( epsNumber ){

	if(epsNumber > 0){
		for(var i = 0; i < dkGlobalOverviewTable.arrayOfEpisodesInSeasons.length; i++){
			epsNumber -= dkGlobalOverviewTable.arrayOfEpisodesInSeasons[i];
			if(epsNumber <= 0){
				return i+1;
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


