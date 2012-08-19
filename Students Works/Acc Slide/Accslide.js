$(document).ready(function(){
	slides= $('div.container div.slideshow div.train > div');
	var widths= Math.ceil(870/7);

	slides.css({width:widths+'px'});
	slides.last().css({'padding-right':'500px'});

	slides.mouseover(function(){
		slides.animate({width:'50px'},500);
		$(this).animate({width:'570px'},500);
	})
	slides.mouseout(function(){
		slides.animate({width:widths+'px'},500);
	})
})