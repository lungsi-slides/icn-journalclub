// function to change (rotate) figure in the same window
function changeFigure(figIDtoChange, imgpath){
	// figToChange MUST be the ID of the html img object
	figure = document.getElementById(figIDtoChange);
	figure.src = imgpath;
}

// function to collapse
function collapseFunction(className) {
	var coll = document.getElementsByClassName(className);
	var i;

	for (i = 0; i < coll.length; i++) {
	  coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
		  content.style.display = "none";
		} else {
		  content.style.display = "block";
		}
	  });
	}
}

// Verbose but better performance to above function
var coll_proof = document.getElementsByClassName("collapsible_proof");
var i;

for (i = 0; i < coll_proof.length; i++) {
  coll_proof[i].addEventListener("click", function() {
	this.classList.toggle("active");
	var content = this.nextElementSibling;
	if (content.style.display === "block") {
	  content.style.display = "none";
	} else {
	  content.style.display = "block";
	}
  });
}

var coll_def = document.getElementsByClassName("collapsible_definition");
var i;

for (i = 0; i < coll_def.length; i++) {
  coll_def[i].addEventListener("click", function() {
	this.classList.toggle("active");
	var content = this.nextElementSibling;
	if (content.style.display === "block") {
	  content.style.display = "none";
	} else {
	  content.style.display = "block";
	}
  });
}