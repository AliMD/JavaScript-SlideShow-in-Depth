$(function(){
	var animateDue      = 500,
		slideOpenWidth  = 450,
		slidesLen       = $('div.train > div').length,
		slideShowWidth  = $('div.slideshow').width(),
		slidesWidth     = Math.ceil(slideShowWidth/slidesLen),
		slideCloseWidth = (slideShowWidth-slideOpenWidth)/(slidesLen-1)

	slides = $('div.slideshow div.train > div');
	slides.css({width:slidesWidth});
	slides.last().css({'padding-right':'200px'});
	//$('div.slideshow div.train > div:last-child').css({'padding-right':'200px'});

	slides.mouseover(function(){
		slides.animate({width:'50px'},animateDue);
		$(this).animate({width:'450px'},animateDue);
	});

	slides.mouseout(function(){
		slides.animate({width:slidesWidth},animateDue/1.5);
	});
})

