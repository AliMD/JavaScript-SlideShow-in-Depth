
$(document).ready(function() {
    var slidesWidth = Math.ceil(825/4);
	
	slides = $('div.slideshow div.train > div');
	//description = $('div.slideshow div.train > div div.description');
	overflow = $('div.slideshow div.train > div div.overflow');
	var p = $('div.slideshow div.train > div div.description p');
	
	overflow.css({width:slidesWidth + 'px'});
	slides.css({width:slidesWidth + 'px'});
	slides.css({'background-position':'center top'});
	slides.last().css({'background-position':'right top', 'padding-right':'200px'});
	
	slides.mouseover(function(){
		/*p.css({display:'block'},2000);*/
		slides.animate({width:'115px'},500);
		$(this).animate({width:'480px'},500);
		//$('this.header').animate({opacity:0.4});
		
		
		overflow.animate({opacity:1,width:'480px'}, 500);
		
	});
	
	$('div.slideshow').mouseout(function(){
		slides.animate({width:slidesWidth + 'px'},500);	
		overflow.animate({opacity:0, width:slidesWidth + 'px'}, 500);
		
	});
	
});