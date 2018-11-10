
test = ( function ()
{

	function ListView(data)
	{
		console.log("data: " + data);
		this.root = document.getElementById('person_list_id');
		this.content = data;

		this.createChildNodeDOMApi();
	}



	ListView.prototype.createChildNodeDOMApi = function()
	{
		// empty child nodes
		while (this.root.firstChild)	{ this.root.removeChild(this.root.firstChild);	}

		var pplList = this.content;

		//list names
		for (i=0; i<this.content.length; i++)
		{
			var lnode = document.createElement('li');
			lnode.id = 'li_Student_id_' + i;

			var linfo = document.createTextNode(this.content[i].getString());
			lnode.appendChild(linfo);

			document.getElementById("person_list_id").appendChild(lnode);
			//click on the name
			document.getElementById("li_Student_id_" + i).onclick = function(){ student(pplList, this.id)
			};
		}


	}

	if (window.testApp == undefined) {
		window.testApp = {};
	}

	if (window.testApp.view == undefined) {
		window.testApp.view = {};
	}

	window.testApp.view.ListView = ListView;

	return window.testApp;
})();
