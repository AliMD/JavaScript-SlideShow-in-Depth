$(document).ready(function(){
	var slidesWidth = Math.ceil(650/5);

	slides = $('div.slideshow div.train > div');
	slides.css({width:slidesWidth+'px'});

	slides.mouseover(function(){
		slides.animate({width:'50px'},500);
		$(this).animate({width:'450px'},500);
	});
	$('div.slideshow').mouseout(function(){
		slides.animate({width:slidesWidth+'px'},500);
	});
})

