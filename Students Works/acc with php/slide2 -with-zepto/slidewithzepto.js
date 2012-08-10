// JavaScript Document
$(document).ready(function(){
  	var slides = $('div.scroll div.train > div');
	
	var wth = Math.ceil(880/4)+'px';
	slides.css({width:wth});
	slides.last().css({'padding-right':'100px'});
	slides.mouseover(function(){
		
		slides.animate({width:'80px'},500);
		$(this).animate({width:'640px'},500);
		
	});
	
	$('div.scroll').mouseout(function(){
		
		slides.animate({width:wth},500);
		
	});
	
})