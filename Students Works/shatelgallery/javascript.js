$(function(){
	var	currentslide = 0,
		autoPlayIv = false;
	slides = $('div.slideshow div.train > div');
	slides.css({width:'39px'});
	slides.eq(3).css({width:'812px'});
	slides.click(function(){
		slides.animate({width:'39px'},400);
		$(this).animate({width:'812px'},400);
	});
	
	
	slides.click(function(){
		go2slide( $(this).index() );
	});
	
	go2slide = function(n){
		if(n>slides.length-1) n=0;
		if(n<0) n = slides.length-1;
		slides.eq(currentslide).animate({width:'39px'},400);
		slides.eq(n).animate({width:'812px'},400);
		currentslide=n;
	};
	
	nextSlide = function(){
		go2slide(currentslide-1);
	};
	
	autoPlayStart = function(){
		if(autoPlayIv) return ;
		autoPlayIv = setInterval(nextSlide,5000);
	};

	autoPlayStop = function(){
		clearInterval(autoPlayIv);
		autoPlayIv = false;
	}
	
	go2slide(3);
	autoPlayStart();
	$('div.slideshow').mouseover(autoPlayStop);
	$('div.slideshow').mouseout(autoPlayStart);
});