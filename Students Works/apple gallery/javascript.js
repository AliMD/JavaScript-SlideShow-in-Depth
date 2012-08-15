$(function() {
	var train = $('div.slideshow div.train'),
		lists = $('div.container ul.btns li'),
		currentSlide=0,
		autoPlayIv=false;
	
	go2slide = function(n){
		if(n>lists.length-1) n=0;
		if(n<0) n = lists.length-1;
		train.animate({
			'margin-left':-1140*n
		},400,'ease-in-out');
		lists.eq(currentSlide).removeClass('active');
		lists.eq(n).addClass('active');
		currentSlide=n;
	}
	lists.click(function(){
		go2slide($(this).index());	
	});
	$('div.slideshow div.next').click(nextSlide = function(){
		go2slide(currentSlide+1);	
	});
	$('div.slideshow div.previous').click(prvSlide = function(){
		go2slide(currentSlide-1);
		
	});
	(autoPlayStart = function(){
		if(autoPlayIv) return ;
		autoPlayIv = setInterval(nextSlide, 7000);
	})();

	autoPlayStop = function(){
		clearInterval(autoPlayIv);
		autoPlayIv = false;
	}
	$('div.slideshow').mouseover(autoPlayStop);
	$('div.slideshow').mouseover(autoPlayStart);
});