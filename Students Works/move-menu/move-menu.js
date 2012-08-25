// JavaScript Document
$(function(){
	var listmenuli = $('div.container menu.centermenu li'),
		lf = 350,
		duration = 100,
		delay = 60; 
	listmenuli.each(function(){
		var that = $(this);
		setTimeout(function(){
			that.animate({
				left:lf,
				top:-58
			},500);
			lf += 105;
		},duration+=delay);
	});
	
	listmenuli.mouseover(function(){
		$(this).animate({top:-5},300);
	});
	
	listmenuli.mouseout(function(){
		$(this).animate({top:-60},300);
	});
});