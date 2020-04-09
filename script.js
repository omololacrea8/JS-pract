let count = 0; // global variable

function changeBackground(newColor) { // definition of function
	document.bgColor = newColor;
	count++;
	document.getElementById("col").innerHTML="We changed the color "+count+" times!";
}

function onSliderChanged() {
	let r = document.getElementById("red").value;
	let g = document.getElementById("green").value;
	let b = document.getElementById("blue").value;
	document.bgColor = "#"+dh(r)+dh(g)+dh(b);
	document.getElementById("col").innerHTML="rgb("+r+","+g+","+b+")="+document.bgColor;
}

function dh(d) { // decimal to hex conversion
    let hex = Number(d).toString(16);
	if (hex.length < 2) 
	hex = "0" + hex;
    return hex;
}
