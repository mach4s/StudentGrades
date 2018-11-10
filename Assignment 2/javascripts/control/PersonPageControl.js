var createPerson = (function() {

	function PersonPageControl()
	{
		var add_elm = document.getElementById('search_person_id');

		// define the event handler for Add button
		add_elm.addEventListener('click', function(event)
		{
			// clear name and table
			test.model.Person.empty();
			var ln = document.getElementById('ln_id').value;
			//search for the student info
			for (var i =0; i<studList.length; i++ )
			{
				if (ln == studList[i].last)
				{
					var p_obj = new test.model.Person(studList[i].first, ln, studList[i].course, studList[i].gpa);
					p_obj.add(p_obj);
				}
			}

			// Create the view
  			var list_view = new test.view.ListView(p_obj.getAllPerson());
		});

	}

	// make sure the page is fully loaded before registering event handler
	window.addEventListener('load', function(event) {
		PersonPageControl();
	});

	return createPerson;

})()

var studList = new Array();
w = {last:"Jameson", first:"James" , course:["Math", "English", "Science", "History", "Art"], gpa:[3.5, 3.6, 3.1, 3.3, 3.8], tag:0};
x = {last:"Davidson" , first:"David", course:["Math", "English", "Science", "History", "Computer Science"], gpa:[2.8, 2.5, 3.1, 3.1, 2.1], tag:1};
y = {last:"Patteson" , first:"Patty", course:["Math", "English", "Science", "History", "Spanish"], gpa:[3.9, 3.9, 3.9, 3.9, 3.9], tag:2};
z = {last:"Patteson", first:"Pat" , course:["Math", "English", "Science", "History", "Art"], gpa:[3.1, 3.1, 3.2, 3.3, 3.4], tag:0};

studList.push(w,x,y,z);

//empty the table info
function emptytable(){
	var table_node = document.getElementById("studenttable");
	while(table_node.childElementCount > 1){  table_node.removeChild(table_node.lastChild);}
}

function student(stud, tag) {
	emptytable();
	tag = tag.slice(14);

	//create rows in table with info for course and gpa
	for (i = 0; i < stud[tag].count(); i++)
	{

		var tablerow = document.createElement('tr');
		var cnode = document.createElement('td');
		var courseinfo = document.createTextNode(stud[tag].getCourse(i));
		var gnode = document.createElement('td');
		var gpainfo = document.createTextNode(stud[tag].getGPA(i));

		cnode.appendChild(courseinfo);
		gnode.appendChild(gpainfo);
		tablerow.appendChild(cnode);
		tablerow.appendChild(gnode);

		document.getElementById('studenttable').appendChild(tablerow);
		document.getElementById("studGradeID").innerHTML = ("Grades for " + stud[tag].getString() + ":");

	}
}
