$(document).ready(function() {
	var sWidth=math.ceil(920/7);
	slides=$('div.slide div.train > div');
	slides.css({width:sWidth+'px'});
	slides.eq(7).css({'padding-right':'50px'});
	slides.mouseover(function() {
		slides.animate({width:'70px'},300);
		$(this).animate({width:'500px'},300);
    });
	$('div.slide').mouseout(function() {
		slides.animate({width:sWidth+'px'},300);
        
    });
    
});