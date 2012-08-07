// Javascript document 

$(document).ready(function(){
	var btn = $('div.btn');
	var li = $('div.btn ul > li');
	var img = $('div.train > div');

	btn.mouseover(function(){
		li.animate({marginTop:'10px'},500)
	});
	btn.mouseout(function(){
		li.animate({marginTop:'-50px'},500)
	});
	var opa = function(){
		for(i =0;i<4;i++){
			img.eq(i).animate({opacity:'0'},500)
		};
	};
	img.eq(0).css({opacity:'1'})
	li.eq(0).click(function(){
		opa();
		img.eq(0).animate({opacity:'1'},1000)
	});
	li.eq(1).click(function(){
		opa();
		img.eq(1).animate({opacity:'1'},1000)
	});
	li.eq(2).click(function(){
		opa();
		img.eq(2).animate({opacity:'1'},1000)
	});
	li.eq(3).click(function(){
		opa();
		img.eq(3).animate({opacity:'1'},1000)
	});
});