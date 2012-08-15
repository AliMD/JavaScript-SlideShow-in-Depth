$(function(){
	var slides = $('div.slider div.bgslide div.slides'),
		list = $('div.slider ul.btns li'),
		currentSlide = 0,
		autoPlayIv = false;
	go2slide = function(n){
		if (n>list.length-1) n = 0;	
		if (n<0) n = list.length-1;
		slides.animate({
			left:-800*n	
		},2000,'ease-in-out');
		list.eq(currentSlide).removeClass('active');
		list.eq(n).addClass('active');
		currentSlide = n;
	}
	list.click(function(){
		go2slide($(this).index());
	});
	$('div.slider div.back').click(backSlide = function(){
		go2Slide(currentSlide-1);	
	});
	$('div.slider div.next').click(nextSlide = function(){
		go2slide(currentSlide+1);	
	});
	(autoPlayStart = function(){
		if(autoPlayIv) return;
		autoPlayIv = setInterval(nextSlide,3500);	
	})();
	autoPlayStop = function(){
		clearInterval(autoPlayIv);
		autoPlayIv = false;	
	}
	$('div.slider').mouseover(autoPlayStop);
	$('div.slider').mouseout(autoPlayStart);
});