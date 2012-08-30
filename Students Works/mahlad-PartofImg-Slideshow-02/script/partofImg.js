$(function(){
	var partWIdth=Math.ceil(800/6);
	partSl=$('div.partSl div.imgSl > div');
	opacitySl=$('div.partSl div.imgSl > div > span')
	partSl.animate({width:partWIdth+'px'},800);
	partSl.last().css({'padding-right':'400px'});
	opacitySl.last().css({'padding-right':'400px'});
	partSl.mouseover(function(){
		partSl.animate({width:'60px'},800);
		$(this).animate({
			width:'500px',
			opacity:1
	},800);

	});
	
	$('div.partSl').mouseout(function(){
		partSl.animate({
			width:partWIdth+'px',
			opacity:0.5
		},800);
	});


});
