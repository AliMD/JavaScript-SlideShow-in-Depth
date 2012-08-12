$(function(){ // document ready
	var slideshow     = $('div.slideshow'),
		train         = $('div.slideshow .train'),
		lists         = $('div.slideshow ul.btns li'),
		currentSlide  = 0;

	(go2slide = function (n) {
		if(n>lists.length-1) n=0;
		if(n<0) n=lists.length-1;
		train.css({left: (-450*n)+'px' });
		lists.eq(currentSlide).removeClass('active');
		lists.eq(n).addClass('active');
		currentSlide=n;
	})(0); 

	lists.click(function(){
		go2slide($(this).index());
	});

	$('div.slideshow .next').click(nextSlide=function(){
		go2slide(currentSlide+1);
	});

	$('div.slideshow .previous').click(function(){
		go2slide(currentSlide-1);
	});

	var autoPlayIv = false;
	(autoPlayStart = function(){
		if(autoPlayIv) return;
		autoPlayIv = setInterval(nextSlide, 5000);
	})();

	autoPlayStop = function(){
		clearInterval(autoPlayIv);
		autoPlayIv = false;
	}

	slideshow.mouseover(autoPlayStop);
	slideshow.mouseout(autoPlayStart);
});