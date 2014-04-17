
/*
REQUIRES the global from interactiveTable.js

var dkGlobalOverviewTable = {};

dkGlobalOverviewTable.popupInfoPasser = "";
dkGlobalOverviewTable.showIconInPopup = true;
dkGlobalOverviewTable.arrayOfEpisodesInSeasons = 
     [13, 22, 24, 22, 22, 25, 25,25, 25, 23, 22, 21, 22, 22, 22, 21, 22, 22, 20, 21, 23, 22, 22, 22, 11];
     // 1  2   3    4  5   6   7  8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
dkGlobalOverviewTable.inEpsColor = '#278627';
dkGlobalOverviewTable.notInEpsColor = '#2B2B2B';
dkGlobalOverviewTable.inEpsColor3 = '#389738';
dkGlobalOverviewTable.notInEpsColor3 = '#3C3C3C';
dkGlobalOverviewTable.inEpsColorHi = '#006345';
dkGlobalOverviewTable.notInEpsColorHi = '#005234';

*/


//Assumes that character is a string that matches the allCharByAppearAmt[char][0]
function givenACharacterNameFilloutTheView(divIdToFill, nameOfCharacter) {
	hidePopupControlBox(); //because there is a good chance got here from the overview.

	var charsInThisSeason = []; //find the character that this was given, and put only that character in the array
	for(var i = 0; i < allCharByAppearAmt.length; i++){
		if(allCharByAppearAmt[i][0] == nameOfCharacter){
			charsInThisSeason.push(allCharByAppearAmt[i]);
			break;
		}
	}
	//only make the character page if there was a name match
	if(charsInThisSeason.length > 0){
		//try and render the characters now, but with an episode width change.
		fillCharacterTableAndOtherViewInfo(divIdToFill, charsInThisSeason, false);

		//edit the top lvl description. Edit2: actually, unsure how to proceed at the moment.
		//may need to be removed if doesn't exist in the end app.
		document.getElementById('pictureTest').innerHTML = '<button onclick="backToOverviewFromSeason()">Return to overview.</button></p>';
	}
	else{
		console.log("there was no match for the given character name.");
	}
} //end findCharactersInGivenSeasonAndPopulateInteractiveTable



/*
Given a div to fill, array of character, highlight, and episode size, then can make div.
enableHighlight should be a boolean.

*/
function fillCharacterTableAndOtherViewInfo(divIdToFill, arrayOfCharacters, enableHighlight, season, bEpRange, eEpRange) {
	var contents;
	contents = "<div><h2>"+arrayOfCharacters[0][0]+"</h2></div>";
	contents += "<table onmouseout='chideInfoBox()' onmousemove='cshowInfoBox()'>\n";
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

	for(var i = 0; i < arrayOfCharacters.length; i++){

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
			lineContent += '" onmouseout="chideInfoBox('+i+','+e+')" onmousemove="cshowInfoBox(\''+ arrayOfCharacters[i][0] +'\',\'' + e;

			var highlightRow = -1; //highlight start disabled.
			var highlightCol = -1; //if true then give it the char and episode row/column.
			if(enableHighlight){ highlightRow = i; highlightCol = e; }

			if(arrayOfCharacters[i][7][e -1]){  lineContent += '\', true,'+i+','+e+')"'; }
			else{ lineContent += '\', false,'+i+','+e+')"'; }

			lineContent += 'onclick="showPopupControlBox(\'\', '+e+',' +
			  getSeasonOfEpisodeNumber(e)+' )"'+ '></th>\n';
			

		}
		lineContent += "</tr>\n";
	}

	contents += lineContent;
	contents += "</table>\n";

	document.getElementById(divIdToFill).innerHTML = contents;

	//seed the color
	for(var row = 0; row < arrayOfCharacters.length; row++){
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


} //end filloverview table


function chideInfoBox(row, col) {

	if(row != null){
		document.getElementById("testArrayContents").style.top = 0;
		document.getElementById("testArrayContents").style.left = 0;

		document.getElementById("testArrayContents").innerHTML = "";

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


function cshowInfoBox(iname, iepisode, inEps, row, col) {

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
		infoTextAsOne +=  allEpisodesByNumber[iepisode-1][0] + "<br>";


		//infoTextAsOne += "<img width='200px' height='200px' src='" + fetchImgUrlOfChar(iname) + "'></img>";

		document.getElementById("testArrayContents").innerHTML = infoTextAsOne;
		document.getElementById("testArrayContents").style.top = event.clientY - 30;
		document.getElementById("testArrayContents").style.left = event.clientX - 30;

		//highlight only that particular episode on that particular character
		document.getElementById('ovtIDr' + row + 'c' + col).style.backgroundColor = '#A61000';


	} //end if params were not null
} //end show info box

/* Commented out because there already exists this method inside of justSeason. (This file was a copy-paste-edit process)
//temporary function to return back to overview. assumes first 10 character grab
function backToOverviewFromSeason(){
	var charList = [];
	for(var i =0; i < 10; i++){
		charList.push(allCharByAppearAmt[i]);
	}
	fillOverviewTable('overviewTable', charList, true);
} //end
*/