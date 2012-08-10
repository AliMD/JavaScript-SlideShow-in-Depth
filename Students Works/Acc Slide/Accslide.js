$(document).ready(function(){
	slides= $('div.slideshow .train > div');
	var widths= Math.ceil(1160/5);

	slides.css({width:widths+'px'});
	slides.last().css({'padding-right':'500px'});

	slides.mouseover(function(){
		slides.animate({width:'50px'},500);
		$(this).animate({width:'960px'},500);
	})
	slides.mouseout(function(){
		slides.animate({width:widths+'px'},500);
	})
})