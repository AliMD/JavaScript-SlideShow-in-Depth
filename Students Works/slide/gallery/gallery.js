// JavaScript Document
Math.rnd = Math.random;
Math.random = function(a,b){
	return Math.round( Math.rnd()*(b-a+1))+a;
}

$(function(){
	var img = $("div.gallery a");
	img.each(function(){
		$(this).animate({
			left:Math.random(150,500),
			bottom:Math.random(150,500),
			rotate:Math.random(90,180)+'deg',
			scale:(0.1,0.9)
		},900);	
	});
	
	img.mouseover(function(){
		$(this).css({'z-index':'2'});
		$(this).animate({
			rotate:Math.random(5,20)+'deg',
			scale:(2,2),
			borderWidth:'4px 3px 20px 3px',
			'-webkit-border-radius':'3px'
		},800);
	});
	
	img.mouseout(function(){
		$(this).css({'z-index':'1'});
		$(this).animate({
			rotate:Math.random(20,80)+'deg',
			border:'2px solid #069'
		},1000)
	});
})