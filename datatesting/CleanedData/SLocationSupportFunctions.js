

///sorry sorta gave up on making the locations with the true false listing of episodes.
//Main reason: lot of singleton appearnces. Although I suppose less than the number of singlton character appearances.


function getLocationsInEpisode(nameOfEpisode){
	var locationsInEpisode = [];

	for(var i = 0; i < locationsByAppearAmt.length; i++){

		for(var j = 0; j < locationsByAppearAmt[i][1].length; j++){
			if(nameOfEpisode == locationsByAppearAmt[i][1][j]){
				locationsInEpisode.push(locationsByAppearAmt[i][0]);
				break;
			}
		}

	}//end each location

	return locationsInEpisode;

} //end get locations in episode.


//return true or false based upon whether the location is in the epsiode
function isLocationInEpisode(loc, nameOfEpisode) {
	//assuming a name
	if(typeof loc == "string"){

		for(var i = 0; i < locationsByAppearAmt.length; i++	){
			if(loc == locationsByAppearAmt[i][0]){
				for(var j = 0; j < locationsByAppearAmt[i][1].length;j++){
					if(nameOfEpisode == locationsByAppearAmt[i][1][j]){
						return true;
					}
				}
			}
		}

	}
	else if(typeof loc == "number"){
		for(var j = 0; j < locationsByAppearAmt[loc][1].length;j++){
			if(nameOfEpisode == locationsByAppearAmt[loc][1][j]){
				return true;
			}
		}
	}
	return false;
} //end is episode in location




