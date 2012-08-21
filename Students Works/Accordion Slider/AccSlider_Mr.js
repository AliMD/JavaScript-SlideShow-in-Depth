
$(document).ready(function() {
    var slidesWidth = Math.ceil(825/4);
	
	slides = $('div.slideshow div.train > div');
	overflow = $('div.slideshow div.train > div div.overflow');
	header = $('div.train > div div.header');
	
	overflow.css({'opacity':'0'});
	slides.css({width:slidesWidth + 'px'});
	
	slides.last().css({'background-position':'left top', 'padding-right':'200px'});
	
	slides.mouseover(function(){
		slides.animate({width:'115px'},500);
		$(this).animate({width:'480px'},500);
		
		overflow.eq($(this).index()).animate({opacity:1},400);
		header.eq($(this).index()).animate({opacity:0},400);
	});
	
	$('div.slideshow').mouseout(function(){
		slides.animate({width:slidesWidth + 'px'},500);	
		
		overflow.animate({'opacity':'0'});
		header.animate({'opacity':'1'});
	});
	
});