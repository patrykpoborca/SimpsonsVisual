
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





divs that will be created for single selection character view start with "sscv"
intention is to prevent accidentally creating a div that already exists.

*/





//Assumes that character is a string that matches the allCharByAppearAmt[char][0]
function givenACharacterNameFilloutTheView(divIdToFill, nameOfCharacter) {
	document.getElementById(divIdToFill).innerHTML = "";

	var charsInThisSeason = []; //find the character that this was given, and put only that character in the array
	for(var i = 0; i < allCharByAppearAmt.length; i++){
		if(allCharByAppearAmt[i][0] == nameOfCharacter){
			charsInThisSeason.push(allCharByAppearAmt[i]);
			break;
		}
	}
	//only make the character page if there was a name match
	if(charsInThisSeason.length > 0){

		//fill in divs for the single selection character view (sscv)
		createDivsForSscv(divIdToFill);


		//try and render the characters now, but with an episode width change.
		fillCharacterTableAndOtherViewInfo('sscvTableOfAppear', charsInThisSeason, false);

		//edit the divs
		document.getElementById('sscvToOverviewButton').innerHTML = '<button onclick="backToOverviewFromCharacter(\''+divIdToFill+'\')">Return to overview.</button></p>';
		document.getElementById('sscvName').innerHTML = '<p><h2 style="float:left">Character:</h2><h1 style="float: left">&nbsp&nbsp'+nameOfCharacter+'</h1>  <h3 style="float: left; margin-top: 30px;">&nbsp&nbsp('+charsInThisSeason[0][1]+')</h3></p>';
		document.getElementById('sscvAppearTitle').innerHTML = '<br><br><br><br>Appearances over the series:';
		

		document.getElementById('sscvListOfEpisodesByName').innerHTML = '<h5>Need a function for list of episodes by name, may want links?</h5>';
		sscvFillListOfEpisodeNames(charsInThisSeason[0]);
		document.getElementById('sscvVoiceActors').innerHTML = '<h5>need a function for list of voice actors, may want links?</h5>';
		sscvFillListOfVoiceActors(charsInThisSeason[0]);
		document.getElementById('sscvTop10CharsWith').innerHTML = '<h5>top 10 chars with</h5>';
		document.getElementById('sscvTop20CharsWith').innerHTML = '<h5>top 20 chars with</h5>';
		sscvFillListOfTopWith(charsInThisSeason[0]);
		document.getElementById('sscvPicture').innerHTML = "<img width='200px' height='300px' src='" + fetchImgUrlOfChar(nameOfCharacter) + "'></img>";
		document.getElementById('sscvNetworkMapButton').innerHTML = '<button onclick="console.log(\'Doesnt work yet\')">View Network Map</button></p>';



	}
	else{
		console.log("there was no match for the given character name.");
	}
	hidePopupControlBox(); //because there is a good chance got here from the overview.
} //end findCharactersInGivenSeasonAndPopulateInteractiveTable


/* Currently the is the idea that character view will have at the top return to over view button
Then Common name (Full Name)

*/
function createDivsForSscv(divIdToFill) {

	document.getElementById(divIdToFill).innerHTML += '<div id="sscvToOverviewButton"></div>\n';
	document.getElementById(divIdToFill).innerHTML += '<div id="sscvName"></div>\n';
	document.getElementById(divIdToFill).innerHTML += '<div id="sscvAppearTitle"></div>\n';
	document.getElementById(divIdToFill).innerHTML += '<div id="sscvTableOfAppear"></div>\n';
	document.getElementById(divIdToFill).innerHTML += '<div id="sscvListOfEpisodesByName"></div>\n';
	document.getElementById(divIdToFill).innerHTML += '<div id="sscvVoiceActors"></div>\n';
	document.getElementById(divIdToFill).innerHTML += 
		'<div id="sscvPicture" style="position:absolute;top:250;left:400;"></div>\n';
	document.getElementById(divIdToFill).innerHTML +=
		'<div id="sscvTop10CharsWith" style="position:absolute;top:250;left:700;"></div>\n';
	document.getElementById(divIdToFill).innerHTML +=
		'<div id="sscvTop20CharsWith" style="position:absolute;top:250;left:950"></div>\n';
	document.getElementById(divIdToFill).innerHTML +=
		'<div id="sscvNetworkMapButton" style="position:absolute;top:500;left:850;"></div>\n';
	document.getElementById(divIdToFill).innerHTML += 
		'<div id="sscvMouseOverPanel" style="position:absolute;top:500;left:850;visibility: hidden;border: 1px solid black;"></div>\n';
	document.getElementById(divIdToFill).innerHTML += 
		'<div id="sscvMouseClickPanel" style="position:absolute;top:500;left:850;visibility: hidden;border: 1px solid black;"></div>\n';

}

