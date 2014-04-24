
/*

divs that will be created for single selection character view start with "ssnet"
intention is to prevent accidentally creating a div that already exists.

*/





//Assumes that character string is name or the correct index that matches allCharByAppearAmt
function givenACharacterFillOutSocialNet(divIdToFill, characterToUse) {
	document.getElementById(divIdToFill).innerHTML = "";


	var characterIndexToMakeNetWith = -1;
	if(typeof characterToUse == 'string'){
		for(var i = 0; i < allCharByAppearAmt.length; i++){
			if(characterToUse == allCharByAppearAmt[i][0]){
				characterIndexToMakeNetWith = i;
			}
		}
	}
	else if( typeof characterToUse == "number"){ characterIndexToMakeNetWith = characterToUse;}


	//only make the character net page if it exists.
	if(characterIndexToMakeNetWith >= 0){

		//fill in divs for the single selection character view (ssnet)
		createDivsForSsnet(divIdToFill);

		//edit the divs
		document.getElementById('ssnetToOverviewButton').innerHTML =
			'<button onclick="backToOverviewFromSocialNet(\''+divIdToFill+'\')">Return to overview</button>   ' +
			'<button onclick="backToCharacterFromSocialNet(\''+divIdToFill+'\')">Return to character</button>';
		document.getElementById('ssnetName').innerHTML = 
			'<h1>Social Network of ' + allCharByAppearAmt[characterIndexToMakeNetWith][0] + '</h1>';
		document.getElementById('ssnetPicture').innerHTML = "<img width='100px' height='150px' src='" + fetchImgUrlOfChar(allCharByAppearAmt[characterIndexToMakeNetWith][0]) + "'></img>";

		document.getElementById('ssnetHighTier').innerHTML = "High";
		document.getElementById('ssnetMedTier').innerHTML = "Med";
		document.getElementById('ssnetLowTier').innerHTML = "Low";

		ssnetFillTiers(characterIndexToMakeNetWith);

	}
	else{
		console.log("there was no match for the given character name.");
	}
	hidePopupControlBox(); //because there is a good chance got here from the overview.
} //end findCharactersInGivenSeasonAndPopulateInteractiveTable


/* Currently the is the idea that character view will have at the top return to over view button
Then Common name (Full Name)

*/
function createDivsForSsnet(divIdToFill) {

	document.getElementById(divIdToFill).innerHTML += '<div id="ssnetToOverviewButton"></div>\n';
	document.getElementById(divIdToFill).innerHTML +=
		'<div id="ssnetName" style="position:absolute;top:0;left:300;"></div>\n';
	document.getElementById(divIdToFill).innerHTML += 
		'<div id="ssnetPicture" style="position:absolute;top:300;left:50;border: 1px solid black;"></div>\n';
	document.getElementById(divIdToFill).innerHTML += 
		'<div id="ssnetHighTier" '+
		'style="position:absolute;top:100;left:200;width:300;height:500;'+
		'overflow-y:scroll; border: 1px solid black;"></div>\n';
	document.getElementById(divIdToFill).innerHTML += 
		'<div id="ssnetMedTier" '+
		'style="position:absolute;top:100;left:550;width:300;height:500;'+
		'overflow-y:scroll; border: 1px solid black;"></div>\n';
	document.getElementById(divIdToFill).innerHTML += 
		'<div id="ssnetLowTier" '+
		'style="position:absolute;top:100;left:900;width:300;height:500;'+
		'overflow-y:scroll; border: 1px solid black;"></div>\n';
}

//function to return back to overview. 
function backToOverviewFromSocialNet(divIdToFill){
	console.log("back to overview currently disabled.");
} //end

//function to return back to character.
function backToCharacterFromSocialNet(divIdToFill){
	console.log("back to character currently disabled.");
} //end



