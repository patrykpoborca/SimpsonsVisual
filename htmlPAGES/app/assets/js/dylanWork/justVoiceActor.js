
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


divs that will be created for single selection voice actor view start with "ssva"
intention is to prevent accidentally creating a div that already exists.

*/


dkGlobalOverviewTable.ssvaCharIndexesOfVa;


//Assumes that given va is a string with the name or number as an index.
function givenAVoiceActorFilloutTheView(divIdToFill, voiceActorToUse) {
	document.getElementById(divIdToFill).innerHTML = "";

	var indexOfVa = -1;
	var indexOfVaOnAppearCount = -1;

	dkGlobalOverviewTable.divPassing = divIdToFill;


	if(typeof voiceActorToUse == "number")
		{ indexOfVa =  voiceActorToUse;}
	else if(typeof voiceActorToUse == "string"){
		voiceActorToUse = voiceActorToUse.trim();
		for(var i = 0; i < voiceActorsByCharAmount.length; i++){
			if(voiceActorsByCharAmount[i][0] == voiceActorToUse){
				indexOfVa = i;
				break;
			}
		}
	}//end if voice actor is a string.





	//only make the character page if there was a name match
	if(indexOfVa > -1){

		for(var i = 0; i < allVoiceActorsByAppearanceCount.length; i++){
			if(voiceActorsByCharAmount[indexOfVa][0] == allVoiceActorsByAppearanceCount[i][0]){
				indexOfVaOnAppearCount = i;
				break;
			}
		}

		dkGlobalOverviewTable.ssvaCharIndexesOfVa = [];

		//grab each of the va's characters
		for(var i = 0; i < voiceActorsByCharAmount[indexOfVa][1].length; i++){

			for(var c = 0; c < allCharByAppearAmt.length; c++){
				if(allCharByAppearAmt[c][0] == voiceActorsByCharAmount[indexOfVa][1][i]){
					dkGlobalOverviewTable.ssvaCharIndexesOfVa.push(c); //index of the character
					break;
				}
			}

		}//end going through each fo the va's roles.

		//fill in divs for the single selection character view (ssva)
		createDivsForssva(divIdToFill);


		document.getElementById('ssvaToOverviewButton').innerHTML = '<button onclick="backToOverviewFromVoiceActor(\''+divIdToFill+'\')">Return to overview</button></p>';
		document.getElementById('ssvaName').innerHTML =
		 '<center><h1>Voice Actor:&nbsp' + allVoiceActorsByAppearanceCount[indexOfVaOnAppearCount][0] +"</h1></center>";
		document.getElementById('ssvaAppearTitle').innerHTML = 
		'<b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspAppearances over the seasons:</b>';
		document.getElementById('ssvaTableOfAppear').innerHTML = 
		'table of appear';
		document.getElementById('ssvaListOfEpisodesByName').innerHTML = 
		'episodes by name';
		document.getElementById('ssvaCharacters').innerHTML = 
		'Characters by the VA';
		document.getElementById('ssvaMouseOverPanel').innerHTML = 
		'mouse over';
		document.getElementById('ssvaMouseClickPanel').innerHTML = 
		'mouse click';
		
		ssvaFillTable(indexOfVa, indexOfVaOnAppearCount);
		ssvaFillListOfEpisodeNames(indexOfVa, indexOfVaOnAppearCount);
		ssvaFillListOfCharacters();

		/*
		//try and render the characters now, but with an episode width change.
		ssvaFillTable('ssvaTableOfAppear', charsInThisSeason, false);

		//edit the divs
		document.getElementById('ssvaToOverviewButton').innerHTML = '<button onclick="backToOverviewFromCharacter(\''+divIdToFill+'\')">Return to overview</button></p>';
		document.getElementById('ssvaName').innerHTML = '<p><h2 style="float:left">Character:</h2><h1 style="float: left">&nbsp&nbsp'+nameOfCharacter+'</h1>  <h3 style="float: left; margin-top: 30px;">&nbsp&nbsp('+charsInThisSeason[0][1]+')</h3></p>';
		document.getElementById('ssvaAppearTitle').innerHTML = '<br><br><br><br><b>Appearances over the seasons:</b>';
		

		document.getElementById('ssvaListOfEpisodesByName').innerHTML = '<h5>Need a function for list of episodes by name, may want links?</h5>';
		ssvaFillListOfEpisodeNames(charsInThisSeason[0]);
		document.getElementById('ssvaVoiceActors').innerHTML = '<h5>need a function for list of voice actors, may want links?</h5>';
		ssvaFillListOfVoiceActors(charsInThisSeason[0]);
		document.getElementById('ssvaTop10CharsWith').innerHTML = '<h5>top 10 chars with</h5>';
		document.getElementById('ssvaTop20CharsWith').innerHTML = '<h5>top 20 chars with</h5>';
		ssvaFillListOfTopWith(charsInThisSeason[0]);
		document.getElementById('ssvaPicture').innerHTML = "<img width='200px' height='300px' src='" + fetchImgUrlOfChar(nameOfCharacter) + "'></img>";
		document.getElementById('ssvaNetworkMapButton').innerHTML = '<button onclick="ssvaGoToSocialNet(\''+ charsInThisSeason[0][0] +'\')">View Network Map</button></p>';
		*/


	}
	else{
		console.log("there was no match for the given character name.");
	}
	//hidePopupControlBox(); //call no longer needed since div will create the pop and mouse overs divs.
} //end findCharactersInGivenSeasonAndPopulateInteractiveTable


