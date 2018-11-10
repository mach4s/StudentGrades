test = (function() {
	var person_set = new Array();

	function Person(fn, ln, crs, grades, id) {
		this.first_name = fn;
		this.last_name = ln;
		this.courses = crs;
		this.gpa = grades;
		this.tag = id;
	}

	// return full name of Person
	Person.prototype.getString = function() {
		return this.first_name + " " + this.last_name;
	}

	// return the list of Person objects created
	Person.prototype.getAllPerson = function() {
		return person_set;
	}

	// add the newly created Person object to the list
	Person.prototype.add = function(p_obj) {
		person_set.push(p_obj);
	}

	Person.prototype.Person = function(index) {
		return person_set[index];
	}

	Person.empty = function() { //empty the list
		person_set = [];
	}

	Person.prototype.count = function() {
		return this.courses.length;
	}

	Person.prototype.getCourse = function(index) { //return course
		return this.courses[index];
	}

	Person.prototype.getGPA = function(index) { //return gpa
		return this.gpa[index];
	}

	if (window.testApp == undefined) {
		window.testApp = {};
	}

	if (window.testApp.model == undefined) {
		window.testApp.model = {};
	}

	window.testApp.model.Person = Person;

	return window.testApp;
})();
