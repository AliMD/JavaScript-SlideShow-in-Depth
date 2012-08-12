//Zepto
$(function(){

	var slides	= $('div.scroll'),
		train	 = $('div.scroll div.train'),
		lists	  = $('div.scroll ul.btn li'),
		current=0,picsize=640,flag=false;
	
	(gotoslide = function(n){

		if(n>=lists.length) n=0;
		if(n<0) n=lists.length-1;
		train.css({left : (-n*picsize)+'px'});
		lists.eq(current).removeClass('active');
		lists.eq(n).addClass('active');
		current=n;

	})(0);
	
	
	(autoplay=function(){
		gotoslide(current+1);
	});
	
	(autoPlayStart=function(){
		if(flag) return;
		t=setInterval(autoplay,2000);	
	})();
	
	(autoPlayStop=function(){
		clearInterval(t);
		flag=false;
	});
	
	(prvSlide=function(){
		gotoslide(current-1);
	});
	
	$('div.scroll .next').click(autoplay=function(){
		gotoslide(current+1);
	});
	
	$('div.scroll .prev').click(function(){
		gotoslide(current-1);
	});
	
	lists.click(function(){
		gotoslide($(this).index());
	});
	
	slides.mouseover(autoPlayStop);
	slides.mouseout(autoPlayStart);
	
})