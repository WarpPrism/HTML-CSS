// ugly codes  T_T
// copyright reserved by ZhouJihao
// 2015

var gift;
var tipdiv;
var ribbon;
var headdiv;
var loadtime;

window.onload = function() {
    init();
    startgiftAnimation();
    startRibbonAnimation();
    setTimeout(showTip, 8000 + loadtime);
    setTimeout(showHead, 9000 + loadtime);

    tipdiv.onclick = function() {
        window.location.href = "../Page1/page1.html";
    }
}

function init() {
    loadtime = 3000;
    gift = document.getElementById("gift");
    tipdiv = document.getElementById("tipdiv");
    ribbon = document.getElementById("ribbon");
    headdiv = document.getElementById("headdiv");
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
    setTimeout(animation0, 0 + loadtime);
    setTimeout(animation1, 1000 + loadtime);
    setTimeout(animation2, 2000 + loadtime);
    setTimeout(animation3, 3000 + loadtime);
    setTimeout(animation4, 4000 + loadtime);
    setTimeout(animation5, 5000 + loadtime);
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

    setTimeout(animation6, 6000 + loadtime);
    setTimeout(animation7, 7000 + loadtime);
}

function showTip() {
    tipdiv.style.opacity = "1";
    tipdiv.style.top = "250px";
}

function showHead() {
    headdiv.style.opacity = "1";
}

