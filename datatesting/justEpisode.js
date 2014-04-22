
/*


divs that will be created for single selection character view start with ssep


*/







//This method attempts to be lenient with whether or not episode is a number or the name.
//number usage assumes index.
function givenAnEpisodeFillADiv(divIdToFill, episodeToUse) {
	document.getElementById(divIdToFill).innerHTML = ""; //remove all content in the div currently.

	dkGlobalOverviewTable.divPassing = divIdToFill;

	var episodeIndex = -1;

	//number usage assumes index
	if( typeof episodeToUse == "number"){ episodeIndex = episodeToUse; }
	else if(typeof episodeToUse == "string"){
		for(var i = 0; i < allEpisodesByNumber.length; i++){
			if(allEpisodesByNumber[i][0] == episodeToUse){
				episodeIndex = i;
			}
		}
	}

	//only fill the div if a match was found.
	if(episodeIndex != -1){

		//fill in divs for the single selection character view (sscv)
		createDivsForSsep(divIdToFill);


		//edit the created divs

		document.getElementById('ssepToOverviewButton').innerHTML =
			'<button onclick="backToOverviewFromEpisode()">Return to overview</button>'+
			'<button onclick="backToSeasonFromEpisode('+episodeIndex+')">Go to Season of ' + getSeasonOfEpisodeNumber(episodeIndex+1) + '</button>';
		document.getElementById('ssepName').innerHTML = '<h1>Episode ' +(episodeIndex + 1)+ ':' + allEpisodesByNumber[episodeIndex][0] + '</h1>';
		document.getElementById('ssepCharactersIn').innerHTML = 'Characters in the episode';
		document.getElementById('ssepUniqueCharactersIn').innerHTML = 'Unique Characters';
		ssepFillListCharactersInAndUnique(episodeIndex);
		document.getElementById('ssepVoiceActorsIn').innerHTML = 'Voice Actors in the episode';
		document.getElementById('ssepUniqueVoiceActorsIn').innerHTML = 'Unique Voice Actors in the episode';
		ssepFillListVoiceActorsInAndUnique(episodeIndex);
		//document.getElementById('ssepVoiceActorPie').innerHTML = 'VoiceActor pie';

		document.getElementById('ssepLocationsIn').innerHTML = 'Locations in the episode';
		document.getElementById('ssepUniqueLocationsIn').innerHTML = 'Unique Locations in the episode';
		ssepFillListLocationsInAndUnique(episodeIndex);
		

	}
	else{
		console.log("there was no match for the given episode:" + episodeToUse);
	}
	//hidePopupControlBox(); //because there is a chance got here from the overview.
	//Note: hidepopup will likely error but because it errors at the end of the function it doesn't influence creation
} //end findCharactersInGivenSeasonAndPopulateInteractiveTable


/* Seed the div with more divs.
This controls the positioning of the inner divs. And there seems to be a need to have the inner html
set before manipulating it. Had an odd error where I made a div in the innerHTML and on the next line tried
to access it, but there was an error stating that the div didn't exist yet. Unsure why.
*/
function createDivsForSsep(divIdToFill) {

	document.getElementById(divIdToFill).innerHTML += '<div id="ssepToOverviewButton"></div>\n';
	document.getElementById(divIdToFill).innerHTML += 
		'<div id="ssepName" style="position:absolute;top:50;left:50;"></div>\n';
	document.getElementById(divIdToFill).innerHTML +=
		'<div id="ssepCharactersIn" style="position:absolute;top:190;left:50;border: 1px solid black"></div>\n';
	document.getElementById(divIdToFill).innerHTML +=
		'<div id="ssepVoiceActorsIn" style="position:absolute;top:190;left:400;border: 1px solid black"></div>\n';
	document.getElementById(divIdToFill).innerHTML +=
		'<div id="ssepUniqueVoiceActorsIn" style="position:absolute;top:500;left:400;border: 1px solid black"></div>\n';
	document.getElementById(divIdToFill).innerHTML +=
		'<div id="ssepUniqueCharactersIn" style="position:absolute;top:500;left:50;border: 1px solid black"></div>\n';
	document.getElementById(divIdToFill).innerHTML +=
		'<div id="ssepVoiceActorPie" style="position:absolute;top:150;left:750;border: 1px solid black"></div>\n';
	document.getElementById(divIdToFill).innerHTML +=
		'<div id="ssepLocationsIn" style="position:absolute;top:550;left:725;border: 1px solid black"></div>\n';
	document.getElementById(divIdToFill).innerHTML +=
		'<div id="ssepUniqueLocationsIn" style="position:absolute;top:550;left:1035;border: 1px solid black"></div>\n';

} // end createDivsForSsep