/* Currently the is the idea that character view will have at the top return to over view button
Then Common name (Full Name)

*/
function createDivsForssva(divIdToFill) {

	document.getElementById(divIdToFill).innerHTML += '<div id="ssvaToOverviewButton"></div>\n';
	document.getElementById(divIdToFill).innerHTML +=
	 '<div id="ssvaName"></div>\n';
	document.getElementById(divIdToFill).innerHTML += '<div id="ssvaAppearTitle"></div>\n';
	document.getElementById(divIdToFill).innerHTML += '<div id="ssvaTableOfAppear"></div>\n';
	document.getElementById(divIdToFill).innerHTML +=
	'<div id="ssvaListOfEpisodesByName" style="position:absolute;top:230;left:40"></div>\n';
	document.getElementById(divIdToFill).innerHTML += 
		'<div id="ssvaCharacters" style="position:absolute;top:230;left:360;width:920;height:400;overflow-y:scroll;"'+
		' onmouseout="vahideInfoBox()" ></div>\n';
	document.getElementById(divIdToFill).innerHTML += 
		'<div id="ssvaMouseOverPanel" style="position:absolute;top:500;left:850;visibility: hidden;border: 1px solid black;"></div>\n';
	document.getElementById(divIdToFill).innerHTML += 
		'<div id="ssvaMouseClickPanel" style="position:absolute;top:500;left:850;visibility: hidden;border: 1px solid black;"></div>\n';

}

//temporary function to return back to overview. assumes first 10 character grab
function backToOverviewFromVoiceActor(divIdToFill){
	var charList = [];
	for(var i =0; i < 40; i++){
		charList.push(allCharByAppearAmt[i]);
	}
	fillOverviewTable(divIdToFill, charList, true);
} //end


