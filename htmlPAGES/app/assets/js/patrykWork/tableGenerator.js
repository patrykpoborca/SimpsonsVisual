/* Patryk Poborca
Assumptions: generatedtable's id == generateDTable+divID
Rows/Columns = $'s
divID = location of table to be inserted
data['data'] = 2-d Array, should be pre-populated with data first element = rows, second = columns as per HTML table design, each 0 array position should be the name of the row
data['color'] = color you wish to display.. for customization, say Charizard is red cell when true, pikachu yellow, so forth... false is default color though
data['type'] = indicates type of data passed, in cased you wish to implement hover tech
*/
function cutPx(r) {
	var a;
	for(a =0; a < r.length; a++)
		if(r[a] == '.' || r[a] == 'p') 
			break;
	return Number(r.substring(0, a));
}

function initTable(rows, columns, divID, data, display, colors) {
	//init
	if(isNaN(rows))
		rows = Number(rows); 
	if(isNaN(columns))
		columns = Number(columns); //incase string input.
	var divString = "#"+divID;
	var htmlString = "<table id = 'generatedTable" + divID + "'>"; // where we store what we will append...
	if(colors == false) {
		colors = {
			yes : "beige;",
			no : "teal;",
			def : "#CBE5FF;"
		};
		if(!data['type']) 
			data['type'] = "generatorTypeFlag = 'NaN' ";
	}

	var cellDimX = cutPx($(divString).css('width')) / data[0].length - (0.005 * columns);
	var cellDimY = cutPx($(divString).css('height')) / data.length -(0.01 * rows );
	if(cellDimX < 5) 
		cellDimX = 5;
	if(cellDimY < 5) 
		cellDimY = 5;
	//if(!display) {cellDimX = 10; cellDimY = 10;}
	//end of init/setup
	var leftCornerFlag = false;
	var C = 0;
	var color;
	for(var R = 0; R < data.length; R++) {
		htmlString += "<tr>\n";
	
		for(C = 0; C < data[R].length; C++) {
			htmlString += ((C != 0 && R == 0) || (C== 0 && R != 0)) ? "<th " + data['type'] : "<td "+ data['type']; 
			if(!leftCornerFlag) {
				htmlString += " style = 'background-color : black;  width : "+ cellDimX +"px; height : "+ cellDimY +"px;'> ";leftCornerFlag= true;
			} //if display kindof histogram style
			else {
				if(!display)
					htmlString +=  " style = 'background-color : #CBE5FF; text-align:center; width : "+ cellDimX +"px; height : "+ cellDimY +"px;'> "+data[R][C]["data"]; //inject data into td/th
				else {
					if(data[R][C]["color"]) 
						color = (data[R][C]["data"]) ? data[R][C]["color"] : colors["no"];
					else
						color = (data[R][C]["data"] == 0) ?  colors["yes"]: colors["no"];
					htmlString += " style = 'background-color :" + color + " width : "+ cellDimX +"px; height : "+ cellDimY +"px;'> ";
					htmlString += ((C != 0 && R == 0) || (C== 0 && R != 0)) ? data[R][C]["data"] : ""; 
				}
			}
			htmlString += ((C != 0 && R == 0) || (C== 0 && R != 0)) ? "</th>\n" : "</td>\n"; 
		}
		htmlString += "</tr>\n";
	}
	htmlString+= "</table>";

	//console.log(htmlString);
	$(divString).append(htmlString);
}



function wrapForTable(arr) {
	var r_val = [];
	var temp = [];
	for(var first = 0; first < arr.length; first++) {
		temp = [];
		for(var second = 0; second < arr[first].length; second++) {
			temp.push({data : arr[first][second], color : ""});
		}
		r_val.push(temp);
	}
	return r_val;
}