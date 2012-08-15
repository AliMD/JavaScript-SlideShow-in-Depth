$(function () {
	var slider=$('.slider .slides'),
		list=$('.slider .btns li'),
		currentSlide=0,
		autoplayIv=false;
	gotoslide=function(n){
		if (n>list.length-1) n=0;	
		if (n<0) n=list.length-1;
		slides.animate({
			left:-700*n	
		},2000,'ease-in-out');
		list.eq(currentSlide).removeClass('active');
		list.eq(n).addClass('active');
		currentSlide=n;
		
	}
});








/*window.onload = function () {
	var currentSlide = 0;
	var slider = document.getElementsByClassName('slider').item(0);
	var slides = slider.getElementsByClassName('slides').item(0);
	var lists = slider.getElementsByClassName('btns').item(0).getElementsByTagName('li');
	
	(showSlide = function (n) {
			if (n>lists.length-1) n=0;	
			if (n<0) n=lists.length-1;
			slides.style.left=(-800*n)+'px';
			lists.item(currentSlide).className="";
			lists.item(n).className="active";
			currentSlide=n;
	})(0);
	
	nextSlide = function () {
		showSlide (currentSlide+1);	
	}
	
	backSlide = function () {
		showSlide (currentSlide-1);	
	}
	
	var autoPlayIv = false;
	
	(autoPlayStart = slider.getElementsByClassName('play').item(0).onclick = function () {
		if (autoPlayIv) return;
		autoPlayIv = setInterval(nextSlide,3500);	
	})();
	
	autoPlayStop = slider.getElementsByClassName('pause').item(0).onclick = function () {
		clearInterval(autoPlayIv);
		autoPlayIv = false;	
	}
	
	slider.getElementsByClassName('back').item(0).onclick=backSlide;
	slider.getElementsByClassName('next').item(0).onclick=nextSlide;
	slider.getElementsByClassName('pause').item(0).onclick=autoPlayStop;
	slider.getElementsByClassName('play').item(0).onclick=autoPlayStart;
	
	for (var i=0;i<lists.length;i++) {
		(function (j) {
			lists.item(j).onclick = function () {
				showSlide(j);	
			}
		})(i);
	}
}*/