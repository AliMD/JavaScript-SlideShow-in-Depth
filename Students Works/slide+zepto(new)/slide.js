//Zepto
$(function(){

	var slides	= $('div.scroll'),
		train	 = $('div.scroll div.train'),
		lists	 = $('div.scroll ul.btn li'),
		pics	  = $('div.scroll div.train > div  div'),
		current=0,picsize=900,flag=false;
	
	(gotoslide = function(n){

		if(n>=lists.length) n=0;
		if(n<0) n=lists.length-1;
		train.css({left : (-n*picsize)+'px'});
		pics.eq(current-1).removeClass('pic');
		lists.eq(current).removeClass('active');
		lists.eq(n).addClass('active');
		pics.eq(n).addClass('pic');
		current=n;

	})(0);
	
	
	(autoplay=function(){
		gotoslide(current+1);
	});
	
	(autoPlayStart=function(){
		if(flag) return;
		t=setInterval(autoplay,4000);	
	})();
	
	(autoPlayStop=function(){
		clearInterval(t);
		flag=false;
	});
	
	(prvSlide=function(){
		gotoslide(current-1);
	});
	
	$('div.slide .next').click(autoplay=function(){
		gotoslide(current+1);
	});
	
	$('div.slide .prev').click(function(){
		gotoslide(current-1);
	});
	
	lists.click(function(){
		gotoslide($(this).index());
	});
	
	slides.mouseover(autoPlayStop);
	slides.mouseout(autoPlayStart);
	
})