function ssnetFillTiers(indexOfGivenCharacter) {

	var contentForDiv = "";
	var hTierArray = [];
	var mTierArray = [];
	var lTierArray = [];
	var hTierLowerBound = 90;
	var mTierLowerBound = 75;
	var lTierLowerBound = 50; //If loading pictures, lower bound will be very important.

	var tempTierValue;
	var tempArrayForInsert;


	console.log("Testing socialnet data:" + socialNetOfChars.length);
	console.log("Testing socialnet data:" + socialNetOfChars[0].length);
	console.log("Testing socialnet data:" + socialNetOfChars[0][0]);
	console.log("Testing socialnet data:" + socialNetOfChars[0][1]);
	console.log("Testing socialnet data:" + socialNetOfChars[0][2].length);

	//go through each character and see what their % rating is.
	for(var i = 0; i < socialNetOfChars[indexOfGivenCharacter][2].length; i++)
	{
		tempTierValue = Math.floor(
						100 * socialNetOfChars[indexOfGivenCharacter][2][i] / 
						socialNetOfChars[indexOfGivenCharacter][1] );
		tempArrayForInsert = [];
		tempArrayForInsert.push(i);
		tempArrayForInsert.push(tempTierValue);
		tempArrayForInsert.push(socialNetOfChars[indexOfGivenCharacter][2][i]);
		if(tempTierValue >= hTierLowerBound){
			hTierArray.push(tempArrayForInsert);
		}
		else if(tempTierValue >= mTierLowerBound){
			mTierArray.push(tempArrayForInsert);
		}
		else if(tempTierValue >= lTierLowerBound){
			lTierArray.push(tempArrayForInsert);
		}
	}


	contentForDiv = "";
	for(var i = 0; i < hTierArray.length; i++){
		contentForDiv += "<div>";
		contentForDiv += allCharByAppearAmt[  hTierArray[i][0]  ]  [0] + "<br>";
		contentForDiv += "Shared " + hTierArray[i][2] + " eps("+hTierArray[i][1]+"%)";
		contentForDiv += "<hr>";
		contentForDiv += "</div>";
	}

	document.getElementById('ssnetHighTier').innerHTML = contentForDiv;


	contentForDiv = "";
	for(var i = 0; i < mTierArray.length; i++){
		contentForDiv += "<div>";
		contentForDiv += allCharByAppearAmt[  mTierArray[i][0]  ]  [0] + "<br>";
		contentForDiv += "Shared " + mTierArray[i][2] + " eps("+mTierArray[i][1]+"%)";
		contentForDiv += "<hr>";
		contentForDiv += "</div>";
	}

	document.getElementById('ssnetMedTier').innerHTML = contentForDiv;


	contentForDiv = "";
	for(var i = 0; i < lTierArray.length; i++){
		contentForDiv += "<div>";
		contentForDiv += allCharByAppearAmt[  lTierArray[i][0]  ]  [0] + "<br>";
		contentForDiv += "Shared " + lTierArray[i][2] + " eps("+lTierArray[i][1]+"%)";
		contentForDiv += "<hr>";
		contentForDiv += "</div>";
	}

	document.getElementById('ssnetLowTier').innerHTML = contentForDiv;


} //end fill tiers



























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

			lineContent += 'onclick="ssnetShowMouseClickPanel('+e+',' +
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
		document.getElementById("ssnetMouseOverPanel").style.visibility = 'hidden';
		document.getElementById("ssnetMouseOverPanel").style.top = 0;
		document.getElementById("ssnetMouseOverPanel").style.left = 0;

		document.getElementById("ssnetMouseOverPanel").innerHTML = "";

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

		document.getElementById("ssnetMouseOverPanel").style.visibility = 'visible';
		var infoTextAsOne = "" + iname + "<br>";
		//console.log("Before the print:");
		//console.log("Inside of the show info:" + infoTextAsOne);

		if(inEps){
			document.getElementById("ssnetMouseOverPanel").style.backgroundColor = dkGlobalOverviewTable.inEpsColor;
			infoTextAsOne += "IS in ";
		}
		else{
			document.getElementById("ssnetMouseOverPanel").style.backgroundColor = dkGlobalOverviewTable.notInEpsColor;
			infoTextAsOne += "NOT in ";
		}
		infoTextAsOne +=  "Episode:" + iepisode + "(S"+ getSeasonOfEpisodeNumber(iepisode) + ")<br>";
		infoTextAsOne +=  allEpisodesByNumber[iepisode-1][0] + "<br>";


		//infoTextAsOne += "<img width='200px' height='200px' src='" + fetchImgUrlOfChar(iname) + "'></img>";

		document.getElementById("ssnetMouseOverPanel").innerHTML = infoTextAsOne;
		document.getElementById("ssnetMouseOverPanel").style.top = event.clientY + 10;
		document.getElementById("ssnetMouseOverPanel").style.left = event.clientX + 10;

		//highlight only that particular episode on that particular character
		document.getElementById('ovtIDr' + row + 'c' + col).style.backgroundColor = '#A61000';


	} //end if params were not null
} //end show info box


function ssnetFillListOfEpisodeNames(ssnetCharArrayInfo) {

	var totalNumberOfEpisodeAppearance = 0;
	for(var i = 0; i < ssnetCharArrayInfo[7].length; i++){
		if(ssnetCharArrayInfo[7][i]){totalNumberOfEpisodeAppearance++;}
	}

	document.getElementById('ssnetListOfEpisodesByName').innerHTML = '<br><br>' + ssnetCharArrayInfo[0] + " episode appearances("+totalNumberOfEpisodeAppearance+"):<br>";


	//for some strange reason this is needed. otherwise the /select line will be added before the options.
	var contentForDiv = "";
	contentForDiv +=
		"<select id='ssnetEpNameList' onchange=\"ssnetEpNameClick()\"  multiple=\"multiple\" size=\"10\" style=\"width:300px\">\n"; 

	for(var i = 0; i < ssnetCharArrayInfo[7].length; i++){
		if(ssnetCharArrayInfo[7][i]){
			contentForDiv += "<option>"+ allEpisodesByNumber[i][0]+ "</option>\n";
		}
	}

	contentForDiv+= '</select>';
	document.getElementById('ssnetListOfEpisodesByName').innerHTML += contentForDiv;

}//ssnetFillListOfEpisodeNames

