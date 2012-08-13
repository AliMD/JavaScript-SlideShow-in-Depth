$(function(){
	var train=$('div.slideshow div.train'),
	btns=$('div.slideshow ul.btns li'),
	currentSlide=0,picwidth=1000;
	(go2Slide=function(n){
		if(n>btns.length-1) n=0;
		if(n<0) n=btns.length-1;
		train.css({left:-picwidth*n+'px'});
		btns.eq(currentSlide).removeClass('active');
		btns.eq(n).addClass('active');
		currentSlide=n;

	})(0);
}())
	btns.click(function(){
		go2Slide($(this).index());
	})



	nextSlide=function () {
		go2Slide(currentSlide+1);
	}
	preSlide=function () {
		go2Slide(currentSlide-1);
	}
	for(i=0;i<btns.length;i++){
		(function(j){
			btns.item(j).onclick=function(){
				go2Slide(j);
			}
		})(i);
	}
	setInterval(nextSlide,5000);
};






















