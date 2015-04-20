var curtain1;
var curtain2;
var span1;
var span2;
var head;
var start;
var garden;
var canvas;
var context;
var n;
var Fi;
var index;
var textdiv;
var text1;
var text2;
var wordsdiv;
var foot;

window.onload = function() {
	init();
	openCurtain();
	setTimeout(disableCurtain, 5000);
	setTimeout(startLissajousAnimation, 6000);
}

function init() {
	n = 1;
	Fi = 0;
	index = 0;
	wrap = document.getElementById("wrap");
	curtain1 = document.getElementById("curtain1");
	curtain2 = document.getElementById("curtain2");
	span1 = curtain1.getElementsByTagName("span");
	span2 = curtain2.getElementsByTagName("span");
	garden = document.getElementById("garden");
	textdiv = document.getElementById("textdiv");
	text1 = document.getElementById("text1");
	text2 = document.getElementById("text2");
	wordsdiv = document.getElementById("wordsdiv");
	foot = document.getElementById("foot");
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	context.globalCompositeOperation = "lighter";
	garden = new Garden(context, canvas);
	setInterval(function() {
		garden.render();
	}, Garden.options.growSpeed);
}

function openCurtain() {
	span1[0].style.opacity = "1";
	span1[0].style.top = "250px";
	span1[0].style.transform = "rotate(360deg)";

	span2[0].style.opacity = "1";
	span2[0].style.top = "250px";
	span2[0].style.transform = "rotate(360deg)";

	curtain1.style.width = "0px";
	curtain1.style.opacity = "0";
	curtain1.style.background = "lightblue";

	curtain2.style.width = "0px";
	curtain2.style.opacity = "0";
	curtain2.style.background = "lightblue";
}

function disableCurtain() {
	wrap.removeChild(curtain1);
	wrap.removeChild(curtain2);
	text1.style.opacity = "1";
	foot.style.opacity = "1";
}

//Heart curve
function getHeartCurveCoordinate(s) {
	var t = s / Math.PI;
	var x = 15 * (16 * Math.pow(Math.sin(t), 3));
	var y = -16 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
	return new Array(270 + x, 225 + y);
}

//利萨茹(Lissajous)曲线
function getLissajousCurveCoordinate(s, n, Fi) {
	var t = s;
	var x = 200 * Math.sin(t);
	var y = 200 * Math.sin(n * t + Fi);
	return new Array(280 + x, 270 + y);
}

// y = x^3
/*function getCurveCoordinate(s) {
	var x = s;
	var y = -0.0001 * Math.pow(x, 3);
	return new Array(300 + x, 300 + y);
}*/

function startLissajousAnimation() {
	index++;
	var s = -100;
	var b = new Array();
	var a = setInterval(function() {
		var h = getLissajousCurveCoordinate(s, n, Fi);
		var e = true;
		for (var f = 0; f < b.length; f++) {
			var g = b[f];
			var j = Math.sqrt(Math.pow(g[0] - h[0], 2) + Math.pow(g[1] - h[1], 2));
			if (j < Garden.options.bloomRadius.max * 1.3) {
				e = false;
				break;
			}
		}
		if (e) {
			b.push(h);
			garden.createRandomBloom(h[0], h[1])
		}
		if (s >= 50) {
			clearInterval(a);
			clearCanvas();
			clearCanvas();
			switch (index) {
				//初始为线段 line
				//圆 circle
				case 1:
					Fi = Math.PI / 2;
					startLissajousAnimation();
					textdiv.style.width = "270px";
					changeText();
					text2.innerHTML = "x = 200sin(t)<br />y = 200sin(t + PI / 2)<br />x^2 + y^2 = 200^2<br />Let's leading a ring-like life.";
					break;
				//椭圆
				case 2:
					Fi = Math.PI / 3;
					startLissajousAnimation();
					textdiv.style.width = "300px";
					changeText();
					text1.innerHTML = "x = 200sin(t)<br />y = 200sin(t + PI / 3)<br />Ellipse<br />You provide the orbit for my life.";
					break;
				//抛物线
				case 3:
					n = 2;
					Fi = Math.PI / 2;
					startLissajousAnimation();
					textdiv.style.width = "320px";
					changeText();
					text2.innerHTML = "x = 200sin(t)<br />y = 200sin(2t + PI / 2)<br />Parabola<br />I start to rise when meeting you.";
					break;
				//执罗诺双纽线
				case 4:
					Fi = 0;
					startLissajousAnimation();
					textdiv.style.width = "230px";
					changeText();
					text1.innerHTML = "x = 200sin(t)<br />y = 200sin(2t)<br />Lemniscate<br />Combine together.";
					break;
				//besace曲线
				case 5:
					Fi = Math.PI / 3;
					startLissajousAnimation();
					textdiv.style.width = "220px";
					changeText();
					text2.innerHTML = "x = 200sin(t)<br />y = 200sin(2t)<br />Besace<br />Getting beautiful.";
					break;
				//心形线
				case 6:
					startHeartAnimation();
					text2.style.display = "none";
					textdiv.style.left = "730px";
					textdiv.style.top = "190px";
					textdiv.style.width = "370px";
					textdiv.style.height = "100px";
					textdiv.style.boxShadow = "0px 0px 0px #FFF";
					text1.style.letterSpacing = "0px";
					text1.style.textAlign = "center";
					text1.style.opacity = "1";
					textdiv.style.transition = "all 1.5s linear";
					text1.style.transition = "all 2s linear";
					text1.innerHTML = "x = 15 * 16[sin(t)]^3<br />y = -16 * (13cost - 5cos2t - 2cos3t - cos4t)<br />Heart<br />I am fond of you.";
				default:
					break;
			}
		} else {
			s += 0.2
		}
	}, 10)
}

function startHeartAnimation() {
	var s = -80;
	var b = new Array();
	var a = setInterval(function() {
		var h = getHeartCurveCoordinate(s);
		var e = true;
		for (var f = 0; f < b.length; f++) {
			var g = b[f];
			var j = Math.sqrt(Math.pow(g[0] - h[0], 2) + Math.pow(g[1] - h[1], 2));
			if (j < Garden.options.bloomRadius.max * 1.3) {
				e = false;
				break;
			}
		}
		if (e) {
			b.push(h);
			garden.createRandomBloom(h[0], h[1])
		}
		if (s >= -60) {
			clearInterval(a);
			wordsdiv.style.opacity = "1";
			return;
		} else {
			s += 0.2
		}
	}, 50)
}

function clearCanvas() {
	context.clearRect(0, 0, 600, 600);
	canvas.width = canvas.width;
}

//bad code with high CPU consumption.
/*function sleep(millseconds) {
	var now = new Date();
	var exitTime = now.getTime() + millseconds; 
	while (true) {
		now = new Date();
		if (now.getTime() >= exitTime) {
			return;
		}
	}
}*/

function changeText() {
	if (text1.style.opacity == "0") {
		text1.style.opacity = "1";
		text2.style.opacity = "0";
	} else if (text1.style.opacity == "1") {
		text2.style.opacity = "1";
		text1.style.opacity = "0";
	}
}