// JavaScript Document

$(document).ready(function(){
	slide = $('.slideshow .train > div');
	slide.css({width:'80px'});
	slide.eq(2).css({width:'600px'});
	slide.last().css({'paddingRight':'100px'});
	slide.click(function(){
		slide.animate({width:'80px'},800);
		$(this).animate({width:'600px'},800);
	});
})
