"use strict";

var checkAnswers = function() {

	if(document.getElementById("nvidia1").checked) {
		document.getElementById("nvidia1").nextElementSibling.nextElementSibling.innerHTML = "Correct";
	} else {
		document.getElementById("nvidia1").nextElementSibling.nextElementSibling.innerHTML = "";
	}
	
	if(document.getElementById("intel1").checked) {
		document.getElementById("intel1").nextElementSibling.nextElementSibling.innerHTML = "Incorrect";
	} else {
		document.getElementById("intel1").nextElementSibling.nextElementSibling.innerHTML = "";
	}

	if(document.getElementById("amd1").checked) {
		document.getElementById("amd1").nextElementSibling.nextElementSibling.innerHTML = "Incorrect";
	} else {
		document.getElementById("amd1").nextElementSibling.nextElementSibling.innerHTML = "";
	}
	
	if(document.getElementById("nvidia2").checked) {
		document.getElementById("nvidia2").nextElementSibling.nextElementSibling.innerHTML = "Correct";
	} else {
		document.getElementById("nvidia2").nextElementSibling.nextElementSibling.innerHTML = "Incorrect";
	}

	if(document.getElementById("intel2").checked) {
		document.getElementById("intel2").nextElementSibling.nextElementSibling.innerHTML = "Correct";
	} else {
		document.getElementById("intel2").nextElementSibling.nextElementSibling.innerHTML = "Incorrect";
	}

	if(document.getElementById("amd2").checked) {
		document.getElementById("amd2").nextElementSibling.nextElementSibling.innerHTML = "Correct";
	} else {
		document.getElementById("amd2").nextElementSibling.nextElementSibling.innerHTML = "Incorrect";
	}

	if(document.getElementById("msi").checked) {
		document.getElementById("msi").nextElementSibling.nextElementSibling.innerHTML = "Incorrect";
	} else {
		document.getElementById("msi").nextElementSibling.nextElementSibling.innerHTML = "Correct";
	}

	if(document.getElementById("intel3").value.trim().toLowerCase() == "intel") {
		document.getElementById("intel3").nextElementSibling.innerHTML = "Correct";
	} else {
		document.getElementById("intel3").nextElementSibling.innerHTML = "Incorrect";
	}
};


window.onload = function() {
	            document.getElementById("answers").onclick = checkAnswers;
};
