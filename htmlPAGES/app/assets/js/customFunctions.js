
/* ===================================================
* Variables to prevent unnecessary memory usage.
*
* 
*/
var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
var today;
var aTime;
var dTime;
var days;
var hours;


/* ===================================================
* Custom Functions for testing.
*
* 
*/


function determineTimeDifference(month, day, assignmentDivId) {

	today = Date.now();
	aTime = new Date(2014, month, day, 23, 59);
	
	var output = "Due " + monthNames[aTime.getMonth()] + " " + aTime.getDate() + " 11:59pm";
	
	$('#'+assignmentDivId).append(output);
	
	dTime = aTime - today;
	if(dTime > 0) {
		hours = dTime / 1000 / 60 / 60; //convert from millisec> second> mins> hours
		hours = Number.toInteger(hours);
		days = hours / 24;
		days = Number.toInteger(days);
		hours -= days * 24;
		output = "<br><code>Due in: " + days + " days, " + hours + " hours.</code>"
		$('#'+assignmentDivId).append(output);
	}
	

} //end determineTimeDifference

function test() {

	alert ("test");

}


