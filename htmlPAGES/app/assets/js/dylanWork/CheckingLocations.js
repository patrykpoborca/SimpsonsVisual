



function showLocations() {
   for(var i =0; i < locationsByAppearAmt.length; i++){
      console.log(locationsByAppearAmt[i][0] + " has " + locationsByAppearAmt[i][1].length + " appearances.");
   }
} //end show locations


function supportTest() {

   var ep1 = "Simpsons Roasting on an Open Fire";
   var moe = "Moe's Tavern";
   var elem = "Springfield Elementary School";

   console.log(getLocationsInEpisode(ep1));

   console.log("-------------");

   console.log("Is " + moe + " in ep1?" + isLocationInEpisode(moe,ep1));
   console.log("--Numerical search?" + isLocationInEpisode(0,ep1));

   console.log("Is " + elem + " in ep1?" + isLocationInEpisode(elem,ep1));
   console.log("--Numerical search?" + isLocationInEpisode(1,ep1));



}