//temporary function to return back to overview. assumes first 10 character grab
function backToOverviewFromCharacter(divIdToFill){
	/*
	var charList = [];
	for(var i =0; i < 20; i++){
		charList.push(allCharByAppearAmt[i]);
	}
	fillOverviewTable(divIdToFill, charList, true);
	//*/
	console.log("back to overview currently disabled.");
} //end


/*
Given a div to fill, array of character, highlight, and episode size, then can make div.
enableHighlight should be a boolean.

*/
function fillCharacterTableAndOtherViewInfo(divIdToFill, arrayOfCharacters, enableHighlight, season, bEpRange, eEpRange) {
	var contents = "";
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

			lineContent += 'onclick="sscvShowMouseClickPanel('+e+',' +
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

	$(".inThatEps").css("border", "0px");
	$(".notInThatEps").css("border", "0px");
} //end filloverview table


function chideInfoBox(row, col) {

	if(row != null){
		document.getElementById("sscvMouseOverPanel").style.visibility = 'hidden';
		document.getElementById("sscvMouseOverPanel").style.top = 0;
		document.getElementById("sscvMouseOverPanel").style.left = 0;

		document.getElementById("sscvMouseOverPanel").innerHTML = "";

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

		document.getElementById("sscvMouseOverPanel").style.visibility = 'visible';
		var infoTextAsOne = "" + iname + "<br>";
		//console.log("Before the print:");
		//console.log("Inside of the show info:" + infoTextAsOne);

		if(inEps){
			document.getElementById("sscvMouseOverPanel").style.backgroundColor = dkGlobalOverviewTable.inEpsColor;
			infoTextAsOne += "IS in ";
		}
		else{
			document.getElementById("sscvMouseOverPanel").style.backgroundColor = dkGlobalOverviewTable.notInEpsColor;
			infoTextAsOne += "NOT in ";
		}
		infoTextAsOne +=  "Episode:" + iepisode + "(S"+ getSeasonOfEpisodeNumber(iepisode) + ")<br>";
		infoTextAsOne +=  allEpisodesByNumber[iepisode-1][0] + "<br>";


		//infoTextAsOne += "<img width='200px' height='200px' src='" + fetchImgUrlOfChar(iname) + "'></img>";

		document.getElementById("sscvMouseOverPanel").innerHTML = infoTextAsOne;
		document.getElementById("sscvMouseOverPanel").style.top = event.clientY + 10;
		document.getElementById("sscvMouseOverPanel").style.left = event.clientX + 10;

		//highlight only that particular episode on that particular character
		document.getElementById('ovtIDr' + row + 'c' + col).style.backgroundColor = '#A61000';


	} //end if params were not null
} //end show info box


function sscvFillListOfEpisodeNames(sscvCharArrayInfo) {

	var totalNumberOfEpisodeAppearance = 0;
	for(var i = 0; i < sscvCharArrayInfo[7].length; i++){
		if(sscvCharArrayInfo[7][i]){totalNumberOfEpisodeAppearance++;}
	}

	document.getElementById('sscvListOfEpisodesByName').innerHTML = '<br><br>' + sscvCharArrayInfo[0] + " episode appearances("+totalNumberOfEpisodeAppearance+"):<br>";


	//for some strange reason this is needed. otherwise the /select line will be added before the options.
	var contentForDiv = "";
	contentForDiv +=
		"<select id='sscvEpNameList' onchange=\"sscvEpNameClick()\"  multiple=\"multiple\" size=\"10\" style=\"width:300px\">\n"; 

	for(var i = 0; i < sscvCharArrayInfo[7].length; i++){
		if(sscvCharArrayInfo[7][i]){
			contentForDiv += "<option>"+ allEpisodesByNumber[i][0]+ "</option>\n";
		}
	}

	contentForDiv+= '</select>';
	document.getElementById('sscvListOfEpisodesByName').innerHTML += contentForDiv;

}//sscvFillListOfEpisodeNames

function sscvEpNameClick() {
	console.log("an episode name was clicked:" + document.getElementById('sscvEpNameList').value);
}

