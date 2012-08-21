$(function(){
	var train = $('div.slideshow div.train'),
		lists = $('div.slideshow ul.btns li')
		currentSlide = 0,
		autoPlayIv = false;

	go2slide = function(n){
		if(n>lists.length-1) n=0;
		if(n<0) n = lists.length-1;
		train.animate({
			left:-450*n
		},500,'ease-in-out');
		lists.eq(currentSlide).removeClass('active');
		lists.eq(n).addClass('active');
		currentSlide=n;
	}

	lists.click(function(){
		go2slide( $(this).index() );
	});


	$('div.slideshow .next').click(nextSlide = function(){
		go2slide(currentSlide+1);
	});

	$('div.slideshow .previous').click(function(){
		go2slide(currentSlide-1);
	});

	(autoPlayStart = function(){
		if(autoPlayIv) return ;
		autoPlayIv = setInterval(nextSlide, 5000);
	})();

	autoPlayStop = function(){
		clearInterval(autoPlayIv);
		autoPlayIv = false;
	}

	$('div.slideshow').mouseover(autoPlayStop);
	$('div.slideshow').mouseout(autoPlayStart);

});