http://www.sitepoint.com/jquery-vs-raw-javascript-1-dom-forms/

DOM Selectors
// find all paragraphs with the class "summary" in the article with ID "first"
var n = $("article#first p.summary");

var n = document.querySelectorAll("article#first p.summary"); // gets all matching nodes
document.querySelector(selector) // — fetches the first matching node only
document.getElementById(idname) // — fetches a single node by its ID name
document.getElementsByTagName(tagname) // — fetches nodes matching an element (e.g. h1, p, strong, etc).
document.getElementsByClassName(class) // — fetches nodes with a specific class name

document.getElementsByClassName("jamarshon-tile")
document.getElementById("navigation-bar")

// limit the result to descendants
var n = document.getElementById("first");
var p = n.getElementsByTagName("p");

DOM Manipulation
$("#container").append("<p>more content</p>");

document.getElementById("container").innerHTML += "<p>more content</p>";

// You can also use DOM building techniques. These are safer but rarely faster than innerHTML:
var p = document.createElement("p");
p.appendChild(document.createTextNode("more content");
document.getElementById("container").appendChild(p);

// remove all child nodes in jQuery:
$("#container").empty();

document.getElementById("container").innerHTML = null;

var c = document.getElementById("container");
while (c.lastChild) c.removeChild(c.lastChild);

// remove the whole element from the DOM in jQuery:
$("#container").remove();

var c = document.getElementById("container");
c.parentNode.removeChild(c);

http://www.sitepoint.com/jquery-vs-raw-javascript-2-css3-animation/

Class Manipulation
$("#myelement").addClass("myclass");

document.getElementById("myelement").className = "myclass";

document.getElementById("jamarshon-items").classList.add("isViewed")

// classList is an array with properties 
// length — the number of class names applied
// item(index) — the class name at a specific index
// contains(class) — returns true if a node has that class applied
// add(class) — applies a new class to the node
// remove(class) — removes a class from the node
// toggle(class) — removes or adds a class if it’s applied or not applied respectively

Style Manipulation
$("#myelement").css({
	color: "#c00",
	backgroundColor: "#eee",
	width: "200px",
	height: "100px",
	borderColor: "#f00"
});

var m = document.getElementById("myelement"), c = m.style;
c.color = "#c00";
c.backgroundColor = "#eee";
c.width = "200px";
c.height = "100px";
c.borderColor = "#f00";

http://www.sitepoint.com/jquery-vs-raw-javascript-3-events-ajax/

Launching Scripts on Page Load
// Past
// place scripts in the HTML head and use window.onload = start; to launch an initial 
// function. It worked but window.onload only fires after all embedded files such 
// images have been fully downloaded; you might be waiting some time for code to run.

$(start)
// The start() function is executed as soon as the HTML has downloaded and the DOM is ready, 
// but it won’t wait for other assets. Behind the scenes, it uses the native DOMContentLoaded
// event with fallbacks in jQuery 1.x for IE6/7/8:
document.addEventListener("DOMContentLoaded", start);

// simply load your script at the bottom of the page just before the closing </body> tag 
// and you’ll know the DOM is ready.

Events
$("#clickme").on("click", function(e) {
	console.log("you clicked " + e.target);
	e.preventDefault();
});

document.getElementById("clickme").addEventListener("click", function(e) {
	console.log("you clicked " + e.target);
	e.preventDefault();
});

Ajax
$.ajax({
	url: "webservice",
	type: "POST",
	data: "a=1&b=2&c=3",
	success: function(d) {
		console.log(d);
	}
});

var r = new XMLHttpRequest(); 
r.open("POST", "webservice", true);
r.onreadystatechange = function () {
	if (r.readyState != 4 || r.status != 200) return; 
	console.log(r.responseText);
};
r.send("a=1&b=2&c=3");
