// JavaScript Document
$(function(){
  	var slides = $('div.scroll div.train > div'),
		span = $('div.scroll div.train > div span'),
		menu = $('div.slide div.scroll div.train > div div.menu '),
		menuli = $('div.slide div.scroll div.train > div div.menu li'),
		clr=new Array('lightblue','lightgreen','red'),
		i=0;
	
	slides.css({width:'30px'});
	slides.last().css('padding-right:100px;');

	
	slides.mouseover(function(){
		slides.animate({width:'30px'},100);
		$(this).animate({width:'200px'},500);
		span.eq($(this).index()).animate({display:'inline',color:clr[$(this).index()]},400);
		menu.eq($(this).index()).animate({display:'block',color:clr[$(this).index()]},400);
//		menuli.eq($(this).index()).animate({color:clr[$(this).index()]},400);
	});
	
	slides.mouseout(function(){
		slides.animate({width:'30px'},500);
		span.eq($(this).index()).animate({display:'none'},400);
		menu.eq($(this).index()).animate({display:'none'},400);
		
	});
})