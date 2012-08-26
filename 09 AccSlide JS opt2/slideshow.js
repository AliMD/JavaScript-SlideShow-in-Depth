$(document).ready(function(){
	var slidesWidth = Math.ceil(650/5);

	slides = $('div.slideshow div.train > div');
	slides.css({width:'50px'});
	slides.first().css({width:'450px'});
	slides.last().css({'padding-right':'200px'});
	//$('div.slideshow div.train > div:last-child').css({'padding-right':'200px'});

	slides.click(function(){
		slides.animate({width:'50px'},500);
		$(this).animate({width:'450px'},500);
	});
})

