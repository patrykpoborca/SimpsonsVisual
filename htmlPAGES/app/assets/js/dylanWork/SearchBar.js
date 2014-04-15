
var searchGlobalVars = {};
searchGlobalVars.selectedCharEntries = new Array();
searchGlobalVars.selectedEpisodeEntries = new Array();

//character filter gobals
searchGlobalVars.cfMinAppear = 0;
searchGlobalVars.cfMaxAppear = 999;
searchGlobalVars.cfNameContain = "";

//episode filter globals
searchGlobalVars.efNameContain = "";
searchGlobalVars.efSeasonChoice = -1;


searchGlobalVars.seasonNumbers = [13, 22, 24, 22, 22, 25, 25, 25, 25, 23, 22, 21, 22, 22, 22, 21, 22, 22, 20, 21, 23, 22, 22, 22, 18] ;


console.log("Season numbers test:" + searchGlobalVars.seasonNumbers.length);
for(var i = 0; i < searchGlobalVars.seasonNumbers.length; i++){
	console.log(searchGlobalVars.seasonNumbers[i]);
}

function showSearch() {
	document.getElementById("clickToShowSearchBar").style.visibility = 'hidden';
	document.getElementById("searchArea").style.visibility = 'visible';
	document.getElementById("characterSearchSelectAndFilterControls").style.visibility = 'visible';
	document.getElementById("episodeSearchSelectAndFilterControls").style.visibility = 'visible';
}

function hideSearch() {
	document.getElementById("clickToShowSearchBar").style.visibility = 'visible';
	document.getElementById("searchArea").style.visibility = 'hidden';
	document.getElementById("characterSearchSelectAndFilterControls").style.visibility = 'hidden';
	document.getElementById("episodeSearchSelectAndFilterControls").style.visibility = 'hidden';
}

function testTheArrays() {
	var someEpisodes = "";
	var someCharacters = "";
	for(var i = 0; i < 30; i++){
		someEpisodes += allEpisodesByNumber[i][0] + "<br>";
		someCharacters += allCharByAppearAmt[i][0] + "<br>";
	}
	document.getElementById("testArrayContents").innerHTML = someEpisodes + "<br><br><br><br>" + someCharacters;
}

function filloutBaseSearchAndSelected() {
	var only20Entries = new Array();
	var tempEntry = "";
	var masterIndex = 0;
	var alreadySelected = false;

	console.log("before 20 seed");
	//find 20 entries to put in base search.
	for(var i = 0; i < 20; i++){
		tempEntry = allCharByAppearAmt[masterIndex][0]; //get next entry from master list
		alreadySelected = false; //will now pull double duty on valid entry.

		if(allCharByAppearAmt[masterIndex][7].length < searchGlobalVars.cfMinAppear ){
			alreadySelected = true;
		}
		else if(allCharByAppearAmt[masterIndex][7].length > searchGlobalVars.cfMaxAppear ){
			alreadySelected = true;
		}
		else if(   (searchGlobalVars.cfNameContain.length != 0 ) &&  (tempEntry.toUpperCase().search(searchGlobalVars.cfNameContain.toUpperCase()) == -1 )   ){
			alreadySelected = true;
		}
		//only do a filter check if 
		else{
			//check the entirey of selected char entries to make sure it hasn't already been selected.
			for(var j = 0; j < searchGlobalVars.selectedCharEntries.length; j++){
				if(searchGlobalVars.selectedCharEntries[j] == tempEntry){
					alreadySelected = true;
					break;
				}
			}
		}
		//already selected is whether or not it should be in the selection. Includes filter choices.
		if(!alreadySelected){
			only20Entries.push(tempEntry);
		}
		else{
			i--;  //this check did not fill a spot on the base selection
		}
		masterIndex++; //increase the master index.
		if(masterIndex >= allCharByAppearAmt.length){
			console.log("Filter matches depleted.");
			break;
		}
	} //end finding 20 values to put in the base selection


	var htmlToInsert = "";
	htmlToInsert = "<select id=\"baseSearchZoneEntries\" onchange=\"addToSelected()\"  multiple=\"multiple\" size=\"10\" style=\"width:200px\">"; 
	for(var i = 0; i < only20Entries.length; i++){
		htmlToInsert += "<option>"+ only20Entries[i] + "</option>\n";
	}
	htmlToInsert += "</select>";
	
	document.getElementById("baseSearchZone").innerHTML = htmlToInsert;

	htmlToInsert = "<select id=\"selectedZoneEntries\" onchange=\"removeFromSelected()\"  multiple=\"multiple\" size=\"10\" style=\"width:200px\">"; 
	for(var i = 0; i < searchGlobalVars.selectedCharEntries.length; i++){
		htmlToInsert += "<option>"+ searchGlobalVars.selectedCharEntries[i] + "</option>\n";
	}
	htmlToInsert += "</select>";
	document.getElementById("selectedZone").innerHTML = htmlToInsert;



	console.log("Remove this after testing:testDataDumpIntoCenter()");
	testDataDumpIntoCenter()
} //end filloutBaseSearchAndSelected