function ssnetEpNameClick() {
	console.log("an episode name was clicked:" + document.getElementById('ssnetEpNameList').value);
}

function ssnetFillListOfVoiceActors(ssnetCharArrayInfo){
	var contentForDiv = "";

	contentForDiv += "<br><br>" + ssnetCharArrayInfo[0] + "'s Voice Actor(s):<br>";
	contentForDiv +=
		"<select id='ssnetVaNameList' onchange=\"ssnetVaNameClick()\"  multiple=\"multiple\" style=\"width:300px; height:100px\">\n"; 

	for(var i = 0; i < ssnetCharArrayInfo[6].length; i++){
		contentForDiv += "<option>"+ ssnetCharArrayInfo[6][i] +  "</option>\n";
	}

	contentForDiv+= '</select>';
	document.getElementById('ssnetVoiceActors').innerHTML = contentForDiv;

} //end  ssnetFillListOfVoiceActors

function ssnetVaNameClick() {
	console.log("a va name was clicked:" + document.getElementById('ssnetVaNameList').value);
}


function ssnetFillListOfTopWith(ssnetCharArrayInfo) {

	var indexOfGivenCharacter = 0;

	for(var i = 0; i < allCharByAppearAmt.length; i++){
		if(ssnetCharArrayInfo[0] == allCharByAppearAmt[i][0]){
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

	contentForDiv += "Those commonly with "+ssnetCharArrayInfo[0]+" in an episode:<br>";
	contentForDiv +=
		"<select id='ssnetTop10List' onchange=\"ssnetTopNameClick(1)\"  multiple=\"multiple\" size=\"11\" style=\"width:300px\">\n"; 

	for(var i = 0; i < 10; i++){
		contentForDiv += "<option>"+  socialNetOfChars[top20epSharedChars[i]][0] + "("+ socialNetOfChars[indexOfGivenCharacter][2][top20epSharedChars[i]] + ")</option>";
	}
	contentForDiv += "</select>";
	document.getElementById('ssnetTop10CharsWith').innerHTML = contentForDiv;

	contentForDiv = "<br>\n";
	contentForDiv +=
		"<select id='ssnetTop20List' onchange=\"ssnetTopNameClick(2)\"  multiple=\"multiple\" size=\"11\" style=\"width:300px\">\n"; 

	for(var i = 10; i < 20; i++){
		contentForDiv += "<option>"+  socialNetOfChars[top20epSharedChars[i]][0] + "("+ socialNetOfChars[indexOfGivenCharacter][2][top20epSharedChars[i]] + ")</option>";
	}
	contentForDiv += "</select>";
	document.getElementById('ssnetTop20CharsWith').innerHTML = contentForDiv;



} //end ssnetFillListOfTopWith


function ssnetTopNameClick(whichList) {
	//if came from list 1
	if(1 == whichList){
		console.log("top name selected:" + document.getElementById('ssnetTop10List').value);
	}
	//if came from list 2
	if(2 == whichList){
		console.log("top name selected:" + document.getElementById('ssnetTop20List').value);
	}

}


function ssnetShowMouseClickPanel(epOfClick, seasonOfClick) {
	var infoTextAsOne = "";

	infoTextAsOne += "Click to <button onclick=\"ssnetHideMouseClickPanel()\">Hide</button> panel<br>";
	infoTextAsOne += "Search by episode <button onclick=\"ssnetMouseClickEp("+epOfClick+")\">"+epOfClick+"</button><br>";
	infoTextAsOne += "Search by season <button onclick=\"ssnetMouseClickSeason("+seasonOfClick+")\">"+seasonOfClick+"</button><br>";

	document.getElementById("ssnetMouseClickPanel").innerHTML = infoTextAsOne;
	document.getElementById("ssnetMouseClickPanel").style.visibility = 'visible';
	document.getElementById("ssnetMouseClickPanel").style.backgroundColor = '#BF5B30';
	document.getElementById("ssnetMouseClickPanel").style.top = event.clientY + 10;
	document.getElementById("ssnetMouseClickPanel").style.left = event.clientX + 10;
}

function ssnetHideMouseClickPanel() {
	document.getElementById("ssnetMouseClickPanel").style.visibility = 'hidden';
}

function ssnetMouseClickEp(epOfClick) {
	console.log('clicked on the popup panel for episode:' + epOfClick);
}

function ssnetMouseClickSeason(seasonOfClick) {
	console.log('clicked on the popup panel for season:' + seasonOfClick);
}

