Math.rnd = Math.random;
Math.random=function(a,b){
	if(!a && !b) return Math.rnd();
	return Math.floor(Math.rnd()*(b-a+1))+a;
}
$(function(){
	var pics = $('div.slTow a');

	pics.each(function(){
	/*$('tagName').each(function(){});:baraye har yek az taghaye
	'tagName' yekbar  tabe dakhele each() ra ejra mikonad*/ 
		$(this).animate({
			left:Math.random(50,500),
			top:Math.random(50,300),
			opacity:'0.9',
			'-moz-transform':'rotate('+Math.random(-90,90)+'deg)'
			
		},500);
	});
	pics.mouseover(function(){
		$(this).css({
			'z-index':2,
			opacity:'0.98'
		});
	});
	pics.mouseout(function(){
		$(this).css({
			'z-index':1,
			opacity:'0.9'
		});
	});
	var imgPic=$('div.slTow a img')
	imgPic.click(function(){
		$(this).animate({
			width:'800px',
			height:'600px',
			'-moz-transform':'rotate('+Math.random(90,91)+'deg)'
		},500);

	});

});
