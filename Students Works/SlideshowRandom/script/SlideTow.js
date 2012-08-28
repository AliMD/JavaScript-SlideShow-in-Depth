Math.rnd = Math.random;
Math.random=function(a,b){
	if(!a && !b) return Math.rnd();
	return Math.floor(Math.rnd()*(b-a+1))+a;
}
$(function(){
	var pics = $('div.slRnd div.imgS');

	pics.each(function(){
		$(this).animate({
			left:Math.random(10,600),
			top:Math.random(10,300),
			opacity:0.9,
			'-moz-transform':'rotate('+Math.random(-90,90)+'deg)',
			'-webkit-transform':'rotate('+Math.random(-90,90)+'deg)'
			
		},500);
	});
	pics.mouseover(function(){
		$(this).animate({
			'z-index':2,
			opacity:0.98,
		 	'-moz-transform':'rotate('+Math.random(-90,90)+'deg)',
		 	'-moz-transform':'scale(2,2)',
		 	'-webkit-transform':'rotate('+Math.random(-90,90)+'deg)',
		 	'-webkit-transform':'scale(2,2)'
		},700);
		
	});
	pics.mouseout(function(){
		$(this).animate({
			'z-index':1,
			'-moz-transform':'rotate('+Math.random(-90,90)+'deg)',
			'-webkit-transform':'rotate('+Math.random(-90,90)+'deg)'
		},700);
	});
	
});
