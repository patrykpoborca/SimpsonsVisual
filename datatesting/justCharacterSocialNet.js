
/*

divs that will be created for single selection character view start with "ssnet"
intention is to prevent accidentally creating a div that already exists.

*/





//Assumes that character string is name or the correct index that matches allCharByAppearAmt
function givenACharacterFillOutSocialNet(divIdToFill, characterToUse) {
	document.getElementById(divIdToFill).innerHTML = "";

	dkGlobalOverviewTable.divPassing = divIdToFill;

	var characterIndexToMakeNetWith = -1;
	if(typeof characterToUse == 'string'){
		characterToUse = characterToUse.trim();
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
			'<button onclick="backToCharacterFromSocialNet(\''+divIdToFill+'\',\''+ characterIndexToMakeNetWith +'\')">Return to character</button>';
		document.getElementById('ssnetName').innerHTML = 
			'<h1>Social Network of ' + socialNetOfChars[characterIndexToMakeNetWith][0] + ' ('+socialNetOfChars[characterIndexToMakeNetWith][1]+' episodes)</h1> ';
		document.getElementById('ssnetPicture').innerHTML =
			"<img width='140px' height='210px' src='" +
			fetchImgUrlOfChar(allCharByAppearAmt[characterIndexToMakeNetWith][0]) + "'></img><br><center><b>"+
			socialNetOfChars[characterIndexToMakeNetWith][0] + "</b></center>";

		document.getElementById('ssnetHighTier').innerHTML = "High";
		document.getElementById('ssnetMedTier').innerHTML = "Med";
		document.getElementById('ssnetLowTier').innerHTML = "Low";

		ssnetFillTiers(characterIndexToMakeNetWith);

	}
	else{
		console.log("there was no match for the given character name.");
	}
	//hidePopupControlBox(); //because there is a good chance got here from the overview.
} //end findCharactersInGivenSeasonAndPopulateInteractiveTable


/* Currently the is the idea that character view will have at the top return to over view button
Then Common name (Full Name)

*/
function createDivsForSsnet(divIdToFill) {

	document.getElementById(divIdToFill).innerHTML += '<div id="ssnetToOverviewButton"></div>\n';
	document.getElementById(divIdToFill).innerHTML +=
		'<div id="ssnetName" style="position:absolute;top:0;left:300;"></div>\n';
	document.getElementById(divIdToFill).innerHTML += 
		'<div id="ssnetPicture" style="position:absolute;top:250;left:25;width:140;"></div>\n';
	
	document.getElementById(divIdToFill).innerHTML += 
		'<div id="ssnetHTLabel" style="position:absolute;top:80;left:225;height:450;"></div>';
	document.getElementById(divIdToFill).innerHTML += 
		'<div id="ssnetHighTier" '+
		'style="position:absolute;top:100;left:225;width:250;height:550;'+
		'overflow-y:scroll; border: 1px solid black;"></div>\n';
	
	document.getElementById(divIdToFill).innerHTML += 
		'<div id="ssnetMTLabel" style="position:absolute;top:80;left:580;width:300;height:450;"></div>';
	document.getElementById(divIdToFill).innerHTML += 
		'<div id="ssnetMedTier" '+
		'style="position:absolute;top:100;left:580;width:250;height:550;'+
		'overflow-y:scroll; border: 1px solid black;"></div>\n';
	

	document.getElementById(divIdToFill).innerHTML += 
		'<div id="ssnetLTLabel" style="position:absolute;top:80;left:930;width:300;height:550;"></div>';
	document.getElementById(divIdToFill).innerHTML += 
		'<div id="ssnetLowTier" '+
		'style="position:absolute;top:100;left:930;width:250;height:550;'+
		'overflow-y:scroll; border: 1px solid black;"></div>\n';

	document.getElementById(divIdToFill).innerHTML += 
		'<div id="ssnetExcludeLabel" style="position:absolute;top:660;left:800;"></div>';
}

//function to return back to overview. 
function backToOverviewFromSocialNet(divIdToFill){
	var charList = [];
	for(var i =0; i < 40; i++){
		charList.push(allCharByAppearAmt[i]);
	}
	fillOverviewTable(divIdToFill, charList, true);
} //end

