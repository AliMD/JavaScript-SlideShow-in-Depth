$(function(){
	var partWIdth=Math.ceil(800/6);
	partSl=$('div.partSl div.imgSl > div');
	opacitySl=$('div.partSl div.imgSl > div > span')
	partSl.animate({width:partWIdth+'px'},800);
	partSl.last().css({'padding-right':'400px'});
	partSl.mouseover(function(){
		partSl.animate({width:'60px'},800);
		$(this).animate({width:'500px'},800);

	});
	opacitySl.mouseover(function(){
		opacitySl.animate({'background-color':'rgba(0,0,0,0.4)'},800);
		$(this).animate({'background-color':'rgba(0,0,0,0)'},800);
	});
	$('div.partSl').mouseout(function(){
		partSl.animate({width:partWIdth+'px'},800);
		opacitySl.animate({'background-color':'rgba(0,0,0,0.4)'},800);
	});


});
