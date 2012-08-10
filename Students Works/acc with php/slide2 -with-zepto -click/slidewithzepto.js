// JavaScript Document
$(document).ready(function(){
  	var slides = $('div.scroll div.train > div');
	
	slides.css({width:'50px'});
	slides.last().css('padding-right:100px;');
	slides.first().css({width:'600px'});
	
	slides.click(function(){
		slides.animate({width:'50px'},500);
		$(this).animate({width:'600px'},500);
	});
})