/*
Given a div to fill, array of character, highlight, and episode size, then can make div.
enableHighlight should be a boolean.

*/
function ssvaFillTable(vaiByCharAmt, vaiByAppearAmt) {
	var contents = "";
	contents += "<table onmouseout='vahideInfoBox()' onmousemove='vashowInfoBox()'>\n";
	contents += '<tr><th colspan="3">Name</th><th>#ofEp</th>';
	var lineContent = "";

	//determine how many episodes are being tracked to figure out how big to make the table.
	var totaleps = allCharByAppearAmt[0][7].length;
	//console.log("Double check this, the total eps should be 541:" + totaleps);

	dkGlobalOverviewTable.totalEps = totaleps;

	//make one header tag per season. it should span as many columns as that season has episodes.
	for(var i = 0; i < dkGlobalOverviewTable.arrayOfEpisodesInSeasons.length; i++ ){
		lineContent += '<th colspan="' + dkGlobalOverviewTable.arrayOfEpisodesInSeasons[i] + '">' + (i+1) + "</th>\n"
	}
	contents += lineContent + "</tr>";

	lineContent = "";

	var appearCounter = 0;
	for(var epc = 0; epc < allVoiceActorsByAppearanceCount[vaiByAppearAmt][2].length;epc++){
		if(allVoiceActorsByAppearanceCount[vaiByAppearAmt][2][epc] > 0){appearCounter++;}
	}

	//contain the names on one line
	var shorterName = allVoiceActorsByAppearanceCount[vaiByAppearAmt][0];
	if(shorterName.search(" ") != -1){ shorterName = shorterName.substring(0, shorterName.search(" "));	}
	if(shorterName.length > 7) { shorterName = shorterName.substring(0,7);}

	lineContent += '<tr><th class="name" colspan="3">' +
	 shorterName +'</th><th>'+appearCounter+'</th>\n';
	

	//fill out that array for the character.
	//chars [  name, full, first appear, alias, jobs, relatives, voice actors, episode appearances   ]

	//for each of the possible episodes being shown.
	for(var e = 1; e <= totaleps; e++ ){

		lineContent+= '<td id="ovtIDr0c' + e + '" ';

		//this would be a check if char is in that eps.
		if(allVoiceActorsByAppearanceCount[vaiByAppearAmt][2][e-1] > 0){  lineContent += '<td class="inThatEps '; }
		else{ lineContent += '<td class="notInThatEps '; }

		lineContent += 'ovtRow0';
		lineContent += ' ovtCol' + getSeasonOfEpisodeNumber(e); //this needs to be season
		lineContent += 
		'" onmouseout="vahideInfoBox('+e+')" onmousemove="vashowInfoBox(' +e+
			',' + vaiByCharAmt + "," + vaiByAppearAmt + ')" ';

		lineContent += 'onclick="ssvaShowMouseClickPanel('+e+
			',' + vaiByCharAmt + "," + vaiByAppearAmt +' )"'+ '></th>\n';
		

	}
	lineContent += "</tr>\n";

	contents += lineContent;
	contents += "</table>\n";

	document.getElementById('ssvaTableOfAppear').innerHTML = contents;

	//seed the color
	var row = 0;
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



	$(".inThatEps").css("border", "0px");
	$(".notInThatEps").css("border", "0px");


} //end filloverview table


function vahideInfoBox(col) {

	if(col != null){
		document.getElementById("ssvaMouseOverPanel").style.visibility = 'hidden';

		if(document.getElementById('ovtIDr0c' + col).className.search('notInThatEps') >= 0){
			document.getElementById('ovtIDr0c' + col).style.backgroundColor = dkGlobalOverviewTable.notInEpsColor;
		}
		else{  document.getElementById('ovtIDr0c' + col).style.backgroundColor = dkGlobalOverviewTable.inEpsColor;}
	}

}


function vashowInfoBox(iepisode, vaiByCharAmt, vaiByAppearAmt) {

	if(iepisode != null){

		document.getElementById("ssvaMouseOverPanel").style.visibility = 'visible';
		var infoTextAsOne = "&nbsp&nbsp" + allEpisodesByNumber[iepisode-1][0] + "(" +iepisode+ ")&nbsp&nbsp<br>";

		var content = "";

		for(var i = 0; i < dkGlobalOverviewTable.ssvaCharIndexesOfVa.length; i++){
			if(allCharByAppearAmt[dkGlobalOverviewTable.ssvaCharIndexesOfVa[i]][7][iepisode-1]){
				content += "&nbsp&nbsp" + allCharByAppearAmt[dkGlobalOverviewTable.ssvaCharIndexesOfVa[i]][0] + "&nbsp&nbsp<br>";
			}
		}

		if(  ! (content.length > 0) ) {
			content = "&nbsp&nbspNo characters&nbsp&nbsp";
		}

		infoTextAsOne += content;
		//infoTextAsOne += "<img width='200px' height='200px' src='" + fetchImgUrlOfChar(iname) + "'></img>";

		document.getElementById("ssvaMouseOverPanel").innerHTML = infoTextAsOne;
		document.getElementById("ssvaMouseOverPanel").style.top = event.clientY + 10;
		document.getElementById("ssvaMouseOverPanel").style.backgroundColor = "white";
		document.getElementById("ssvaMouseOverPanel").style.opacity = 0.8;

		if(1100 < event.clientX + 10)
		{document.getElementById("ssvaMouseOverPanel").style.left = 1100;}
		else {document.getElementById("ssvaMouseOverPanel").style.left = event.clientX + 10;}

		//highlight only that particular episode on that particular character
		document.getElementById('ovtIDr0c' + iepisode).style.backgroundColor = '#A61000';


	} //end if params were not null
} //end show info box


