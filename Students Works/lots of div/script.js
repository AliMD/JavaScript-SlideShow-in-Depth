// Javascript

$(function(){
	var part = $('div.slideshow div');
	var li = $('div.menu ul li');
	//set background position of each part

	part.each(function(i){
		if(i<4){
			$(this).css({backgroundPosition:(i)*-112.5+"px 0px"});
		}
		else
		if(i<8){
			$(this).css({backgroundPosition:(i)*-112.5+"px -100px"});
		}
		else{
			$(this).css({backgroundPosition:(i)*-112.5+"px -200px"});
		}
	});

	// changeBackground 

	cbg = function(n){
		part.each(function(i){
			$(this).animate({backgroundImage:'url(\'../../images/pic'+(n+1)+'.jpg\')'},i*200);
		})
	};
	
	//Set menu JS
	var cr = 0
	li.each(function(i){
		$(this).click(function(){
			gotopic(i);
		});
	});

	gotopic = function(n){
		li.eq(cr).removeClass('active');
		li.eq(n).addClass('active');
		cbg(n);
		cr = n;
	}
	gotopic(0);


});
