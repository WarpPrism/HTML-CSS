var curtain;
var gift;
var tipdiv;
var ribbon;
var headdiv;
var curtaintime = 3000;

window.onload = function() {
	init();
	openCurtain();
	startgiftAnimation();
	startRibbonAnimation();
	setTimeout(showTip, 8000 + curtaintime);
	setTimeout(showHead, 9000 + curtaintime);
}

function init() {
	curtain = document.getElementById("curtain");
	gift = document.getElementById("gift");
	tipdiv = document.getElementById("tipdiv");
	ribbon = document.getElementById("ribbon");
	headdiv = document.getElementById("headdiv");
}

function openCurtain() {
	curtain.style.height = "0px";
	curtain.style.background = "lightblue";
	curtain.style.opacity = "0";
}

function startgiftAnimation() {
	function animation0() {
		gift.style.top = "400px";
		gift.style.left = "200px";
		gift.style.opacity = "1";
	}

	function animation1() {
		gift.style.top = "0px";
		gift.style.left = "400px";
		gift.style.opacity = "0.3";
	}

	function animation2() {
		gift.style.top = "400px";
		gift.style.left = "600px";
		gift.style.opacity = "1";
	}

	function animation3() {
		gift.style.top = "0px";
		gift.style.left = "800px";
		gift.style.opacity = "0.4";
	}

	function animation4() {
		gift.style.top = "300px";
		gift.style.left = "1000px";
		gift.style.opacity = "0.8";
	}

	function animation5() {
		gift.style.top = "300px";
		gift.style.left = "600px";
		gift.style.opacity = "1";
	}
	setTimeout(animation0, 0 + curtaintime);
	setTimeout(animation1, 1000 + curtaintime);
	setTimeout(animation2, 2000 + curtaintime);
	setTimeout(animation3, 3000 + curtaintime);
	setTimeout(animation4, 4000 + curtaintime);
	setTimeout(animation5, 5000 + curtaintime);
}

function startRibbonAnimation() {

	function animation6() {
		ribbon.style.opacity = "0.5";
		ribbon.style.left = "400px";
		ribbon.style.transform = "rotate(180deg)";
	}

	function animation7() {
		ribbon.style.opacity = "1";
		ribbon.style.left = "630px";
		ribbon.style.top = "400px";
		ribbon.style.transform = "rotate(360deg)";
	}

	setTimeout(animation6, 6000 + curtaintime);
	setTimeout(animation7, 7000 + curtaintime);
}

function showTip() {
	tipdiv.style.opacity = "1";
	tipdiv.style.top = "250px";
}

function showHead() {
	headdiv.style.opacity = "1";
}