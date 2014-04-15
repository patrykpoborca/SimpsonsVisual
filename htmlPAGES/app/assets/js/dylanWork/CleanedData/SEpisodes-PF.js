
//This var is based off of the episodes in season count.

var episodesInSeasons = 
  [ 13,22,24,22,22,25,25,25,25,23,22,21,22,22,22,21,22,22,20,21,23,22,22,22,11 ];
//   1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

//Note: season 25 is only listed as having 11 episodes because there are only 541 recorded in the wikia as of the dump time.

//Episodes are ordered by number but episodes with number 9999 had a parse error
//Array follows format: name, number, prodcode, origAirDate, showRunner[], writtenBy[], directedBy[]

var allEpisodesByNumber = [  //Beginning of array
[ "Simpsons Roasting on an Open Fire", 1,"7G08","December 17, 1989",
   ["James L. Brooks","Matt Groening","Sam Simon"], //end show runner array
   ["Mimi Pond"], //end written by array
   ["David Silverman"] //end directed by array
], //end of the episode entry
[ "Bart the Genius", 2," 7G02"," {{USA|January 14, [[1990]]}} lt;br gt;{{AUS|February 10, [[1991]]}}",
   ["James L. Brooks","Matt Groening","Sam Simon"], //end show runner array
   ["Jon Vitti"], //end written by array
   ["David Silverman"] //end directed by array
], //end of the episode entry
[ "Homer's Odyssey", 3," 7G03"," {{USA|January 21, 1990}} lt;br gt;{{AUS|February 10, 1991}}",
   ["James L. Brooks","Matt Groening","Sam Simon"], //end show runner array
   ["Jay Kogen","Wallace Wolodarsky"], //end written by array
   ["Wes Archer"] //end directed by array
], //end of the episode entry
[ "There's No Disgrace Like Home", 4," 7G04"," January 28, 1990",
   ["James L. Brooks","Matt Groening","Sam Simon"], //end show runner array
   ["Al Jean","Mike Reiss"], //end written by array
   ["Gregg Vanzo","Kent Butterworth"] //end directed by array
], //end of the episode entry
[ "Bart the General", 5,"7G05","{{USA|February 4, 1990}} lt;br gt;{{AUS|February 17, 1991}}",
   ["James L. Brooks","Matt Groening","Sam Simon"], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["David Silverman"] //end directed by array
], //end of the episode entry
[ "Moaning Lisa", 6,"7G06"," {{USA|February 11, 1990}} lt;br gt;{{AUS|March 3, 1991}}",
   [], //end show runner array
   ["Al Jean","Mike Reiss"], //end written by array
   ["Wes Archer"] //end directed by array
], //end of the episode entry
[ "The Call of the Simpsons", 7," 7G09"," February 18, 1990",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Wesley Archer"] //end directed by array
], //end of the episode entry
[ "The Telltale Head", 8," 7G07"," February 25, 1990",
   [], //end show runner array
   ["Al Jean","Mike Reiss","Sam Simon","Matt Groening"], //end written by array
   ["Rich Moore"] //end directed by array
], //end of the episode entry
[ "Life on the Fast Lane", 9," 7G11"," March 18, 1990",
   ["James L. Brooks","Matt Groening","Sam Simon"], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["David Silverman"] //end directed by array
], //end of the episode entry
[ "Homer's Night Out", 10," 7G10"," March 25, 1990",
   ["James L. Brooks","Matt Groening","Sam Simon"], //end show runner array
   ["Jon Vitti"], //end written by array
   ["Rich Moore"] //end directed by array
], //end of the episode entry
[ "The Crepes of Wrath", 11," 7G13"," April 15th, 1990",
   ["James L. Brooks","Matt Groening","Sam Simon"], //end show runner array
   ["George Meyer","Sam Simon","John Swartzwelder","Jon Vitti"], //end written by array
   ["Wes Archer","Milton Gray"] //end directed by array
], //end of the episode entry
[ "Krusty Gets Busted", 12," 7G12"," April 22, 1990",
   ["James L. Brooks","Matt Groening","Sam Simon"], //end show runner array
   ["Jon Vitti"], //end written by array
   ["Peter Gomez"] //end directed by array
], //end of the episode entry
[ "Some Enchanted Evening", 13," 7G01"," May 13, 1990",
   ["James L. Brooks","Matt Groening","Sam Simon"], //end show runner array
   ["Matt Groening","Sam Simon"], //end written by array
   ["David Silverman","Kent Butterworth"] //end directed by array
], //end of the episode entry
[ "Bart Gets an  quot;F quot;", 14," 7F03"," October 11, 1990",
   [], //end show runner array
   ["David M. Stern"], //end written by array
   ["David Silverman"] //end directed by array
], //end of the episode entry
[ "Simpson and Delilah", 15," 7F02"," October 18, 1990",
   [], //end show runner array
   ["Jon Vitti"], //end written by array
   ["Rich Moore"] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror", 16," 7F04"," October 25th, 1990",
   [], //end show runner array
   ["John Swartzwelder","Jay Kogen","Wallace Wolodarsky","Sam Simon","wikipedia:Edgar Allan Poe","Edgar Allan Poe"], //end written by array
   ["Rich Moore","Wes Archer","David Silverman"] //end directed by array
], //end of the episode entry
[ "Two Cars in Every Garage and Three Eyes on Every Fish", 17," 7F01"," November 1, 1990",
   [], //end show runner array
   ["John Swartzwelder","Sam Simon"], //end written by array
   ["Wes Archer"] //end directed by array
], //end of the episode entry
[ "Dancin' Homer", 18," 7F05"," November 8, 1990",
   [], //end show runner array
   ["Ken Levine","David Isaacs"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Dead Putting Society", 19," 7F08"," November 15, 1990",
   [], //end show runner array
   ["Jeff Martin"], //end written by array
   ["Rich Moore"] //end directed by array
], //end of the episode entry
[ "Bart vs. Thanksgiving", 20," 7F07"," November 22, 1990",
   [], //end show runner array
   ["George Meyer"], //end written by array
   ["David Silverman"] //end directed by array
], //end of the episode entry
[ "Bart the Daredevil", 21," 7F06"," December 6, 1990",
   [], //end show runner array
   ["Jay Kogen","Wallace Wolodarsky"], //end written by array
   ["Wes Archer"] //end directed by array
], //end of the episode entry
[ "Itchy  amp; Scratchy  amp; Marge", 22," 7F09"," December 20, 1990",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Bart Gets Hit by a Car", 23,"7F10","January 10, 1991",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "One Fish, Two Fish, Blowfish, Blue Fish", 24,"7F11","January 24, 1991",
   [], //end show runner array
   ["Nell Scovell"], //end written by array
   ["Wes Archer"] //end directed by array
], //end of the episode entry
[ "The Way We Was", 25," 7F12"," January 31, 1991",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Homer vs. Lisa and the 8th Commandment", 26," 7F13"," February 7, 1991",
   [], //end show runner array
   ["Steve Pepoon"], //end written by array
   ["Rich Moore"] //end directed by array
], //end of the episode entry
[ "Principal Charming", 27," 7F15"," February 14, 1991",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Oh Brother, Where Art Thou?", 28," 7F16"," February 16, 1991",
   [], //end show runner array
   ["Jeff Martin"], //end written by array
   ["Wes Archer"] //end directed by array
], //end of the episode entry
[ "Bart's Dog Gets an F", 29," 7F14"," March 7, 1991",
   [], //end show runner array
   ["Jon Vitti"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Old Money", 30,"7F17","March 28, 1991",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Brush with Greatness", 31," 7F18"," April 11, 1991",
   [], //end show runner array
   ["Brian K. Roberts"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Lisa's Substitute", 32," 7F19"," April 25, 1991",
   [], //end show runner array
   ["Jon Vitti"], //end written by array
   ["Rich Moore"] //end directed by array
], //end of the episode entry
[ "The War of the Simpsons", 33," 7F20"," May 2, 1991",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Three Men and a Comic Book", 34," 7F21"," May 9, 1991",
   [], //end show runner array
   ["Jeff Martin"], //end written by array
   ["Wes Archer","Wes M. Archer"] //end directed by array
], //end of the episode entry
[ "Blood Feud", 35,"7F22","July 11, 1991",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Stark Raving Dad", 36,"7F24","September 19, 1991",
   ["James L. Brooks","Matt Groening","Sam Simon"], //end show runner array
   ["Al Jean","Mike Reiss"], //end written by array
   ["David Silverman"] //end directed by array
], //end of the episode entry
[ "Mr. Lisa Goes to Washington", 37," 8F01"," September 26, 1991",
   ["Al Jean","Mike Reiss"], //end show runner array
   ["George Meyer"], //end written by array
   ["Wes Archer"] //end directed by array
], //end of the episode entry
[ "When Flanders Failed", 38,"7F23","October 3, 1991",
   ["Al Jean","Mike Reiss"], //end show runner array
   ["Jon Vitti"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Bart the Murderer", 39," 8F03"," October 10, 1991",
   ["Al Jean","Mike Reiss"], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Rich Moore"] //end directed by array
], //end of the episode entry
[ "Homer Defined", 40,"8F04","October 17, 1991",
   ["Al Jean","Mike Reiss"], //end show runner array
   ["Howard Gewirtz"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Like Father, Like Clown", 41," 8F05"," October 24, 1991",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror II", 42," 8F02"," October 31, 1991",
   [], //end show runner array
   ["Al Jean","Atrocious Al Jean","Mike Reiss","Morbid Mike Reiss","Jeff Martin","Jittery Jeff Martin","George Meyer","Gasping George Meyer","Sam Simon","Slithering Sam Simon","John Swartzwelder","Spooky John Swartzwelder"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Lisa's Pony", 43," 8F06"," November 7,1991",
   ["Al Jean","Mike Reiss"], //end show runner array
   ["Al Jean","Mike Reiss"], //end written by array
   ["Carlos Baeza"] //end directed by array
], //end of the episode entry
[ "Saturdays of Thunder", 44,"8F07","November 14, 1991",
   [], //end show runner array
   ["Ken Levine","David Isaacs"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Flaming Moe's", 45," 8F08"," November 21, 1991",
   [], //end show runner array
   ["Robert Cohen"], //end written by array
   ["Rich Moore","Alan Smart"] //end directed by array
], //end of the episode entry
[ "Burns Verkaufen der Kraftwerk", 46,"8F09","December 5, 1991",
   ["Al Jean","Mike Reiss"], //end show runner array
   ["Jon Vitti"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "I Married Marge", 47,"8F10","December 26, 1991",
   [], //end show runner array
   ["Jeff Martin"], //end written by array
   ["Jeffrey Lynch"] //end directed by array
], //end of the episode entry
[ "Radio Bart", 48,"8F11","January 9, 1992",
   [], //end show runner array
   ["Jon Vitti"], //end written by array
   ["Carlos Baeza"] //end directed by array
], //end of the episode entry
[ "Lisa the Greek", 49," 8F12"," January 23, 1992",
   ["Al Jean","Mike Reiss"], //end show runner array
   ["Jay Kogen","Wallace Wolodarsky"], //end written by array
   ["Rich Moore"] //end directed by array
], //end of the episode entry
[ "Homer Alone", 50," 8F14"," February 6, 1992",
   ["Al Jean","Mike Reiss"], //end show runner array
   ["David M. Stern"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Bart the Lover", 51," 8F16"," February 13, 1992",
   [], //end show runner array
   ["Rachel Cohen","Michael P. Schoenbrun"], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Homer at the Bat", 52," 8F13"," February 20, 1992",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Separate Vocations", 53,"8F15","February 27, 1992 ",
   [], //end show runner array
   ["George Meyer"], //end written by array
   ["Jeffrey Lynch"] //end directed by array
], //end of the episode entry
[ "Dog of Death", 54,"8F17","March 12, 1992",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Colonel Homer", 55," 8F19"," March 26, 1992",
   ["Al Jean","Mike Reiss"], //end show runner array
   ["Matt Groening"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Black Widower", 56,"8F20","April 9, 1992",
   ["Al Jean","Mike Reiss"], //end show runner array
   ["Jon Vitti","Sam Simon","Thomas Chastain"], //end written by array
   ["David Silverman"] //end directed by array
], //end of the episode entry
[ "The Otto Show", 57," 8F21"," April 23, 1992",
   [], //end show runner array
   ["Jeff Martin"], //end written by array
   ["Wes Archer"] //end directed by array
], //end of the episode entry
[ "Bart's Friend Falls in Love", 58," 8F22"," May 7, 1992",
   [], //end show runner array
   ["Jay Kogen","Wallace Wolodarsky"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Brother, Can You Spare Two Dimes?", 59,"8F23","August 27, 1992",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Rich Moore"] //end directed by array
], //end of the episode entry
[ "Kamp Krusty", 60,"8F24","September 24, 1992",
   [], //end show runner array
   ["David M. Stern"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "A Streetcar Named Marge", 61," 8F18"," October 1, 1992",
   ["Al Jean","Mike Reiss"], //end show runner array
   ["Jeff Martin"], //end written by array
   ["Rich Moore"] //end directed by array
], //end of the episode entry
[ "Homer the Heretic", 62,"9F01","October 8, 1992",
   ["Al Jean","Mike Reiss"], //end show runner array
   ["George Meyer"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Lisa the Beauty Queen", 63," 9F02"," October 15, 1992",
   ["Al Jean","Mike Reiss"], //end show runner array
   ["Jeff Martin"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror III", 64,"9F04","October 29, 1992",
   [], //end show runner array
   ["Al Jean","Mike Reiss","Wallace Wolodarsky","Jay Kogen","Sam Simon","Jon Vitti"], //end written by array
   ["Carlos Baeza"] //end directed by array
], //end of the episode entry
[ "Itchy  amp; Scratchy: The Movie", 65,"9F03","November 2, 1992",
   ["Al Jean","Mike Reiss"], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Rich Moore"] //end directed by array
], //end of the episode entry
[ "Marge Gets a Job", 66,"9F05","November 5, 1992",
   [], //end show runner array
   ["Bill Oakley","Josh Weinstein"], //end written by array
   ["Jeffrey Lynch"] //end directed by array
], //end of the episode entry
[ "New Kid on the Block", 67,"9F06","November 12, 1992",
   [], //end show runner array
   ["Conan O'Brien"], //end written by array
   ["Wes Archer"] //end directed by array
], //end of the episode entry
[ "Mr. Plow", 68,"9F07","November 19, 1992 ",
   ["Al Jean","Mike Reiss"], //end show runner array
   ["Jon Vitti"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Lisa's First Word", 69," 9F08"," December 3, 1992",
   ["Al Jean","Mike Reiss"], //end show runner array
   ["Jeff Martin"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Homer's Triple Bypass", 70," 9F09"," December 15, 1992",
   [], //end show runner array
   ["Gary Apple","Michael Carrington"], //end written by array
   ["David Silverman"] //end directed by array
], //end of the episode entry
[ "Marge vs. the Monorail", 71," 9F10"," January 14, 1993",
   [], //end show runner array
   ["Conan O'Brien"], //end written by array
   ["Rich Moore"] //end directed by array
], //end of the episode entry
[ "Selma's Choice", 72,""," January 21, 1993",
   [], //end show runner array
   ["David M. Stern"], //end written by array
   ["Carlos Baeza"] //end directed by array
], //end of the episode entry
[ "Brother from the Same Planet", 73," 9F12"," February 4, 1993",
   [], //end show runner array
   ["Jon Vitti"], //end written by array
   ["Jeffrey Lynch"] //end directed by array
], //end of the episode entry
[ "I Love Lisa", 74," 9F13"," February 18, 1993",
   [], //end show runner array
   ["Frank Mula"], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Duffless", 75,"9F14","February 18, 1993",
   [], //end show runner array
   ["David M. Stern"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Last Exit to Springfield", 76," 9F15"," March 11, 1993",
   ["Al Jean","Mike Reiss"], //end show runner array
   ["Jay Kogen","Wallace Wolodarsky"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "So It's Come to This: A Simpsons Clip Show", 77," 9F17"," April 1, 1993",
   [], //end show runner array
   ["Jon Vitti"], //end written by array
   ["Carlos Baeza"] //end directed by array
], //end of the episode entry
[ "The Front", 78," 9F16"," April 15, 1993",
   [], //end show runner array
   ["Adam I. Lapidus"], //end written by array
   ["Rich Moore"] //end directed by array
], //end of the episode entry
[ "Whacking Day", 79,"9F18","April 29, 1993",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Marge in Chains", 80," 9F20"," May 6, 1993",
   [], //end show runner array
   ["Bill Oakley","Josh Weinstein"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Krusty Gets Kancelled", 81,"9F19","May 13, 1993",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["David Silverman"] //end directed by array
], //end of the episode entry
[ "Homer's Barbershop Quartet", 82," 9F21"," September 30, 1993",
   [], //end show runner array
   ["Jeff Martin"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Cape Feare", 83," 9F22"," October 7, 1993",
   [], //end show runner array
   ["Jon Vitti"], //end written by array
   ["Rich Moore"] //end directed by array
], //end of the episode entry
[ "Homer Goes to College", 84," 1F02"," October 14th 1993",
   [], //end show runner array
   ["Conan O'Brien"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Rosebud", 85,"1F01","October 21, 1993",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror IV", 86," 1F04"," October 28, 1993",
   [], //end show runner array
   ["Conan O'Brien","Bill Oakley","Josh Weinstein","Dan McGrath","Greg Daniels","Bill Canterbury"], //end written by array
   ["David Silverman"] //end directed by array
], //end of the episode entry
[ "Marge on the Lam", 87," 1F03"," November 4, 1993",
   [], //end show runner array
   ["Bill Canterbury"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Bart's Inner Child", 88,"1F05","November 11, 1993",
   ["David Mirkin"], //end show runner array
   ["George Meyer"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "Boy-Scoutz 'n the Hood", 89,"1F06","November 18, 1993",
   [], //end show runner array
   ["Dan McGrath"], //end written by array
   ["Jeffrey Lynch"] //end directed by array
], //end of the episode entry
[ "The Last Temptation of Homer", 90,"1F07","December 9, 1993",
   [], //end show runner array
   ["Frank Mula"], //end written by array
   ["Carlos Baeza"] //end directed by array
], //end of the episode entry
[ "$pringfield (Or, How I Learned to Stop Worrying and Love Legalized Gambling)", 91," 1F08"," December 16, 1993",
   ["David Mirkin"], //end show runner array
   ["Bill Oakley","Josh Weinstein"], //end written by array
   ["Wes Archer"] //end directed by array
], //end of the episode entry
[ "Homer the Vigilante", 92,"1F09","January 4, 1994",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Bart Gets Famous", 93," 1F11"," Febuary 3, 1994",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Susie Dietter"] //end directed by array
], //end of the episode entry
[ "Homer and Apu", 94," 1F10"," February 10, 1994",
   ["David Mirkin"], //end show runner array
   ["Greg Daniels"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Lisa vs. Malibu Stacy", 95,"1F12","February 17, 1994",
   [], //end show runner array
   ["Bill Oakley","Josh Weinstein"], //end written by array
   ["Jeffrey Lynch"] //end directed by array
], //end of the episode entry
[ "Deep Space Homer", 96,"1F13","February 24, 1994 ",
   [], //end show runner array
   ["David Mirkin"], //end written by array
   ["Carlos Baeza"] //end directed by array
], //end of the episode entry
[ "Homer Loves Flanders", 97," 1F14"," March 17, 1994",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Bart Gets an Elephant", 98," 1F15"," March 31, 1994",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Burns' Heir", 99,"1F16","April 14, 1994",
   [], //end show runner array
   ["Jace Richdale"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Sweet Seymour Skinner's Baadasssss Song", 100,"1F18","April 28, 1994",
   [], //end show runner array
   ["Bill Oakley","Josh Weinstein"], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "The Boy Who Knew Too Much", 101," 1F19"," May 5, 1994",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Jeffrey Lynch"] //end directed by array
], //end of the episode entry
[ "Lady Bouvier's Lover", 102,"1F21","May 12, 1994",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Secrets of a Successful Marriage", 103," 1F20"," May 19, 1994",
   [], //end show runner array
   ["Greg Daniels"], //end written by array
   ["Carlos Baeza"] //end directed by array
], //end of the episode entry
[ "Bart of Darkness", 104,"1F22","September 4, 1994",
   ["David Mirkin"], //end show runner array
   ["Dan McGrath"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Lisa's Rival", 105,"1F17","September 11, 1994",
   ["David Mirkin"], //end show runner array
   ["Mike Scully"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Another Simpsons Clip Show", 106,"2F23","September 25, 1994",
   ["David Mirkin"], //end show runner array
   ["Jon Vitti","Penny Wise"], //end written by array
   ["David Silverman"] //end directed by array
], //end of the episode entry
[ "Itchy  amp; Scratchy Land", 107,"2F01","",
   ["David Mirkin"], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Sideshow Bob Roberts", 108,"2F02","October 9, 1994",
   ["David Mirkin"], //end show runner array
   ["Bill Oakley","Josh Weinstein"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror V", 109," 2F03"," October 30, 1994",
   ["David Mirkin"], //end show runner array
   ["Greg Daniels","Dan McGrath","David S. Cohen","Bob Kushell"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Bart's Girlfriend", 110,"2F04"," November 6, 1994",
   ["David Mirkin"], //end show runner array
   ["Jonathan Collier"], //end written by array
   ["Susie Dietter"] //end directed by array
], //end of the episode entry
[ "Lisa on Ice", 111,"2F05","November 13, 1994",
   ["David Mirkin"], //end show runner array
   ["Mike Scully"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "Homer Badman", 112," 2F06"," November 27, 1994",
   ["David Mirkin"], //end show runner array
   ["Greg Daniels"], //end written by array
   ["Jeffrey Lynch"] //end directed by array
], //end of the episode entry
[ "Grampa vs. Sexual Inadequacy", 113,"2F07","December 4, 1994",
   ["David Mirkin"], //end show runner array
   ["Bill Oakley","Josh Weinstein"], //end written by array
   ["Wes Archer"] //end directed by array
], //end of the episode entry
[ "Fear of Flying", 114," 2F08"," December 18, 1994",
   ["David Mirkin"], //end show runner array
   ["David Sacks"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Homer the Great", 115," 2F09"," January 8, 1995",
   ["David Mirkin"], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "And Maggie Makes Three", 116," 2F10"," January 22, 1995",
   ["David Mirkin"], //end show runner array
   ["Jennifer Crittenden"], //end written by array
   ["Swinton O. Scott III"] //end directed by array
], //end of the episode entry
[ "Bart's Comet", 117,"2F11","February 5, 1995",
   ["David Mirkin"], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "Homie the Clown", 118,"2F12","February 12, 1995",
   ["David Mirkin"], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["David Silverman"] //end directed by array
], //end of the episode entry
[ "Bart vs. Australia", 119," 2F13"," February 19, 1995",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Homer vs. Patty and Selma", 120," 2F14"," February 26, 1995",
   ["David Mirkin"], //end show runner array
   ["Brent Forrester"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "A Star is Burns", 121," 2F31"," March 5, 1995",
   ["David Mirkin"], //end show runner array
   ["Ken Keeler"], //end written by array
   ["Susie Dietter"] //end directed by array
], //end of the episode entry
[ "Lisa's Wedding", 122," 2F15"," March 19, 1995",
   ["David Mirkin"], //end show runner array
   ["Greg Daniels"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Two Dozen and One Greyhounds", 123,"2F18","April 9, 1995",
   ["David Mirkin"], //end show runner array
   ["Mike Scully"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "The PTA Disbands", 124,"2F19","April 16, 1995",
   ["David Mirkin"], //end show runner array
   ["Jennifer Crittenden"], //end written by array
   ["Swinton O. Scott III"] //end directed by array
], //end of the episode entry
[ "'Round Springfield", 125,"2F32","April 20, 1995",
   ["Al Jean","Mike Reiss"], //end show runner array
   ["Joshua Sternin","Jeffrey Ventimilia"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "The Springfield Connection", 126,"2F21","May 7, 1995",
   ["David Mirkin"], //end show runner array
   ["Jonathan Collier"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Lemon of Troy", 127," 2F22"," May 14, 1995",
   ["David Mirkin"], //end show runner array
   ["Brent Forrester"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Who Shot Mr. Burns? (Part One)", 128," 2F16"," May 21, 1995",
   ["David Mirkin"], //end show runner array
   ["Bill Oakley","Josh Weinstein"], //end written by array
   ["Jeffrey Lynch"] //end directed by array
], //end of the episode entry
[ "Who Shot Mr. Burns? (Part Two)", 129," 2F20"," September 17, 1995",
   [], //end show runner array
   ["Bill Oakley","Josh Weinstein"], //end written by array
   ["Wes Archer"] //end directed by array
], //end of the episode entry
[ "Radioactive Man", 130," 2F17"," September 24, 1995",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Susie Dietter"] //end directed by array
], //end of the episode entry
[ "Home Sweet Homediddly-Dum-Doodily", 131," 3F01"," October 1, 1995",
   [], //end show runner array
   ["Jon Vitti"], //end written by array
   ["Susie Dietter"] //end directed by array
], //end of the episode entry
[ "Bart Sells His Soul", 132,"3F02","{{USA|October 8, 1995}} lt;br gt;{{UK|December 3, 1995}} lt;ref gt;http://web.archive.org/web/19981203084802/http://www.wetware.demon.co.uk/simpsons/ lt;/ref gt;",
   [], //end show runner array
   ["Greg Daniels"], //end written by array
   ["Wesley Archer"] //end directed by array
], //end of the episode entry
[ "Lisa the Vegetarian", 133,"3F03","October 15, 1995",
   [], //end show runner array
   ["David S. Cohen"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror VI", 134,"3F04","October 29th, 1995",
   [], //end show runner array
   ["John Swartzwelder","Scary John Swartzwelder","Steve Tompkins","Steve Tombkins","David X. Cohen","DavidÃ?Â²+S.Ã?Â²+CohenÃ?Â²"], //end written by array
   ["Bob Anderson","Bedlam Bob Anderson"] //end directed by array
], //end of the episode entry
[ "King-Size Homer", 135," 3F05"," November 5, 1995",
   [], //end show runner array
   ["Dan Greaney"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Mother Simpson", 136,"3F06","November 19, 1995",
   [], //end show runner array
   ["Richard Appel"], //end written by array
   ["David Silverman"] //end directed by array
], //end of the episode entry
[ "Sideshow Bob's Last Gleaming", 137,"3F08","November 26, 1995",
   [], //end show runner array
   ["Spike Feresten"], //end written by array
   ["Dominic Polcino"] //end directed by array
], //end of the episode entry
[ "The Simpsons 138th Episode Spectacular", 138," 3F31"," December 3, 1995",
   [], //end show runner array
   ["Jon Vitti"], //end written by array
   ["David Silverman"] //end directed by array
], //end of the episode entry
[ "Marge Be Not Proud", 139," 3F07"," December 17, 1995",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["Mike Scully"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Team Homer", 140,"3F10","January 7, 1996",
   [], //end show runner array
   ["Mike Scully"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Two Bad Neighbors", 141,"3F09","January 14, 1996",
   [], //end show runner array
   ["Ken Keeler"], //end written by array
   ["Wesley Archer"] //end directed by array
], //end of the episode entry
[ "Scenes from the Class Struggle in Springfield", 142,"3F11","February 4, 1996",
   [], //end show runner array
   ["Jennifer Crittenden"], //end written by array
   ["Susie Dietter"] //end directed by array
], //end of the episode entry
[ "Bart the Fink", 143,"3F12","February 11, 1996",
   [], //end show runner array
   ["John Swartzwelder","Bob Kushell"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Lisa the Iconoclast", 144," 3F13"," February 18, 1996",
   [], //end show runner array
   ["Jonathan Collier"], //end written by array
   ["Mike B. Anderson"] //end directed by array
], //end of the episode entry
[ "Homer the Smithers", 145,"3F14","February 25, 1996",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "The Day the Violence Died", 146,"3F16","March 17, 1996",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Wesley Archer"] //end directed by array
], //end of the episode entry
[ "A Fish Called Selma", 147,"3F15","March 24, 1996",
   [], //end show runner array
   ["Jack Barth"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Bart on the Road", 148," 3F17"," March 31, 1996",
   [], //end show runner array
   ["Richard Appel"], //end written by array
   ["Swinton O. Scott III"] //end directed by array
], //end of the episode entry
[ "22 Short Films About Springfield", 149," 3F18 "," April 14, 1996 ",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["Richard Appel","David Cohen","Jonathan Collier","Jennifer Crittenden","Greg Daniels","Brent Forrester","Rachel Pulido","Steve Tompkins","Josh Weinstein","Bill Oakley","Matt Groening"], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Raging Abe Simpson and His Grumbling Grandson in  quot;The Curse of the Flying Hellfish quot;", 150,"3F19","April 28, 1996",
   [], //end show runner array
   ["Jonathan Collier"], //end written by array
   ["Jeffrey Lynch"] //end directed by array
], //end of the episode entry
[ "Much Apu About Nothing", 151,"3f20","May 5, 1996",
   [], //end show runner array
   ["David S. Cohen"], //end written by array
   ["Susie Dietter"] //end directed by array
], //end of the episode entry
[ "Homerpalooza", 152,"3F21","May 19, 1996",
   [], //end show runner array
   ["Brent Forrester"], //end written by array
   ["Wes Archer"] //end directed by array
], //end of the episode entry
[ "Summer of 4 Ft. 2", 153,"3F22","May 19, 1996",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["Dan Greaney"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror VII", 154,"4F02","October 27, 1996",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["Ken Keeler","Dan Greaney","David S. Cohen"], //end written by array
   ["Mike B. Anderson"] //end directed by array
], //end of the episode entry
[ "You Only Move Twice", 155," 3F23"," November 3, 1996",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "The Homer They Fall", 156,"4F03","November 10, 1996",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["Jonathan Collier"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Burns, Baby Burns", 157,"4F05","November 17, 1996",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["Ian Maxtone-Graham"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Bart After Dark", 158,"4F06","November 24, 1996",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["Richard Appel"], //end written by array
   ["Dominic Polcino"] //end directed by array
], //end of the episode entry
[ "A Milhouse Divided", 159,"4F04","December 1, 1996",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["Steve Tompkins"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Lisa's Date with Density", 160,"4F01","December 15, 1996",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["Mike Scully"], //end written by array
   ["Susie Dietter"] //end directed by array
], //end of the episode entry
[ "Hurricane Neddy", 161," 4F07"," 29 December 1996",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["Steve Young"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "El Viaje Misterioso de Nuestro Jomer (The Mysterious Voyage of Homer)", 162," 3F24"," January 5, 1997",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["Ken Keeler"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "The Springfield Files", 163," 3G01"," January 12, 1997",
   ["Al Jean","Mike Reiss"], //end show runner array
   ["Reid Harrison"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "The Twisted World of Marge Simpson", 164," 4F08"," January 19, 1997",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["Jennifer Crittenden"], //end written by array
   ["Chuck Sheetz"] //end directed by array
], //end of the episode entry
[ "Mountain of Madness", 165,"4F10","February 2, 1997",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Simpsoncalifragilisticexpiala(Annoyed Grunt)cious", 166,"3G03","February 7, 1997",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["Al Jean","Mike Reiss"], //end written by array
   ["Chuck Sheetz"] //end directed by array
], //end of the episode entry
[ "The Itchy  amp; Scratchy  amp; Poochie Show", 167," 4F12"," February 9, 1997",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["David X. Cohen"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Homer's Phobia", 168," 4F11"," February 16, 1997",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["Ron Hauge"], //end written by array
   ["Mike B. Anderson"] //end directed by array
], //end of the episode entry
[ "Brother from Another Series", 169,"4F14","February 23, 1997",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["Ken Keeler"], //end written by array
   ["Pete Michels"] //end directed by array
], //end of the episode entry
[ "My Sister, My Sitter", 170,"4F13","March 2, 1997",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["Dan Greaney"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Homer vs. the Eighteenth Amendment", 171,"4F15","March 16, 1997",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "Grade School Confidential", 172,"4F09","April 6, 1997",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["Rachel Pulido"], //end written by array
   ["Susie Dietter"] //end directed by array
], //end of the episode entry
[ "The Canine Mutiny", 173,"4F16","April 13, 1997",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["Ron Hauge"], //end written by array
   ["Dominic Polcino"] //end directed by array
], //end of the episode entry
[ "The Old Man and the Lisa", 174,"4F17","April 20, 1997",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "In Marge We Trust", 175," 4F18"," April 27, 1997",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["Donick Cary"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Homer's Enemy", 176,"4F19","May 4, 1997",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "The Simpsons Spin-Off Showcase", 177,"4F20","May 11, 1997",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["David S. Cohen","Dan Greaney","Steve Tompkins","Ken Keeler"], //end written by array
   ["Neil Affleck"] //end directed by array
], //end of the episode entry
[ "The Secret War of Lisa Simpson", 178," 4F21"," May 18, 1997",
   ["Bill Oakley","Josh Weinstein"], //end show runner array
   ["Richard Appel"], //end written by array
   ["Mike B. Anderson"] //end directed by array
], //end of the episode entry
[ "The City of New York vs. Homer Simpson", 179,"4F22","September 21, 1997",
   [], //end show runner array
   ["Ian Maxtone-Graham"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "The Principal and the Pauper", 180,"4F23","September 28, 1997",
   [], //end show runner array
   ["Ken Keeler"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Lisa's Sax", 181,"3G02","October 19, 1997",
   [], //end show runner array
   ["Al Jean"], //end written by array
   ["Dominic Polcino"] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror VIII", 182,"5F02","{{USA|October 25, [[1997]]}} lt;br gt;{{UK|November 2, [[1997]]}} lt;br gt;{{AUS|March 25, [[1998]]}}",
   [], //end show runner array
   ["Mike Scully","David S. Cohen","Ned Goldreyer"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "The Cartridge Family", 183,"5F01","November 2, 1997",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Pete Michels"] //end directed by array
], //end of the episode entry
[ "Bart Star", 184,"5F03","November 9, 1997",
   [], //end show runner array
   ["Donick Cary"], //end written by array
   ["Dominic Polcino"] //end directed by array
], //end of the episode entry
[ "The Two Mrs. Nahasapeemapetilons", 185,"5F04","November 16, 1997",
   [], //end show runner array
   ["Richard Appel"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Lisa the Skeptic", 186,"5F05","November 23, 1997",
   [], //end show runner array
   ["David S. Cohen"], //end written by array
   ["Neil Affleck"] //end directed by array
], //end of the episode entry
[ "Realty Bites", 187,"5F06","December 7, 1997",
   [], //end show runner array
   [], //end written by array
   ["Swinton O. Scott III"] //end directed by array
], //end of the episode entry
[ "Miracle on Evergreen Terrace", 188,"5F07","21 December 1997",
   [], //end show runner array
   ["Ron Hauge"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "All Singing, All Dancing", 189,"5F24","January 4, 1998",
   [], //end show runner array
   ["Mark Ervin"], //end written by array
   ["Steve O'Donnell"] //end directed by array
], //end of the episode entry
[ "Bart Carny", 190,"5F08","January 11, 1998",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "The Joy of Sect", 191," 5F23"," February 8, 1998",
   [], //end show runner array
   ["Steve O'Donnell"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Das Bus", 192," 5F11"," February 15, 1998",
   [], //end show runner array
   ["David X. Cohen"], //end written by array
   ["Pete Michels"] //end directed by array
], //end of the episode entry
[ "The Last Temptation of Krust", 193," 5F10"," February 22, 1998",
   [], //end show runner array
   ["Donick Cary"], //end written by array
   ["Mike B. Anderson"] //end directed by array
], //end of the episode entry
[ "Dumbbell Indemnity", 194,"5F12","March 1, 1998",
   [], //end show runner array
   ["Ron Hauge"], //end written by array
   ["Dominic Polcino"] //end directed by array
], //end of the episode entry
[ "Lisa the Simpson", 195,"4F24","March 8, 1998",
   [], //end show runner array
   ["Ned Goldreyer"], //end written by array
   ["Susie Dietter"] //end directed by array
], //end of the episode entry
[ "This Little Wiggy", 196,"5F13","March 22, 1998",
   ["Mike Scully"], //end show runner array
   ["Dan Greaney"], //end written by array
   ["Neil Affleck"] //end directed by array
], //end of the episode entry
[ "Simpson Tide", 197," 3G04"," March 29, 1998",
   [], //end show runner array
   ["Joshua Sternin","Jeffrey Ventimilia"], //end written by array
   ["Milton Gray"] //end directed by array
], //end of the episode entry
[ "The Trouble with Trillions", 198,"5F14","April 5, 1998",
   [], //end show runner array
   ["Ian Maxtone-Graham"], //end written by array
   ["Swinton O. Scott III"] //end directed by array
], //end of the episode entry
[ "Girly Edition", 199,"5F15","April 19, 1998",
   [], //end show runner array
   ["Larry Doyle"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Trash of the Titans", 200,"5F09","April 26, 1998",
   [], //end show runner array
   ["Ian Maxtone-Graham"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "King of the Hill", 201,"5F16","May 3, 1998",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Lost Our Lisa", 202,"5F17","May 10, 1998",
   [], //end show runner array
   ["Brian Scully"], //end written by array
   ["Pete Michels"] //end directed by array
], //end of the episode entry
[ "Natural Born Kissers", 203," 5F18"," May 17, 1998",
   [], //end show runner array
   ["Matt Selman"], //end written by array
   ["Klay Hall"] //end directed by array
], //end of the episode entry
[ "Lard of the Dance", 204,"5F20","August 21, 1998",
   [], //end show runner array
   ["Jane O'Brien"], //end written by array
   ["Dominic Polcino"] //end directed by array
], //end of the episode entry
[ "The Wizard of Evergreen Terrace", 205," 5F21","September 20, 1998",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Bart the Mother", 206,"5F22","September 27, 1998",
   [], //end show runner array
   ["David S. Cohen"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror IX", 207," AABF01","October 25, 1998",
   [], //end show runner array
   ["David X. Cohen","Larry Doyle","Donick Cary"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "When You Dish Upon a Star", 208,"5F19 ","November 8, 1998",
   [], //end show runner array
   ["Richard Appel"], //end written by array
   ["Pete Michels"] //end directed by array
], //end of the episode entry
[ "D'oh-in' in the Wind", 209,"AABF02","November 15, 1998",
   [], //end show runner array
   ["Donick Cary"], //end written by array
   ["Mark Kirkland","Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "Lisa Gets an  quot;A quot;", 210," AABF03"," November 22, 1998",
   [], //end show runner array
   ["Ian Maxtone-Graham"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "Homer Simpson in:  quot;Kidney Trouble quot;", 211,"AABF04","December 6, 1998",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Mike B. Anderson"] //end directed by array
], //end of the episode entry
[ "Mayored to the Mob", 212," AABF05"," December 20, 1998",
   [], //end show runner array
   ["Ron Hauge"], //end written by array
   ["Swinton O. Scott III"] //end directed by array
], //end of the episode entry
[ "Viva Ned Flanders", 213,"AABF06","January 10, 1999",
   [], //end show runner array
   ["David M. Stern"], //end written by array
   ["Neil Affleck"] //end directed by array
], //end of the episode entry
[ "Wild Barts Can't Be Broken", 214,"AABF07","January 17, 1999",
   [], //end show runner array
   ["Larry Doyle"], //end written by array
   ["Mark Ervin"] //end directed by array
], //end of the episode entry
[ "Sunday, Cruddy Sunday", 215," AABF08"," January 31, 1999",
   [], //end show runner array
   ["Tom Martin","George Meyer","Brian Scully","Mike Scully"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Homer to the Max", 216," AABF09"," February 7, 1999",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "I'm with Cupid", 217," AABF11"," February 14, 1999",
   ["Mike Scully"], //end show runner array
   ["Dan Greaney"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "Marge Simpson in:  quot;Screaming Yellow Honkers quot;", 218," AABF10"," February 21, 1999",
   [], //end show runner array
   ["David M. Stern"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Make Room for Lisa", 219,"AABF12","February 28, 1999",
   [], //end show runner array
   ["Brian Scully"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "Maximum Homerdrive", 220," AABF13"," March 28, 1999",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Swinton O. Scott III"] //end directed by array
], //end of the episode entry
[ "Simpsons Bible Stories", 221," AABF14"," April 4, 1999",
   [], //end show runner array
   ["Tim Long","Larry Doyle","Matt Selman"], //end written by array
   ["Nancy Kruse"] //end directed by array
], //end of the episode entry
[ "Mom and Pop Art", 222,"AABF15","April 11, 1999",
   [], //end show runner array
   ["Al Jean"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "The Old Man and the  quot;C quot; Student", 223,"AABF16","April 25, 1999",
   [], //end show runner array
   ["Julie Thacker"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Monty Can't Buy Me Love", 224,"AABF17","May 2, 1999",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Mark Ervin"] //end directed by array
], //end of the episode entry
[ "They Saved Lisa's Brain", 225,"AABF18","May 9, 1999",
   [], //end show runner array
   ["Matt Selman"], //end written by array
   ["Pete Michels"] //end directed by array
], //end of the episode entry
[ "Thirty Minutes Over Tokyo", 226,"AABF20","May 16, 1999",
   [], //end show runner array
   ["Donick Cary","Dan Greaney"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Beyond Blunderdome", 227," AABF23"," September 26, 1999",
   [], //end show runner array
   ["Mike Scully"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Brother's Little Helper", 228,"AABF22","October 3, 1999",
   [], //end show runner array
   ["George Meyer"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Guess Who's Coming to Criticize Dinner?", 229," AABF21"," October 24, 1999",
   [], //end show runner array
   ["Al Jean"], //end written by array
   ["Nancy Kruse"] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror X", 230," BABF01"," October 31, 1999",
   [], //end show runner array
   ["Donick Cary","Donick Spooky","Tim Long","Terrifying Tim Long","Ron Hauge","Uh, An Ogre?"], //end written by array
   ["Pete Michels","Pete Scary Spice Michels"] //end directed by array
], //end of the episode entry
[ "E-I-E-I-D'oh", 231,"AABF19","November 7, 1999",
   [], //end show runner array
   ["Ian Maxtone-Graham"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "Hello Gutter, Hello Fadder", 232,"BABF02","November 14, 1999",
   [], //end show runner array
   ["Al Jean"], //end written by array
   ["Mike B. Anderson"] //end directed by array
], //end of the episode entry
[ "Eight Misbehavin'", 233,"BABF03","November 21, 1999",
   [], //end show runner array
   ["Matt Selman"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Take My Wife, Sleaze", 234,"","November 28, 1999",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Neil Affleck"] //end directed by array
], //end of the episode entry
[ "Grift of the Magi", 235," BABF07"," December 19, 1999",
   [], //end show runner array
   ["Tom Martin"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "Little Big Mom", 236,"","January 9, 2000",
   [], //end show runner array
   ["Carolyn Omine"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Faith Off", 237,"BABF06","January 16, 2000",
   [], //end show runner array
   ["Frank Mula"], //end written by array
   ["Nancy Kruse"] //end directed by array
], //end of the episode entry
[ "The Mansion Family", 238," BABF08"," January 23, 2000",
   ["Mike Scully"], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Michael Polcino"] //end directed by array
], //end of the episode entry
[ "Saddlesore Galactica", 239,"BABF09","February 6, 2000",
   [], //end show runner array
   ["Tim Long"], //end written by array
   ["Lance Kramer"] //end directed by array
], //end of the episode entry
[ "Alone Again, Natura-Diddily", 240,"BABF10","13 February 2000",
   [], //end show runner array
   ["Ian Maxtone-Graham"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Missionary: Impossible", 241," BABF11"," February 20, 2000",
   [], //end show runner array
   ["Ron Hauge"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Pygmoelian", 242,"BABF12","February 27, 2000",
   [], //end show runner array
   ["Larry Doyle"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Bart to the Future", 243," BABF13"," March 19, 2000",
   [], //end show runner array
   ["Dan Greaney"], //end written by array
   ["Michael Marcantel"] //end directed by array
], //end of the episode entry
[ "Days of Wine and D'oh'ses", 244," BABF14"," April 9, 2000",
   [], //end show runner array
   ["Deb Lacusta","Dan Castellaneta"], //end written by array
   ["Neil Affleck"] //end directed by array
], //end of the episode entry
[ "Kill the Alligator and Run", 245,"BABF16","April 30, 2000",
   ["Mike Scully"], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Jen Kamerman"] //end directed by array
], //end of the episode entry
[ "Last Tap Dance in Springfield", 246," BABF15"," May 7, 2000",
   [], //end show runner array
   ["Julie Thacker"], //end written by array
   ["Nancy Kruse"] //end directed by array
], //end of the episode entry
[ "It's a Mad, Mad, Mad, Mad Marge", 247," BABF18"," May 14, 2000",
   [], //end show runner array
   ["Larry Doyle"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Behind the Laughter", 248," BABF19"," May 21, 2000",
   [], //end show runner array
   ["Tim Long","George Meyer","Mike Scully","Matt Selman"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror XI", 249," BABF21"," November 1, 2000",
   [], //end show runner array
   ["Rob LaZebnik","John Frink (writer)","John Frink","Don Payne","Carolyn Omine"], //end written by array
   ["Matthew Nastuk","Matt  quot;Groening quot; Nastuk"] //end directed by array
], //end of the episode entry
[ "A Tale of Two Springfields", 250," BABF20"," November 5, 2000",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Shaun Cashman"] //end directed by array
], //end of the episode entry
[ "Insane Clown Poppy", 251," BABF17"," November 12, 2000",
   [], //end show runner array
   ["John Frink (writer)","John Frink","Don Payne"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "Lisa the Tree Hugger", 252," CABF01"," November 19, 2000",
   [], //end show runner array
   ["Matt Selman"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Homer vs. Dignity", 253," CABF04"," November 26, 2000",
   [], //end show runner array
   ["Rob LaZebnik"], //end written by array
   ["Neil Affleck"] //end directed by array
], //end of the episode entry
[ "The Computer Wore Menace Shoes", 254," CABF02"," December 3, 2000",
   ["Mike Scully"], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "The Great Money Caper", 255,"CABF03","December 10, 2000",
   [], //end show runner array
   ["Carolyn Omine"], //end written by array
   ["Michael Polcino"] //end directed by array
], //end of the episode entry
[ "Skinner's Sense of Snow", 256," CABF06"," December 17, 2000",
   [], //end show runner array
   ["Tim Long"], //end written by array
   ["Lance Kramer"] //end directed by array
], //end of the episode entry
[ "HOMÃ?Â¯", 257," BABF22"," January 7, 2001",
   [], //end show runner array
   ["Al Jean"], //end written by array
   ["Mike B. Anderson"] //end directed by array
], //end of the episode entry
[ "Pokey Mom", 258," CABF05"," January 14, 2001",
   ["Mike Scully"], //end show runner array
   ["Tom Martin"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "Worst Episode Ever", 259," CABF08"," February 4, 2001",
   [], //end show runner array
   ["Larry Doyle"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "Tennis the Menace", 260,"CABF07","February 11, 2001",
   [], //end show runner array
   ["Ian Maxtone-Graham"], //end written by array
   ["Jen Kamerman"] //end directed by array
], //end of the episode entry
[ "Day of the Jackanapes", 261,"CABF10","2/18/2001",
   [], //end show runner array
   ["Al Jean"], //end written by array
   ["Michael Marcantel"] //end directed by array
], //end of the episode entry
[ "New Kids on the Blecch", 262,"CABF12","February 25, 2001",
   [], //end show runner array
   ["Tim Long"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Hungry, Hungry Homer", 263,"CABF09","March 4, 2001",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Nancy Kruse"] //end directed by array
], //end of the episode entry
[ "Bye Bye Nerdie", 264," CABF11"," March 11, 2001",
   [], //end show runner array
   ["John Frink (writer)","John Frink","Don Payne"], //end written by array
   ["Lauren MacMullan"] //end directed by array
], //end of the episode entry
[ "Simpson Safari", 265,"CABF13","April 1, 2001",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Trilogy of Error", 266,"CABF14","April 29, 2001",
   [], //end show runner array
   ["Matt Selman"], //end written by array
   ["Mike B. Anderson"] //end directed by array
], //end of the episode entry
[ "I'm Goin' to Praiseland", 267," CABF15"," May 6, 2001",
   [], //end show runner array
   ["Julie Thacker"], //end written by array
   ["Chuck Sheetz"] //end directed by array
], //end of the episode entry
[ "Children of a Lesser Clod", 268," CABF16"," May 13, 2001",
   [], //end show runner array
   ["Al Jean"], //end written by array
   ["Michael Polcino"] //end directed by array
], //end of the episode entry
[ "Simpsons Tall Tales", 269," CABF17"," May 20, 2001",
   ["Mike Scully"], //end show runner array
   ["John Frink (writer)","John Frink","Don Payne","Bob Bendetson","Matt Selman"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror XII", 270," CABF19"," November 6, 2001 lt;ref name=imdb gt;http://www.imdb.com/title/tt0701284/ lt;/ref gt;",
   ["Mike Scully"], //end show runner array
   ["Joel H. Cohen","John Frink (writer)","John Frink","Don Payne","Carolyn Omine"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "The Parent Rap", 271,"CABF22","November 11, 2001",
   ["Mike Scully"], //end show runner array
   ["George Meyer","Mike Scully"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Homer the Moe", 272,"CABF20","November 18, 2001",
   ["Mike Scully"], //end show runner array
   ["Dana Gould"], //end written by array
   ["Jen Kamerman"] //end directed by array
], //end of the episode entry
[ "A Hunka Hunka Burns in Love", 273,"CABF18","December 2, 2001",
   ["Mike Scully"], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Lance Kramer"] //end directed by array
], //end of the episode entry
[ "The Blunder Years", 274,"CABF21","December 9, 2001",
   ["Mike Scully"], //end show runner array
   ["Ian Maxtone-Graham"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "She of Little Faith", 275,"DABF02","December 16, 2001",
   ["Al Jean"], //end show runner array
   ["Bill Freiberger"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Brawl in the Family", 276," DABF01"," January 6, 2002",
   ["Al Jean"], //end show runner array
   ["Joel H. Cohen"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "Sweets and Sour Marge", 277," DABF03"," January 20, 2002",
   ["Al Jean"], //end show runner array
   ["Carolyn Omine"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Jaws Wired Shut", 278," DABF05"," January 27, 2002",
   ["Al Jean"], //end show runner array
   ["Matt Selman"], //end written by array
   ["Nancy Kruse"] //end directed by array
], //end of the episode entry
[ "Half-Decent Proposal", 279,"DABF04","February 10, 2002",
   ["Al Jean"], //end show runner array
   ["Tim Long"], //end written by array
   ["Lauren MacMullan"] //end directed by array
], //end of the episode entry
[ "The Bart Wants What It Wants", 280," DABF06"," February 17, 2002",
   ["Al Jean"], //end show runner array
   ["John Frink (writer)","John Frink","Don Payne"], //end written by array
   ["Michael Polcino"] //end directed by array
], //end of the episode entry
[ "The Lastest Gun in the West", 281," DABF07"," February 24, 2002",
   ["Al Jean"], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "The Old Man and the Key", 282," DABF09"," March 10, 2002",
   ["Al Jean"], //end show runner array
   ["Jon Vitti"], //end written by array
   ["Lance Kramer"] //end directed by array
], //end of the episode entry
[ "Tales from the Public Domain", 283," DABF08"," March 17, 2002",
   ["Al Jean"], //end show runner array
   ["Andrew Kreisberg","Josh Lieb","Matt Warburton"], //end written by array
   ["Mike B. Anderson"] //end directed by array
], //end of the episode entry
[ "Blame It on Lisa", 284," DABF10"," March 31, 2002",
   ["Al Jean"], //end show runner array
   ["Bob Bendetson"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Weekend at Burnsie's", 285," DABF11"," April 7, 2002",
   ["Al Jean"], //end show runner array
   ["Jon Vitti"], //end written by array
   ["Michael Marcantel"] //end directed by array
], //end of the episode entry
[ "Gump Roast", 286,"DABF12","April 21, 2002",
   ["Al Jean"], //end show runner array
   ["Deb Lacusta","Dan Castellaneta"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "I Am Furious Yellow", 287," DABF13"," April 28, 2002",
   ["Al Jean"], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Chuck Sheetz"] //end directed by array
], //end of the episode entry
[ "The Sweetest Apu", 288," DABF14"," May 5, 2002",
   ["Al Jean"], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "Little Girl in the Big Ten", 289," DABF15"," May 12, 2002",
   ["Al Jean"], //end show runner array
   ["Jon Vitti"], //end written by array
   ["Lauren MacMullan"] //end directed by array
], //end of the episode entry
[ "The Frying Game", 290," DABF16"," May 19, 2002",
   ["Al Jean"], //end show runner array
   ["John Swartzwelder"], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Poppa's Got a Brand New Badge", 291,"DABF17","May 22, 2002",
   ["Al Jean"], //end show runner array
   ["Dana Gould"], //end written by array
   ["Pete Michels"] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror XIII", 292,"DABF19","November 3, 2002",
   [], //end show runner array
   ["Marc Wilmore","Brian Kelley","Kevin Curran"], //end written by array
   ["David Silverman"] //end directed by array
], //end of the episode entry
[ "How I Spent My Strummer Vacation", 293," DABF22"," November 10, 2002",
   [], //end show runner array
   ["Mike Scully"], //end written by array
   ["Mike B. Anderson"] //end directed by array
], //end of the episode entry
[ "Bart vs. Lisa vs. the Third Grade", 294," DABF20"," November 17, 2002",
   [], //end show runner array
   ["Tim Long"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Large Marge", 295," DABF18"," November 24, 2002",
   [], //end show runner array
   ["Ian Maxtone-Graham"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "Helter Shelter", 296," DABF21"," December 1, 2002",
   [], //end show runner array
   ["Brian Pollack","Mert Rich"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "The Great Louse Detective", 297," EABF01"," December 15, 2002",
   [], //end show runner array
   ["John Frink (writer)","John Frink","Don Payne"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Special Edna", 298," EABF02"," January 5, 2003",
   [], //end show runner array
   ["Dennis Snee"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "The Dad Who Knew Too Little", 299,"EABF03","January 12, 2003",
   [], //end show runner array
   ["Matt Selman"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "The Strong Arms of the Ma", 300," EABF04"," February 2, 2003",
   [], //end show runner array
   ["Carolyn Omine"], //end written by array
   ["Pete Michels"] //end directed by array
], //end of the episode entry
[ "Pray Anything", 301,"EABF06","February 9, 2003",
   [], //end show runner array
   ["Sam O'Neal","Neal Boushell"], //end written by array
   ["Michael Polcino"] //end directed by array
], //end of the episode entry
[ "Barting Over", 302," EABF05"," February 16, 2003",
   [], //end show runner array
   ["Andrew Kreisberg"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "I'm Spelling as Fast as I Can", 303," EABF07"," February 16, 2003",
   [], //end show runner array
   ["Kevin Curran"], //end written by array
   ["Nancy Kruse"] //end directed by array
], //end of the episode entry
[ "A Star Is Born-Again", 304," EABF08"," March 2, 2003",
   ["Al Jean"], //end show runner array
   ["Brian Kelley"], //end written by array
   ["Michael Marcantel"] //end directed by array
], //end of the episode entry
[ "Mr. Spritz Goes to Washington", 305," EABF09"," March 9, 2003",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Lance Kramer"] //end directed by array
], //end of the episode entry
[ "C.E. D'oh", 306," EABF10"," March 16, 2003",
   [], //end show runner array
   ["Dana Gould"], //end written by array
   ["Mike B. Anderson"] //end directed by array
], //end of the episode entry
[ "'Scuse Me While I Miss the Sky", 307,"EABF11","March 30, 2003",
   [], //end show runner array
   ["Dan Greaney","Allen Grazier"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Three Gays of the Condo", 308," EABF12"," April 13, 2003",
   [], //end show runner array
   ["Matt Warburton"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Dude, Where's My Ranch?", 309," EABF13"," April 27, 2003",
   [], //end show runner array
   ["Ian Maxtone-Graham"], //end written by array
   ["Chris Clements"] //end directed by array
], //end of the episode entry
[ "Old Yeller-Belly", 310," EABF14"," May 4, 2003",
   [], //end show runner array
   ["John Frink (writer)","John Frink","Don Payne"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "Brake My Wife, Please", 311," EABF15"," May 11, 2003",
   [], //end show runner array
   ["Tim Long"], //end written by array
   ["Pete Michels"] //end directed by array
], //end of the episode entry
[ "The Bart of War", 312," EABF16"," May 18, 2003",
   [], //end show runner array
   ["Marc Wilmore"], //end written by array
   ["Michael Polcino"] //end directed by array
], //end of the episode entry
[ "Moe Baby Blues", 313," EABF17"," May 18, 2003",
   [], //end show runner array
   ["J. Stewart Burns"], //end written by array
   ["Lauren MacMullan"] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror XIV", 314," EABF21"," November 2, 2003",
   [], //end show runner array
   ["John Swartzwelder"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "My Mother the Carjacker", 315," EABF18"," November 9, 2003",
   ["Al Jean"], //end show runner array
   ["Michael Price"], //end written by array
   ["Nancy Kruse"] //end directed by array
], //end of the episode entry
[ "The President Wore Pearls", 316," EABF20"," November 16, 2003",
   [], //end show runner array
   ["Dana Gould"], //end written by array
   ["Mike B. Anderson"] //end directed by array
], //end of the episode entry
[ "The Regina Monologues", 317,"EABF22","November 23, 2003 lt;ref name=bbcnews gt;{{cite news|url=http://news.bbc.co.uk/1/hi/entertainment/tv_and_radio/3222674.stm|title=Blair lined up for Simpsons debut|accessdate=2007-05-02|date=2003-11-23|publisher=BBC News}} lt;/ref gt;",
   [], //end show runner array
   ["John Swartzelder"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "The Fat and the Furriest", 318," EABF19"," November 30, 2003",
   [], //end show runner array
   ["Joel H. Cohen"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "Today, I Am a Clown", 319," FABF01"," December 7, 2003",
   [], //end show runner array
   ["Joel H. Cohen"], //end written by array
   ["Nancy Kruse"] //end directed by array
], //end of the episode entry
[ "'Tis the Fifteenth Season", 320,"FABF02","December 14, 2003",
   [], //end show runner array
   ["Michael Price"], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Marge vs. Singles, Seniors, Childless Couples and Teens and Gays", 321," FABF03"," January 4, 2004",
   ["Al Jean"], //end show runner array
   ["Jon Vitti"], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "I, (Annoyed Grunt)-Bot", 322," FABF04"," January 11, 2004",
   [], //end show runner array
   ["Dan Greaney","Allen Glazier"], //end written by array
   ["Lauren MacMullan"] //end directed by array
], //end of the episode entry
[ "Diatribe of a Mad Housewife", 323,"","",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Margical History Tour", 324," FABF06"," February 8, 2004",
   [], //end show runner array
   ["Brian Kelley"], //end written by array
   ["Mike B. Anderson"] //end directed by array
], //end of the episode entry
[ "Milhouse Doesn't Live Here Anymore", 325," FABF07"," February 2, 2004",
   [], //end show runner array
   ["Julie Chambers","David Chambers"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "Smart and Smarter", 326," FABF09"," February 22, 2004",
   ["Al Jean"], //end show runner array
   ["Carolyn Omine"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "The Ziff Who Came to Dinner", 327," FABF08"," March 14, 2004",
   [], //end show runner array
   ["Deb Lacusta","Dan Castellaneta"], //end written by array
   ["Nancy Kruse"] //end directed by array
], //end of the episode entry
[ "Co-Dependent's Day", 328," FABF10"," March 21, 2004",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "The Wandering Juvie", 329," FABF11"," March 28, 2004",
   [], //end show runner array
   ["John Frink (writer)","John Frink","Don Payne"], //end written by array
   ["Lauren MacMullan"] //end directed by array
], //end of the episode entry
[ "My Big Fat Geek Wedding", 330," FABF12"," April 18, 2004",
   [], //end show runner array
   ["Kevin Curran"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Catch 'Em if You Can", 331," FABF14"," April 25, 2004",
   [], //end show runner array
   ["Ian Maxtone-Graham"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "Simple Simpson", 332," FABF15"," May 2, 2004",
   ["Al Jean"], //end show runner array
   ["Jon Vitti"], //end written by array
   ["Jim Reardon"] //end directed by array
], //end of the episode entry
[ "The Way We Weren't", 333," FABF13"," May 9, 2004",
   [], //end show runner array
   ["J. Stewart Burns"], //end written by array
   ["Mike B. Anderson"] //end directed by array
], //end of the episode entry
[ "Bart-Mangled Banner", 334," FABF17"," May 16, 2004",
   [], //end show runner array
   ["John Frink (writer)","John Frink"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Fraudcast News", 335," FABF18"," May 23, 2004",
   [], //end show runner array
   ["Don Payne"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror XV", 336,"FABF23","November 7, 2004",
   [], //end show runner array
   ["Bill Odenkirk"], //end written by array
   ["David Silverman"] //end directed by array
], //end of the episode entry
[ "All's Fair in Oven War", 337," FABF20"," November 14, 2004",
   [], //end show runner array
   ["Matt Selman"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Sleeping with the Enemy", 338," FABF19"," November 21, 2004",
   [], //end show runner array
   ["Jon Vitti"], //end written by array
   ["Lauren MacMullan"] //end directed by array
], //end of the episode entry
[ "She Used to Be My Girl", 339," FABF22"," December 5, 2004",
   [], //end show runner array
   ["Tim Long"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "Fat Man and Little Boy", 340," FABF21"," December 12, 2004",
   [], //end show runner array
   ["Joel H. Cohen"], //end written by array
   ["Mike B. Anderson"] //end directed by array
], //end of the episode entry
[ "Midnight Rx", 341," FABF16"," January 15, 2005",
   [], //end show runner array
   ["Marc Wilmore"], //end written by array
   ["Nancy Kruse"] //end directed by array
], //end of the episode entry
[ "Mommie Beerest", 342," GABF01"," January 30, 2005",
   [], //end show runner array
   ["Michael Price"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Homer and Ned's Hail Mary Pass", 343," GABF02"," March 11, 2005",
   [], //end show runner array
   ["Tim Long"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Pranksta Rap", 344," GABF03"," March 11, 2005",
   [], //end show runner array
   ["Matt Selman"], //end written by array
   ["Mike B. Anderson"] //end directed by array
], //end of the episode entry
[ "There's Something About Marrying", 345," GABF04"," March 18, 2005",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "On a Clear Day I Can't See My Sister", 346," GABF06"," March 6, 2005",
   [], //end show runner array
   ["Jeff Westbrook"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "Goo Goo Gai Pan", 347,"GABF06","March 13, 2005",
   [], //end show runner array
   ["Dana Gould","Dana Gould"], //end written by array
   ["Lance Kramer"] //end directed by array
], //end of the episode entry
[ "Mobile Homer", 348," GABF07"," March 20, 2005",
   [], //end show runner array
   ["Tim Long"], //end written by array
   ["Raymond S. Persi"] //end directed by array
], //end of the episode entry
[ "The Seven-Beer Snitch", 349," GABF08"," April 3, 2005",
   ["Al Jean"], //end show runner array
   ["Bill Odenkirk"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "Future-Drama", 350," GABF12"," April 17, 2005",
   [], //end show runner array
   ["Matt Selman"], //end written by array
   ["Mike B. Anderson"] //end directed by array
], //end of the episode entry
[ "Don't Fear the Roofer", 351," GABF10"," May 1, 2005",
   [], //end show runner array
   ["Kevin Curran"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "The Heartbroke Kid", 352," GABF11"," May 1, 2005",
   [], //end show runner array
   ["Ian Maxtone-Graham"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "A Star is Torn", 353," GABF13"," May 8, 2005",
   [], //end show runner array
   ["Carolyn Omine"], //end written by array
   ["Nancy Kruse"] //end directed by array
], //end of the episode entry
[ "Thank God It's Doomsday", 354," GABF14"," May 8, 2005",
   [], //end show runner array
   ["Don Payne"], //end written by array
   ["Michael Marcantel"] //end directed by array
], //end of the episode entry
[ "Home Away from Homer", 355," GABF15"," May 15, 2005",
   [], //end show runner array
   ["Joel H. Cohen"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "The Father, the Son and the Holy Guest Star", 356," GABF09"," May 15, 2005",
   [], //end show runner array
   ["Matt Warburton"], //end written by array
   ["Michael Polcino"] //end directed by array
], //end of the episode entry
[ "Bonfire of the Manatees", 357," GABF18"," September 11, 2005",
   [], //end show runner array
   ["Dan Greaney"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "The Girl Who Slept Too Little", 358," GABF16"," September 18, 2005",
   [], //end show runner array
   ["John Frink (writer)","John Frink"], //end written by array
   ["Raymond S. Persi"] //end directed by array
], //end of the episode entry
[ "Milhouse of Sand and Fog", 359," GABF19"," September 25, 2005",
   ["Al Jean"], //end show runner array
   ["Patric Verrone","Patric M. Verrone"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror XVI", 360," GABF17"," November 6, 2005",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Marge's Son Poisoning", 361," GABF20"," November 13, 2005",
   ["Al Jean"], //end show runner array
   ["Daniel Chun"], //end written by array
   ["Mike B. Anderson"] //end directed by array
], //end of the episode entry
[ "See Homer Run", 362,"GABF21","20 November 2005",
   [], //end show runner array
   ["Stephanie Gillis"], //end written by array
   ["Nancy Kruse"] //end directed by array
], //end of the episode entry
[ "The Last of the Red Hat Mamas", 363," GABF22"," November 27, 2005  lt;ref name=imdb gt;http://www.imdb.com/title/tt0701248 lt;/ref gt;",
   [], //end show runner array
   ["Joel H. Cohen"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "The Italian Bob", 364," HABF02"," December 11, 2005",
   [], //end show runner array
   ["John Frink (writer)","John Frink"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Simpson Christmas Stories", 365," HABF01"," December 18, 2005",
   [], //end show runner array
   ["Don Payne"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Homer's Paternity Coot", 366," HABF03"," January 8, 2006",
   [], //end show runner array
   ["Joel H. Cohen"], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "We're on the Road to D'oh-where", 367," HABF04"," January 29, 2006",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "My Fair Laddy", 368," HABF05"," February 26, 2006",
   [], //end show runner array
   ["Michael Price"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "The Seemingly Never-Ending Story", 369," HABF06"," March 12, 2006",
   [], //end show runner array
   ["Ian Maxtone-Graham"], //end written by array
   ["Raymond S. Persi"] //end directed by array
], //end of the episode entry
[ "Bart Has Two Mommies", 370," HABF07"," March 19, 2006",
   [], //end show runner array
   ["Dana Gould"], //end written by array
   ["Michael Marcantel"] //end directed by array
], //end of the episode entry
[ "Homer Simpson, This Is Your Wife", 371," HABF08"," March 26, 2006",
   [], //end show runner array
   [], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "Million Dollar Abie", 372," HABF09"," April 2, 2006",
   ["Al Jean"], //end show runner array
   ["Tim Long"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Kiss Kiss Bang Bangalore", 373," HABF10"," April 9, 2006",
   [], //end show runner array
   ["Dan Castellaneta","Deb Lacusta"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "The Wettest Stories Ever Told", 374," HABF11"," April 23, 2006",
   ["Al Jean"], //end show runner array
   ["Jeff Westbrook"], //end written by array
   ["Mike B. Anderson"] //end directed by array
], //end of the episode entry
[ "Girls Just Want to Have Sums", 375,"HABF12","April 30, 2006",
   [], //end show runner array
   ["Matt Selman"], //end written by array
   ["Nancy Kruse"] //end directed by array
], //end of the episode entry
[ "Regarding Margie", 376," HABF13"," May 7, 2006",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "The Monkey Suit", 377," HABF14"," May 14, 2006",
   [], //end show runner array
   ["J. Stewart Burns"], //end written by array
   ["Raymond S. Persi"] //end directed by array
], //end of the episode entry
[ "Marge and Homer Turn a Couple Play", 378," HABF16"," May 21, 2006",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "The Mook, the Chef, the Wife and Her Homer", 379," HABF15"," September 10, 2006",
   [], //end show runner array
   ["Bill Odenkirk"], //end written by array
   ["Micheal Marcantel"] //end directed by array
], //end of the episode entry
[ "Jazzy and the Pussycats", 380," HABF18"," September 17, 2006",
   [], //end show runner array
   ["Daniel Chun"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Please Homer, Don't Hammer 'Em", 381," HABF20"," September 24, 2006",
   [], //end show runner array
   ["Matt Warburton"], //end written by array
   ["Mike B. Anderson","Ralph Sosa"] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror XVII", 382," HABF17"," November 05, 2006",
   [], //end show runner array
   ["Peter Gaffney"], //end written by array
   ["David Silverman","Matthew Faughnan"] //end directed by array
], //end of the episode entry
[ "G.I. (Annoyed Grunt)", 383," HABF21"," Sunday November 12, 2006",
   [], //end show runner array
   ["Daniel Chun"], //end written by array
   ["Nancy Kruse"] //end directed by array
], //end of the episode entry
[ "Moe'N'a Lisa", 384,"HABF19","November 19, 2006",
   [], //end show runner array
   ["Matt Warburton"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Ice Cream of Margie (with the Light Blue Hair)", 385," HABF22"," November 26, 2006",
   [], //end show runner array
   ["Carolyn Omine"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "The Haw-Hawed Couple", 386,"JABF02","Sunday December 10, 2006",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Kill Gil: Vols. 1  amp; 2", 387," JABF01"," December 17, 2006",
   [], //end show runner array
   ["Jeff Westbrook"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "The Wife Aquatic", 388," JABF03"," January 7, 2007",
   [], //end show runner array
   ["Kevin Curran"], //end written by array
   ["Lance Kramer"] //end directed by array
], //end of the episode entry
[ "Revenge is a Dish Best Served Three Times", 389," JABF05"," January 28, 2007",
   [], //end show runner array
   ["Joel H. Cohen"], //end written by array
   ["Michael Polcino"] //end directed by array
], //end of the episode entry
[ "Little Big Girl", 390," JABF04"," February 11, 2007",
   [], //end show runner array
   ["Don Payne"], //end written by array
   ["Raymond S. Persi"] //end directed by array
], //end of the episode entry
[ "Springfield Up", 391,"JABF07","Febuary 18 2007",
   [], //end show runner array
   ["Matt Warburton"], //end written by array
   ["Chuck Sheetz"] //end directed by array
], //end of the episode entry
[ "Yokel Chords", 392,"JABF09|","March 4, 2007|",
   [], //end show runner array
   ["Michael Price"], //end written by array
   ["Susie Dietter"] //end directed by array
], //end of the episode entry
[ "Rome-Old and Julie-Eh", 393,"JABF08","March 11, 2007",
   [], //end show runner array
   ["Daniel Chun"], //end written by array
   ["Nancy Kruse"] //end directed by array
], //end of the episode entry
[ "Homerazzi", 394," JABF06"," March 25, 2007",
   [], //end show runner array
   ["J. Stewart Burns"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "Marge Gamer", 395," JABF10"," April 22, 2007",
   [], //end show runner array
   ["J. Stewart Burns"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "The Boys of Bummer", 396," JABF11"," April 29, 2007",
   [], //end show runner array
   ["Michael Price"], //end written by array
   ["Rob Oliver"] //end directed by array
], //end of the episode entry
[ "Crook and Ladder", 397," JABF13"," May 6, 2007",
   ["Al Jean"], //end show runner array
   ["Bill Odenkirk"], //end written by array
   ["Lance Kramer"] //end directed by array
], //end of the episode entry
[ "Stop or My Dog Will Shoot!", 398," JABF12"," May 13, 2007",
   [], //end show runner array
   ["John Frink (writer)","John Frink"], //end written by array
   ["Matthew Faughnan"] //end directed by array
], //end of the episode entry
[ "24 Minutes", 399," JABF14"," May 20, 2007",
   [], //end show runner array
   ["Ian Maxtone-Graham","Billy Kimball"], //end written by array
   ["Raymond S. Persi"] //end directed by array
], //end of the episode entry
[ "You Kent Always Say What You Want", 400," JABF15"," May 20th, 2007",
   [], //end show runner array
   ["Tim Long"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "He Loves to Fly and He D'ohs", 401,"JABF20","September 23, 2007",
   [], //end show runner array
   ["Joel H. Cohen"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "The Homer of Seville", 402," JABF18"," September 30, 2007",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Midnight Towboy", 403,"JABF21","October 7, 2007",
   [], //end show runner array
   ["Stephanie Gillis"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "I Don't Wanna Know Why the Caged Bird Sings", 404,"JABF19","October 14, 2007",
   [], //end show runner array
   ["Dana Gould"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror XVIII", 405," JABF16"," November 4, 2007",
   [], //end show runner array
   ["Marc Wilmore"], //end written by array
   ["Chuck Sheetz"] //end directed by array
], //end of the episode entry
[ "Little Orphan Millie", 406," JABF22"," November 11, 2007",
   [], //end show runner array
   ["Mick Kelly"], //end written by array
   ["Lance Kramer"] //end directed by array
], //end of the episode entry
[ "Husbands and Knives", 407,"JABF17","November 18, 2007 ",
   [], //end show runner array
   ["Matt Selman"], //end written by array
   ["Nancy Kruse"] //end directed by array
], //end of the episode entry
[ "Funeral for a Fiend", 408," KABF01"," November 25, 2007",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Eternal Moonshine of the Simpson Mind", 409,"KABF02|","December 16, 2007|",
   [], //end show runner array
   ["J. Stewart Burns"], //end written by array
   ["Chuck Sheetz"] //end directed by array
], //end of the episode entry
[ "E. Pluribus Wiggum", 410," KABF03"," January 6, 2008",
   [], //end show runner array
   ["Michael Price"], //end written by array
   ["Michael Polcino"] //end directed by array
], //end of the episode entry
[ "That '90s Show", 411,"KABF04","January 27, [[2008]]",
   [], //end show runner array
   ["Matt Selman"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Love, Springfieldian Style", 412," KABF05"," February 17, 2008",
   [], //end show runner array
   ["Don Payne"], //end written by array
   ["Raymond S. Persi"] //end directed by array
], //end of the episode entry
[ "The Debarted", 413,"KABF06"," March 2, 2008",
   [], //end show runner array
   ["Joel H. Cohen"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "Dial  quot;N quot; for Nerder", 414,"KABF07","March 9, [[2008]]",
   [], //end show runner array
   ["Carolyn Omine","William Wright"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "Smoke on the Daughter", 415,"KABF08","March 30, 2008",
   [], //end show runner array
   ["Billy Kimball"], //end written by array
   ["Lance Kramer"] //end directed by array
], //end of the episode entry
[ "Papa Don't Leech", 416," KABF09"," April 13, 2008",
   [], //end show runner array
   ["Reid Harrison"], //end written by array
   ["Chris Clements"] //end directed by array
], //end of the episode entry
[ "Apocalypse Cow", 417,"KABF10","April 27, 2008",
   [], //end show runner array
   ["Jeff Westbrook"], //end written by array
   ["Nancy Kruse"] //end directed by array
], //end of the episode entry
[ "Any Given Sundance", 418,"KABF11","May 4, 2008",
   [], //end show runner array
   ["Daniel Chun"], //end written by array
   ["Chuck Sheetz"] //end directed by array
], //end of the episode entry
[ "Mona Leaves-a", 419,"KABF12","May 11, 2008",
   [], //end show runner array
   ["Joel H. Cohen"], //end written by array
   ["Mike B. Anderson"] //end directed by array
], //end of the episode entry
[ "All About Lisa", 420,"KABF13","May 18, 2008",
   [], //end show runner array
   ["John Frink (writer)","John Frink"], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Sex, Pies, and Idiot Scrapes", 421," KABF17"," September 28, 2008",
   [], //end show runner array
   ["Kevin Curran"], //end written by array
   ["Lance Kramer"] //end directed by array
], //end of the episode entry
[ "Lost Verizon", 422," KABF15"," October 5, 2008",
   [], //end show runner array
   ["John Frink (writer)","John Frink"], //end written by array
   ["Raymond S. Persi"] //end directed by array
], //end of the episode entry
[ "Double, Double, Boy in Trouble", 423," KABF14"," October 19, 2008",
   [], //end show runner array
   ["Bill Odenkirk"], //end written by array
   ["Nancy Kruse"] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror XIX", 424," KABF16"," November 2, 2008",
   [], //end show runner array
   ["Matt Warburton"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "Dangerous Curves", 425,"KABF18","November 9, 2008",
   [], //end show runner array
   ["Ian Maxtone-Graham","Billy Kimball"], //end written by array
   ["Matthew Faughnan"] //end directed by array
], //end of the episode entry
[ "Homer and Lisa Exchange Cross Words", 426," KABF19"," November 16, 2008",
   [], //end show runner array
   ["Tim Long"], //end written by array
   ["Michael Polcino"] //end directed by array
], //end of the episode entry
[ "Mypods and Boomsticks", 427,"KABF20","November 30, 2008",
   [], //end show runner array
   ["Marc Wilmore"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "The Burns and the Bees", 428," KABF21"," 7 December 2008",
   [], //end show runner array
   ["Stephanie Gillis"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Lisa the Drama Queen", 429,"KABF22","January 25, 2009",
   [], //end show runner array
   ["Brian Kelley"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "Take My Life, Please", 430," LABF01"," 15 February 2009",
   [], //end show runner array
   ["Don Payne"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "How the Test Was Won", 431," LABF02"," March 1, 2009",
   ["Al Jean"], //end show runner array
   ["Michael Price"], //end written by array
   ["Lance Kramer"] //end directed by array
], //end of the episode entry
[ "No Loan Again, Naturally", 432," LABF03"," March 8, 2009",
   ["Al Jean"], //end show runner array
   ["Jeff Westbrook"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Gone Maggie Gone", 433,"LABF04","March 15, 2009",
   ["Al Jean"], //end show runner array
   ["Ian Maxtone-Graham","Billy Kimball"], //end written by array
   ["Chris Clements"] //end directed by array
], //end of the episode entry
[ "In the Name of the Grandfather", 434,"LABF11","March 17, 2009 (UK), March 22 2009 (USA)",
   ["Al Jean"], //end show runner array
   ["Matt Marshall"], //end written by array
   ["Ralph Sosa"] //end directed by array
], //end of the episode entry
[ "Wedding for Disaster", 435," LABF05"," March 29, 2009",
   [], //end show runner array
   ["Joel H. Cohen"], //end written by array
   ["Chuck Sheetz"] //end directed by array
], //end of the episode entry
[ "Eeny Teeny Maya, Moe", 436," LABF06"," April 5, 2009",
   [], //end show runner array
   ["John Frink (writer)","John Frink"], //end written by array
   ["Nancy Kruse"] //end directed by array
], //end of the episode entry
[ "The Good, the Sad and the Drugly", 437," LABF07"," April 19, 2009",
   [], //end show runner array
   ["Marc Wilmore"], //end written by array
   ["Rob Oliver"] //end directed by array
], //end of the episode entry
[ "Father Knows Worst", 438,"LABF08","April 26, 2009",
   [], //end show runner array
   ["Rob LaZebnik"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "Waverly Hills 9-0-2-1-(Annoying Grunt)", 439," LABF10","May 3, 2009",
   [], //end show runner array
   ["J. Stewart Burns"], //end written by array
   ["Michael Polcino"] //end directed by array
], //end of the episode entry
[ "Four Great Women and a Manicure", 440," LABF09"," May 10, 2009",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Coming to Homerica", 441," LABF12"," May 17, 2009",
   [], //end show runner array
   [], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Homer the Whopper", 442," LABF13"," September 27, 2009",
   ["Al Jean"], //end show runner array
   [], //end written by array
   ["Lance Kramer"] //end directed by array
], //end of the episode entry
[ "Bart Gets a  quot;Z quot;", 443," LABF14"," October 4, 2009",
   ["Al Jean"], //end show runner array
   ["Matt Selman"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "The Great Wife Hope", 444," LABF16"," October 11, 2009",
   ["Al Jean"], //end show runner array
   ["Carolyn Omine"], //end written by array
   ["Matthew Faughnan"] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror XX", 445," LABF14"," October 18, 2009",
   [], //end show runner array
   ["Daniel Chun"], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "The Devil Wears Nada", 446," LABF17"," November 15, 2009",
   ["Al Jean"], //end show runner array
   ["Tim Long"], //end written by array
   ["Nancy Kruse"] //end directed by array
], //end of the episode entry
[ "Pranks and Greens", 447,"LABF18"," November 22, 2009",
   ["Al Jean"], //end show runner array
   ["Jeff Westbrook"], //end written by array
   ["Chuck Sheetz"] //end directed by array
], //end of the episode entry
[ "Rednecks and Broomsticks", 448," LABF19"," November 29, 2009 ",
   ["Al Jean"], //end show runner array
   ["Kevin Curran"], //end written by array
   ["Bob Anderson","Rob Oliver"] //end directed by array
], //end of the episode entry
[ "O Brother, Where Bart Thou?", 449," MABF01"," December 13, 2009",
   ["Al Jean"], //end show runner array
   ["Matt Selman"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Thursdays with Abie", 450," MABF02"," January 3, 2010",
   ["Al Jean"], //end show runner array
   ["Mitchell H. Glazer","Don Payne"], //end written by array
   ["Michael Polcino"] //end directed by array
], //end of the episode entry
[ "Once Upon a Time in Springfield", 451," LABF20"," January 10, 2010",
   ["Al Jean"], //end show runner array
   ["Stephanie Gillis"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "Million Dollar Maybe", 452," MABF03"," January 31, 2010",
   ["Al Jean"], //end show runner array
   ["Bill Odenkirk"], //end written by array
   ["Chris Clements"] //end directed by array
], //end of the episode entry
[ "Boy Meets Curl", 453," MABF05"," February 14, 2010",
   [], //end show runner array
   ["Rob LaZebnik"], //end written by array
   ["Chuck Sheetz"] //end directed by array
], //end of the episode entry
[ "The Color Yellow", 454," MABF06"," February 21st, 2010",
   ["Al Jean"], //end show runner array
   ["Billy Kimball","Ian Maxtone-Graham"], //end written by array
   ["Raymond S. Persi"] //end directed by array
], //end of the episode entry
[ "Postcards From the Wedge", 455," MABF04"," March 14, 2010",
   ["Al Jean"], //end show runner array
   ["Brian Kelley"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Stealing First Base", 456,"MABF07","March 21, 2010",
   [], //end show runner array
   ["John Frink (writer)","John Frink"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "The Greatest Story Ever D'ohed", 457," MABF10"," March 28, 2010",
   [], //end show runner array
   ["Kevin Curran"], //end written by array
   ["Michael Polcino"] //end directed by array
], //end of the episode entry
[ "American History X-cellent", 458,"MABF08","April 11, 2010",
   ["Al Jean"], //end show runner array
   ["Michael Price"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "Chief of Hearts", 459," MABF09"," April 18 , 2010",
   ["Al Jean"], //end show runner array
   ["Carolyn Omine"], //end written by array
   ["Chris Clements"] //end directed by array
], //end of the episode entry
[ "The Squirt and the Whale", 460," MABF14"," April 25, 2010",
   ["Al Jean"], //end show runner array
   ["Matt Warburton"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "To Surveil With Love", 461," MABF13"," May 2, 2010",
   ["Al Jean"], //end show runner array
   ["Michael Nobori"], //end written by array
   ["Lance Kramer"] //end directed by array
], //end of the episode entry
[ "Moe Letter Blues", 462," MABF13"," May 9, 2010",
   ["Al Jean"], //end show runner array
   ["Stephanie Gillis"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "The Bob Next Door", 463," MABF11"," May 16, 2010",
   ["Al Jean"], //end show runner array
   ["John Frink (writer)","John Frink"], //end written by array
   ["Nancy Kruse"] //end directed by array
], //end of the episode entry
[ "Judge Me Tender", 464," MABF15"," May 23, 2010",
   ["Al Jean"], //end show runner array
   ["Dan Greaney","Allen Glazier"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Elementary School Musical", 465," MABF21"," September 26, 2010",
   ["Al Jean"], //end show runner array
   ["Tim Long"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Loan-a Lisa", 466," MABF17"," October 3, 2010",
   ["Al Jean"], //end show runner array
   ["Valentina Garza"], //end written by array
   ["Matthew Faughnan"] //end directed by array
], //end of the episode entry
[ "MoneyBART", 467," MABF18"," October 10, 2010",
   ["Al Jean"], //end show runner array
   ["Tim Long"], //end written by array
   ["Nancy Kruse"] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror XXI", 468," MABF16"," November 7, 2010",
   ["Al Jean"], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Lisa Simpson, This Isn't Your Life", 469," MABF20"," November 14, 2010",
   ["Al Jean"], //end show runner array
   ["Joel H. Cohen"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "The Fool Monty", 470,"NABF01","November 21, 2010",
   ["Al Jean"], //end show runner array
   ["Michael Price"], //end written by array
   ["Steven Dean Moore","Steve Dean Moore"] //end directed by array
], //end of the episode entry
[ "How Munched Is That Birdie in the Window?", 471,"NABF02","November 28, 2010 lt;ref name= quot;airdate quot; gt;{{cite web |url=http://www.daemonstv.com/2010/10/30/rachel-weisz-and-danica-patrick-on-the-simpsons-first-photo/?utm_source=feedburner amp;utm_medium=feed amp;utm_campaign=Feed%3A+daemonstv+%28Daemon%27s+TV%29 |title=Rachel Weisz and Danica Patrick on THE SIMPSONS First Photo |publisher=Daemon's TV |accessdate=October 30, 2010}} lt;/ref gt;",
   ["Al Jean"], //end show runner array
   ["Kevin Curran"], //end written by array
   ["Michael Polcino"] //end directed by array
], //end of the episode entry
[ "The Fight Before Christmas", 472,"MABF22","  December 5, 2010",
   ["Al Jean"], //end show runner array
   ["Dan Castellaneta","Deb Lacusta"], //end written by array
   ["Bob Anderson","Matthew Schofield"] //end directed by array
], //end of the episode entry
[ "Donnie Fatso", 473,"MABF19","December 12, 2010",
   [], //end show runner array
   ["Chris Cluess"], //end written by array
   ["Ralph Sosa","Al Jean"] //end directed by array
], //end of the episode entry
[ "Moms I'd Like to Forget", 474," NABF04"," January 9, 2011",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Flaming Moe", 475,"NABF04"," January 16, 2011  lt;br gt; March 4, 2011 (UK)",
   [], //end show runner array
   ["Matt Selman"], //end written by array
   ["Chuck Sheetz","Al Jean"] //end directed by array
], //end of the episode entry
[ "Homer the Father", 476," NABF05"," January 23, 2011",
   ["Al Jean"], //end show runner array
   ["Joel H. Cohen"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "The Blue and the Gray", 477," NABF06"," February 13, 2011",
   ["Al Jean"], //end show runner array
   ["Rob LaZebnik"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "Angry Dad: The Movie", 478," NABF07"," February 20, 2011",
   [], //end show runner array
   ["John Frink (writer)","John Frink"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "The Scorpion's Tale", 479," NABF08"," March 6, 2011",
   [], //end show runner array
   ["Billy Kimball","Ian Maxtone-Graham"], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "A Midsummer's Nice Dream", 480,"NABF09 ","March 13, 2011 ",
   ["Al Jean"], //end show runner array
   ["Dan Castellaneta","Deb Lacusta"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Love is a Many Strangled Thing", 481," NABF10"," March 27, 2011",
   ["Al Jean"], //end show runner array
   ["Bill Odenkirk"], //end written by array
   ["Michael Polcino"] //end directed by array
], //end of the episode entry
[ "The Great Simpsina", 482," NABF11"," April 10, 2011",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "The Real Housewives of Fat Tony", 483," NABF12"," May 1, 2011",
   ["Al Jean"], //end show runner array
   [], //end written by array
   ["Lance Kramer"] //end directed by array
], //end of the episode entry
[ "Homer Scissorhands", 484,"NABF13","May 8, 2011",
   ["Al Jean"], //end show runner array
   ["Peter Gaffney", "Steve Viksten"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "500 Keys", 485,"NABF14","May 15, 2011",
   ["Al Jean"], //end show runner array
   ["John Frink"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "The Ned-liest Catch", 486," NABF15"," May 22, 2011",
   ["Al Jean"], //end show runner array
   ["Jeff Westbrook"], //end written by array
   ["Chuck Sheetz"] //end directed by array
], //end of the episode entry
[ "The Falcon and the D'ohman", 487," NABF16"," September 25, 2011",
   ["Al Jean"], //end show runner array
   ["Justin Hurwitz"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "Bart Stops to Smell the Roosevelts", 488," NABF17"," October 2, 2011",
   [], //end show runner array
   [], //end written by array
   ["Arnie Pye"] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror XXII", 489," NABF19"," October 30, 2011",
   [], //end show runner array
   ["Carolyn Omine"], //end written by array
   ["Matthew Faughnan"] //end directed by array
], //end of the episode entry
[ "Replaceable You", 490,"NABF21"," November 6, 2011",
   [], //end show runner array
   ["Stephanie Gillis"], //end written by array
   ["Mark Kirkland","Eleanor Abernathy"] //end directed by array
], //end of the episode entry
[ "The Food Wife", 491,""," November 13, 2011",
   ["Matt Selman","Al Jean"], //end show runner array
   ["Matt Selman"], //end written by array
   ["wikipedia:Timothy Bailey","Timothy Bailey"] //end directed by array
], //end of the episode entry
[ "The Book Job", 492," NABF22"," November 20, 2011",
   ["Al Jean"], //end show runner array
   ["Dan Vebber"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "The Man in the Blue Flannel Pants", 493," PABF01"," November 27, 2011",
   [], //end show runner array
   ["Jeff Westbrook"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "The Ten-Per-Cent Solution", 494," PABF02"," December 4, 2011",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Holidays of Future Passed", 495,"NABF18","December 11, 2011",
   ["Al Jean"], //end show runner array
   ["J. Stewart Burns"], //end written by array
   ["Rob Oliver"] //end directed by array
], //end of the episode entry
[ "Politically Inept, with Homer Simpson", 496," PABF03"," January 8, 2012",
   [], //end show runner array
   ["John Frink (writer)","John Frink"], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "The D'oh-cial Network", 497," PABF04"," January 15, 2012",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Moe Goes from Rags to Riches", 498," PABF05"," January 29, 2012",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "The Daughter Also Rises", 499,"PABF06","February 12, 2012",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "At Long Last Leave", 500,"PABF07","February 19, 2012",
   [], //end show runner array
   ["Michael Price"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "Exit Through the Kwik-E-Mart", 501,"PABFxx","March 4, 2012",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "How I Wet Your Mother", 502,"PABF08","March 11, 2012",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Them, Robot", 503,"PABF10", "March 18, 2012",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Beware My Cheating Bart", 504,"","April 15, 2012",
   [], //end show runner array
   [], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "A Totally Fun Thing That Bart Will Never Do Again", 505," PABF12"," April 29, 2012",
   ["Al Jean","Matt Selman"], //end show runner array
   ["Matt Warburton"], //end written by array
   ["Chris Clements"] //end directed by array
], //end of the episode entry
[ "The Spy Who Learned Me", 506,"PABF14 ","May 6, 2012 ",
   ["Groundskeeper Willie"], //end show runner array
   ["Marc Wilmore"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "Ned 'N Edna's Blend", 507," PABF15"," May 13, 2012",
   [], //end show runner array
   ["Jeff Westbrook"], //end written by array
   ["Chuck Sheetz"] //end directed by array
], //end of the episode entry
[ "Lisa Goes Gaga", 508," PABF14"," May 20, 2012",
   [], //end show runner array
   ["Tim Long"], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Moonshine River", 509,"PABF21","September 30, 2012",
   ["Al Jean"], //end show runner array
   ["Tim Long"], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror XXIII", 510," PABF17 lt;ref name= quot;twitpic quot; gt;[http://twitpic.com/7xgczx http://twitpic.com/7xgczx] lt;/ref gt;"," October 7, 2012",
   [], //end show runner array
   ["David Mandel","Brian Kelley"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Adventures in Baby-Getting", 511,"PABF18","November 4, 2012 (originally set for October 21, 2012)",
   [], //end show runner array
   ["Bill Odenkirk"], //end written by array
   ["Rob Oliver"] //end directed by array
], //end of the episode entry
[ "Gone Abie Gone", 512,"PABF16","November 11, 2012",
   ["Al Jean"], //end show runner array
   ["Joel H. Cohen"], //end written by array
   ["Matthew Nastuk"] //end directed by array
], //end of the episode entry
[ "Penny-Wiseguys", 513," PABF16"," November 18, 2012",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "A Tree Grows in Springfield", 514,"PABF22","November 25, 2012",
   [], //end show runner array
   ["Stephanie Gillis"], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "The Day the Earth Stood Cool", 515,"PABF20","December 9, 2012",
   ["Al Jean"], //end show runner array
   ["Matt Selman"], //end written by array
   ["Matthew Faughnan"] //end directed by array
], //end of the episode entry
[ "To Cur, with Love", 516,"PABFxx","December 16, 2012",
   [], //end show runner array
   ["Carolyn Omine"], //end written by array
   ["Steven Dean Moore"] //end directed by array
], //end of the episode entry
[ "Homer Goes to Prep School", 517,"RABF02","January 6, 2013",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "A Test Before Trying", 518,"PABF03","January 13, 2013",
   [], //end show runner array
   ["Joel H. Cohen"], //end written by array
   ["Chris Clements"] //end directed by array
], //end of the episode entry
[ "Changing of the Guardian", 519,"RABF04","January 27, 2013",
   ["Al Jean"], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Love is a Many Splintered Thing", 520,"RABF07","February 10, 2013",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Hardly Kirk-ing", 521,"RABF05","February 17, 2013",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Gorgeous Grampa", 522,"RABF06"," March 3, 2013.",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Black-eyed Please", 523,"RABF09","March 10, 2013",
   [], //end show runner array
   ["John Frink"], //end written by array
   ["Matthew Schofield"] //end directed by array
], //end of the episode entry
[ "Dark Knight Court", 524," RABF10"," March 17, 2013.",
   [], //end show runner array
   ["Billy Kimball","Ian Maxtone-Graham"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "What Animated Women Want", 525,"RABF08","April 14, 2013",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Pulpit Friction", 526," "," April 28th, 2013",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Whiskey Business", 527," RABF12"," May 5th, 2013",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "The Fabulous Faker Boy", 528," RABF13"," May 12, 2013",
   [], //end show runner array
   ["Brian McConnachie"], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "The Saga of Carl", 529,"RABF14"," May 19, [[2013]]",
   [], //end show runner array
   ["Eric Kaplan"], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Dangers on a Train", 530,""," May 19, 2013",
   [], //end show runner array
   [], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Homerland", 531,"RABF20","September 29th, 2013",
   [], //end show runner array
   [], //end written by array
   ["Bob Anderson"] //end directed by array
], //end of the episode entry
[ "Treehouse of Horror XXIV", 532," RABF16","October 6, 2013",
   [], //end show runner array
   ["Jeff Westbrook"], //end written by array
   ["Rob Oliver"] //end directed by array
], //end of the episode entry
[ "Four Regrettings and a Funeral", 533," RABF18","November 3rd, 2013",
   [], //end show runner array
   ["Marc Wilmore"], //end written by array
   ["Mark Kirkland"] //end directed by array
], //end of the episode entry
[ "Yolo", 534,"RABF22"," November 10th, 2013",
   [], //end show runner array
   ["Michael Nobori"], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Labor Pains", 535,"RABF19","November 17th, 2013",
   [], //end show runner array
   ["Don Payne","Mitchell H. Glazer"], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "The Kid is All Right", 536,"SABF02"," November 24th, 2013",
   [], //end show runner array
   ["Tim Long"], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Yellow Subterfuge", 537,"SABF04"," December 8th, 2013",
   [], //end show runner array
   ["Joel H. Cohen"], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "White Christmas Blues", 538,"SABF01"," December 15th, 2013",
   [], //end show runner array
   ["Don Payne"], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Steal This Episode", 539,"SABF05"," January 5th, 2014",
   [], //end show runner array
   ["J. Stewart Burns"], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Married to the Blob", 540,"SABF03"," January 12th, 2014",
   [], //end show runner array
   ["Tim Long"], //end written by array
   [] //end directed by array
], //end of the episode entry
[ "Specs and the City", 541,"SABF06","January 26, 2014",
   [], //end show runner array
   ["Brian Kelley"], //end written by array
   ["Lance Kramer"] //end directed by array
] //end of the episode entry
];//Ending of allEpisodesByNumber array