function addToSelected(){
	var entryJustSelected = document.getElementById("baseSearchZoneEntries").value;
	var addedEntry = false;
	var masterIndex = 0;
	var currentMasterEntry = "";

	//for each of the already selected entries. figure out where to insert.
	for(var i = 0; i < searchGlobalVars.selectedCharEntries.length; i++){

		currentMasterEntry = allCharByAppearAmt[masterIndex][0];

		//if the current master entry == the entry just selected add at this index.
		if(currentMasterEntry == entryJustSelected){
			searchGlobalVars.selectedCharEntries.splice(i,0,entryJustSelected);
			addedEntry = true;
			break;
		}

		if(   !(currentMasterEntry == searchGlobalVars.selectedCharEntries[i])     )   {
			i--;
		}


		masterIndex++;
	} //end for each selected entry
	if(!addedEntry){
		searchGlobalVars.selectedCharEntries.push(entryJustSelected);
	}
	filloutBaseSearchAndSelected();

} //end aaddToSelected

function removeFromSelected(){
	var indexOfElemToRemove = searchGlobalVars.selectedCharEntries.indexOf(document.getElementById("selectedZoneEntries").value );
	if(indexOfElemToRemove != -1){
		searchGlobalVars.selectedCharEntries.splice(indexOfElemToRemove, 1);
	}
	else{
		console.log('---ERROR:That selection didnt exist in selectedCharEntries array.');
	}
	filloutBaseSearchAndSelected();
} //end aaddToSelected


function testDataDumpIntoCenter() {
	var dataDumpText = "";
	var masterIndex = 0;

	for(var i = 0; i < searchGlobalVars.selectedCharEntries.length; i++){
		dataDumpText += "****************************************************<br>" ;
		dataDumpText += "Common Name: " + searchGlobalVars.selectedCharEntries[i] + "<br>";
	}
	dataDumpText += "<br><br>";

	document.getElementById("dataDump").innerHTML = dataDumpText;

} //end testDataDumpIntoCenter


