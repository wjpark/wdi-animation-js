var cat = document.getElementsByTagName('img')[0];
var bg = document.getElementById('bg');
var speed = 2;

cat.style.left = "0px";
cat.style.position = "absolute";
// bg.style.backgroundPosition = "0";
// bg.style.position = "absolute";

function walk() {
	var max_width = document.width - cat.width;
	if(parseInt(cat.style.left, 10) >= max_width || speed < 0) {
	return;
	} 
	cat.style.left = parseInt(cat.style.left, 10) + speed + "px";
}

// function scroll() {
// 	bg.style.backgroundPosition = parseInt(bg.style.backgroundPosition, 10) - 1 + "px"; 
// }

var start = document.getElementById('start');
start.onclick  = function() {
	setInterval(walk, 50);
	// setInterval(scroll, 100);
};

var faster = document.getElementById('faster');
faster.onclick = function() {
	setInterval(speed +=5);
	// setInterval(scroll, 50);
};

var slower = document.getElementById('slower');
slower.onclick = function() {
	setInterval(speed -= 5);
	// setInterval(scroll, 200);
};

var stop = document.getElementById('stop');
stop.onclick = function() {
	setInterval(speed = 0);
	// setInterval(scroll, 0);
};