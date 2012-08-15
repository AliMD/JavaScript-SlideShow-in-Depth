$(function(){
	var slider=$('.slider .slides'),
		list=$('.slider .btns li'),
		currentSlide=0,
		autoplayIv=false;
	gotoslide=function(n){
		if (n>list.length-1) n=0;	
		if (n<0) n=list.length-1;
		slides.animate({
			left:-700*n	
		},2000,'ease-in-out');
		list.eq(currentSlide).removeClass('active');
		list.eq(n).addClass('active');
		currentSlide=n;
	}
	list.click(function(){
		gotoslide($(this).index());//?	
	});
	$('.slider .back').click(nextSlide=function(){
		gotoSlide(currentSlide-1);	
	});
	$('.slider .next').click(backSlide=function(){
		gotoslide(currentSlide+1);	
	});
	(autoPlayStart=function(){
		if(autoPlayIv) return;
		autoPlayIv=setInterval(nextSlide,5000);	
	})();
	autoPlayStop=function(){
		clearInterval(autoPlayIv);
		autoPlayIv=false;	
	}
	$('.slider').mouseover(autoPlayStop);
	$('.slider').mouseout(autoPlayStart);
});