var episodesSortedIntoSeasons = [];

function generateSortedSeasons() {
	var seasonCount = [13, 22, 24, 22, 22, 25, 25 ,25, 25, 23, 22, 21, 22, 22, 22, 21, 22, 22, 20, 21, 23, 22, 22, 22, 18]
	var seasonNum = [];
	var tempEpisode = [];
	var seasonCode = /7G.+/;
	var index = 0;
	var episodeCount = seasonCount[index];
	for(var k = 0; k < episodeCount; k++) {
		tempEpisode.push(allEpisodesByNumber[k]);
		if(k == episodeCount - 1) {
			seasonNum.push("Season " + (index+1));
			seasonNum.push(tempEpisode);
			episodeCount = episodeCount + seasonCount[index++];
			episodesSortedIntoSeasons.push(seasonNum);
			tempEpisode = [];
			seasonNum = [];
		}
	}
}