function collectCharacterFilters() {

	searchGlobalVars.cfMaxAppear = document.getElementById("charFilterMaxAppear").value;
	console.log("Max value length:" + searchGlobalVars.cfMaxAppear.length);
	if( searchGlobalVars.cfMaxAppear.length > 0) {
		if(  Number(searchGlobalVars.cfMaxAppear) != NaN &&  Number(searchGlobalVars.cfMaxAppear) > 0 ) {
			searchGlobalVars.cfMaxAppear = Number(searchGlobalVars.cfMaxAppear) ;
		}
		else { searchGlobalVars.cfMaxAppear = 999;}
	}
	else { searchGlobalVars.cfMaxAppear = 999;}

	console.log("The value of max:" + searchGlobalVars.cfMaxAppear);

	searchGlobalVars.cfMinAppear = document.getElementById("charFilterMinAppear").value;
	console.log("Min value length:" + searchGlobalVars.cfMinAppear.length);
	if( searchGlobalVars.cfMinAppear.length > 0) {
		if(  Number(searchGlobalVars.cfMinAppear) != NaN &&  Number(searchGlobalVars.cfMinAppear) > 0 ) {
			searchGlobalVars.cfMinAppear = Number(searchGlobalVars.cfMinAppear) ;
		}
		else { searchGlobalVars.cfMinAppear = 0;}
	}
	else { searchGlobalVars.cfMinAppear = 0;}

	console.log("The value of min:" + searchGlobalVars.cfMinAppear);

	searchGlobalVars.cfNameContain =  document.getElementById("charFilterNameContain").value;

	console.log("The name contain value is:" + searchGlobalVars.cfNameContain);

	//console.log( "charFilterMinAppear:" +	document.getElementById("charFilterMinAppear").value +  ". Type is: " + (typeof document.getElementById("charFilterMinAppear").value )   + ". Convert to number:" + Number(document.getElementById("charFilterMinAppear").value ) );
	//console.log("charFilterNameContain:"  + document.getElementById("charFilterMaxAppear").value +  ". Type is: " + (typeof document.getElementById("charFilterMaxAppear").value )    );
	//console.log( "charFilterNameContain:" + 	document.getElementById("charFilterNameContain").value  +  ". Type is: " + (typeof document.getElementById("charFilterNameContain").value )   );

	filloutBaseSearchAndSelected();

} //end collectCharacterFilters


function showCharacterSearchSelectAndFilterControls(){
	document.getElementById("characterSearchSelectAndFilterControls").style.visibility = 'visible';
	document.getElementById("episodeSearchSelectAndFilterControls").style.visibility = 'hidden';
}


//**********************************************************************************************************
//This will be methods relating to episode select, search filter.

function showEpisodeSearchSelectAndFilterControls(){
	document.getElementById("characterSearchSelectAndFilterControls").style.visibility = 'hidden';
	document.getElementById("episodeSearchSelectAndFilterControls").style.visibility = 'visible';
}


 
function filloutEpisodeBaseSearchAndSelected() {
	var only20Entries = new Array();
	var tempEntry = "";
	var masterIndex = 0;
	var alreadySelected = false;

	console.log("before 20 seed");
	//find 20 entries to put in base search.
	for(var i = 0; i < 20; i++){
		tempEntry = allEpisodesByNumber[masterIndex][0]; //get next entry from master list
		alreadySelected = false; //will now pull double duty on valid entry.


		var epsMinRange = 0;
		var epsMaxRange = 999;
		var epsCounter = 0;

		//searchGlobalVars.seasonNumbers.length
		if(searchGlobalVars.efSeasonChoice != -1) {
			for(var i = 0; i < searchGlobalVars.efSeasonChoice; i++){
				epsCounter += searchGlobalVars.seasonNumbers[i];
			}
			epsMinRange = epsCounter;
			epsMaxRange = epsMinRange + searchGlobalVars.seasonNumbers[searchGlobalVars.efSeasonChoice];
		}

		if(   (searchGlobalVars.efNameContain.length != 0 ) &&  (tempEntry.toUpperCase().search(searchGlobalVars.efNameContain.toUpperCase()) == -1 )   ){
			alreadySelected = true;
		}
		//else if(   searchGlobalVars.efSeasonChoice != -1   ){

		//}
		/*
		if(allCharByAppearAmt[masterIndex][7].length < searchGlobalVars.cfMinAppear ){
			alreadySelected = true;
		}
		else if(allCharByAppearAmt[masterIndex][7].length > searchGlobalVars.cfMaxAppear ){
			alreadySelected = true;
		}
		//*/
		//only do a filter check if 
		else{
			//check the entirey of selected char entries to make sure it hasn't already been selected.
			for(var j = 0; j < searchGlobalVars.selectedEpisodeEntries.length; j++){
				if(searchGlobalVars.selectedEpisodeEntries[j] == tempEntry){
					alreadySelected = true;
					break;
				}
			}
		}
		//already selected is whether or not it should be in the selection. Includes filter choices.
		if(!alreadySelected){
			only20Entries.push(tempEntry);
		}
		else{
			i--;  //this check did not fill a spot on the base selection
		}
		masterIndex++; //increase the master index.
		if(masterIndex >= allEpisodesByNumber.length){
			console.log("Filter matches depleted.");
			break;
		}
	} //end finding 20 values to put in the base selection


	var htmlToInsert = "";
	htmlToInsert = "<select id=\"baseEpisodeSearchZoneEntries\" onchange=\"addToSelectedEpisodes()\"  multiple=\"multiple\" size=\"10\" style=\"width:200px\">"; 
	for(var i = 0; i < only20Entries.length; i++){
		htmlToInsert += "<option>"+ only20Entries[i] + "</option>\n";
	}
	htmlToInsert += "</select>";
	
	document.getElementById("episodeBaseSearchZone").innerHTML = htmlToInsert;

	htmlToInsert = "<select id=\"selectedEpisodeZoneEntries\" onchange=\"removeFromSelectedEpisodes()\"  multiple=\"multiple\" size=\"10\" style=\"width:200px\">"; 
	for(var i = 0; i < searchGlobalVars.selectedEpisodeEntries.length; i++){
		htmlToInsert += "<option>"+ searchGlobalVars.selectedEpisodeEntries[i] + "</option>\n";
	}
	htmlToInsert += "</select>";
	document.getElementById("selectedEpsZone").innerHTML = htmlToInsert;



	console.log("Remove this after testing:testDataDumpIntoCenter()");
	testDataDumpIntoCenter()
} //end filloutBaseSearchAndSelected