//Will create a list of characters in the episode
function ssepFillListCharactersInAndUnique(episodeIndex) {
	var contentForDiv = "";

	var uniqueCharsForThisEp = [];
	var genericCounterSsep = 0;

	contentForDiv +=
		"<select id='ssepListOfCharactersIn' onchange=\"ssepCharacterInClick()\"  multiple=\"multiple\" style=\"width:300px; height:280px\">\n"; 
	for(var i = 0; i < allCharByAppearAmt.length; i++){
		if(allCharByAppearAmt[i][7][episodeIndex]){
			contentForDiv += "<option>"+ allCharByAppearAmt[i][0] +  "</option>\n";
			genericCounterSsep++;
			if(socialNetOfChars[i][1] == 1){
				uniqueCharsForThisEp.push(allCharByAppearAmt[i][0]);
			}
		}
	}
	contentForDiv+= '</select>';

	contentForDiv = "Characters in this episode("+genericCounterSsep+"):<br>" + contentForDiv;
	document.getElementById('ssepCharactersIn').innerHTML = contentForDiv;


	contentForDiv = "";
	contentForDiv +=
		"<select id='ssepListOfUniqueCharacters' onchange=\"ssepUniqueCharactersClick()\"  multiple=\"multiple\" style=\"width:300px; height:100px\">\n"; 
	for(var i = 0; i < uniqueCharsForThisEp.length; i++){
		contentForDiv += "<option>"+ uniqueCharsForThisEp[i] +  "</option>\n";
	}
	contentForDiv+= '</select>';
	contentForDiv = "Unique Characters in this episode("+uniqueCharsForThisEp.length+"):<br>" + contentForDiv;
	document.getElementById('ssepUniqueCharactersIn').innerHTML = contentForDiv;



}//end ssepFillCharactersIn

function ssepCharacterInClick() {
	console.log("CharacterInList Selection:" + document.getElementById('ssepListOfCharactersIn').value);
	givenACharacterNameFilloutTheView(dkGlobalOverviewTable.divPassing, document.getElementById('ssepListOfCharactersIn').value);
}

function ssepUniqueCharactersClick() {
	console.log("UniqueCharacterList Selection:" + document.getElementById('ssepListOfUniqueCharacters').value);
	givenACharacterNameFilloutTheView(dkGlobalOverviewTable.divPassing, document.getElementById('ssepListOfUniqueCharacters').value);
}

function ssepFillListVoiceActorsInAndUnique(episodeIndex){
	var contentForDiv = "";
	var uniqueVAForThisEp = [];
	var voiceActorIndexListForPie = [];

	var genericCounterSsep = 0;

	contentForDiv +=
		"<select id='ssepListOfVoiceActorsIn' onchange=\"ssepVoiceActorsInClick()\"  multiple=\"multiple\" style=\"width:300px; height:280\">\n"; 
	for(var i = 0; i < allVoiceActorsByAppearanceCount.length; i++){
		if(allVoiceActorsByAppearanceCount[i][2][episodeIndex] > 0){
			contentForDiv += "<option>"+ allVoiceActorsByAppearanceCount[i][0] +  "</option>\n";
			genericCounterSsep++;
			voiceActorIndexListForPie.push(i);
			if(allVoiceActorsByAppearanceCount[i][1] == allVoiceActorsByAppearanceCount[i][2][episodeIndex]){
				uniqueVAForThisEp.push(allVoiceActorsByAppearanceCount[i][0]);
			}
		}
	}
	contentForDiv+= '</select>';
	contentForDiv = "Voice Actors in this episode("+genericCounterSsep+"):<br>" + contentForDiv;
	document.getElementById('ssepVoiceActorsIn').innerHTML = contentForDiv;

	contentForDiv = "";
	contentForDiv +=
		"<select id='ssepListOfUniqueVoiceActors' onchange=\"ssepUniqueVoiceActorsClick()\"  multiple=\"multiple\" style=\"width:300px; height:100px\">\n"; 
	for(var i = 0; i < uniqueVAForThisEp.length; i++){
		contentForDiv += "<option>"+ uniqueVAForThisEp[i] +  "</option>\n";
	}
	contentForDiv+= '</select>';
	contentForDiv = "Unique Voice Actors in this episode("+uniqueVAForThisEp.length+"):<br>" + contentForDiv;
	document.getElementById('ssepUniqueVoiceActorsIn').innerHTML = contentForDiv;
	ssepMakeVoiceActorPie(voiceActorIndexListForPie, episodeIndex);
} //end ssepFillListVoiceActorsInAndUnique

function ssepVoiceActorsInClick() {
	console.log("CharacterInList Selection:" + document.getElementById('ssepListOfVoiceActorsIn').value);
}

function ssepUniqueVoiceActorsClick() {
	console.log("UniqueCharacterList Selection:" + document.getElementById('ssepListOfUniqueVoiceActors').value);
}