function ssvaFillListOfEpisodeNames(vaiByCharAmt, vaiByAppearAmt) {

	var appearCounter = 0;
	//for some strange reason this is needed. otherwise the /select line will be added before the options.
	var contentForDiv = "";
	contentForDiv +=
		"<select id='ssvaEpNameList' onchange=\"ssvaEpNameClick()\"  multiple=\"multiple\" size=\"20\" style=\"width:300px\">\n"; 

	for(var epc = 0; epc < allVoiceActorsByAppearanceCount[vaiByAppearAmt][2].length;epc++){
		if(allVoiceActorsByAppearanceCount[vaiByAppearAmt][2][epc] > 0){
			appearCounter++;
			contentForDiv += "<option>&nbsp&nbsp"+ allEpisodesByNumber[epc][0]+ "</option>\n";
		}
	}
	contentForDiv+= '</select>';	
	contentForDiv = "<b>&nbspEpisodes this voice actor was in("+appearCounter+"):</b><br>" + contentForDiv;
	document.getElementById('ssvaListOfEpisodesByName').innerHTML = contentForDiv;


}//ssvaFillListOfEpisodeNames


//VIEWCHANGE
function ssvaEpNameClick() {
	var nameToUse = document.getElementById('ssvaEpNameList').value;
	console.log("an episode name was clicked:" + nameToUse);
	givenAnEpisodeFillADiv(dkGlobalOverviewTable.divPassing, nameToUse); 
}




function ssvaFillListOfCharacters(){
	var contentForDiv = "";

	//	dkGlobalOverviewTable.ssvaCharIndexesOfVa;

	contentForDiv += "<b>Characters by this voice actor("+dkGlobalOverviewTable.ssvaCharIndexesOfVa.length+"):</b><br>";
	//contentForDiv +=
	//	"<select id='ssvaCharNameList' onchange=\"ssvaCharNameClick()\"  multiple=\"multiple\" style=\"width:300px; height:100px\">\n"; 

	//contentForDiv += "";
	for(var i = 0; i < Math.floor(dkGlobalOverviewTable.ssvaCharIndexesOfVa.length/2); i++){
		contentForDiv += "<div onclick='ssvaCharNameClick("+
			dkGlobalOverviewTable.ssvaCharIndexesOfVa[i]+
			")' onmousemove='ssvaCharPicHover("+dkGlobalOverviewTable.ssvaCharIndexesOfVa[i]
			+")' style='float:left'><center><img width='100px' height='150px' src='" +
			fetchImgUrlOfChar(allCharByAppearAmt[dkGlobalOverviewTable.ssvaCharIndexesOfVa[i]][0]) +
			 "'></img></center></div>\n";
	}
	contentForDiv += "<br>\n";
	for(var i = Math.floor(dkGlobalOverviewTable.ssvaCharIndexesOfVa.length/2); i < dkGlobalOverviewTable.ssvaCharIndexesOfVa.length; i++){
		contentForDiv += "<div onclick='ssvaCharNameClick("+
			dkGlobalOverviewTable.ssvaCharIndexesOfVa[i]+
			")' onmousemove='ssvaCharPicHover("+dkGlobalOverviewTable.ssvaCharIndexesOfVa[i]
			+")' style='float:left'><center><img width='100px' height='150px' src='" +
			fetchImgUrlOfChar(allCharByAppearAmt[dkGlobalOverviewTable.ssvaCharIndexesOfVa[i]][0]) +
			 "'></img></center></div>\n";
	}

	//contentForDiv+= '</scroll>';
	document.getElementById('ssvaCharacters').innerHTML = contentForDiv;

} //end  ssvaFillListOfVoiceActors


