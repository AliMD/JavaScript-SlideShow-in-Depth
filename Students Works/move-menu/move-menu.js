// JavaScript Document
$(function(){
	var listmenuli = $('div.container menu.centermenu li'),
		lf = 300,
		duration = 100,
		delay = 150; 

	listmenuli.each(function(){
		var that = $(this);
		setTimeout(function(){
			that.animate({
				left:lf,
				top:-8
			},500);
			lf += 105;
		},duration+=delay);
	});
	
	listmenuli.each(function(){
		var that= $(this);
		setTimeout(move1=function(){
		that.animate({
				top:-60
			},500);
		},duration+=delay);
		
	});

	setInterval(move1,5000);
		
	listmenuli.mouseout(function(){
		$(this).animate({top:-60},300);
	});	
	
	listmenuli.mouseover(function(){
		$(this).animate({top:-5},300);
	});
	
});