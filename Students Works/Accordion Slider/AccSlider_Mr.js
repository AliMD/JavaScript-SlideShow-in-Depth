
$(document).ready(function() {
    var slidesWidth = Math.ceil(825/4);
	
	slides = $('div.slideshow div.train > div');
	slides.css({width:slidesWidth + 'px'});
	slides.last().css({'padding-right':'200px'});
	
	slides.mouseover(function(){
		slides.animate({width:'115px'},500);
		$(this).animate({width:'480px'},500);
	});
	
	$('div.slideshow').mouseout(function(){
		slides.animate({width:slidesWidth + 'px'});	
	});
	
});