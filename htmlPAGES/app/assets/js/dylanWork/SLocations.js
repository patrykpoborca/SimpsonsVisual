//locations have a name and an array of episodes that they were in


var locationsByAppearAmt = [
  ["Moe's Tavern",
    ["Simpsons Roasting on an Open Fire","Homer's Odyssey","There's No Disgrace Like Home","Moaning Lisa","The Telltale Head","Homer's Night Out","Some Enchanted Evening","Bart Gets an \"F\"","Simpson and Delilah","Two Cars in Every Garage and Three Eyes on Every Fish","Dancin' Homer","Bart the Daredevil","Bart Gets Hit by a Car","One Fish, Two Fish, Blowfish, Blue Fish","Homer vs. Lisa and the 8th Commandment","Principal Charming","Blood Feud","When Flanders Failed","Homer Defined","Like Father, Like Clown","Treehouse of Horror II","Flaming Moe's","Burns Verkaufen der Kraftwerk","Lisa the Greek","Brother, Can You Spare Two Dimes?","Lisa the Beauty Queen","New Kid on the Block","Homer's Triple Bypass","Duffless","Krusty Gets Kancelled","Marge on the Lam","The Last Temptation of Homer","Homer the Vigilante","Deep Space Homer","Homer Loves Flanders","Sideshow Bob Roberts","Fear of Flying","Homer vs. Patty and Selma","Who Shot Mr. Burns? (Part One)","Radioactive Man","Bart Sells His Soul","Team Homer","Lisa the Iconoclast","Homer the Smithers","Bart on the Road","The Homer They Fall","El Viaje Misterioso de Nuestro Jomer (The Mysterious Voyage of Homer)","The Springfield Files","Simpsoncalifragilisticexpiala(Annoyed Grunt)cious","Homer vs. the Eighteenth Amendment","My Sister, My Sitter","In Marge We Trust","Homer's Enemy","The Simpsons Spin-Off Showcase","The City of New York vs. Homer Simpson","The Cartridge Family","Miracle on Evergreen Terrace","Simpson Tide","Dumbbell Indemnity","Trash of the Titans","When You Dish Upon a Star","Homer Simpson in: \"Kidney Trouble\"","Mayored to the Mob","Wild Barts Can't Be Broken","Sunday, Cruddy Sunday","I'm with Cupid","Mom and Pop Art","They Saved Lisa's Brain","Pygmoelian","A Tale of Two Springfields","Lisa the Tree Hugger","Homer vs. Dignity","HOM\u042f","Trilogy of Error","Homer the Moe","The Blunder Years","Jaws Wired Shut","Helter Shelter","Large Marge","Pray Anything","The Dad Who Knew Too Little","The Strong Arms of the Ma","The Great Louse Detective","Barting Over","Dude, Where's My Ranch?","Moe Baby Blues","Simpson Christmas Stories","Moe'N'a Lisa","The Boys of Bummer","Marge Gamer","Yokel Chords","Any Given Sundance","The Wife Aquatic","E. Pluribus Wiggum","All About Lisa","Lost Verizon","Eeny Teeny Maya, Moe","Four Great Women and a Manicure","Coming to Homerica","Homer the Whopper","Moe Letter Blues","Judge Me Tender","Loan-a Lisa","Flaming Moe","The Man in the Blue Flannel Pants"] //eps
  ], //loc
  ["Springfield Elementary School",
    ["Simpsons Roasting on an Open Fire","Bart the Genius","Homer's Odyssey","Bart the General","Moaning Lisa","Homer's Night Out","The Crepes of Wrath","Bart Gets an \"F\"","Dancin' Homer","Bart the Daredevil","Principal Charming","Lisa's Substitute","Homer Defined","Bart the Lover","Separate Vocations","Bart's Friend Falls in Love","The Otto Show","Kamp Krusty","Itchy & Scratchy: The Movie","I Love Lisa","Whacking Day","Boy-Scoutz 'n the Hood","The Last Temptation of Homer","Bart Gets Famous","Sweet Seymour Skinner's Baadasssss Song","The Boy Who Knew Too Much","Lisa's Rival","Sideshow Bob Roberts","Bart's Girlfriend","Lisa on Ice","Homer the Great","Bart's Comet","Homer vs. Patty and Selma","The PTA Disbands","Lemon of Troy","Who Shot Mr. Burns? (Part One)","Radioactive Man","Home Sweet Homediddly-Dum-Doodily","Lisa the Vegetarian","Treehouse of Horror VI","Team Homer","Lisa the Iconoclast","Bart on the Road","Summer of 4 Ft. 2","Grade School Confidential","Lisa the Simpson","Lisa Gets an \"A\"","Brother's Little Helper","Grift of the Magi","Trilogy of Error","Bart vs. Lisa vs. the Third Grade","Pokey Mom","Special Edna","The Good, the Sad and the Drugly","Skinner's Sense of Snow","Bye Bye Nerdie","Trilogy of Error","24 Minutes","The Debarted","Bart Gets a \"Z\"","Stealing First Base","MoneyBART","500 Keys","Holidays of Future Passed","Penny-Wiseguys","The Day the Earth Stood Cool","A Test Before Trying","Love is a Many Splintered Thing","Black-eyed Please","Dark Knight Court","What Animated Women Want","Pulpit Friction","Yolo","The Kid is All Right"] //eps
  ], //loc
  ["Springfield Nuclear Power Plant",
    ["Simpsons Roasting on an Open Fire","Homer's Odyssey","There's No Disgrace Like Home","Life on the Fast Lane","Homer's Night Out","Krusty Gets Busted","Simpson and Delilah","Two Cars in Every Garage and Three Eyes on Every Fish","Bart Gets Hit by a Car","Homer vs. Lisa and the 8th Commandment","Bart's Dog Gets an F","Brush with Greatness","Blood Feud","Stark Raving Dad","When Flanders Failed","Bart the Murderer","Homer Defined","Lisa's Pony","Burns Verkaufen der Kraftwerk","Homer at the Bat","Brother, Can You Spare Two Dimes?","Marge Gets a Job","Homer's Triple Bypass","Marge vs. the Monorail","Duffless","Last Exit to Springfield","Rosebud","Homer Goes to College","The Last Temptation of Homer","Deep Space Homer","Burns' Heir","Lady Bouvier's Lover","Homer Badman","Homer the Great","And Maggie Makes Three","Homie the Clown","A Star is Burns","Lisa's Wedding","Who Shot Mr. Burns? (Part One)","Radioactive Man","Lisa the Vegetarian","King-Size Homer","Team Homer","Homer the Smithers","Bart on the Road","Raging Abe Simpson and His Grumbling Grandson in \"The Curse of the Flying Hellfish\"","Burns, Baby Burns","The Springfield Files","The Twisted World of Marge Simpson","Mountain of Madness","The Old Man and the Lisa","Homer's Enemy","Lost Our Lisa","D'oh-in' in the Wind","Homer to the Max","Monty Can't Buy Me Love","Hello Gutter, Hello Fadder","Missionary: Impossible","A Tale of Two Springfields","Homer vs. Dignity","The Computer Wore Menace Shoes","The Parent Rap","Flaming Moe","The Falcon and the D'ohman","Replaceable You","The Man in the Blue Flannel Pants","How I Wet Your Mother","Penny-Wiseguys","The Day the Earth Stood Cool","Black-eyed Please","What Animated Women Want"] //eps
  ], //loc
  ["Springfield General Hospital",
    ["Krusty Gets Busted","I Married Marge","Bart the Daredevil","Bart Gets Hit by a Car","The Way We Was","Oh Brother, Where Art Thou?","Blood Feud","Colonel Homer","Homer's Triple Bypass","Lisa's First Word","So It's Come to This: A Simpsons Clip Show","Marge in Chains","Homer Goes to College","Bart of Darkness","And Maggie Makes Three","A Star is Burns","'Round Springfield","Who Shot Mr. Burns? (Part Two)","Treehouse of Horror VI","22 Short Films About Springfield","Simpsoncalifragilisticexpiala(Annoyed Grunt)cious","Lost Our Lisa","Homer Simpson in: \"Kidney Trouble\"","Monty Can't Buy Me Love","D'oh-in' in the Wind","Behind the Laughter","Worst Episode Ever","Trilogy of Error","Children of a Lesser Clod","A Tale of Two Springfields","Half-Decent Proposal","I Am Furious Yellow","Poppa's Got a Brand New Badge","Little Big Mom","Eight Misbehavin'","Three Gays of the Condo","Goo Goo Gai Pan","The Heartbroke Kid","Gone Maggie Gone","Eeny Teeny Maya, Moe","Million Dollar Maybe","Chief of Hearts","The Fool Monty","Holidays of Future Passed","The D'oh-cial Network","Ned 'N' Edna's Blend","A Tree Grows in Springfield"] //eps
  ], //loc
  ["Kwik-E-Mart",
    ["The Telltale Head","Homer's Night Out","Krusty Gets Busted","Homer vs. Lisa and the 8th Commandment","Principal Charming","Stark Raving Dad","Lisa's Pony","Separate Vocations","Dog of Death","The Otto Show","Homer the Heretic","Whacking Day","Marge on the Lam","Boy-Scoutz 'n the Hood","Homer the Vigilante","Bart Gets Famous","Homer and Apu","Sweet Seymour Skinner's Baadasssss Song","Homie the Clown","The Springfield Connection","Bart Sells His Soul","Lisa the Vegetarian","Two Bad Neighbors","Scenes from the Class Struggle in Springfield","Bart the Fink","Lisa the Iconoclast","Hurricane Neddy","The Principal and the Pauper","The Cartridge Family","Bart Star","The Two Mrs. Nahasapeemapetilons","Lisa the Simpson","Bart the Mother","Treehouse of Horror IX","I'm with Cupid","The Computer Wore Menace Shoes","The Old Man and the Key","Helter Shelter","The Strong Arms of the Ma","The Sweetest Apu"] //eps
  ], //loc
  ["742 Evergreen Terrace",
    ["Simpsons Roasting on an Open Fire","Bart the Genius","Homer's Odyssey","There's No Disgrace Like Home","Bart the General","Moaning Lisa","The Call of the Simpsons","The Telltale Head","Life on the Fast Lane","Homer's Night Out","The Crepes of Wrath","Krusty Gets Busted","Some Enchanted Evening","Bart Gets an \"F\"","Simpson and Delilah","Treehouse of Horror","Two Cars in Every Garage and Three Eyes on Every Fish","Dancin' Homer","Dead Putting Society","Bart vs. Thanksgiving","Bart the Daredevil","Itchy & Scratchy & Marge","Bart Gets Hit by a Car","One Fish, Two Fish, Blowfish, Blue Fish","The Way We Was","Homer vs. Lisa and the 8th Commandment","Principal Charming","Oh Brother, Where Art Thou?","Bart's Dog Gets an F","Old Money","Brush with Greatness","Lisa's Substitute","The War of the Simpsons","Three Men and a Comic Book","Blood Feud"] //eps
  ], //loc
  ["First Church of Springfield",
    ["The Pagans","The Telltale Head","Krusty Gets Busted","Homer's Night Out","Homer vs. Lisa and the 8th Commandment","Principal Charming","The War of the Simpsons","Lisa the Greek","Homer the Heretic","Homer's Barbershop Quartet","Bart's Inner Child","Homer Loves Flanders","Lady Bouvier's Lover","Bart's Girlfriend","Bart Sells His Soul","Hurricane Neddy","The Springfield Files","The Twisted World of Marge Simpson","My Sister, My Sitter","In Marge We Trust","The Joy of Sect","Lisa Gets an \"A\"","Viva Ned Flanders","Simpsons Bible Stories","Take My Wife, Sleaze","Faith Off","The Frying Game","Poppa's Got a Brand New Badge","Special Edna","The Strong Arms of the Ma","Pray Anything","Wedding for Disaster","The D'oh-cial Network","Pulpit Friction","Four Regrettings and a Funeral"] //eps
  ], //loc
  ["Krustylu Studios",
    ["The Telltale Head","Krusty Gets Busted","Itchy & Scratchy & Marge","Like Father, Like Clown","Treehouse of Horror II","Lisa the Greek","Dog of Death","Treehouse of Horror III","Marge Gets a Job","Lisa's First Word","The Front","Krusty Gets Kancelled","Homer Goes to College","Bart Gets Famous","Bart of Darkness","Itchy & Scratchy Land","Homie the Clown","'Round Springfield","Sideshow Bob's Last Gleaming","Bart the Fink","The Last Temptation of Krust","The Itchy & Scratchy & Poochie Show","Brother from Another Series","Hello Gutter, Hello Fadder","Day of the Jackanapes","The Lastest Gun in the West","I Am Furious Yellow","All About Lisa","Pranks and Greens","Once Upon a Time in Springfield"] //eps
  ], //loc
  ["Springfield Retirement Castle",
    ["Bart the General","The Telltale Head","Two Cars in Every Garage and Three Eyes on Every Fish","Bart vs. Thanksgiving","One Fish, Two Fish, Blowfish, Blue Fish","Old Money","Homer Defined","Itchy & Scratchy: The Movie","New Kid on the Block","Brother from the Same Planet","I Love Lisa","The Front","Grampa vs. Sexual Inadequacy","Two Dozen and One Greyhounds","'Round Springfield","Who Shot Mr. Burns? (Part One)","Raging Abe Simpson and His Grumbling Grandson in \"The Curse of the Flying Hellfish\"","Hurricane Neddy","The Springfield Files","The Old Man and the Lisa","The Two Mrs. Nahasapeemapetilons","Miracle on Evergreen Terrace","Girly Edition","Homer Simpson in: \"Kidney Trouble\"","The Old Man and the \"C\" Student","Treehouse of Horror XI","The Great Money Caper","The Old Man and the Key","The Good, the Sad and the Drugly"] //eps
  ], //loc
  ["744 Evergreen Terrace",
    ["Simpsons Roasting on an Open Fire","The Call of the Simpsons","Dead Putting Society","One Fish, Two Fish, Blowfish, Blue Fish","When Flanders Failed","Radio Bart","Bart the Lover","Homer the Heretic","A Streetcar Named Marge","Lisa's First Word","Marge in Chains","Cape Feare","The Last Temptation of Homer","Homer the Vigilante","Homer Loves Flanders","Home Sweet Homediddly-Dum-Doodily","Lisa the Vegetarian","Lisa's Date with Density","Hurricane Neddy","My Sister, My Sitter ","Bart Star","Miracle on Evergreen Terrace","The Joy of Sect","The Trouble with Trillions","Little Big Mom","Alone Again, Natura-Diddily","I'm Goin' to Praiseland","The Bart of War"] //eps
  ], //loc
  ["Krusty Burger",
    ["Old Money","Three Men and a Comic Book","Boy-Scoutz 'n the Hood","Secrets of a Successful Marriage","And Maggie Makes Three","A Star is Burns","Who Shot Mr. Burns? (Part Two)","King-Size Homer","Two Bad Neighbors","Bart the Fink","Scenes from the Class Struggle in Springfield","22 Short Films About Springfield","Miracle on Evergreen Terrace","Lard of the Dance","Lisa the Tree Hugger","Brother's Little Helper","Day of the Jackanapes","Little Girl in the Big Ten","I'm Spelling as Fast as I Can","He Loves to Fly and He D'ohs","Husbands and Knives","Treehouse of Horror XX"] //eps
  ], //loc
  ["Springfield Town Square",
    ["The Telltale Head","Simpson and Delilah","Old Money","Treehouse of Horror II ","Flaming Moe's","The Otto Show","Bart's Inner Child","$pringfield (Or, How I Learned to Stop Worrying and Love Legalized Gambling)","Bart's Girlfriend","Bart's Comet","Radioactive Man","Treehouse of Horror VI ","Lisa the Iconoclast","Hurricane Neddy","Homer vs. the Eighteenth Amendment","Trash of the Titans","Bart the Mother","The Old Man and the \"C\" Student","'Tis the Fifteenth Season","Midnight Towboy","Treehouse of Horror XIX"] //eps
  ], //loc
  ["The Android's Dungeon & Baseball Card Shop",
    ["Three Men and a Comic Book","Mr. Plow","Lady Bouvier's Lover","'Round Springfield","Radioactive Man","Bart Sells His Soul","Marge Be Not Proud","Team Homer","The Day the Violence Died","22 Short Films About Springfield","The Itchy & Scratchy & Poochie Show","The Canine Mutiny","Homer vs. Dignity","Worst Episode Ever","I Am Furious Yellow","'Tis the Fifteenth Season","Husbands and Knives","Homer the Whopper","Moms I'd Like to Forget"] //eps
  ], //loc
  ["Springfield Town Hall",
    ["Homer's Odyssey","The Telltale Head","Marge vs. the Monorail","$pringfield (Or, How I Learned to Stop Worrying and Love Legalized Gambling)","Bart's Comet","A Star is Burns","Who Shot Mr. Burns? (Part One)","Much Apu About Nothing","Bart After Dark","The Trouble with Trillions","Trash of the Titans","Poppa's Got a Brand New Badge","Treehouse of Horror XIX","See Homer Run","E. Pluribus Wiggum","Papa Don't Leech","Postcards From the Wedge","To Surveil With Love","At Long Last Leave"] //eps
  ], //loc
  ["Aztec Theater",
    ["The Telltale Head","Principal Charming","Oh Brother, Where Art Thou?","Bart's Friend Falls in Love","Itchy & Scratchy: The Movie","Cape Feare","$pringfield (Or, How I Learned to Stop Worrying and Love Legalized Gambling)","Burns' Heir","The Boy Who Knew Too Much","And Maggie Makes Three","A Star is Burns","King-Size Homer","Bart on the Road","Burns, Baby Burns","Grade School Confidential","Natural Born Kissers","HOM\u042f","Replaceable You"] //eps
  ], //loc
  ["Springfield County Court House",
    ["Krusty Gets Busted","Bart Gets Hit by a Car","Bart the Murderer","Marge in Chains","Sideshow Bob Roberts","The Boy Who Knew Too Much","The Day the Violence Died","Lisa the Skeptic","Bart the Mother","The Great Money Caper","Sweets and Sour Marge","Weekend at Burnsie's","The Frying Game","The Parent Rap","Barting Over","Brake My Wife, Please","The Monkey Suit","Rome-Old and Julie-Eh"] //eps
  ], //loc
  ["Springfield Police Station",
    ["Krusty Gets Busted","One Fish, Two Fish, Blowfish, Blue Fish","Homer the Vigilante","Bart Gets an Elephant","The Springfield Connection","Who Shot Mr. Burns? (Part Two)","The Springfield Files","Homer vs. the Eighteenth Amendment","The Secret War of Lisa Simpson","Bart Carny","Dumbbell Indemnity","Eight Misbehavin'","It's a Mad, Mad, Mad, Mad Marge","Weekend at Burnsie's","Poppa's Got a Brand New Badge","My Mother the Carjacker","To Surveil With Love","Chief of Hearts"] //eps
  ], //loc
  ["Springfield War Memorial Stadium",
    ["Dancin' Homer","Treehouse of Horror II","Flaming Moe's","Homer at the Bat","Marge vs. the Monorail","Duffless","The Twisted World of Marge Simpson","The Cartridge Family","Trash of the Titans","Wild Barts Can't Be Broken","Homer vs. Dignity","'Scuse Me While I Miss the Sky","The Bart of War","Treehouse of Horror XIV","Today, I Am a Clown","Homer and Ned's Hail Mary Pass","Thank God It's Doomsday"] //eps
  ], //loc
  ["Springfield Mall",
    ["Simpsons Roasting on an Open Fire","Life on the Fast Lane","Simpson and Delilah","Bart Gets Hit by a Car","Principal Charming","Bart's Dog Gets an F","Blood Feud","The Homer They Fall","The Itchy & Scratchy & Poochie Show","The Last Temptation of Krust","Simpson Tide","Please Homer, Don't Hammer 'Em","G.I. (Annoyed Grunt)","Rome-Old and Julie-Eh","The Devil Wears Nada","Beware My Cheating Bart"] //eps
  ], //loc
  ["Burns Manor",
    ["There's No Disgrace Like Home","Bart vs. Thanksgiving","Bart Gets Hit by a Car","Blood Feud","Burns' Heir","Two Dozen and One Greyhounds","Team Homer","Homer the Smithers","Burns, Baby Burns","The Mansion Family","Tennis the Menace","Crook and Ladder","Springfield Up","American History X-cellent","Treehouse of Horror XXIV"] //eps
  ], //loc
  ["Springfield State Prison",
    ["Homer's Odyssey","The War of the Simpsons","Bart the Murderer","Colonel Homer","Black Widower","Itchy & Scratchy: The Movie","Homer's Barbershop Quartet","Cape Feare","Sideshow Bob Roberts","Lisa on Ice","Hurricane Neddy","Brother from Another Series","Realty Bites","Children of a Lesser Clod"] //eps
  ], //loc
  ["Skinner's House",
    ["Sweet Seymour Skinner's Baadasssss Song","Lisa's Rival","The Springfield Connection","Bart the Fink","22 Short Films About Springfield","Lisa's Date with Density","Grade School Confidential","The Principal and the Pauper","The Old Man and the \"C\" Student","Grift of the Magi","Worst Episode Ever","The Computer Wore Menace Shoes","Trilogy of Error","Sex, Pies, and Idiot Scrapes"] //eps
  ], //loc
  ["Springfield International Airport",
    ["Simpsons Roasting on an Open Fire","The Crepes of Wrath","Homer and Apu","Homerland","Fear of Flying","Lisa's Wedding","Mother Simpson","The Two Mrs. Nahasapeemapetilons","The Joy of Sect","Thirty Minutes Over Tokyo","Mr. Spritz Goes to Washington"," Elementary School Musical","Politically Inept, with Homer Simpson"] //eps
  ], //loc
  ["316 Pikeland Ave.",
    ["Itchy & Scratchy & Marge","Homer Defined","The Otto Show","Bart's Friend Falls in Love","Radioactive Man","Bart Sells His Soul","Marge Be Not Proud","Lisa's Date with Density","Faith Off","Days of Wine and D'oh'ses","Milhouse of Sand and Fog","Lost Verizon","Moe Goes from Rags to Riches"] //eps
  ], //loc
  ["Barney's Bowlarama",
    ["Moaning Lisa","Life on the Fast Lane","Colonel Homer","The Last Temptation of Homer","Homer vs. the Eighteenth Amendment","And Maggie Makes Three","Team Homer","Hurricane Neddy","Hello Gutter, Hello Fadder","A Hunka Hunka Burns in Love","He Loves to Fly and He D'ohs","Penny-Wiseguys"] //eps
  ], //loc
  ["Springfield Convention Center",
    ["Three Men and a Comic Book","Brother, Can You Spare Two Dimes?","Mr. Plow","Homer Badman","The Twisted World of Marge Simpson","King of the Hill","Mayored to the Mob","Make Room for Lisa","Thirty Minutes Over Tokyo","The Mansion Family","HOM\u042f","The Squirt and the Whale"] //eps
  ], //loc
  ["Springfield High School",
    ["The Way We Was","The Front","Homer Goes to College","Marge on the Lam","Homerpalooza","Half-Decent Proposal","Weekend at Burnsie's","She Used to Be My Girl","Springfield Up","Take My Life, Please","Moms I'd Like to Forget"] //eps
  ], //loc
  ["Costington's",
    ["Trash of the Titans","Homer to the Max","Homer vs. Dignity","Poppa's Got a Brand New Badge","Moe Baby Blues","Future-Drama","Kill Gil: Vols. 1 & 2","The Boys of Bummer","Crook and Ladder","Loan-a Lisa","The Wandering Juvie"] //eps
  ], //loc
  ["Rural Route 27",
    ["Bart Gets an Elephant","22 Short Films About Springfield","The Twisted World of Marge Simpson","The Joy of Sect","Days of Wine and D'oh'ses","Sweets and Sour Marge","I'm Spelling as Fast as I Can","Yokel Chords","Apocalypse Cow","Lisa Goes Gaga","Moonshine River"] //eps
  ], //loc
  ["Springfield Public Library",
    ["Dead Putting Society","Lisa the Greek","Marge on the Lam","Sideshow Bob Roberts ","Bart the Mother","It's a Mad, Mad, Mad, Mad Marge","Sweets and Sour Marge","Lost Verizon","The Color Yellow","Much Apu About Nothing"] //eps
  ], //loc
  ["Department of Motor Vehicles",
    ["Principal Charming","The Otto Show","Homer vs. Patty and Selma","A Fish Called Selma","Bart on the Road","The Old Man and the Key","Kiss Kiss Bang Bangalore","Rome-Old and Julie-Eh","The Real Housewives of Fat Tony","The Falcon and the D'ohman"] //eps
  ], //loc
  ["Grocery Store",
    ["Homer vs. Lisa and the 8th Commandment","The War of the Simpsons","Homer Alone","The Springfield Connection","King-Size Homer","Marge Simpson in: \"Screaming Yellow Honkers\"","The Old Man and the Lisa","Tennis the Menace","Million Dollar Abie","The Blue and the Gray"] //eps
  ], //loc
  ["Semi-Painless Dentistry",
    ["Bart the Genius","Homer's Odyssey","There's No Disgrace Like Home","Moaning Lisa","The Call of the Simpsons","The Telltale Head","Homer's Night Out","The Crepes of Wrath","Krusty Gets Busted","Some Enchanted Evening"] //eps
  ], //loc
  ["The Gilded Truffle",
    ["Bart the Lover","Dumbbell Indemnity","Natural Born Kissers","Guess Who's Coming to Criticize Dinner?","Alone Again, Natura-Diddily","Today, I Am a Clown","My Fair Laddy","Rome-Old and Julie-Eh","The Homer of Seville"] //eps
  ], //loc
  ["Springfield City Zoo",
    ["Bart's Comet","Flaming Moe's","Bart's Inner Child","Two Dozen and One Greyhounds","In Marge We Trust","Guess Who's Coming to Criticize Dinner?","Marge Simpson in: \"Screaming Yellow Honkers\"","Homer vs. Dignity","Eight Misbehavin'"] //eps
  ], //loc
  ["Spinster City Apartments",
    ["Life on the Fast Lane","Principal Charming","Homer Alone","Selma's Choice","The Cartridge Family","Half-Decent Proposal","Kiss Kiss Bang Bangalore","Wedding for Disaster","The Book Job"] //eps
  ], //loc
  ["Springfield Penitentiary",
    ["Krusty Gets Busted","Marge Simpson in: \"Screaming Yellow Honkers\"","The Ziff Who Came to Dinner","I Don't Wanna Know Why the Caged Bird Sings","The Burns and the Bees","American History X-cellent","The Bob Next Door","Donnie Fatso","The Ned-liest Catch"] //eps
  ], //loc
  ["Old Springfield Library",
    ["Like Father, Like Clown","Lisa the Greek","Separate Vocations","Sideshow Bob Roberts","In Marge We Trust","Bart the Mother","HOM\u042f","Sweets and Sour Marge","The Color Yellow"] //eps
  ], //loc
  ["Springfield Union Station",
    ["Lisa's Substitute","Homer Alone","Burns, Baby Burns","The Principal and the Pauper","To Surveil With Love","Thursdays with Abie","The Fool Monty","The Man in the Blue Flannel Pants","Lisa Goes Gaga"] //eps
  ], //loc
  ["South Street Squidport",
    ["My Sister, My Sitter","Dumbbell Indemnity","Days of Wine and D'oh'ses","The Great Money Caper","Worst Episode Ever","The Good, the Sad and the Drugly","Father Knows Worst","Love is a Many Splintered Thing"] //eps
  ], //loc
  ["Springfield University",
    ["Simpsons Roasting On An Open Fire","Principal Charming","Homer Goes to College","Faith Off","Little Girl in the Big Ten","Any Given Sundance","That '90s Show","Love is a Many Strangled Thing"] //eps
  ], //loc
  ["Noise Land Video Arcade",
    ["Moaning Lisa","Bart Gets an \"F\"","The War of the Simpsons","When Flanders Failed","Boy-Scoutz 'n the Hood","The Springfield Files","Bart the Mother","The Real Housewives of Fat Tony"] //eps
  ], //loc
  ["Springfield Tire Yard",
    ["Homer's Odyssey","The Otto Show","Sideshow Bob Roberts","The Old Man and the \"C\" Student","Grift of the Magi","Poppa's Got a Brand New Badge","The Squirt and the Whale","Homer's Paternity Coot"] //eps
  ], //loc
  ["Statue of Jebediah Springfield",
    ["The Telltale Head","The Otto Show","Bart's Girlfriend","Bart's Comet","Radioactive Man","Lisa the Iconoclast","Trash of the Titans","Poppa's Got a Brand New Badge"] //eps
  ], //loc
  ["19 Fish Smell Drive",
    ["Bart on the Road","Lisa's Date with Density","Bart the Mother","'Tis the Fifteenth Season","Sleeping with the Enemy","The Haw-Hawed Couple","Any Given Sundance","Loan-a Lisa"] //eps
  ], //loc
  ["Springfield Squidport",
    ["Two Dozen and One Greyhounds","My Sister, My Sitter","Dumbbell Indemnity","The Great Money Caper","Worst Episode Ever","New Kids on the Blecch","The Good, the Sad and the Drugly","Father Knows Worst"] //eps
  ], //loc
  ["Springfield Downs",
    ["Simpsons Roasting on an Open Fire","Flaming Moe's","Krusty Gets Kancelled","A Star is Burns","Two Dozen and One Greyhounds","They Saved Lisa's Brain","Saddlesore Galactica"] //eps
  ], //loc
  ["Springfield Cemetery",
    ["Treehouse of Horror III","Sideshow Bob Roberts","'Round Springfield","Mother Simpson","Homer vs. the Eighteenth Amendment","Fraudcast News","The Girl Who Slept Too Little"] //eps
  ], //loc
  ["Skid Row",
    ["Bart vs. Thanksgiving","The Springfield Connection","Bart Sells His Soul","The Day the Violence Died","'Tis the Fifteenth Season","The Food Wife","Them, Robot"] //eps
  ], //loc
  ["82 Evergreen Terrace",
    ["Bart the Lover","Grade School Confidential","The Principal and the Pauper","Wild Barts Can't Be Broken","Alone Again, Natura-Diddily","My Big Fat Geek Wedding","Bart Gets a \"Z\""] //eps
  ], //loc
  ["Alley",
    ["Separate Vocations","Bart's Friend Falls in Love","The Springfield Connection","Trilogy of Error","The Great Louse Detective","Sex, Pies, and Idiot Scrapes","Waverly Hills 9-0-2-1-D'oh"] //eps
  ], //loc
  ["732 Evergreen Terrace",
    ["Two Dozen and One Greyhounds","My Sister, My Sitter","Grade School Confidential","Lisa the Simpson","This Little Wiggy","Grift of the Magi","Sweets and Sour Marge"] //eps
  ], //loc
  ["Springfield Community Center",
    ["A Streetcar Named Marge","Bart's Inner Child","Lady Bouvier's Lover","Sideshow Bob Roberts","Homie the Clown","The Two Mrs. Nahasapeemapetilons","500 Keys"] //eps
  ], //loc
  ["Jebediah Springfield Park",
    ["The Springfield Connection","Bart After Dark","King of the Hill","They Saved Lisa's Brain","Homer and Ned's Hail Mary Pass","Pranksta Rap","The Last of the Red Hat Mamas"] //eps
  ], //loc
  ["Taj Mahal",
    ["Lisa's Sax","When You Dish Upon a Star","Eight Misbehavin'","Marge vs. Singles, Seniors, Childless Couples and Teens and Gays","Kiss Kiss Bang Bangalore","Treehouse of Horror XVII","Father Knows Worst"] //eps
  ], //loc
  ["Springfield Bridge",
    ["Homer's Odyssey","Moaning Lisa","Homer Alone","Bart's Comet","'Round Springfield","Moe Baby Blues"] //eps
  ], //loc
  ["Lake Springfield",
    ["Two Cars in Every Garage and Three Eyes on Every Fish","Homer Loves Flanders","Lemon of Troy","When You Dish Upon a Star","There's Something About Marrying","How I Wet Your Mother"] //eps
  ], //loc
  ["First Bank of Springfield",
    ["Homer vs. Patty and Selma","Bart the Fink","Missionary: Impossible","HOM\u042f","I Don't Wanna Know Why the Caged Bird Sings","Chief of Hearts"] //eps
  ], //loc
  ["Barney's apartment",
    ["Homer's Night Out","One Fish, Two Fish, Blowfish, Blue Fish","I Married Marge","Dog of Death","Days of Wine and D'oh'ses","D'oh-in' in the Wind"] //eps
  ], //loc
  ["The Pimento Grove",
    ["A Fish Called Selma","Brother from Another Series","The Last Temptation of Krust","Guess Who's Coming to Criticize Dinner?","Day of the Jackanapes","The Blunder Years"] //eps
  ], //loc
  ["Republican Party Headquarters",
    ["Sideshow Bob Roberts","Brawl in the Family","Sweets and Sour Marge","Mr. Spritz Goes to Washington","E. Pluribus Wiggum","You Kent Always Say What You Want"] //eps
  ], //loc
  ["Fort Springfield",
    ["Homer at the Bat","Lisa the Beauty Queen","$pringfield (Or, How I Learned to Stop Worrying and Love Legalized Gambling)","Homer Loves Flanders","Sweet Seymour Skinner's Baadasssss Song","The PTA Disbands"] //eps
  ], //loc
  ["Sir Putt-A-Lot's Merrie Olde Fun Centre",
    ["Dead Putting Society","I Married Marge","Natural Born Kissers","Lisa the Drama Queen","That '90s Show"] //eps
  ], //loc
  ["Springfield Googolplex Theatres",
    ["Colonel Homer","Bart's Friend Falls in Love","E-I-E-I-D'oh","Jaws Wired Shut","The Ziff Who Came to Dinner"] //eps
  ], //loc
  ["Jake's Unisex Hair Palace",
    ["Simpson and Delilah","Three Men and a Comic Book","Radio Bart","22 Short Films About Springfield","Lisa the Tree Hugger"] //eps
  ], //loc
  ["740 Evergreen Terrace",
    ["Homer's Odyssey","Bart's Dog Gets an F","New Kid on the Block","The Bob Next Door","The Day the Earth Stood Cool"] //eps
  ], //loc
  ["KBBL Radio",
    ["Like Father, Like Clown","Bart Gets an Elephant","They Saved Lisa's Brain","Pygmoelian","The Parent Rap"] //eps
  ], //loc
  ["Ye Olde Off-Ramp Inn",
    ["Homer's Night Out","Some Enchanted Evening","Lisa the Beauty Queen","Helter Shelter","Mr. Spritz Goes to Washington"] //eps
  ], //loc
  ["Try-N-Save",
    ["Marge Be Not Proud","Miracle on Evergreen Terrace","Lard of the Dance","Grift of the Magi","The Daughter Also Rises"] //eps
  ], //loc
  ["Eiffel Tower",
    ["The Crepes of Wrath","Marge vs. Singles, Seniors, Childless Couples and Teens and Gays","Bart-Mangled Banner","The Devil Wears Nada","Elementary School Musical"] //eps
  ], //loc
  ["Springfield Subway System",
    ["Bart Sells His Soul","Simpsons Tall Tales","Sex, Pies, and Idiot Scrapes","Homer the Whopper","Postcards From the Wedge"] //eps
  ], //loc
  ["Apu's apartment",
    ["I'm with Cupid","Eight Misbehavin'","Bye Bye Nerdie","The Sweetest Apu","Moe Letter Blues"] //eps
  ], //loc
  ["Springfield Coliseum",
    ["The Otto Show","The Homer They Fall","Pranksta Rap","Kiss Kiss Bang Bangalore","The Great Wife Hope"] //eps
  ], //loc
  ["Springfield Museum of Natural History",
    ["The Boy Who Knew Too Much","Lisa the Skeptic","'Scuse Me While I Miss the Sky","The Monkey Suit","Smart and Smarter"] //eps
  ], //loc
  ["Prince House",
    ["Bart's Friend Falls in Love","Bart of Darkness","Bart on the Road","Grade School Confidential","Dial \"N\" for Nerder"] //eps
  ], //loc
  ["Lenny's House",
    ["Secrets of a Successful Marriage","Homer the Great","The Springfield Connection","Two Bad Neighbors","The Girl Who Slept Too Little"] //eps
  ], //loc
  ["Hollywood",
    ["Radioactive Man","Beyond Blunderdome","A Star Is Born-Again","Judge Me Tender","Angry Dad: The Movie"] //eps
  ], //loc
  ["Rigel 7",
    ["'Scuse Me While I Miss the Sky","Simpson Tide","Treehouse of Horror XXII","Holidays of Future Passed"] //eps
  ], //loc
  ["Springfield Drive-In",
    ["Lisa the Vegetarian","Dumbbell Indemnity","Wild Barts Can't Be Broken","The Old Man and the Key"] //eps
  ], //loc
  ["Lard Lad Donuts",
    ["Girly Edition","Sweets and Sour Marge","E. Pluribus Wiggum","Gone Maggie Gone"] //eps
  ], //loc
  ["Legitimate Businessman's Social Club",
    ["Bart the Murderer","Homie the Clown","Mayored to the Mob","Poppa's Got a Brand New Badge"] //eps
  ], //loc
  ["Gulp 'n' Blow",
    ["I Married Marge","Krusty Gets Kancelled","She of Little Faith","Gone Abie Gone"] //eps
  ], //loc
  ["Herman's Military Antiques",
    ["Bart the General","Old Money","Homer the Vigilante","22 Short Films About Springfield"] //eps
  ], //loc
  ["Springfield Park",
    ["Homer's Odyssey","Life on the Fast Lane","Girly Edition","The Wife Aquatic"] //eps
  ], //loc
  ["Zesty's",
    ["Guess Who's Coming to Criticize Dinner?","Poppa's Got a Brand New Badge","Ice Cream of Margie (with the Light Blue Hair)","E. Pluribus Wiggum"] //eps
  ], //loc
  ["Duff Stadium",
    ["Wild Barts Can't Be Broken","Hungry, Hungry Homer","The Lastest Gun in the West","The Boys of Bummer"] //eps
  ], //loc
  ["Springfield Harbor",
    ["Homer the Heretic","Krusty Gets Kancelled","Bart the Fink","Sweets and Sour Marge"] //eps
  ], //loc
  ["Springfield Gorge",
    ["Bart the Daredevil","Brother from the Same Planet","Behind the Laughter","The Blunder Years"] //eps
  ], //loc
  ["New Bedlam Rest Home for the Emotionally Interesting",
    ["Stark Raving Dad","Mother Simpson","Hungry, Hungry Homer","Don't Fear the Roofer"] //eps
  ], //loc
  ["The Frying Dutchman",
    ["New Kid on the Block","King-Size Homer","Guess Who's Coming to Criticize Dinner?","The Wettest Stories Ever Told"] //eps
  ], //loc
  ["The Happy Sumo",
    ["One Fish, Two Fish, Blowfish, Blue Fish","Black Widower","In Marge We Trust","Guess Who's Coming to Criticize Dinner?"] //eps
  ], //loc
  ["King Toot's Music Store",
    ["Lisa's Pony","Hurricane Neddy","Lisa's Sax","The Frying Game"] //eps
  ], //loc
  ["Springfield Post Office",
    ["Blood Feud","Mother Simpson","The Trouble with Trillions","Sunday, Cruddy Sunday"] //eps
  ], //loc
  ["Bookaccino's",
    ["Diatribe of a Mad Housewife","Smoke on the Daughter","Bart Gets a \"Z\"","The Book Job"] //eps
  ], //loc
  ["All Creatures Great and Cheap",
    ["Lisa's Pony","Duffless","Two Dozen and One Greyhounds","The Last Temptation of Krust"] //eps
  ], //loc
  ["Santa's Village",
    ["Burns' Heir","Homer's Phobia","How I Spent My Strummer Vacation","Bonfire of the Manatees"] //eps
  ], //loc
  ["Southern Cracker",
    ["Homie the Clown","Bart on the Road","A Milhouse Divided","Skinner's Sense of Snow"] //eps
  ], //loc
  ["Springfield Dump",
    ["Homer vs. the Eighteenth Amendment","In Marge We Trust","Girly Edition","Trash of the Titans"] //eps
  ], //loc
  ["Alkali Flats",
    ["Homer's Barbershop Quartet","Marge on the Lam","Sideshow Bob's Last Gleaming","A Milhouse Divided"] //eps
  ], //loc
  ["57 Walnut Street",
    ["A Star is Burns","Days of Wine and D'oh'ses","Lisa the Tree Hugger","Regarding Margie"] //eps
  ], //loc
  ["World Trade Center",
    ["Mr. Plow","The City of New York vs. Homer Simpson","Homer the Father","Moonshine River"] //eps
  ], //loc
  ["734 Evergreen Terrace",
    ["Bart's Dog Gets an F","Two Bad Neighbors","The Springfield Files","Bye Bye Nerdie"] //eps
  ], //loc
  ["Big Ben",
    ["Lisa's Wedding","The Regina Monologues","The Food Wife","Holidays of Future Passed"] //eps
  ], //loc
  ["Bush House",
    ["Two Bad Neighbors","22 Short Films About Springfield","Much Apu About Nothing","Simpsoncalifragilisticexpiala(Annoyed Grunt)cious"] //eps
  ], //loc
  ["Krusty's Mansion",
    ["Bart the Fink","The Dad Who Knew Too Little","Dude, Where's My Ranch?","Yellow Subterfuge"] //eps
  ], //loc
  ["Hooters",
    ["Bart Star","Mobile Homer","Sleeping with the Enemy","Bart Gets a \"Z\""] //eps
  ], //loc
  ["Duff Brewery",
    ["Duffless","Homer vs. the Eighteenth Amendment","Mypods and Boomsticks"] //eps
  ], //loc
  ["Springfield Monorail",
    ["Marge vs. the Monorail","Days of Wine and D'oh'ses","Exit Through the Kwik-E-Mart"] //eps
  ], //loc
  ["Rural Route 9",
    ["Grampa vs. Sexual Inadequacy","Lost Our Lisa","E-I-E-I-D'oh"] //eps
  ], //loc
  ["West Springfield",
    ["Trilogy of Error","Half-Decent Proposal","Pranksta Rap"] //eps
  ], //loc
  ["Springfield A&M",
    ["Homer Goes to College","Faith Off","Any Given Sundance"] //eps
  ], //loc
  ["Duff Gardens",
    ["Treehouse of Horror II","Like Father, Like Clown","Selma's Choice"] //eps
  ], //loc
  ["Olde Springfield Towne",
    ["I Married Marge","Whacking Day","Please Homer, Don't Hammer 'Em"] //eps
  ], //loc
  ["Springfield Box Factory",
    ["Bart Gets Famous","Trilogy of Error","Yokel Chords"] //eps
  ], //loc
  ["Springfield National Forest",
    ["The Call of the Simpsons","Mr. Lisa Goes to Washington","Lisa the Tree Hugger"] //eps
  ], //loc
  ["Quimby Compound",
    ["The Boy Who Knew Too Much","Mayored to the Mob","You Kent Always Say What You Want"] //eps
  ], //loc
  ["The Happy Sailor Tattoo Parlor",
    ["Simpsons Roasting on an Open Fire","Flaming Moe's","A Star is Burns"] //eps
  ], //loc
  ["The Jazz Hole",
    ["Moaning Lisa","Lisa the Simpson","To Surveil With Love"] //eps
  ], //loc
  ["Springfield Observatory",
    ["Bart's Comet","Lisa's Date with Density","'Scuse Me While I Miss the Sky"] //eps
  ], //loc
  ["Ah, Fudge! Factory",
    ["Bart the Murderer","Sweets and Sour Marge","Simple Simpson"] //eps
  ], //loc
  ["Springfield Aquarium",
    ["The Aquarium","Brake My Wife, Please","Any Given Sundance"] //eps
  ], //loc
  ["Springfield Glen Country Club",
    ["Scenes from the Class Struggle in Springfield","Burns, Baby Burns","Lost Verizon"] //eps
  ], //loc
  ["The Aristocrat",
    ["Flaming Moe's","Cape Feare","And Maggie Makes Three"] //eps
  ], //loc
  ["The Hungry Hun",
    ["Burns Verkaufen der Kraftwerk","And Maggie Makes Three","Guess Who's Coming to Criticize Dinner?"] //eps
  ], //loc
  ["Howard's Flowers",
    ["Some Enchanted Evening","Wedding for Disaster","Holidays of Future Passed"] //eps
  ], //loc
  ["12th Avenue",
    ["Homer's Odyssey","Moaning Lisa","'Round Springfield"] //eps
  ], //loc
  ["D Street",
    ["Homer's Odyssey","Moaning Lisa","'Round Springfield"] //eps
  ], //loc
  ["Hell",
    ["Bart Gets Hit by a Car","Simpsons Bible Stories","Homer vs. Lisa and the 8th Commandment"] //eps
  ], //loc
  ["Cora's Diner",
    ["The Parent Rap","My Mother the Carjacker","Chief of Hearts"] //eps
  ], //loc
  ["Heaven",
    ["Thank God It's Doomsday","Pray Anything","Homer the Heretic"] //eps
  ], //loc
  ["Circuit Circus",
    ["Funeral for a Fiend","Thursdays with Abie","The D'oh-cial Network"] //eps
  ], //loc
  ["Sleep-Eazy Motel",
    ["The Cartridge Family","Dial \"N\" for Nerder","The Falcon and the D'ohman"] //eps
  ], //loc
  ["Springfield Dam",
    ["Lisa the Vegetarian","Mother Simpson","Brother from Another Series"] //eps
  ], //loc
  ["Springsonian Museum",
    ["Lost Our Lisa","Mom and Pop Art","Crook and Ladder"] //eps
  ], //loc
  ["Hairy Shearers",
    ["The Two Mrs. Nahasapeemapetilons","Hungry, Hungry Homer","The Blue and the Gray"] //eps
  ], //loc
  ["Springfield Dinner Theater",
    ["Mayored to the Mob","Guess Who's Coming to Criticize Dinner?","The Great Money Caper"] //eps
  ], //loc
  ["Springfield Hall of Records",
    ["Sideshow Bob Roberts","Mother Simpson","Hurricane Neddy"] //eps
  ], //loc
  ["Itchy & Scratchy International",
    ["Itchy & Scratchy & Marge","The Day the Violence Died","The Itchy & Scratchy & Poochie Show"] //eps
  ], //loc
  ["Dr. Julius Hibbert, M.D. Family Practice",
    ["Bart the Fink","Lisa the Simpson","Homer vs. Dignity"] //eps
  ], //loc
  ["Springfield Bowl",
    ["The Springfield Connection","Saddlesore Galactica","A Star Is Born-Again"] //eps
  ], //loc
  ["Skip's Diner",
    ["Radioactive Man","I Am Furious Yellow","A Star Is Born-Again"] //eps
  ], //loc
  ["Kent Brockman's mansion",
    ["Dog of Death","Girly Edition","Poppa's Got a Brand New Badge"] //eps
  ], //loc
  ["The League of Extra Horny Gentleman",
    ["Mommie Beerest","Judge Me Tender","Flaming Moe"] //eps
  ], //loc
  ["Yuk-ingham Palace",
    ["Lost Our Lisa","D'oh-ing in the Wind","The Daughter Also Rises"] //eps
  ], //loc
  ["Industrial Road",
    ["Lisa's First Word","Homer's Enemy","Lost Our Lisa"] //eps
  ], //loc
  ["Plastic Surgery Center",
    ["Future-Drama","Husbands and Knives","The Real Housewives of Fat Tony"] //eps
  ], //loc
  ["Page's Pharmacy",
    ["Ice Cream of Margie (with the Light Blue Hair)","E. Pluribus Wiggum","All About Lisa"] //eps
  ], //loc
  ["Peanut Street Hotel",
    ["Brake My Wife, Please","Kill Gil: Vols. 1 & 2","The D'oh-cial Network"] //eps
  ], //loc
  ["Food Court",
    ["Fraudcast News","Postcards From the Wedge","Beware My Cheating Bart"] //eps
  ], //loc
  ["Spiffany's",
    ["Poppa's Got a Brand New Badge","Politically Inept, with Homer Simpson","The D'oh-cial Network"] //eps
  ], //loc
  ["Neat & Tidy Piano Movers",
    ["Homer the Smithers","D'oh-in' in the Wind","The Daughter Also Rises"] //eps
  ], //loc
  ["754 Evergreen Terrace",
    ["Treehouse of Horror VIII","Treehouse of Horror XIV","Future-Drama"] //eps
  ], //loc
  ["Slaughter House",
    ["The Call of the Simpsons","How I Spent My Strummer Vacation","Apocalypse Cow"] //eps
  ], //loc
  ["National Bank of Springfield",
    ["The Lastest Gun in the West","Dark Knight Court","Changing of the Guardian"] //eps
  ], //loc
  ["Skobo's",
    ["We're on the Road to D'oh-where","Bonfire of the Manatees","Dark Knight Court"] //eps
  ], //loc
  ["Yogurt Nook",
    ["New Kid on the Block","Marge in Chains","The Devil Wears Nada"] //eps
  ], //loc
  ["Origami Designs",
    ["New Kid on the Block","The Day the Violence Died","Last Tap Dance in Springfield"] //eps
  ], //loc
  ["Springfield Hydroelectric Dam",
    ["Lisa's Rival","Brother from Another Series"] //eps
  ], //loc
  ["VHS Village",
    ["Saturdays of Thunder","Fear of Flying"] //eps
  ], //loc
  ["The Land of Chocolate",
    ["Burns Verkaufen der Kraftwerk","So It's Come to This: A Simpsons Clip Show"] //eps
  ], //loc
  ["Camp Land-A-Man",
    ["The Way We Weren't","Marge Gamer"] //eps
  ], //loc
  ["Shelbyville Orphanage",
    ["Oh Brother, Where Art Thou?","The Debarted"] //eps
  ], //loc
  ["Calmwood Mental Hospital",
    ["Hurricane Neddy","Don't Fear the Roofer"] //eps
  ], //loc
  ["Ayn Rand School for Tots",
    ["A Streetcar Named Marge","The Longest Daycare"] //eps
  ], //loc
  ["Mr. Burns' Casino",
    ["$pringfield (Or, How I Learned to Stop Worrying and Love Legalized Gambling)","Viva Ned Flanders"] //eps
  ], //loc
  ["Circus of Values",
    ["Simpsons Roasting on an Open Fire","Bart's Friend Falls in Love"] //eps
  ], //loc
  ["Santa School",
    ["Simpsons Roasting on an Open Fire","Midnight Towboy"] //eps
  ], //loc
  ["Bob's RV Round-Up",
    ["The Call of the Simpsons","Mobile Homer"] //eps
  ], //loc
  ["Girdles N' Such",
    ["Life on the Fast Lane","Last Tap Dance in Springfield"] //eps
  ], //loc
  ["Shorty's",
    ["Life on the Fast Lane","Selma's Choice"] //eps
  ], //loc
  ["Capital City Suspension Bridge",
    ["Dancin' Homer","How the Test Was Won"] //eps
  ], //loc
  ["Capital City Stadium",
    ["Dancin' Homer","MoneyBART"] //eps
  ], //loc
  ["Gay Neighborhood",
    ["Three Gays of the Condo","Changing of the Guardian"] //eps
  ], //loc
  ["Old Fishin' Hole",
    ["Two Cars in Every Garage and Three Eyes on Every Fish","There's Something About Marrying"] //eps
  ], //loc
  ["The Singing Sirloin",
    ["Life on the Fast Lane","Homer vs. Dignity"] //eps
  ], //loc
  ["Royal Majesty for the Obese or Gangly Gentleman",
    ["Simpson and Delilah","Dancin' Homer"] //eps
  ], //loc
  ["Springfield Mystery Spot",
    ["Old Money","Homer at the Bat"] //eps
  ], //loc
  ["Berger's Burgers",
    ["Homer's Odyssey","I Married Marge"] //eps
  ], //loc
  ["Springfield Palace of Fine Arts",
    ["Itchy & Scratchy & Marge","Brush with Greatness"] //eps
  ], //loc
  ["Springwood Minimum Security Prison",
    ["Sideshow Bob Roberts","Sideshow Bob's Last Gleaming"] //eps
  ], //loc
  ["Shelbyville Elementary School",
    ["The PTA Disbands","Lemon of Troy"] //eps
  ], //loc
  ["Hailstone's",
    ["Lard of the Dance","Last Tap Dance in Springfield"] //eps
  ], //loc
  ["Stu's Disco",
    ["Dumbbell Indemnity","A Hunka Hunka Burns in Love"] //eps
  ], //loc
  ["Planet Hype",
    ["My Sister, My Sitter","Guess Who's Coming to Criticize Dinner?"] //eps
  ], //loc
  ["Aphrodite Inn",
    ["Grampa vs. Sexual Inadequacy","A Fish Called Selma"] //eps
  ], //loc
  ["Shotgun Pete's",
    ["I Married Marge","A Milhouse Divided"] //eps
  ], //loc
  ["Waverly Hills",
    ["Waverly Hills 9-0-2-1-D'oh","Bart Stops to Smell the Roosevelts"] //eps
  ], //loc
  ["Springfield Opera House",
    ["Bart the Genius","The Homer of Seville"] //eps
  ], //loc
  ["Mt. Springfield",
    ["Days of Wine and D'oh'ses","She Used to Be My Girl"] //eps
  ], //loc
  ["Elm Street",
    ["Bart the General","Postcards From the Wedge"] //eps
  ], //loc
  ["Tenderfoot Gorge",
    ["The Call of the Simpsons","Bart the Daredevil"] //eps
  ], //loc
  ["Candy Most Dandy",
    ["The Telltale Head","The Daughter Also Rises"] //eps
  ], //loc
  ["The Rusty Barnacle",
    ["Life on the Fast Lane","Homer's Night Out"] //eps
  ], //loc
  ["Springfield Speedway",
    ["Bart the Daredevil","Alone Again, Natura-Diddily"] //eps
  ], //loc
  ["Springfield Sign",
    ["Marge on the Lam","Gone Maggie Gone"] //eps
  ], //loc
  ["Springfield Wax Museum",
    ["Lisa the Beauty Queen","Bart of Darkness"] //eps
  ], //loc
  ["Skates 'n' Such Ice Rink",
    ["Boy Meets Curl","Kill Gil: Vols. 1 & 2"] //eps
  ], //loc
  ["SH\u00d8P",
    ["Lisa the Beauty Queen","Eight Misbehavin'"] //eps
  ], //loc
  ["Storytown Village",
    ["Lisa the Vegetarian","I'm Goin' to Praiseland"] //eps
  ], //loc
  ["Itchy & Scratchy Land (Theme Park)",
    ["Itchy & Scratchy Land","Mommie Beerest"] //eps
  ], //loc
  ["Capitol Building",
    ["Two Cars In Every Garage And Three Eyes On Every Fish","Bart vs. Lisa vs. the Third Grade"] //eps
  ], //loc
  ["Knockers",
    ["Pygmoelian","Don't Fear the Roofer"] //eps
  ], //loc
  ["London Eye",
    ["The Regina Monologues","To Surveil With Love"] //eps
  ], //loc
  ["3rd Street Station",
    ["Bart Sells His Soul","Postcards From the Wedge"] //eps
  ], //loc
  ["Donny's Discount Gas",
    ["In Marge We Trust","E-I-E-I-D'oh"] //eps
  ], //loc
  ["Sit-N-Rotate",
    ["Principal Charming","Guess Who's Coming to Criticize Dinner?"] //eps
  ], //loc
  ["Springfield Animal Shelter",
    ["I, (Annoyed Grunt)-Bot","Jazzy and the Pussycats"] //eps
  ], //loc
  ["Five Corners",
    ["Itchy & Scratchy Land","The Bob Next Door"] //eps
  ], //loc
  ["Springfield Animal Hospital",
    ["Dog of Death","Who Shot Mr. Burns? (Part One)"] //eps
  ], //loc
  ["Springfield YMCA",
    ["Hello Gutter, Hello Fadder","Children of a Lesser Clod"] //eps
  ], //loc
  ["Springfield Municipal Building",
    ["Bart the Mother","Mayored to the Mob"] //eps
  ], //loc
  ["Builders' Barn",
    ["Don't Fear the Roofer","Please Homer, Don't Hammer 'Em"] //eps
  ], //loc
  ["Springfield Amphitheater",
    ["The Last Temptation of Krust","Hello Gutter, Hello Fadder"] //eps
  ], //loc
  ["Springfield Rent-a-Car",
    ["Bart on the Road","The Joy of Sect"] //eps
  ], //loc
  ["Fort Fragg",
    ["Brother's Little Helper","Trilogy of Error"] //eps
  ], //loc
  ["Sportacus",
    ["Bart Star","She of Little Faith"] //eps
  ], //loc
  ["Monstromart",
    ["Homer and Apu","Bart Gets Famous"] //eps
  ], //loc
  ["Springfield Funeral Home",
    ["Funeral for a Fiend","Mona Leaves-a"] //eps
  ], //loc
  ["Springfield Arms",
    ["Worst Episode Ever","Helter Shelter"] //eps
  ], //loc
  ["BetterThanTV.com",
    ["I Am Furious Yellow","Angry Dad: The Movie"] //eps
  ], //loc
  ["Springfield Martial Arts Academy",
    ["When Flanders Failed","Last Tap Dance in Springfield"] //eps
  ], //loc
  ["Sprooklyn Bridge",
    ["Elementary School Musical","Homer Scissorhands"] //eps
  ], //loc
  ["Waterfront",
    ["$pringfield (Or, How I Learned to Stop Worrying and Love Legalized Gambling)","My Sister, My Sitter"] //eps
  ], //loc
  ["Bachelor Arms",
    ["Three Gays of the Condo","Pranksta Rap"] //eps
  ], //loc
  ["Izzy's Deli",
    ["Like Father, Like Clown","Guess Who's Coming to Criticize Dinner?"] //eps
  ], //loc
  ["Wee Monsieur",
    ["Lisa the Greek","Lisa's Date with Density"] //eps
  ], //loc
  ["Springfield Botanical Gardens",
    ["A Fish Called Selma","Moe Baby Blues"] //eps
  ], //loc
  ["Springfield Office of Unemployment",
    ["$pringfield (Or, How I Learned to Stop Worrying and Love Legalized Gambling)","Realty Bites"] //eps
  ], //loc
  ["The Tam O'Shanter Connection",
    ["Blood Feud","Last Tap Dance in Springfield"] //eps
  ], //loc
  ["Pillow Factory",
    ["Krusty Gets Kancelled","Deep Space Homer"] //eps
  ], //loc
  ["Unnamed district",
    ["The Way We Was","Lisa Simpson, This Isn't Your Life"] //eps
  ], //loc
  ["Stockholm",
    ["Treehouse of Horror XIV","Elementary School Musical"] //eps
  ], //loc
  ["Pest Bye",
    ["Gone Maggie Gone","A Tree Grows in Springfield"] //eps
  ], //loc
  ["Fat Tony's house",
    ["The Mook, the Chef, the Wife and Her Homer","The Real Housewives of Fat Tony"] //eps
  ], //loc
  ["Springfield Orphanage",
    ["Goo Goo Gai Pan","O Brother, Where Bart Thou?"] //eps
  ], //loc
  ["Gum for Less",
    ["Bart Gets Hit by a Car","Burns' Heir"] //eps
  ], //loc
  ["The Creamatorium",
    ["Bart Gets Hit by a Car","Burns' Heir"] //eps
  ], //loc
  ["Conformco",
    ["Burns' Heir","The Joy of Sect"] //eps
  ], //loc
  ["Mars",
    ["I'm Spelling as Fast as I Can","Holidays of Future Passed"] //eps
  ], //loc
  ["West Oak Street",
    ["The Food Wife","Them, Robot"] //eps
  ], //loc
  ["East Oak Street",
    ["The Food Wife","Them, Robot"] //eps
  ], //loc
  ["Vulgari",
    ["The Food Wife","The D'oh-cial Network"] //eps
  ], //loc
  ["Moe's Apartment",
    ["Brake My Wife, Please","Moe Baby Blues"] //eps
  ], //loc
  ["Domicles For The Destitute",
    ["Large Marge","The Bart of War"] //eps
  ], //loc
  ["Psychiatry Row",
    ["The Girl Who Slept Too Little","Jazzy and the Pussycats"] //eps
  ], //loc
  ["Lugash's Gym",
    ["Children of a Lesser Clod","Little Girl in the Big Ten"] //eps
  ], //loc
  ["Hal's Liquor",
    ["Poppa's Got a Brand New Badge","The Blue and the Gray"] //eps
  ], //loc
  ["Springfield Four Seasons",
    ["Moms I'd Like to Forget","The Real Housewives of Fat Tony"] //eps
  ], //loc
  ["Dimwillie's",
    ["Bonfire of the Manatees","Eternal Moonshine of the Simpson Mind"] //eps
  ], //loc
  ["Market",
    ["Homer the Great","Postcards From the Wedge"] //eps
  ], //loc
  ["Merry Widow Insurance Co.",
    ["Mobile Homer","Lisa the Tree Hugger"] //eps
  ], //loc
  ["Camp Flab-Away",
    ["Middle School Musical","The Way We Weren't"] //eps
  ], //loc
  ["Bloaters at the Squidport",
    ["My Sister, My Sitter","Love is a Many Splintered Thing"] //eps
  ], //loc
  ["Springfield Dog Park",
    ["The Canine Mutiny","Old Yeller-Belly"] //eps
  ], //loc
  ["Springfield County Fair",
    ["Simple Simpson","Apocalypse Cow"] //eps
  ], //loc
  ["Springfield Soccer Stadium",
    ["Brother from the Same Planet","Marge Gamer"] //eps
  ], //loc
  ["Casino",
    ["Viva Ned Flanders","The Last of the Red Hat Mamas"] //eps
  ], //loc
  ["Springfield Children's Hospital",
    ["Simple Simpson","The Last of the Red Hat Mamas"] //eps
  ], //loc
  ["Mayor Quimby's mansion",
    ["Mayored to the Mob","The Last of the Red Hat Mamas"] //eps
  ], //loc
  ["Arby's",
    ["Das Bus","Old Yeller-Belly"] //eps
  ], //loc
  ["The Springfield Shopper Building",
    ["Guess Who's Coming to Criticize Dinner?","Thursdays with Abie"] //eps
  ], //loc
  ["Le Pamperie Hair Salon",
    ["Homer Alone","Radioactive Man"] //eps
  ], //loc
  ["Capital City Convention Center",
    ["The Last Temptation of Homer","She Used to Be My Girl"] //eps
  ], //loc
  ["Springfield Costume Shop",
    ["Burns, Baby Burns","The Daughter Also Rises"] //eps
  ], //loc
  ["Magic Palace",
    ["The Great Money Caper","The Great Simpsina"] //eps
  ], //loc
  ["Beachwear",
    ["The Great Money Caper","New Kids on the Blecch"] //eps
  ], //loc
  ["Antiques",
    ["The Great Money Caper","New Kids on the Blecch"] //eps
  ], //loc
  ["Clay Jars",
    ["The Great Money Caper","New Kids on the Blecch"] //eps
  ], //loc
  ["Lego Land",
    ["C.E. D'oh","Eeny Teeny Maya, Moe"] //eps
  ], //loc
  ["One Night Stan's",
    ["Three Gays of the Condo","The Blue and the Gray"] //eps
  ], //loc
  ["Nighthawk Diner",
    ["Old Money","Homer vs. the Eighteenth Amendment"] //eps
  ], //loc
  ["Baby Seal Beach",
    ["Bart After Dark"] //eps
  ], //loc
  ["Bloodbath Gulch",
    ["Homer Simpson in: \"Kidney Trouble\""] //eps
  ], //loc
  ["Screamville",
    ["Cape Feare"] //eps
  ], //loc
  ["123 Fake Street",
    ["Trilogy of Error"] //eps
  ], //loc
  ["Uncle Moe's Family Feedbag",
    ["Bart Sells His Soul"] //eps
  ], //loc
  ["Tibet Town",
    ["A Hunka Hunka Burns in Love"] //eps
  ], //loc
  ["The Little Black Box",
    ["Fear of Flying"] //eps
  ], //loc
  ["Speed-E-Mart",
    ["Lemon of Troy"] //eps
  ], //loc
  ["The Itchy & Scratchy Store",
    ["My Sister, My Sitter"] //eps
  ], //loc
  ["New Horrorfield",
    ["Cape Feare"] //eps
  ], //loc
  ["Shapes",
    ["Husbands and Knives"] //eps
  ], //loc
  ["Cape Fear",
    ["Cape Feare"] //eps
  ], //loc
  ["Terror Lake",
    ["Cape Feare"] //eps
  ], //loc
  ["The China Syndrome",
    ["Marge's Son Poisoning"] //eps
  ], //loc
  ["Barnacle Bay",
    ["The Wife Aquatic"] //eps
  ], //loc
  ["Springfield Community College",
    ["Brush with Greatness"] //eps
  ], //loc
  ["L.A. Body Works",
    ["Husbands and Knives"] //eps
  ], //loc
  ["Pitiless Pup Attack Dog School",
    ["I Married Marge"] //eps
  ], //loc
  ["Ye Olde Candlemaker Shoppe",
    ["I Married Marge"] //eps
  ], //loc
  ["Springfield Juvenile Correctional Facility",
    ["The Wandering Juvie"] //eps
  ], //loc
  ["Capital City Airport",
    ["Milhouse Doesn't Live Here Anymore"] //eps
  ], //loc
  ["Mt. Embolism",
    ["Little Big Mom"] //eps
  ], //loc
  ["Garbage Island",
    ["Homer the Heretic"] //eps
  ], //loc
  ["Dr. Zitsofsky's Dermatology Clinic",
    ["Simpsons Roasting on an Open Fire"] //eps
  ], //loc
  ["Pawn Shop",
    ["There's No Disgrace Like Home"] //eps
  ], //loc
  ["Dr. Monroe's Family Therapy Center",
    ["There's No Disgrace Like Home"] //eps
  ], //loc
  ["Springfield Concert Hall",
    ["The Seven-Beer Snitch"] //eps
  ], //loc
  ["Crackton",
    ["Lost Our Lisa"] //eps
  ], //loc
  ["The Ear Piercery",
    ["Life on the Fast Lane"] //eps
  ], //loc
  ["Springfield Symphony Hall",
    ["Moaning Lisa"] //eps
  ], //loc
  ["Springfield Arts Center",
    ["Moaning Lisa"] //eps
  ], //loc
  ["Chateau Maison",
    ["The Crepes of Wrath"] //eps
  ], //loc
  ["Rubber Baby Buggy Bumpers Babysitting Service",
    ["Some Enchanted Evening"] //eps
  ], //loc
  ["Hair Clinic",
    ["Simpson and Delilah"] //eps
  ], //loc
  ["Royal Majesty",
    ["Simpson and Delilah"] //eps
  ], //loc
  ["The Penny Loafer",
    ["Dancin' Homer"] //eps
  ], //loc
  ["Bootleg T-Shirt Emporium",
    ["Dancin' Homer"] //eps
  ], //loc
  ["Springfield Plasma Center",
    ["Bart vs. Thanksgiving"] //eps
  ], //loc
  ["Coolsville Comics & Toys",
    ["Husbands and Knives"] //eps
  ], //loc
  ["Bloodbath & Beyond Gun Shop",
    ["The Cartridge Family"] //eps
  ], //loc
  ["Old Jewish Man's House",
    ["The Frying Game"] //eps
  ], //loc
  ["Mrs. Bellamy's House",
    ["The Frying Game"] //eps
  ], //loc
  ["Shelbyville Bluffs",
    ["Lemon of Troy"] //eps
  ], //loc
  ["Rolling Rock",
    ["Black Widower"] //eps
  ], //loc
  ["Chinatown",
    ["A Hunka Hunka Burns in Love"] //eps
  ], //loc
  ["La Maison Derri\u00e8re",
    ["Bart After Dark"] //eps
  ], //loc
  ["Springfield Toxic Waste Dump",
    ["Homer's Odyssey"] //eps
  ], //loc
  ["Trader Earth's",
    ["E. Pluribus Wiggum"] //eps
  ], //loc
  ["Springfield Lemon Tree",
    ["Lemon of Troy"] //eps
  ], //loc
  ["Kamp Krusty (location)",
    ["Kamp Krusty"] //eps
  ], //loc
  ["Mt. Swartzwelder Historic Cider Mill",
    ["Burns, Baby Burns"] //eps
  ], //loc
  ["Mt. Splashmore",
    ["Brush with Greatness"] //eps
  ], //loc
  ["The Spaghetti Laboratory",
    ["Bart Sells His Soul"] //eps
  ], //loc
  ["FaceStuffers",
    ["Bart Sells His Soul"] //eps
  ], //loc
  ["Mount Carlmore",
    ["Half-Decent Proposal"] //eps
  ], //loc
  ["Ajax Steel Mill",
    ["Homer's Phobia"] //eps
  ], //loc
  ["Eatie Gourmet's",
    ["Lisa Gets an \"A\""] //eps
  ], //loc
  ["Eye Caramba",
    ["Last Tap Dance in Springfield"] //eps
  ], //loc
  ["Duff Beer Krusty Burger Buzz Cola Costington's Department Store Kwik-E-Mart Stupid Flanders Park",
    ["Million Dollar Abie"] //eps
  ], //loc
  ["Shelbyville Heights",
    ["Like Father, Like Clown"] //eps
  ], //loc
  ["Video Matchmaking",
    ["Alone Again, Natura-Diddily"] //eps
  ], //loc
  ["Thai Food Factory",
    ["Please Homer, Don't Hammer 'Em"] //eps
  ], //loc
  ["Suicide Notes",
    ["Homerpalooza"] //eps
  ], //loc
  ["It Blows",
    ["Lisa's Sax"] //eps
  ], //loc
  ["Billionaire Camp",
    ["The Burns and the Bees"] //eps
  ], //loc
  ["Toys",
    ["A Hunka Hunka Burns in Love"] //eps
  ], //loc
  ["Enriched Learning Center for Gifted Children",
    ["Bart the Genius"] //eps
  ], //loc
  ["Goose's Gags and Gifts",
    ["Fat Man and Little Boy"] //eps
  ], //loc
  ["Up, Up and Buffet!",
    ["Natural Born Kissers"] //eps
  ], //loc
  ["Old, abandoned summer-camp",
    ["Boy-Scoutz 'n the Hood"] //eps
  ], //loc
  ["Shotkickers",
    ["Marge on the Lam"] //eps
  ], //loc
  ["The Hate Box",
    ["Marge on the Lam"] //eps
  ], //loc
  ["P. Piggly Hogswine's Super-Smorg",
    ["Lady Bouvier's Lover"] //eps
  ], //loc
  ["Russian District",
    ["Lost Our Lisa"] //eps
  ], //loc
  ["Dizz-Nee Land",
    ["Old Money"] //eps
  ], //loc
  ["Mr. Burns Basketball Stadium",
    ["The Burns and the Bees"] //eps
  ], //loc
  ["Wall E. Weasel's",
    ["Radio Bart"] //eps
  ], //loc
  ["All Trees $75",
    ["Simpsons Roasting on an Open Fire"] //eps
  ], //loc
  ["Christmas Tree Farm",
    ["Simpsons Roasting on an Open Fire"] //eps
  ], //loc
  ["Mary (shop)",
    ["Simpsons Roasting on an Open Fire"] //eps
  ], //loc
  ["Trees $60 and Up",
    ["Simpsons Roasting on an Open Fire"] //eps
  ], //loc
  ["X-Mas Trees Slightly Irregular",
    ["Simpsons Roasting on an Open Fire"] //eps
  ], //loc
  ["Highway Nine Bird Sanctuary",
    ["Itchy & Scratchy Land"] //eps
  ], //loc
  ["Aced Shoe",
    ["There's No Disgrace Like Home"] //eps
  ], //loc
  ["Creepy Family's House",
    ["There's No Disgrace Like Home"] //eps
  ], //loc
  ["Freaky Family House",
    ["There's No Disgrace Like Home"] //eps
  ], //loc
  ["Bart's Imaginary Hell",
    ["Bart the General"] //eps
  ], //loc
  ["Get Your Photo Taken with Bigfoot!",
    ["The Call of the Simpsons"] //eps
  ], //loc
  ["Half-Man Half-Ape Burgers",
    ["The Call of the Simpsons"] //eps
  ], //loc
  ["Official Bigfoot Souvenirs",
    ["The Call of the Simpsons"] //eps
  ], //loc
  ["Research Center",
    ["The Call of the Simpsons"] //eps
  ], //loc
  ["Springfield Primate Institute",
    ["The Call of the Simpsons"] //eps
  ], //loc
  ["Grassy Hilled Area",
    ["The Telltale Head"] //eps
  ], //loc
  ["Hotel",
    ["The Telltale Head"] //eps
  ], //loc
  ["Restricted Grass",
    ["The Telltale Head"] //eps
  ], //loc
  ["Carmel Corn Warehouse",
    ["Life on the Fast Lane"] //eps
  ], //loc
  ["Coffee Shop (Bowlarama)",
    ["Life on the Fast Lane"] //eps
  ], //loc
  ["Girlesque",
    ["Homer's Night Out"] //eps
  ], //loc
  ["Mud City",
    ["Homer's Night Out"] //eps
  ], //loc
  ["Sapphire Lounge",
    ["Homer's Night Out"] //eps
  ], //loc
  ["Al's Work",
    ["Homer's Night Out"] //eps
  ], //loc
  ["Preschool",
    ["Homer's Night Out"] //eps
  ], //loc
  ["Shoe City",
    ["Homer's Night Out"] //eps
  ], //loc
  ["Albanian Airport",
    ["The Crepes of Wrath"] //eps
  ], //loc
  ["Caf\u00e9",
    ["The Crepes of Wrath"] //eps
  ], //loc
  ["Communist Base",
    ["The Crepes of Wrath"] //eps
  ], //loc
  ["Krusty's Apartment",
    ["Krusty Gets Busted"] //eps
  ], //loc
  ["America's Most Armed and Dangerous Office",
    ["Some Enchanted Evening"] //eps
  ], //loc
  ["Next Exit",
    ["Some Enchanted Evening"] //eps
  ], //loc
  ["Victim's house",
    ["Some Enchanted Evening"] //eps
  ], //loc
  ["Bike Track",
    ["Bart Gets an \"F\""] //eps
  ], //loc
  ["Karl's Apartment",
    ["Simpson and Delilah"] //eps
  ], //loc
  ["Springshire",
    ["Marge's Son Poisoning"] //eps
  ], //loc
  ["Krusty's Clown College",
    ["Homie the Clown"] //eps
  ], //loc
  ["St. Jerome's Catholic School",
    ["The Father, the Son and the Holy Guest Star"] //eps
  ], //loc
  ["Saint Sebastian's School for Wicked Girls",
    ["Bart's Friend Falls in Love"] //eps
  ], //loc
  ["Manhattan Square",
    ["Lemon of Troy"] //eps
  ], //loc
  ["General Chang's Taco Italiano",
    ["E. Pluribus Wiggum"] //eps
  ], //loc
  ["Dead Lobster",
    ["E. Pluribus Wiggum"] //eps
  ], //loc
  ["We Have Restrooms!",
    ["E. Pluribus Wiggum"] //eps
  ], //loc
  ["Joe's Tavern",
    ["Lemon of Troy"] //eps
  ], //loc
  ["Fortune Megastore",
    ["Monty Can't Buy Me Love"] //eps
  ], //loc
  ["Springfield Knowledgeum",
    ["This Little Wiggy"] //eps
  ], //loc
  ["Springfield Skating Rink",
    ["Lisa on Ice"] //eps
  ], //loc
  ["Screaming Monkey Medical Research Center",
    ["HOM\u042f"] //eps
  ], //loc
  ["Fast-Food Boulevard",
    ["E. Pluribus Wiggum"] //eps
  ], //loc
  ["The Murderhorn",
    ["King of the Hill"] //eps
  ], //loc
  ["Springfield Stamp Museum",
    ["The Girl Who Slept Too Little"] //eps
  ], //loc
  ["Springfield Wall of Fame",
    ["Take My Life, Please"] //eps
  ], //loc
  ["The Leaf Garret",
    ["Marge's Son Poisoning"] //eps
  ], //loc
  ["Garden of Eden",
    ["Simpsons Bible Stories"] //eps
  ], //loc
  ["Kozy Kabins",
    ["Dangerous Curves"] //eps
  ], //loc
  ["Ronald Reagan Reeducation Center",
    ["Bart-Mangled Banner"] //eps
  ], //loc
  ["Widow's Peak",
    ["Mr. Plow"] //eps
  ], //loc
  ["Millionaire Camp",
    ["The Burns and the Bees"] //eps
  ], //loc
  ["Stern Lecture Plumbing",
    ["Homer the Great"] //eps
  ], //loc
  ["Loch Ness",
    ["Monty Can't Buy Me Love"] //eps
  ], //loc
  ["River Thames",
    ["The Regina Monologues"] //eps
  ], //loc
  ["Junkytown Legal Clinic",
    ["The Springfield Connection"] //eps
  ], //loc
  ["G. Bannister & Associates",
    ["Lemon of Troy"] //eps
  ], //loc
  ["Coffee & Tea",
    ["Lemon of Troy"] //eps
  ], //loc
  ["Larry's Cane Store",
    ["Raging Abe Simpson and His Grumbling Grandson in \"The Curse of the Flying Hellfish\""] //eps
  ], //loc
  ["Discount Fashion",
    ["Homerpalooza"] //eps
  ], //loc
  ["Tern For The Wurst Delicatessen",
    ["Summer of 4 Ft. 2"] //eps
  ], //loc
  ["Beachcomber Barber Shop",
    ["Summer of 4 Ft. 2"] //eps
  ], //loc
  ["Gull Things Considered",
    ["Summer of 4 Ft. 2"] //eps
  ], //loc
  ["Little Pwagmattasquarmsettport Public Library",
    ["Summer of 4 Ft. 2"] //eps
  ], //loc
  ["3rd Street",
    ["Bart Sells His Soul"] //eps
  ], //loc
  ["156th Street",
    ["Bart Sells His Soul"] //eps
  ], //loc
  ["181st Street",
    ["Bart Sells His Soul"] //eps
  ], //loc
  ["257th Street",
    ["Bart Sells His Soul"] //eps
  ], //loc
  ["Groovy Grove Juice Corporation",
    ["D'oh-in' in the Wind"] //eps
  ], //loc
  ["Elm Street Video Arcade",
    ["Bart the General"] //eps
  ], //loc
  ["Euro-Itchy & Scratchy Land",
    ["Itchy & Scratchy Land"] //eps
  ], //loc
  ["Weasel Island",
    ["Moe Letter Blues"] //eps
  ], //loc
  ["Bail Bonds",
    ["Sex, Pies, and Idiot Scrapes"] //eps
  ], //loc
  ["Boris' Car Loft",
    ["Diatribe of a Mad Housewife"] //eps
  ], //loc
  ["Machu Picchu",
    ["Lost Verizon"] //eps
  ], //loc
  ["Tokyo",
    ["Thirty Minutes Over Tokyo"] //eps
  ], //loc
  ["Isotope Stadium",
    ["The Bob Next Door"] //eps
  ], //loc
  ["Muffin Store",
    ["Bart Gets a \"Z\""] //eps
  ], //loc
  ["O'Flanagan's Pub",
    ["In the Name of the Grandfather"] //eps
  ], //loc
  ["Blockoland",
    ["Hungry, Hungry Homer"] //eps
  ], //loc
  ["Praiseland",
    ["I'm Goin' to Praiseland"] //eps
  ], //loc
  ["Matlock Expressway",
    ["Sideshow Bob Roberts"] //eps
  ], //loc
  ["Equalia",
    ["Lisa the Drama Queen"] //eps
  ], //loc
  ["Murder Town",
    ["To Surveil With Love"] //eps
  ], //loc
  ["Homer and Bart's Surveillance Camera Blind Spot",
    ["To Surveil With Love"] //eps
  ], //loc
  ["Groovy Grove Natural Farm",
    ["D'oh-in' in the Wind"] //eps
  ], //loc
  ["Heathrow Airport",
    ["The Regina Monologues"] //eps
  ], //loc
  ["Jazzy Goodtime's",
    ["Jazzy and the Pussycats"] //eps
  ], //loc
  ["Camp See-A-Tree",
    ["The Way We Weren't"] //eps
  ], //loc
  ["Morningwood Penitentiary",
    ["This Little Wiggy"] //eps
  ], //loc
  ["Springfield Historical Society",
    ["Lisa the Iconoclast"] //eps
  ], //loc
  ["Greaser's Cafe",
    ["Take My Wife, Sleaze"] //eps
  ], //loc
  ["Poppa Wheelie's",
    ["Take My Wife, Sleaze"] //eps
  ], //loc
  ["Crazy Vaclav's Place of Automobiles",
    ["Mr. Plow"] //eps
  ], //loc
  ["Caesar's Pow-Wow Casino",
    ["Bart to the Future"] //eps
  ], //loc
  ["Dunkilderry",
    ["In the Name of the Grandfather"] //eps
  ], //loc
  ["Hewlett Fitzpackard",
    ["In the Name of the Grandfather"] //eps
  ], //loc
  ["Mick-rosoft",
    ["In the Name of the Grandfather"] //eps
  ], //loc
  ["Cisc O'systems",
    ["In the Name of the Grandfather"] //eps
  ], //loc
  ["Giant's Causeway",
    ["In the Name of the Grandfather"] //eps
  ], //loc
  ["Guinness Brewery",
    ["In the Name of the Grandfather"] //eps
  ], //loc
  ["Blarney Castle",
    ["In the Name of the Grandfather"] //eps
  ], //loc
  ["Springfield Preparatory School",
    ["The Bart Wants What It Wants"] //eps
  ], //loc
  ["Paramountie Studios",
    ["The Bart Wants What It Wants"] //eps
  ], //loc
  ["Rancho Relaxo",
    ["Homer Alone"] //eps
  ], //loc
  ["Springfield Theater District",
    ["Girls Just Want to Have Sums"] //eps
  ], //loc
  ["The Forbidden Barn",
    ["The Joy of Sect"] //eps
  ], //loc
  ["Springfield Donuts",
    ["Poppa's Got a Brand New Badge"] //eps
  ], //loc
  ["Nero's Palace",
    ["Viva Ned Flanders"] //eps
  ], //loc
  ["Wellness Foods",
    ["Pranks and Greens"] //eps
  ], //loc
  ["Nick's Bowling Shop",
    ["Homer Alone"] //eps
  ], //loc
  ["U.S. Air Force Base",
    ["Sideshow Bob's Last Gleaming"] //eps
  ], //loc
  ["Honest John's Computers",
    ["The Computer Wore Menace Shoes"] //eps
  ], //loc
  ["Stoner's Pot Palace",
    ["A Milhouse Divided"] //eps
  ], //loc
  ["Springfield Bachelor Apartments",
    ["The Sweetest Apu"] //eps
  ], //loc
  ["Caf\u00e9 Kafka",
    ["Little Girl in the Big Ten"] //eps
  ], //loc
  ["Abandoned aqueduct",
    ["The Old Man and the Key"] //eps
  ], //loc
  ["Snuggler's Cove",
    ["Natural Born Kissers"] //eps
  ], //loc
  ["1 Ocean View Drive",
    ["The Parent Rap"] //eps
  ], //loc
  ["Suicide Bridge",
    ["Eternal Moonshine of the Simpson Mind"] //eps
  ], //loc
  ["The Island",
    ["The Computer Wore Menace Shoes"] //eps
  ], //loc
  ["Plaster Mountain Theme Park",
    ["I Don't Wanna Know Why the Caged Bird Sings"] //eps
  ], //loc
  ["Family Fun Center",
    ["Bart the Mother"] //eps
  ], //loc
  ["Springfield Monument Park",
    ["Mona Leaves-a"] //eps
  ], //loc
  ["Palm Springfield Resort",
    ["Husbands and Knives"] //eps
  ], //loc
  ["Java the Hut",
    ["The Last Temptation of Krust"] //eps
  ], //loc
  ["Jittery Joe's Coffee Shop",
    ["Marge on the Lam"] //eps
  ], //loc
  ["Sha-Boom Ka-Boom! Cafe",
    ["Homer's Phobia"] //eps
  ], //loc
  ["The Copy Jalopy",
    ["Lisa the Iconoclast"] //eps
  ], //loc
  ["I.P.O. Friday's",
    ["HOM\u042f"] //eps
  ], //loc
  ["Springfield Hunting Supplies",
    ["Homer's Phobia"] //eps
  ], //loc
  ["Tommy Hillclimber",
    ["Last Tap Dance in Springfield"] //eps
  ], //loc
  ["Overpass Diner",
    ["My Mother the Carjacker"] //eps
  ], //loc
  ["Woosterfield Hotel",
    ["Double, Double, Boy in Trouble"] //eps
  ], //loc
  ["Crazy E.T.'s Phone Home",
    ["He Loves to Fly and He D'ohs"] //eps
  ], //loc
  ["The Springfield Inquisitor",
    ["Homerazzi"] //eps
  ], //loc
  ["Springfield Palace Hotel",
    ["The Boy Who Knew Too Much"] //eps
  ], //loc
  ["Captain Blip's Zapateria",
    ["Please Homer, Don't Hammer 'Em"] //eps
  ], //loc
  ["Fancy Farms",
    ["Homerazzi"] //eps
  ], //loc
  ["Sprubway",
    ["Elementary School Musical"] //eps
  ], //loc
  ["Hickton",
    ["A Hunka Hunka Burns in Love"] //eps
  ], //loc
  ["Sprooklyn",
    ["Elementary School Musical"] //eps
  ], //loc
  ["652 8th Avenue",
    ["Elementary School Musical"] //eps
  ], //loc
  ["Dregs",
    ["Elementary School Musical"] //eps
  ], //loc
  ["Oslo",
    ["Elementary School Musical"] //eps
  ], //loc
  ["The Hague",
    ["Elementary School Musical"] //eps
  ], //loc
  ["International Court of Justice",
    ["Elementary School Musical"] //eps
  ], //loc
  ["Hague airport",
    ["Elementary School Musical"] //eps
  ], //loc
  ["Expressions",
    ["Elementary School Musical"] //eps
  ], //loc
  ["Bureau of Licenses and Permits",
    ["Homer and Lisa Exchange Cross Words"] //eps
  ], //loc
  ["Rock Bottom Remainders",
    ["Please Homer, Don't Hammer 'Em"] //eps
  ], //loc
  ["Kidstown USA",
    ["Lisa vs. Malibu Stacy"] //eps
  ], //loc
  ["In 'N' Out Ear Piercing",
    ["Simpson Tide"] //eps
  ], //loc
  ["The Family Jewels",
    ["I Married Marge"] //eps
  ], //loc
  ["Cockamamie's",
    ["Homer's Phobia"] //eps
  ], //loc
  ["13 Euclid Street",
    ["They Saved Lisa's Brain"] //eps
  ], //loc
  ["Murder House",
    ["Realty Bites"] //eps
  ], //loc
  ["Springfield Naval Reserve Base",
    ["Simpson Tide"] //eps
  ], //loc
  ["Waverly Hills Elementary School",
    ["Waverly Hills 9-0-2-1-D'oh"] //eps
  ], //loc
  ["Springfield Heights Promenade",
    ["'Tis the Fifteenth Season"] //eps
  ], //loc
  ["Cypress Creek Elementary School",
    ["You Only Move Twice"] //eps
  ], //loc
  ["Plunderer Pete's",
    ["Blood Feud"] //eps
  ], //loc
  ["Sweet Home Alabama",
    ["Blood Feud"] //eps
  ], //loc
  ["Escalator to Nowhere",
    ["Marge vs. the Monorail"] //eps
  ], //loc
  ["Pay, Park & Pay",
    [" Sideshow Bob Roberts"] //eps
  ], //loc
  ["Li'l Valu-Mart",
    ["Summer of 4 Ft. 2"] //eps
  ], //loc
  ["50 Foot Magnifying Glass",
    ["Marge vs. the Monorail"] //eps
  ], //loc
  ["Popsicle Stick Skyscraper",
    ["Marge vs. the Monorail"] //eps
  ], //loc
  ["Texxon",
    ["Lisa Simpson, This Isn't Your Life"] //eps
  ], //loc
  ["Slide Factory",
    ["Bart Gets Famous"] //eps
  ], //loc
  ["State Legislature",
    ["Bart vs. Lisa vs. the Third Grade"] //eps
  ], //loc
  ["Mt. Useful",
    ["Mountain of Madness"] //eps
  ], //loc
  ["The Slaughterhouse",
    ["Maximum Homerdrive"] //eps
  ], //loc
  ["Family Therapy Centre",
    ["There's No Disgrace Like Home"] //eps
  ], //loc
  ["Springfield Atoms Stadium",
    ["Love is a Many Strangled Thing"] //eps
  ], //loc
  ["Discount Frames",
    ["Brother's Little Helper"] //eps
  ], //loc
  ["Zip Zap and 'Za Pizza Arcade",
    ["Flaming Moe"] //eps
  ], //loc
  ["Tuition Academy",
    ["Lisa the Drama Queen"] //eps
  ], //loc
  ["Springfield Nature Preserve",
    ["Alone Again, Natura-Diddily"] //eps
  ], //loc
  ["Taylor House",
    ["Lisa's Rival"] //eps
  ], //loc
  ["Rainier Wolfcastle's Mansion",
    ["The Bart Wants What It Wants"] //eps
  ], //loc
  ["Springfield Women's Prison",
    ["Marge in Chains"] //eps
  ], //loc
  ["Moab's",
    ["Diatribe of a Mad Housewife"] //eps
  ], //loc
  ["Utility Basement B",
    ["Whacking Day"] //eps
  ], //loc
  ["Shoes For Tots",
    ["Burns' Heir"] //eps
  ], //loc
  ["Hibbert Moneymaking Organization",
    ["The Last Temptation of Homer"] //eps
  ], //loc
  ["Trout Hatchery",
    ["The Last Temptation of Homer"] //eps
  ], //loc
  ["National Energy Convention",
    ["The Last Temptation of Homer"] //eps
  ], //loc
  ["The Graveyard of the Future",
    ["The Wizard of Evergreen Terrace"] //eps
  ], //loc
  ["District 9",
    ["Holidays of Future Passed"] //eps
  ], //loc
  ["District 10",
    ["Holidays of Future Passed"] //eps
  ], //loc
  ["University of Michigan",
    ["Holidays of Future Passed"] //eps
  ], //loc
  ["The Benny Hilton",
    ["Holidays of Future Passed"] //eps
  ], //loc
  ["Heathrow Teleport Departures",
    ["Holidays of Future Passed"] //eps
  ], //loc
  ["Computer Hospital",
    ["Holidays of Future Passed"] //eps
  ], //loc
  ["Montgomery Burns Institute For Soul Extraction",
    ["Holidays of Future Passed"] //eps
  ], //loc
  ["Pool Sharks",
    ["Bart of Darkness"] //eps
  ], //loc
  ["Future Site of Children's Hospital",
    ["Homer Goes to College"] //eps
  ], //loc
  ["First Church of Lard Lad",
    ["Holidays of Future Passed"] //eps
  ], //loc
  ["Zia's Ultranet Room",
    ["Holidays of Future Passed"] //eps
  ], //loc
  ["Lackluster Video",
    ["Catch 'Em if You Can"] //eps
  ], //loc
  ["Little Ethiopia",
    ["The Food Wife"] //eps
  ], //loc
  ["Lion of Gojo Nightclub",
    ["The Food Wife"] //eps
  ], //loc
  ["Monoclecrafters",
    ["The Food Wife"] //eps
  ], //loc
  ["Classy Girls Strip Club",
    ["The Food Wife"] //eps
  ], //loc
  ["1501 East Oak Street",
    ["The Food Wife"] //eps
  ], //loc
  ["Apu's Taj Mahal",
    ["Holidays of Future Passed"] //eps
  ], //loc
  ["The Loin King",
    ["The Man in the Blue Flannel Pants"] //eps
  ], //loc
  ["Johnson's Teleporters",
    ["Holidays of Future Passed"] //eps
  ], //loc
  ["Spellympic Village",
    ["I'm Spelling as Fast as I Can"] //eps
  ], //loc
  ["Second-Best Western Hotel",
    ["Mr. Spritz Goes to Washington"] //eps
  ], //loc
  ["Springfield Extension School",
    ["C.E. D'oh"] //eps
  ], //loc
  ["Medieval Times",
    ["Three Gays of the Condo"] //eps
  ], //loc
  ["Teenage Pasteland",
    ["'Scuse Me While I Miss the Sky"] //eps
  ], //loc
  ["Starlight Motel",
    ["'Scuse Me While I Miss the Sky"] //eps
  ], //loc
  ["Springfield Lumber",
    ["Old Yeller-Belly"] //eps
  ], //loc
  ["Springfield Dry Cleaners",
    ["Old Yeller-Belly"] //eps
  ], //loc
  ["Marriage Counseling",
    ["Brake My Wife, Please"] //eps
  ], //loc
  ["Top It Off",
    ["The Bart of War"] //eps
  ], //loc
  ["Stomach Staples Center",
    ["Large Marge"] //eps
  ], //loc
  ["Styx and Stones Records",
    ["Dude, Where's My Ranch?"] //eps
  ], //loc
  ["Springfield Buddhist Temple",
    ["She of Little Faith"] //eps
  ], //loc
  ["Adult Education Annex",
    ["Secrets of a Successful Marriage"] //eps
  ], //loc
  ["Splitsville Icecream Sundaes",
    ["Secrets of a Successful Marriage"] //eps
  ], //loc
  ["Broken-Home Chimney Repair",
    ["Secrets of a Successful Marriage"] //eps
  ], //loc
  ["Painful Memories Party Supplies",
    ["Secrets of a Successful Marriage"] //eps
  ], //loc
  ["Pressboard Estates (bus stop)",
    ["Lost Our Lisa"] //eps
  ], //loc
  ["Airport Refueling Way (bus stop)",
    ["Lost Our Lisa"] //eps
  ], //loc
  ["Animal Psychotherapy Center",
    ["Old Yeller-Belly"] //eps
  ], //loc
  ["99\u00a2 Shrink",
    ["The Girl Who Slept Too Little"] //eps
  ], //loc
  ["Quack In The Box",
    ["The Girl Who Slept Too Little"] //eps
  ], //loc
  ["Sit 'n' Weep",
    ["The Girl Who Slept Too Little"] //eps
  ], //loc
  ["Two Guys From Kabul",
    ["New Kid on the Block"] //eps
  ], //loc
  ["Cinderblock Village",
    ["Poppa's Got a Brand New Badge"] //eps
  ], //loc
  ["Music World",
    ["Poppa's Got a Brand New Badge"] //eps
  ], //loc
  ["Korea Town",
    ["The Food Wife"] //eps
  ], //loc
  ["The Kabuli Palow",
    ["The Food Wife"] //eps
  ], //loc
  ["Old Abandoned Warehouse",
    ["The Real Housewives of Fat Tony"] //eps
  ], //loc
  ["Coffee Shop (The Blue and The Gray)",
    ["The Blue and the Gray"] //eps
  ], //loc
  ["Springfield Laundromat",
    ["Sweet Seymour Skinner's Baadasssss Song"] //eps
  ], //loc
  ["Are We Hair Yet?",
    ["Homer Scissorhands"] //eps
  ], //loc
  ["Consulate of China",
    ["Goo Goo Gai Pan"] //eps
  ], //loc
  ["Shavings",
    ["500 Keys"] //eps
  ], //loc
  ["The Enchanted Snail",
    ["Moms I'd Like to Forget"] //eps
  ], //loc
  ["Vesuvius Pizza",
    ["E. Pluribus Wiggum"] //eps
  ], //loc
  ["Chili Blasters",
    ["E. Pluribus Wiggum"] //eps
  ], //loc
  ["Greek Town",
    ["Postcards From the Wedge"] //eps
  ], //loc
  ["Crouching Tiger Hidden Eggroll",
    ["Postcards From the Wedge"] //eps
  ], //loc
  ["Moe's Express",
    ["Postcards From the Wedge"] //eps
  ], //loc
  ["Coffee Shop (mall)",
    ["Postcards From the Wedge"] //eps
  ], //loc
  ["Pizzeria Cheapo",
    ["Postcards From the Wedge"] //eps
  ], //loc
  ["The Picky Vegan",
    ["Postcards From the Wedge"] //eps
  ], //loc
  ["Odd Ones",
    ["Postcards From the Wedge"] //eps
  ], //loc
  ["Loose Chandeliers",
    ["Postcards From the Wedge"] //eps
  ], //loc
  ["Abandoned Store",
    ["Homer the Great"] //eps
  ], //loc
  ["1987 Calendars!!!",
    ["Please Homer, Don't Hammer 'Em"] //eps
  ], //loc
  ["Cossacks Fifth Avenue",
    ["The Falcon and the D'ohman"] //eps
  ], //loc
  ["Little Ukraine",
    ["The Falcon and the D'ohman"] //eps
  ], //loc
  ["Tsarbucks",
    ["The Falcon and the D'ohman"] //eps
  ], //loc
  ["The Snub Club",
    ["Homerazzi"] //eps
  ], //loc
  ["Wedding Hall",
    ["Million Dollar Maybe"] //eps
  ], //loc
  ["U Tote",
    ["Million Dollar Maybe"] //eps
  ], //loc
  ["Car Wash",
    ["Million Dollar Maybe"] //eps
  ], //loc
  ["Naming Rights Available",
    ["Million Dollar Maybe"] //eps
  ], //loc
  ["Towne Centre at Springfield Glenne",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Expensive Bros. Jewelry",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Forgotten Amos Cookies",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Ice Cream",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Home of the Braid",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Blocko Store",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Nouveau Bitch",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Markups & Spender",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Nothing Under a Thousand",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Condos at Towne Centre at Springfield Glenne",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Drippin' Dots",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["UV",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Cinnabun",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Cr\u00e8me de la Creams",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Cold Navy",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Banana Dictatorship",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["American Princess",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Hamburger Heaven",
    ["Million Dollar Abie"] //eps
  ], //loc
  ["Spring Field Cleaner",
    ["Million Dollar Abie"] //eps
  ], //loc
  ["XO",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Abercrombie & The Other Guy",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Book Cellar",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Bikini Atol",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Puttering Barn",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Shot In The Face Photo Studio",
    ["The Devil Wears Nada"] //eps
  ], //loc
  ["Smooches On The Beach",
    ["The Devil Wears Nada"] //eps
  ], //loc
  ["Child Psychiatrist",
    ["Jazzy and the Pussycats"] //eps
  ], //loc
  ["The Sole Provider",
    ["G.I. (Annoyed Grunt)"] //eps
  ], //loc
  ["Dukakis Campaign H.Q.",
    ["Please Homer, Don't Hammer 'Em"] //eps
  ], //loc
  ["Electronics, Etc.",
    ["G.I. (Annoyed Grunt)"] //eps
  ], //loc
  ["The Gridiron",
    ["Judge Me Tender"] //eps
  ], //loc
  ["P.F. Wangs",
    ["Judge Me Tender"] //eps
  ], //loc
  ["Pillowmint Hotel",
    ["Homerazzi"] //eps
  ], //loc
  ["SpringFace",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Testoster-Zone",
    ["The Daughter Also Rises"] //eps
  ], //loc
  ["Silicon Alley Strip Club",
    ["Them, Robot"] //eps
  ], //loc
  ["The Fifth Helping",
    ["Them, Robot"] //eps
  ], //loc
  ["Shameful Eddie's",
    ["How I Wet Your Mother"] //eps
  ], //loc
  ["Swapper Jack's",
    ["Exit Through the Kwik-E-Mart"] //eps
  ], //loc
  ["Springfield Public Pool",
    ["Crook and Ladder"] //eps
  ], //loc
  ["Springfield Fire Department",
    ["Crook and Ladder"] //eps
  ], //loc
  ["The Sharper Mark-Up",
    ["Crook and Ladder"] //eps
  ], //loc
  ["Swigmore University",
    ["Homer the Moe"] //eps
  ], //loc
  ["The Prodigy Barn",
    ["'Tis the Fifteenth Season"] //eps
  ], //loc
  ["Bar",
    ["'Tis the Fifteenth Season"] //eps
  ], //loc
  ["Lower East Side (bus stop)",
    ["Today, I Am a Clown"] //eps
  ], //loc
  ["Miami Airport",
    ["Catch 'Em if You Can"] //eps
  ], //loc
  ["Gee Your Hair Smells Terrific Arena",
    ["Helter Shelter"] //eps
  ], //loc
  ["Kiev",
    ["The Falcon and the D'ohman"] //eps
  ], //loc
  ["Insane in the Ukraine",
    ["The Falcon and the D'ohman"] //eps
  ], //loc
  ["Hot to Trotsky's Ice-Skating Rink",
    ["The Falcon and the D'ohman"] //eps
  ], //loc
  ["S.N.P.P. Cafeteria",
    ["The Falcon and the D'ohman"] //eps
  ], //loc
  ["Ugli",
    ["A Fish Called Selma"] //eps
  ], //loc
  ["Bates Motel",
    ["Cape Feare"] //eps
  ], //loc
  ["The Big T Building",
    ["Homer the Vigilante"] //eps
  ], //loc
  ["Big T Burgers & Fries",
    ["Homer the Vigilante"] //eps
  ], //loc
  ["Big T Theatre",
    ["Homer the Vigilante"] //eps
  ], //loc
  ["The A-Maize-Ing Maize Maze",
    ["Stop or My Dog Will Shoot!"] //eps
  ], //loc
  ["Veterans of One War",
    ["Midnight Rx"] //eps
  ], //loc
  ["Burns & Noble",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Cropduster Video",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["GAO Schwarz",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Linens-N-Such",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Marvyn's",
    ["The D'oh-cial Network"] //eps
  ], //loc
  ["Aspen",
    ["Double, Double, Boy in Trouble"] //eps
  ], //loc
  ["Onward Christian Schoolboys Academy",
    ["Ned 'N Edna's Blend"] //eps
  ], //loc
  ["Springfield Creative Arts Academy",
    ["Any Given Sundance"] //eps
  ], //loc
  ["Springfield Episcopal Church",
    ["Simpson Christmas Stories"] //eps
  ], //loc
  ["Birthplace of Matt Groening",
    ["We're on the Road to D'oh-where"] //eps
  ], //loc
  ["Cosmic Wars Ranch",
    ["Co-Dependent's Day"] //eps
  ], //loc
  ["Civil War Prison and Museum of Sideburns",
    ["Moe Letter Blues"] //eps
  ], //loc
  ["Cypress Creek Promenade",
    ["You Only Move Twice"] //eps
  ], //loc
  ["Hammock Complex",
    ["You Only Move Twice"] //eps
  ], //loc
  ["Hammock Hut",
    ["You Only Move Twice"] //eps
  ], //loc
  ["Hammocks Are Us",
    ["You Only Move Twice"] //eps
  ], //loc
  ["Put Your Butt There",
    ["You Only Move Twice"] //eps
  ], //loc
  ["Swing Low Sweet Chariot",
    ["You Only Move Twice"] //eps
  ], //loc
  ["Mary-Anne's Hammocks",
    ["You Only Move Twice"] //eps
  ], //loc
  ["The Spend Zone",
    ["You Only Move Twice"] //eps
  ], //loc
  ["Springfield Youth Center",
    ["Lisa on Ice"] //eps
  ], //loc
  ["Great Wall of China",
    ["Goo Goo Gai Pan"] //eps
  ], //loc
  ["Springfield Sperm Bank",
    ["Selma's Choice"] //eps
  ], //loc
  ["Fireworks, Candy, and Puppy Dogs Store",
    ["The Old Man and the \"C\" Student"] //eps
  ], //loc
  ["Snowball II Municipal Cat Park",
    ["Old Yeller-Belly"] //eps
  ], //loc
  ["Notre Dame of Springfield",
    ["Husbands and Knives"] //eps
  ], //loc
  ["Gold House",
    ["The Day the Violence Died"] //eps
  ], //loc
  ["Teejay's Zaymart",
    ["Summer of 4 Ft. 2"] //eps
  ], //loc
  ["Luck o' the Irish Wishing Well",
    ["All About Lisa"] //eps
  ], //loc
  ["Gavelby's Auction House",
    ["All About Lisa"] //eps
  ], //loc
  ["Lake Tahoe",
    ["All About Lisa"] //eps
  ], //loc
  ["Lazy I Ranch",
    ["Dude, Where's My Ranch? "] //eps
  ], //loc
  ["Nantucket",
    ["Diatribe of a Mad Housewife"] //eps
  ], //loc
  ["Groovetone Records",
    ["That '90s Show"] //eps
  ], //loc
  ["Simpson Laser Tag",
    ["That '90s Show"] //eps
  ], //loc
  ["Springfield Place",
    ["That '90s Show"] //eps
  ], //loc
  ["B. Hoffman Dentist",
    ["The Secret War of Lisa Simpson"] //eps
  ], //loc
  ["Shelbyville Bird Sanctuary",
    ["Lost Verizon"] //eps
  ], //loc
  ["Shelbyville Fertility Clinic",
    ["Adventures in Baby-Getting"] //eps
  ], //loc
  ["Shelbyville Downs",
    ["Bart the Murderer"] //eps
  ], //loc
  ["Museum of Television and TV",
    ["Milhouse Doesn't Live Here Anymore"] //eps
  ], //loc
  ["Capitol City Apartments",
    ["Milhouse Doesn't Live Here Anymore"] //eps
  ], //loc
  ["Indian Burial Mound",
    ["Milhouse Doesn't Live Here Anymore"] //eps
  ], //loc
  ["Mickey Mao's",
    ["Milhouse Doesn't Live Here Anymore"] //eps
  ], //loc
  ["Cheddarbarrel Farm and 4-H Center",
    ["Apocalypse Cow"] //eps
  ], //loc
  ["Abbattoir & Costello LLC.",
    ["Apocalypse Cow"] //eps
  ], //loc
  ["Mental Institution",
    ["How I Spent My Strummer Vacation"] //eps
  ], //loc
  ["German Castle",
    ["Raging Abe Simpson and His Grumbling Grandson in \"The Curse of the Flying Hellfish\""] //eps
  ], //loc
  ["Toys '\u042f' Us",
    ["Marge vs. Singles, Seniors, Childless Couples and Teens and Gays"] //eps
  ], //loc
  ["Se\u00f1or Ding-Dong's Doorbell Fiesta",
    ["Maximum Homerdrive"] //eps
  ], //loc
  ["Joe's Diner",
    ["Maximum Homerdrive"] //eps
  ], //loc
  ["Stardust Drive-In",
    ["Maximum Homerdrive"] //eps
  ], //loc
  ["The Gassy Knoll",
    ["Maximum Homerdrive"] //eps
  ], //loc
  ["Taj Mah-All-You-Can-Eat",
    ["Dial \"N\" for Nerder"] //eps
  ], //loc
  ["Pudding on the Ritz",
    ["Dial \"N\" for Nerder"] //eps
  ], //loc
  ["Springfield National Park",
    ["Dial \"N\" for Nerder"] //eps
  ], //loc
  ["Island",
    ["Little Orphan Millie"] //eps
  ], //loc
  ["Virgil Simpson's house",
    ["The Color Yellow"] //eps
  ], //loc
  ["Colonel Burns' Manor",
    ["The Color Yellow"] //eps
  ], //loc
  ["Hiram Simpson's house",
    ["The Color Yellow"] //eps
  ], //loc
  ["Springfield Tide Pools",
    ["The Haw-Hawed Couple"] //eps
  ], //loc
  ["Johnny Fiestas",
    ["The Last of the Red Hat Mamas"] //eps
  ], //loc
  ["Museum of Suffering",
    ["The Last of the Red Hat Mamas"] //eps
  ], //loc
  ["Nudes Nudes Nudes",
    ["The Last of the Red Hat Mamas"] //eps
  ], //loc
  ["Vic Tayback Hotel & Casino",
    ["The Last of the Red Hat Mamas"] //eps
  ], //loc
  ["Springfield Cosmetic Surgery Clinic",
    ["Simple Simpson"] //eps
  ], //loc
  ["Counter Truancy Unit",
    ["24 Minutes"] //eps
  ], //loc
  ["Lisa Simpson Home for Abandoned Animals",
    ["Jazzy and the Pussycats"] //eps
  ], //loc
  ["Diz-Nee Historical Park",
    ["The PTA Disbands"] //eps
  ], //loc
  ["Shelbyville Merchandise Mile",
    ["The Seven-Beer Snitch"] //eps
  ], //loc
  ["Grand",
    ["The Seven-Beer Snitch"] //eps
  ], //loc
  ["Palace",
    ["The Seven-Beer Snitch"] //eps
  ], //loc
  ["R",
    ["The Seven-Beer Snitch"] //eps
  ], //loc
  ["Montgomery Burns State Prison",
    ["The Seven-Beer Snitch"] //eps
  ], //loc
  ["Dexter family's house",
    ["The Seven-Beer Snitch"] //eps
  ], //loc
  ["The Drunk Paralegal Karaoke Supplier",
    ["Marge's Son Poisoning"] //eps
  ], //loc
  ["Paradise Pier",
    ["Marge's Son Poisoning"] //eps
  ], //loc
  ["Greek Orthodox Church",
    ["Dark Knight Court"] //eps
  ], //loc
  ["Upward Bound",
    ["We're on the Road to D'oh-where"] //eps
  ], //loc
  ["Carl's Dad Caverns",
    ["The Seemingly Never-Ending Story"] //eps
  ], //loc
  ["Moeview Motel",
    ["The Seemingly Never-Ending Story"] //eps
  ], //loc
  ["The Cloth Napkin",
    ["The Seemingly Never-Ending Story"] //eps
  ], //loc
  ["Toupee Chalet",
    ["The Seemingly Never-Ending Story"] //eps
  ], //loc
  ["Ned Flanders' Personal Hell",
    ["Black-eyed Please"] //eps
  ], //loc
  ["Geezer Rock",
    ["Fraudcast News"] //eps
  ], //loc
  ["Rattlesnake Sanctuary",
    ["Fraudcast News"] //eps
  ], //loc
  ["Fort Sensible",
    ["Whacking Day"] //eps
  ], //loc
  ["The Lonely Arms",
    ["Take My Life, Please"] //eps
  ], //loc
  ["Golf 'N' Die Retirement Village",
    ["Take My Life, Please"] //eps
  ], //loc
  ["Springfield Christian School",
    ["Whacking Day"] //eps
  ], //loc
  ["Campbell's Chunky Soup Maximum Security Prison",
    ["The Great Louse Detective"] //eps
  ], //loc
  ["Chateau d'If Prison",
    ["Revenge is a Dish Best Served Three Times"] //eps
  ], //loc
  ["Springfield Police Academy",
    ["Springfield Up"] //eps
  ], //loc
  ["Cafe de Mexico",
    ["Springfield Up"] //eps
  ], //loc
  ["Mr. Burns' Summer Mansion",
    ["Springfield Up"] //eps
  ], //loc
  ["Clam-Elot Sea-Food",
    ["Lisa the Drama Queen"] //eps
  ], //loc
  ["Springfield Folk Art Museum",
    ["Lisa the Drama Queen"] //eps
  ], //loc
  ["Springfield Recreation Center",
    ["Lisa the Drama Queen"] //eps
  ], //loc
  ["Springfield Gas",
    ["Bart Gets a \"Z\""] //eps
  ], //loc
  ["Chazz Busby Ballet Academy",
    ["Smoke on the Daughter"] //eps
  ], //loc
  ["Springfield Playhouse",
    ["Ned 'N Edna's Blend"] //eps
  ], //loc
  ["F\u00eate Accompli",
    ["Ned 'N Edna's Blend"] //eps
  ], //loc
  ["Sleazy Sam's Payday Loans",
    ["Ned 'N Edna's Blend"] //eps
  ], //loc
  ["Lotto 'N' Liquor",
    ["Ned 'N Edna's Blend"] //eps
  ], //loc
  ["Bail Bonds and Beyond",
    ["Ned 'N Edna's Blend"] //eps
  ], //loc
  ["The Starlight Motel",
    ["'Scuse Me While I Miss the Sky"] //eps
  ], //loc
  ["Krustyco Sweatshop",
    ["Little Girl in the Big Ten"] //eps
  ], //loc
  ["General Store",
    ["Bart's Comet"] //eps
  ], //loc
  ["Flanders family's bomb shelter",
    ["Bart's Comet"] //eps
  ], //loc
  ["Hellman Avenue Medical Plaza",
    ["Bart-Mangled Banner"] //eps
  ], //loc
  ["Topless Models",
    ["The Principal and the Pauper"] //eps
  ], //loc
  ["Stor-U-Stuff",
    ["The Principal and the Pauper"] //eps
  ], //loc
  ["Broken Dreams Storage Lockers",
    ["Day of the Jackanapes"] //eps
  ], //loc
  ["The Ritz-Carlton Hotel for Transients",
    ["The Principal and the Pauper"] //eps
  ], //loc
  ["Enron's Ride of Broken Dreams",
    ["Special Edna"] //eps
  ], //loc
  ["Home of Tomorrow",
    ["Special Edna"] //eps
  ], //loc
  ["Box Fort",
    ["Rome-Old and Julie-Eh"] //eps
  ], //loc
  ["Abe's and Selma's House",
    ["Rome-Old and Julie-Eh"] //eps
  ], //loc
  ["Photography",
    ["Changing of the Guardian"] //eps
  ], //loc
  ["Mav's and Portia's house",
    ["Changing of the Guardian"] //eps
  ], //loc
  ["Mav's and Portia's ski house",
    ["Changing of the Guardian"] //eps
  ], //loc
  ["Springfield Hobby Shop",
    ["MoneyBART"] //eps
  ], //loc
  ["Springfield City Jail",
    ["Lisa on Ice"] //eps
  ], //loc
  ["Who's To Know Motel",
    ["Separate Vocations"] //eps
  ], //loc
  ["Li'l Ludwig's Music School",
    ["Separate Vocations"] //eps
  ], //loc
  ["Iowa Non-International Airport",
    ["Separate Vocations"] //eps
  ], //loc
  ["National Testing Center",
    ["Separate Vocations"] //eps
  ], //loc
  ["Buckingham Palace Quick Lube",
    ["Homer Alone"] //eps
  ], //loc
  ["Four Seasons",
    ["She Used to Be My Girl"] //eps
  ], //loc
  ["Springfield Press Club",
    ["She Used to Be My Girl"] //eps
  ], //loc
  ["Snooze at 11",
    ["Husbands and Knives"] //eps
  ], //loc
  ["Springfield Dry Cleaner",
    ["Husbands and Knives"] //eps
  ], //loc
  ["SUV Superstore",
    ["Dangerous Curves"] //eps
  ], //loc
  ["Alberto's House",
    ["Dangerous Curves"] //eps
  ], //loc
  ["Tongue-Kiss Point",
    ["Dangerous Curves"] //eps
  ], //loc
  ["Shelbyville Stadium",
    ["Homer Loves Flanders"] //eps
  ], //loc
  ["The Helter Shelter",
    ["Homer Loves Flanders"] //eps
  ], //loc
  ["Stuckey's",
    ["The Father, the Son and the Holy Guest Star"] //eps
  ], //loc
  ["Protestant Heaven",
    ["The Father, the Son and the Holy Guest Star"] //eps
  ], //loc
  ["Springfield Armory",
    ["Bart's Comet"] //eps
  ], //loc
  ["Catholic Heaven",
    ["The Father, the Son and the Holy Guest Star"] //eps
  ], //loc
  ["Protestant Youth Festival",
    ["The Father, the Son and the Holy Guest Star"] //eps
  ], //loc
  ["Bin Laden family's house",
    ["Mypods and Boomsticks"] //eps
  ], //loc
  ["Old Springfield Mall",
    ["Mypods and Boomsticks"] //eps
  ], //loc
  ["World Headquarters",
    ["Mypods and Boomsticks"] //eps
  ], //loc
  ["Le Petite App\u00e9tit",
    ["The Daughter Also Rises"] //eps
  ], //loc
  ["The Needle Exchange",
    ["The Daughter Also Rises"] //eps
  ], //loc
  ["Mulberry Island",
    ["The Daughter Also Rises"] //eps
  ], //loc
  ["Shlomo's Judaica",
    ["I Don't Wanna Know Why the Caged Bird Sings"] //eps
  ], //loc
  ["Springfield Community Theater",
    ["The Monkey Suit"] //eps
  ], //loc
  ["Diner",
    ["Kill the Alligator and Run"] //eps
  ], //loc
  ["Six Toe County Courthouse",
    ["Kill the Alligator and Run"] //eps
  ], //loc
  ["The Royal Fart Inn",
    ["Kill the Alligator and Run"] //eps
  ], //loc
  ["Six Toe County",
    ["Kill the Alligator and Run"] //eps
  ], //loc
  ["Area 51-A",
    ["Lost Our Lisa"] //eps
  ], //loc
  ["Area 51",
    ["Lost Our Lisa"] //eps
  ], //loc
  ["Junkyard",
    ["Lost Our Lisa"] //eps
  ], //loc
  ["Barnacle Bay Theater",
    ["The Wife Aquatic"] //eps
  ], //loc
  ["Candy Shoppe",
    ["The Wife Aquatic"] //eps
  ], //loc
  ["Low Quality Inn",
    ["The Wife Aquatic"] //eps
  ], //loc
  ["Barnacle Bay Oceanographic Institute",
    ["The Wife Aquatic"] //eps
  ], //loc
  ["Inn",
    ["Regarding Margie"] //eps
  ], //loc
  ["Sandy Beach",
    ["Itchy & Scratchy Land"] //eps
  ], //loc
  ["Amish Country",
    ["Itchy & Scratchy Land"] //eps
  ], //loc
  ["Motel",
    ["Itchy & Scratchy Land"] //eps
  ], //loc
  ["Turban Outfitters",
    ["My Sister, My Sitter"] //eps
  ], //loc
  ["Just Rainsticks",
    ["My Sister, My Sitter"] //eps
  ], //loc
  ["Its a Wonderful Knife",
    ["My Sister, My Sitter"] //eps
  ], //loc
  ["Much Ado About Muffins!",
    ["My Sister, My Sitter"] //eps
  ], //loc
  ["My First Tattoo",
    ["My Sister, My Sitter"] //eps
  ], //loc
  ["Crypto Barn",
    ["My Sister, My Sitter"] //eps
  ], //loc
  ["Malaria Zone",
    ["My Sister, My Sitter"] //eps
  ], //loc
  ["Moe's Brewing Co.",
    ["My Sister, My Sitter"] //eps
  ], //loc
  ["Dr. Nick's Walk-In Clinic",
    ["My Sister, My Sitter"] //eps
  ], //loc
  ["Dentz",
    ["The Great Money Caper"] //eps
  ], //loc
  ["Sandals",
    ["New Kids on the Blecch"] //eps
  ], //loc
  ["Gifts",
    ["New Kids on the Blecch"] //eps
  ], //loc
  ["Coffee Shop (New Kids on the Blecch)",
    ["New Kids on the Blecch"] //eps
  ], //loc
  ["Shell Shack",
    ["New Kids on the Blecch"] //eps
  ], //loc
  ["Classified Records",
    ["New Kids on the Blecch"] //eps
  ], //loc
  ["Freestone Family Peach Orchard",
    ["The Great Simpsina"] //eps
  ], //loc
  ["Madame and Masseur",
    ["The Great Simpsina"] //eps
  ], //loc
  ["Burger Plate",
    ["Bonfire of the Manatees"] //eps
  ], //loc
  ["Snack Shack",
    ["Bonfire of the Manatees"] //eps
  ], //loc
  ["Fish 'n' Chips",
    ["Bonfire of the Manatees"] //eps
  ], //loc
  ["Cap'n Jack's Bait and Tackle",
    ["Bonfire of the Manatees"] //eps
  ], //loc
  ["Burgers n' Fries",
    ["Bonfire of the Manatees"] //eps
  ], //loc
  ["Gotham City Opera House",
    ["Revenge is a Dish Best Served Three Times"] //eps
  ], //loc
  ["Crafty Art's Arts and Crafts",
    ["Father Knows Worst"] //eps
  ], //loc
  ["Fresh Squeezed Lemonade",
    ["Father Knows Worst"] //eps
  ], //loc
  ["Hot Dogs",
    ["Father Knows Worst"] //eps
  ], //loc
  ["Fried Dough",
    ["Father Knows Worst"] //eps
  ], //loc
  ["Popcorn",
    ["Father Knows Worst"] //eps
  ], //loc
  ["Le Krusty Burger",
    ["The Devil Wears Nada"] //eps
  ], //loc
  ["The Elegant Scoundrel",
    ["What Animated Women Want"] //eps
  ], //loc
  ["Swanky Fish",
    ["What Animated Women Want"] //eps
  ], //loc
  ["Karate",
    ["The Great Wife Hope"] //eps
  ], //loc
  ["Springfield Sports Arena",
    ["The Great Wife Hope"] //eps
  ], //loc
  ["Old Quarry",
    ["The Blunder Years"] //eps
  ], //loc
  ["Springfield Magnet School",
    ["The President Wore Pearls"] //eps
  ], //loc
  ["Holding Hands Point",
    ["Homer Scissorhands"] //eps
  ], //loc
  ["Springfield Inn",
    ["Homer Scissorhands"] //eps
  ], //loc
  ["Honey Me Mine",
    ["Homer Scissorhands"] //eps
  ], //loc
  ["Steel Mill",
    ["Brawl in the Family"] //eps
  ], //loc
  ["Smoke Factory",
    ["Brawl in the Family"] //eps
  ], //loc
  ["Day-Care Center",
    ["Brawl in the Family"] //eps
  ], //loc
  ["Springfield Wetlands",
    ["Brawl in the Family"] //eps
  ], //loc
  ["Shelbyville Nuclear Power Plant",
    ["Homer Defined"] //eps
  ], //loc
  ["Yum\u00ed Ristorante",
    ["Half-Decent Proposal"] //eps
  ], //loc
  ["Ziff Mansion",
    ["Half-Decent Proposal"] //eps
  ], //loc
  ["Oil Refinery",
    ["Half-Decent Proposal"] //eps
  ], //loc
  ["Astroid Elementary",
    ["Postcards From the Wedge"] //eps
  ], //loc
  ["Saks Fifth Grade",
    ["Sleeping with the Enemy"] //eps
  ], //loc
  ["Li'l Chapel",
    ["There's Something About Marrying"] //eps
  ], //loc
  ["Victor/Victoria's",
    ["Three Gays of the Condo"] //eps
  ], //loc
  ["Alternative Knifestyles",
    ["Three Gays of the Condo"] //eps
  ], //loc
  ["Armstead's Mopeds",
    ["Three Gays of the Condo"] //eps
  ], //loc
  ["Fab Abs",
    ["Three Gays of the Condo"] //eps
  ], //loc
  ["Sconewall Bakery",
    ["Three Gays of the Condo"] //eps
  ], //loc
  ["Village Apartments",
    ["Three Gays of the Condo"] //eps
  ], //loc
  ["Farmer Billy's Bacon Factory",
    ["Simple Simpson"] //eps
  ], //loc
  ["Deluxe Sunday Brunch",
    ["Mommie Beerest"] //eps
  ], //loc
  ["Animal Assistants",
    ["Girly Edition"] //eps
  ], //loc
  ["Itchy's Glass-Blowing",
    ["Girly Edition"] //eps
  ], //loc
  ["Motel (Itchy & Scratchy)",
    ["Girly Edition"] //eps
  ], //loc
  ["Fortress of Choclitude",
    ["Girly Edition"] //eps
  ], //loc
  ["Memory Recovery Institute",
    ["Eternal Moonshine of the Simpson Mind"] //eps
  ], //loc
  ["I Don't",
    ["500 Keys"] //eps
  ], //loc
  ["Springfield Performing Arts Center",
    ["A Star is Burns"] //eps
  ], //loc
  ["Springfield Pet Shop",
    ["Two Dozen and One Greyhounds"] //eps
  ], //loc
  ["Ye Old Butcher Shoppe",
    ["Two Dozen and One Greyhounds"] //eps
  ], //loc
  ["Video Village",
    ["Two Dozen and One Greyhounds"] //eps
  ], //loc
  ["Rat's Nest",
    ["Lisa's First Word"] //eps
  ], //loc
  ["Stinking Fish Realty",
    ["Lisa's First Word"] //eps
  ], //loc
  ["Wed Lobster",
    ["Wedding for Disaster"] //eps
  ], //loc
  ["Swell-Air Hotel",
    ["Wedding for Disaster"] //eps
  ], //loc
  ["Atomic-Con",
    ["Homerland"] //eps
  ], //loc
  ["Boise Astoria",
    ["Homerland"] //eps
  ], //loc
  ["Plant Operations Center",
    ["Homerland"] //eps
  ], //loc
  ["Myron's Sirens",
    ["Homerland"] //eps
  ], //loc
  ["Jackson's Klaxons",
    ["Homerland"] //eps
  ], //loc
  ["Alley McBalls",
    ["Four Regrettings and a Funeral"] //eps
  ], //loc
  ["The Peak Inn",
    ["Four Regrettings and a Funeral"] //eps
  ], //loc
  ["Stuff-N-Hug",
    ["Mona Leaves-a"] //eps
  ], //loc
  ["Mt. Useful Visitors Center",
    ["Mountain of Madness"] //eps
  ] //loc
];  // end var declaration
