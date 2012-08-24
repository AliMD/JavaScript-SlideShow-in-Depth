Math.rnd = Math.random;
Math.random=function(a,b){
	if(!a && !b) return Math.rnd();
	return Math.floor(Math.rnd()*(b-a+1))+a;
}
$(function(){
	var pics = $('div.slRnd a');

	pics.each(function(){
		$(this).animate({
			left:Math.random(50,500),
			top:Math.random(50,300),
			opacity:0.9,
			'-moz-transform':'rotate('+Math.random(-90,90)+'deg)'
			
		},500);
	});
	pics.mouseover(function(){
		$(this).css({
			'z-index':2,
			opacity:0.98
		});
	});
	pics.mouseout(function(){
		$(this).css({
			'z-index':1,
			opacity:0.9
		});
	});
	

});
