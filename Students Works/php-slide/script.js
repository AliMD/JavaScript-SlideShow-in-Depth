// JavaScript Document

$(function(){
	var slide = $('div.slide'),
		train = $('div.slide div.train'),
		btn = $('div.slide ul.button li'),
		prv = $('div.slide div.prv'),
		next = $('div.slide div.next'),
		intervalAuto = false;
		current = 0;
	
	goToPic = function(n){
		if(n > btn.length-1) n=0;
		if( n < 0) n = btn.length-1;
		train.animate({
			left:(-600*n)	
		},800,'ease-in');
		btn.eq(current).removeClass('active');
		btn.eq(n).addClass('active'	);
		current = n;
	}
	
	btn.click(function(){
		goToPic($(this).index());	
	});
	
	prv.click(prev = function(){
		goToPic(current-1);
	});
	
	next.click(nextpic = function(){
		goToPic(current+1);
	});	
	
	(startAuto = function(){
		if(intervalAuto){
			return;
		}
		intervalAuto = setInterval(nextpic,2000);	
	})();
	
	stopAuto = function(){
		clearInterval(intervalAuto);
		intervalAuto = false;
	}
	
	slide.mouseover(stopAuto);
	slide.mouseout(startAuto);	
})