function ssepFillListLocationsInAndUnique(episodeIndex){
	var contentForDiv = "";
	var uniqueLocationsForThisEp = [];
	var genericCounterSsep = 0;

	contentForDiv +=
		"<select id='ssepListOfLocationsIn' onchange=\"ssepLocationsInClick()\"  multiple=\"multiple\" style=\"width:300px; height:100px\">\n"; 


	for(var i = 0; i < locationsByAppearAmt.length; i++){
		for(var j = 0; j < locationsByAppearAmt[i][1].length;j++){
			if(locationsByAppearAmt[i][1][j] == allEpisodesByNumber[episodeIndex][0]){
				contentForDiv += "<option>"+ locationsByAppearAmt[i][0]+  "</option>\n";
				genericCounterSsep++;
				if(locationsByAppearAmt[i][1].length == 1){
					uniqueLocationsForThisEp.push(locationsByAppearAmt[i][0]);
				}
			}
		}
	}
	contentForDiv+= '</select>';
	contentForDiv = "Locations in this episode("+genericCounterSsep+"):<br>" + contentForDiv;
	document.getElementById('ssepLocationsIn').innerHTML = contentForDiv;

	contentForDiv = "";
	contentForDiv +=
		"<select id='ssepListOfUniqueLocationsIn' onchange=\"ssepUniqueLocationsInClick()\"  multiple=\"multiple\" style=\"width:300px; height:100px\">\n"; 
	for(var i = 0; i < uniqueLocationsForThisEp.length; i++){
		contentForDiv += "<option>"+ uniqueLocationsForThisEp[i]+  "</option>\n";
	}
	contentForDiv+= '</select>';
	contentForDiv = "Unique locations in this episode("+uniqueLocationsForThisEp.length+"):<br>" + contentForDiv;
	document.getElementById('ssepUniqueLocationsIn').innerHTML = contentForDiv;

} //end ssepFillListVoiceActorsInAndUnique

function ssepLocationsInClick() {
	console.log("CharacterInList Selection:" + document.getElementById('ssepListOfLocationsIn').value);
}

function ssepUniqueLocationsInClick() {
	console.log("UniqueCharacterList Selection:" + document.getElementById('ssepListOfUniqueLocationsIn').value);
}


function ssepMakeVoiceActorPie(indexOfVAforPie, episodeIndex) {

	var dpToInsertIntoPie = [];
	var objectMaker;
	var totalCharactersInThisEpisode = 0;

	for(var i = 0; i < indexOfVAforPie.length; i++){
		totalCharactersInThisEpisode += allVoiceActorsByAppearanceCount[indexOfVAforPie[i]][2][episodeIndex];
	}

	for(var i = 0; i < indexOfVAforPie.length; i++){
		objectMaker = {};
		objectMaker.y = allVoiceActorsByAppearanceCount[indexOfVAforPie[i]][2][episodeIndex];
		objectMaker.indexLabel = allVoiceActorsByAppearanceCount[indexOfVAforPie[i]][0].substring(0,6) + "("+allVoiceActorsByAppearanceCount[indexOfVAforPie[i]][2][episodeIndex]+"/" + totalCharactersInThisEpisode +") " + Math.floor((allVoiceActorsByAppearanceCount[indexOfVAforPie[i]][2][episodeIndex] / totalCharactersInThisEpisode * 100)) + "%";
		objectMaker.name = allVoiceActorsByAppearanceCount[indexOfVAforPie[i]][0];
		objectMaker.legendMarkerType = "circle";
		dpToInsertIntoPie.push(objectMaker);
	}


	var ssepChart = new CanvasJS.Chart("ssepVoiceActorPie",
		{
			title: {
				text: "Percentage of character roles by voice actors",
				fontFamily: 'arial',
				fontSize: 20
			},
			legend: {
				horizontalAlign: "right",
				verticalAlign: "center"
			},
			toolTip:{
				enabled: true
			},
			theme: "theme1",
			data:[ {
				type: "pie",
				indexLabelFontFamily: "arial",
				indexLabelFontSize: 10,
				indexLabelFontWeight: "bold",
				startAngle: 0,
				indexLabelFontColor: "Black",
				indexLabelLineColor: "Black",
				indexLabelPlacement: "inside",
				toolTipContent: "{name}: {y} characters",
				showInLegend: true,
				dataPoints: dpToInsertIntoPie
			} ]
		});

	ssepChart.render();

} //end ssepMakeVoiceActorPie


function backToOverviewFromEpisode() {
	var charList = [];
	for(var i =0; i < 40; i++){
		charList.push(allCharByAppearAmt[i]);
	}
	fillOverviewTable(dkGlobalOverviewTable.divPassing, charList, true);
}

function backToSeasonFromEpisode(episodeIndex) {
	console.log("Back to season currently disabled.");
	findCharactersInGivenSeasonAndPopulateInteractiveTable(dkGlobalOverviewTable.divPassing, getSeasonOfEpisodeNumber(episodeIndex + 1));
}

	