function addToSelectedEpisodes(){
	var entryJustSelected = document.getElementById("baseEpisodeSearchZoneEntries").value;
	var addedEntry = false;
	var masterIndex = 0;
	var currentMasterEntry = "";

	//for each of the already selected entries. figure out where to insert.
	for(var i = 0; i < searchGlobalVars.selectedEpisodeEntries.length; i++){

		currentMasterEntry = allEpisodesByNumber[masterIndex][0];

		//if the current master entry == the entry just selected add at this index.
		if(currentMasterEntry == entryJustSelected){
			searchGlobalVars.selectedEpisodeEntries.splice(i,0,entryJustSelected);
			addedEntry = true;
			break;
		}

		if(   !(currentMasterEntry == searchGlobalVars.selectedEpisodeEntries[i])     )   {
			i--;
		}


		masterIndex++;
	} //end for each selected entry
	//if gone through entire selected array and didn't come up with a match yet, then add newly selected entry to end of list.
	if(!addedEntry){
		searchGlobalVars.selectedEpisodeEntries.push(entryJustSelected);
	}
	filloutEpisodeBaseSearchAndSelected();

} //end aaddToSelected

function removeFromSelectedEpisodes(){
	var indexOfElemToRemove = searchGlobalVars.selectedEpisodeEntries.indexOf(document.getElementById("selectedEpisodeZoneEntries").value );
	if(indexOfElemToRemove != -1){
		searchGlobalVars.selectedEpisodeEntries.splice(indexOfElemToRemove, 1);
	}
	else{
		console.log('---ERROR:That selection didnt exist in selectedCharEntries array.');
	}
	filloutEpisodeBaseSearchAndSelected();
} //end aaddToSelected





function collectEpisodeFilters() {
	console.log("Filter (episode) not fully working");
	searchGlobalVars.efNameContain =   document.getElementById("episodeFilterNameContain").value;
	
	var selectedSeason = document.getElementById("episodeFilterSeasonSelect").value + " ";
	//console.log(document.getElementById("episodeFilterSeasonSelect"));
	console.log("Season select: " + selectedSeason + "...");
	var seasonNum = -1;
	for(var i = 1; i < searchGlobalVars.seasonNumbers.length + 1; i++){
		if(selectedSeason.search(" "+i + " ") != -1){
			seasonNum = i;
			break;
		}
	}

	if(seasonNum >0){
		console.log("The selected season was:" + seasonNum);
		seasonNum--;
		searchGlobalVars.efSeasonChoice = seasonNum;
	}
	else{
		searchGlobalVars.efSeasonChoice = -1;
	}
    //	episodeFilterSeasonSelect

	filloutEpisodeBaseSearchAndSelected();
} //end  collectEpisodeFilters