//VIEWCHANGE
function ssvaCharNameClick(indexOfGivenCharacter) {
	var nameToUse = allCharByAppearAmt[indexOfGivenCharacter][0];
	console.log("a char name was clicked:" + nameToUse);
	givenACharacterNameFilloutTheView(dkGlobalOverviewTable.divPassing, nameToUse); 
}

function ssvaCharPicHover(indexOfGivenCharacter) {

	if(indexOfGivenCharacter != null){
		document.getElementById("ssvaMouseOverPanel").style.visibility = 'visible';
		document.getElementById("ssvaMouseOverPanel").innerHTML = 
			allCharByAppearAmt[indexOfGivenCharacter][0];

		document.getElementById("ssvaMouseOverPanel").style.top = event.clientY + 10;
		document.getElementById("ssvaMouseOverPanel").style.backgroundColor = "white";
		document.getElementById("ssvaMouseOverPanel").style.opacity = 0.8;

		if(event.clientY + 10 > 1000){
		document.getElementById("ssvaMouseOverPanel").style.left = 1000;
		}else{ document.getElementById("ssvaMouseOverPanel").style.left = event.clientX + 10; }

	}
}



















function ssvaShowMouseClickPanel(epOfClick, vaiByCharAmt, vaiByAppearAmt) {
	var infoTextAsOne = "";

	infoTextAsOne += "&nbsp&nbsp<button onclick=\"ssvaHideMouseClickPanel()\">X</button><br>";
	infoTextAsOne += "&nbsp&nbspSearch by episode <button onclick=\"ssvaMouseClickEp("+epOfClick+")\">"+epOfClick+"</button><br>";
	infoTextAsOne += "&nbsp&nbspSearch by season &nbsp&nbsp<button onclick=\"ssvaMouseClickSeason("+getSeasonOfEpisodeNumber(epOfClick)+")\">"+getSeasonOfEpisodeNumber(epOfClick)+"</button><br>";

	for(var i = 0; i < dkGlobalOverviewTable.ssvaCharIndexesOfVa.length; i++){
		if(allCharByAppearAmt[dkGlobalOverviewTable.ssvaCharIndexesOfVa[i]][7][epOfClick-1]){
		infoTextAsOne += "&nbsp&nbspSearch by char &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick=\"ssvaMouseClickChar("+
			dkGlobalOverviewTable.ssvaCharIndexesOfVa[i]+")\">"+
			allCharByAppearAmt[dkGlobalOverviewTable.ssvaCharIndexesOfVa[i]][0]+"</button>&nbsp&nbsp<br>";
		}
	}



	document.getElementById("ssvaMouseClickPanel").innerHTML = infoTextAsOne;
	document.getElementById("ssvaMouseClickPanel").style.visibility = 'visible';
	document.getElementById("ssvaMouseClickPanel").style.backgroundColor = '#BF5B30';
	document.getElementById("ssvaMouseClickPanel").style.top = event.clientY + 10;

	if(1100 < event.clientX + 10)
	{document.getElementById("ssvaMouseClickPanel").style.left = 1100;}
	else {document.getElementById("ssvaMouseClickPanel").style.left = event.clientX + 10;}
}

function ssvaHideMouseClickPanel() {
	document.getElementById("ssvaMouseClickPanel").style.visibility = 'hidden';
}

//VIEWCHANGE
function ssvaMouseClickEp(epOfClick) {
	console.log('clicked on the popup panel for episode:' + epOfClick);
	givenAnEpisodeFillADiv(dkGlobalOverviewTable.divPassing, epOfClick-1); //-1 for index
}

//VIEWCHANGE
function ssvaMouseClickSeason(seasonOfClick) {
	console.log('clicked on the popup panel for season:' + seasonOfClick);
	findCharactersInGivenSeasonAndPopulateInteractiveTable(dkGlobalOverviewTable.divPassing, seasonOfClick);
}

//VIEWCHANGE
function ssvaMouseClickChar(indexOfGivenCharacter) {
	console.log('clicked on the popup panel for character:' + allCharByAppearAmt[indexOfGivenCharacter][0]);
	givenACharacterNameFilloutTheView(dkGlobalOverviewTable.divPassing, allCharByAppearAmt[indexOfGivenCharacter][0]);
}