function sscvFillListOfVoiceActors(sscvCharArrayInfo){
	var contentForDiv = "";

	contentForDiv += "<br><br>" + sscvCharArrayInfo[0] + "'s Voice Actor(s):<br>";
	contentForDiv +=
		"<select id='sscvVaNameList' onchange=\"sscvVaNameClick()\"  multiple=\"multiple\" style=\"width:300px; height:100px\">\n"; 

	for(var i = 0; i < sscvCharArrayInfo[6].length; i++){
		contentForDiv += "<option>"+ sscvCharArrayInfo[6][i] +  "</option>\n";
	}

	contentForDiv+= '</select>';
	document.getElementById('sscvVoiceActors').innerHTML = contentForDiv;

} //end  sscvFillListOfVoiceActors

function sscvVaNameClick() {
	console.log("a va name was clicked:" + document.getElementById('sscvVaNameList').value);
}


function sscvFillListOfTopWith(sscvCharArrayInfo) {

	var indexOfGivenCharacter = 0;

	for(var i = 0; i < allCharByAppearAmt.length; i++){
		if(sscvCharArrayInfo[0] == allCharByAppearAmt[i][0]){
			indexOfGivenCharacter = i;
		}
	}

	var top20epSharedChars = [];
	var startingShare = socialNetOfChars[indexOfGivenCharacter][1];

	while(startingShare > 0){
		for(var c = 0; c < socialNetOfChars.length; c++){
			if(socialNetOfChars[indexOfGivenCharacter][2][c] == startingShare){
				top20epSharedChars.push(c);
			}
			if(top20epSharedChars.length >= 20){startingShare = 0; break;}
		}
		startingShare--;
	}

	var contentForDiv = "";

	contentForDiv += "Those commonly with "+sscvCharArrayInfo[0]+" in an episode:<br>";
	contentForDiv +=
		"<select id='sscvTop10List' onchange=\"sscvTopNameClick(1)\"  multiple=\"multiple\" size=\"11\" style=\"width:300px\">\n"; 

	for(var i = 0; i < 10; i++){
		contentForDiv += "<option>"+  socialNetOfChars[top20epSharedChars[i]][0] + "("+ socialNetOfChars[indexOfGivenCharacter][2][top20epSharedChars[i]] + ")</option>";
	}
	contentForDiv += "</select>";
	document.getElementById('sscvTop10CharsWith').innerHTML = contentForDiv;

	contentForDiv = "<br>\n";
	contentForDiv +=
		"<select id='sscvTop20List' onchange=\"sscvTopNameClick(2)\"  multiple=\"multiple\" size=\"11\" style=\"width:300px\">\n"; 

	for(var i = 10; i < 20; i++){
		contentForDiv += "<option>"+  socialNetOfChars[top20epSharedChars[i]][0] + "("+ socialNetOfChars[indexOfGivenCharacter][2][top20epSharedChars[i]] + ")</option>";
	}
	contentForDiv += "</select>";
	document.getElementById('sscvTop20CharsWith').innerHTML = contentForDiv;



} //end sscvFillListOfTopWith


function sscvTopNameClick(whichList) {
	//if came from list 1
	if(1 == whichList){
		console.log("top name selected:" + document.getElementById('sscvTop10List').value);
	}
	//if came from list 2
	if(2 == whichList){
		console.log("top name selected:" + document.getElementById('sscvTop20List').value);
	}

}


function sscvShowMouseClickPanel(epOfClick, seasonOfClick) {
	var infoTextAsOne = "";

	infoTextAsOne += "Click to <button onclick=\"sscvHideMouseClickPanel()\">Hide</button> panel<br>";
	infoTextAsOne += "Search by episode <button onclick=\"sscvMouseClickEp("+epOfClick+")\">"+epOfClick+"</button><br>";
	infoTextAsOne += "Search by season <button onclick=\"sscvMouseClickSeason("+seasonOfClick+")\">"+seasonOfClick+"</button><br>";

	document.getElementById("sscvMouseClickPanel").innerHTML = infoTextAsOne;
	document.getElementById("sscvMouseClickPanel").style.visibility = 'visible';
	document.getElementById("sscvMouseClickPanel").style.backgroundColor = '#BF5B30';
	document.getElementById("sscvMouseClickPanel").style.top = event.clientY + 10;
	document.getElementById("sscvMouseClickPanel").style.left = event.clientX + 10;
}

function sscvHideMouseClickPanel() {
	document.getElementById("sscvMouseClickPanel").style.visibility = 'hidden';
}

function sscvMouseClickEp(epOfClick) {
	console.log('clicked on the popup panel for episode:' + epOfClick);
}

function sscvMouseClickSeason(seasonOfClick) {
	console.log('clicked on the popup panel for season:' + seasonOfClick);
}

