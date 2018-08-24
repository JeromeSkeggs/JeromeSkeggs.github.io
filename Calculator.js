var a, b, z, i, space, numbcount, numbset, segments, count, jerome ;
i = 0;
space = [];
segments = [];
numbcount = 0;
numbset = 0;
a = 0;
count = 0;
z = 0;
function doclear() {
	space = ["Result"];
	refresh();
	i = 0;
	numbset = 0;
	segments = [];
	count = 0;
	numbcount = 0;
}
function writezero() {
	space[i] = 0;
	numbset += 0;
	refresh();
	i += 1;
	numbcount += 1;
}
function writeone() {
	space[i] = 1;
	if (numbcount != 0) {
		numbset += Number(1/Math.pow(10,numbcount).toFixed(numbcount));
	} else {
		numbset += 1;
	}
	numbcount += 1;
	refresh();
	i += 1;
}
function writetwo() {
	space[i] = 2;
	if (numbcount != 0) {
		numbset += Number(2/Math.pow(10,numbcount).toFixed(numbcount)) ;
	} else {
		numbset += 2;
	}
	numbcount += 1;
	i += 1;
	refresh();
}
function writethree() {
	space[i] = 3;
	if (numbcount != 0) {
		numbset += Number(3/Math.pow(10,numbcount).toFixed(numbcount)) ;
	} else {
		numbset += 3;
	}
	numbcount += 1;
	i += 1;
	refresh();
}
function writefour() {
	space[i] = 4;
	if (numbcount != 0) {
		numbset += Number(4/Math.pow(10,numbcount).toFixed(numbcount)) ;
	} else {
		numbset += 4;
	}
	numbcount += 1;
	i += 1;
	refresh();
}
function writefive() {
	space[i] = 5;
	if (numbcount != 0) {
		numbset += Number(5/Math.pow(10,numbcount).toFixed(numbcount)) ;
	} else {
		numbset += 5;
	}
	numbcount += 1;
	i += 1;
	refresh();
}
function writesix() {
	space[i] = 6;
	if (numbcount != 0) {
		numbset += Number(6/Math.pow(10,numbcount).toFixed(numbcount)) ;
	} else {
		numbset += 6;
	}
	numbcount += 1;
	i += 1;
	refresh();
}
function writeseven() {
	space[i] = 7;
	if (numbcount != 0) {
		numbset += Number(7/Math.pow(10,numbcount).toFixed(numbcount)) ;
	} else {
		numbset += 7;
	}
	numbcount += 1;
	i += 1;
	refresh();
}
function writeeight() {
	space[i] = 8;
	if (numbcount != 0) {
		numbset += Number(8/Math.pow(10,numbcount).toFixed(numbcount)) ;
	} else {
		numbset += 8;
	}
	numbcount += 1;
	i += 1;
	refresh();
}
function writenine() {
	space[i] = 9;
	if (numbcount != 0) {
		numbset += Number(9/Math.pow(10,numbcount).toFixed(numbcount)) ;
	} else {
		numbset += 9;
	}
	numbcount += 1;
	i += 1;
	refresh();
}
function addition() {
	if (space[space.length-2] != "+") {
		space[i] = " ";
		i += 1;
		space[i] = "+";
		i += 1;
		space[i] = " ";
		i += 1;
		numbset = Math.round(numbset*Math.pow(10,numbcount-1));
		segments[count] = numbset;
		count += 1;
		segments[count] = "+";
		count += 1;
		numbset = 0;
		numbcount = 0;
		refresh();
	}
}
function multiplication() {
	if (space[space.length-2] != "X") {
		space[i] = " ";
		i += 1;
		space[i] = "X";
		i += 1;
		space[i] = " ";
		i += 1;
		numbset = Math.round(numbset*Math.pow(10,numbcount-1));
		segments[count] = numbset;
		count += 1;
		segments[count] = "*";
		count += 1;
		numbset = 0;
		numbcount = 0;
		refresh();
	}
}
function solveEquation() {
	numbset = Math.round(numbset*Math.pow(10,numbcount-1));
	segments[count] = numbset;
	i = 0;
	numbset = 0;
	count = 0;
	numbcount = 0;
	space = [];
	if (segments.length > 2) {
		document.getElementById("demo").innerHTML = eval(segments[0] + segments[1] + segments[2]);
		segments = [];
	} else {
		document.getElementById("demo").innerHTML = "Error";
		segments = [];
	}
}
function refresh() {
	document.getElementById("demo").innerHTML = space.join("");
}
