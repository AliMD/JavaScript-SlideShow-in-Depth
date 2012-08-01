// JavaScript Document
window.onload = function() {
	var list = document.getElementsByClassName('btn').item(0).getElementsByTagName('li');
	var slide = document.getElementsByClassName('train')
	var container = document.getElementsByClassName('slideshow').item(0);
	var next = document.getElementsByClassName('next').item(0);
	var back = document.getElementsByClassName('back').item(0);
	var cs = 0
	var autopl = false
	function rnd1(a,b){
	return Math.floor(Math.random()*b-a+1)+a;
	}
	alert(rnd1(5,10));
	gotoslide = function(n) {
			if (n > list.length - 1) n = 0;
			if (n < 0) n = 3;
			slide.item(0).style.left = (n * -800) + 'px';
			list.item(cs).className = ''
			list.item(n).className = 'active'
			cs = n
		}
	autoplay = function() {
		gotoslide(cs + 1);
	}
	startap = function() {
		if (autopl) return;
		autopl = setInterval(autoplay, 3000);
	}
	stopap = function() {
		clearInterval(autopl);
		autopl = false;
	}
	next.onclick = function() {
		gotoslide(cs + 1);
	}
	back.onclick = function() {
		gotoslide(cs - 1);
	}
	for (i = 0; i < list.length; i++) {
		(function(j) {
			list.item(j).onclick = function() {
				gotoslide(j);
			}
		})(i)
	}


	container.onmouseout = startap;
	container.onmouseover = stopap;
	gotoslide(0);
	startap()
}