//function to return back to character.
function backToCharacterFromSocialNet(divIdToFill, indexOfGivenCharacter){
	console.log("go back to " + allCharByAppearAmt[indexOfGivenCharacter][0]);
	console.log("   populate div:" + divIdToFill + " index:" + allCharByAppearAmt[indexOfGivenCharacter][0]);
	givenACharacterNameFilloutTheView(divIdToFill, allCharByAppearAmt[indexOfGivenCharacter][0]);
} //end



function ssnetFillTiers(indexOfGivenCharacter) {

	var contentForDiv = "";
	var tierAllArray = []; //get 50 characters.. or more?
	var hTierArray = [];
	var mTierArray = [];
	var lTierArray = [];
	var hTierLowerBound = 90;
	var mTierLowerBound = 75;
	var lTierLowerBound = 50; //If loading pictures, lower bound will be very important.

	var tempTierValue;
	var tempArrayForInsert;

	var excludedEntries = 0;

	
	//go through each character and see what their % rating is.
	for(var i = 0; i < socialNetOfChars[indexOfGivenCharacter][2].length; i++)
	{
		//look for those who this character appears with.
		if(socialNetOfChars[indexOfGivenCharacter][2][i] > 0){
			tempArrayForInsert = [];
			tempArrayForInsert.push(i);
			tempArrayForInsert.push(socialNetOfChars[indexOfGivenCharacter][2][i]);
			tempArrayForInsert.push(
						Math.floor(
						100 * socialNetOfChars[indexOfGivenCharacter][2][i] / 
						socialNetOfChars[indexOfGivenCharacter][1] )
				);
			tierAllArray.push(tempArrayForInsert);
		}
	}



	var lowAppearance;
	var highShare = 0;
	var lowerBoundShave = 0; // start by shaving off characters with 1 appearance.
								//inc happens before separation.

	//if the current character appears more than 3 times
	//count up single appearances, then try to figure out from there.
	if(socialNetOfChars[indexOfGivenCharacter][1] > 3){

		lowAppearance = 0;
		do{
			hTierArray = []; //clear out the tiers.
			lTierArray = [];
			lowerBoundShave++;

			for(var i = 0; i < tierAllArray.length; i++){
				if(tierAllArray[i][1] > highShare){ highShare = tierAllArray[i][1]; }

				if(tierAllArray[i][1] <=  lowerBoundShave){
					lowAppearance++;
					lTierArray.push(tierAllArray[i]);
				}
				else{
					hTierArray.push(tierAllArray[i]);
				}
			}
			tierAllArray = hTierArray;
		}while(tierAllArray.length > 50);

		//keep them if there are less than 10. otherwise don't.
		if(  !(lTierArray.length < 10)   ){
			excludedEntries = lTierArray.length;
			lTierArray = [];
		}//*/

		//after this loop completes, htier will have the sorted list.
		hTierArray = []
		var match = false;
		for(var i = 0; i < tierAllArray.length; i++){
			match = false;
			for(var j = 0; j < hTierArray.length; j++){
				if(tierAllArray[i][1] > hTierArray[j][1]){
					hTierArray.splice(j,0,tierAllArray[i]);
					match = true;
					break;
				}
			}
			if(!match){
				hTierArray.push(tierAllArray[i]);
			}
		}

		//move the sorted list into tier all array.
		tierAllArray = hTierArray;
		hTierArray = [];
		mTierArray = [];
		var currentEpCount = tierAllArray[0][1];
		var originalSizeOfAllTier = tierAllArray.length;
		//do move entries into hTier
		do{
			for(var i = 0; i < tierAllArray.length; i++){
				if(tierAllArray[i][1] == currentEpCount){
					hTierArray.push(tierAllArray[i]);
				}
				else {
					mTierArray.push(tierAllArray[i]);
				}
			}
			currentEpCount--;
			tierAllArray = mTierArray;
			mTierArray = [];
		}
		while(hTierArray.length < (originalSizeOfAllTier / 10));

		originalSizeOfAllTier = tierAllArray.length;
		mTierArray = tierAllArray;
		do{
			currentEpCount = mTierArray[ mTierArray.length -1][1];
			do{
				lTierArray.splice(0,0,  mTierArray[ mTierArray.length -1 ] );
				mTierArray.splice( mTierArray.length-1, 1 );
			}while( mTierArray[mTierArray.length -1][1] == currentEpCount);
		}while(mTierArray > (originalSizeOfAllTier / 3 * 2));




	} //end if more than 3 appearances.
	else { //else there are 3 or less appearaces.

		if(socialNetOfChars[indexOfGivenCharacter][1]  == 3){
			for(var i = 0; i < tierAllArray.length; i++){
				if(tierAllArray[i][1] == 3){ hTierArray.push(tierAllArray[i]); }
				else if(tierAllArray[i][1] == 2){ mTierArray.push(tierAllArray[i]); }
				else { lTierArray.push(tierAllArray[i]); }
			}
		}

		else if(socialNetOfChars[indexOfGivenCharacter][1]  == 2){
			for(var i = 0; i < tierAllArray.length; i++){
				if(tierAllArray[i][1] == 2){ hTierArray.push(tierAllArray[i]); }
				else { mTierArray.push(tierAllArray[i]); }
			}
		}
		else{
			hTierArray = tierAllArray;
		}
	} //end there are 3 or less appearances.








	contentForDiv = "";
	for(var i = 0; i < hTierArray.length; i++){
		contentForDiv += "<div onclick='ssnetCharcterClick("+hTierArray[i][0]+")'><center>";
		contentForDiv += "&nbsp&nbsp<img width='60px' height='90px' src='" + fetchImgUrlOfChar(allCharByAppearAmt[  hTierArray[i][0]  ]  [0]) + "'></img><br>&nbsp&nbsp&nbsp";
		contentForDiv += allCharByAppearAmt[  hTierArray[i][0]  ]  [0] + "<br>";
		contentForDiv += "&nbsp&nbsp&nbspShared " + hTierArray[i][1] + " eps("+hTierArray[i][2]+"%)";
		contentForDiv += "<hr>";
		contentForDiv += "</center></div>";
	}

	document.getElementById('ssnetHighTier').innerHTML = contentForDiv;
	document.getElementById('ssnetHTLabel').innerHTML = "&nbsp<b>Most seen with " + allCharByAppearAmt[indexOfGivenCharacter][0] + "("+hTierArray.length+"):</b>";


	contentForDiv = "";
	for(var i = 0; i < mTierArray.length; i++){
		contentForDiv += "<div onclick='ssnetCharcterClick("+mTierArray[i][0]+")'><center>";
		contentForDiv += "&nbsp&nbsp<img width='60px' height='90px' src='" + fetchImgUrlOfChar(allCharByAppearAmt[  mTierArray[i][0]  ]  [0]) + "'></img><br>&nbsp&nbsp&nbsp";
		contentForDiv += allCharByAppearAmt[  mTierArray[i][0]  ]  [0] + "<br>";
		contentForDiv += "&nbsp&nbsp&nbspShared " + mTierArray[i][1] + " eps("+mTierArray[i][2]+"%)";
		contentForDiv += "<hr>";
		contentForDiv += "</center></div>";
	}

	document.getElementById('ssnetMedTier').innerHTML = contentForDiv;
	document.getElementById('ssnetMTLabel').innerHTML = "&nbsp<b>Commonly seen with("+mTierArray.length+"):</b>";


	contentForDiv = "";
	for(var i = 0; i < lTierArray.length; i++){
		contentForDiv += "<div onclick='ssnetCharcterClick("+lTierArray[i][0]+")'><center>";
		contentForDiv += "&nbsp&nbsp<img width='60px' height='90px' src='" + fetchImgUrlOfChar(allCharByAppearAmt[  lTierArray[i][0]  ]  [0]) + "'></img><br>&nbsp&nbsp&nbsp";
		contentForDiv += allCharByAppearAmt[  lTierArray[i][0]  ]  [0] + "<br>";
		contentForDiv += "&nbsp&nbsp&nbspShared " + lTierArray[i][1] + " eps("+lTierArray[i][2]+"%)";
		contentForDiv += "<hr>";
		contentForDiv += "</center></div>";
	}

	document.getElementById('ssnetLowTier').innerHTML = contentForDiv;
	document.getElementById('ssnetLTLabel').innerHTML = "&nbsp<b>Occasionally seen with("+lTierArray.length+"):</b>";


	if(excludedEntries > 0){
		document.getElementById('ssnetExcludeLabel').innerHTML = "Excluding " + excludedEntries + " entries with " + lowerBoundShave + " appearances and less";
	}


} //end fill tiers


function ssnetCharcterClick(indexOfGivenCharacter) {
	console.log("Character was selected:" + allCharByAppearAmt[indexOfGivenCharacter][0]);
	givenACharacterFillOutSocialNet(dkGlobalOverviewTable.divPassing, indexOfGivenCharacter);
}




















