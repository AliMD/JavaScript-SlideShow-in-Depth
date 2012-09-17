$(document).ready(function(){
	var slidesWidth = Math.ceil(650/6);

	slides = $('div.slider div.scroll > div');
	slides.css({width:slidesWidth+'px'});
	slides.last().css({'padding-right':'200px'});
	//$('div.slideshow div.train > div:last-child').css({'padding-right':'200px'});

	slides.mouseover(function(){
		slides.animate({width:'50px'},650,'ease-in-out');
		$(this).animate({width:'450px',opacity:'1'},650,'ease-in-out');
	});
	$('div.slider').mouseout(function(){
		slides.animate({width:slidesWidth+'px',opacity:'.5'},650,'ease-in-out');
	});
})