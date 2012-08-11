window.onload=function(){
	var slideshow = document.getElementsByClassName('slideshow').item(0);

	var train = slideshow.getElementsByClassName('train').item(0);
	var lists = document.getElementsByClassName('btns').item(0).getElementsByTagName('li');
	var currentSlide = 0;
	(go2slide = function (n) {
		if(n>lists.length-1)n=0;
		if(n<0)n=lists.length-1;
		train.style.marginLeft=(-1140*n)+'px';
		lists.item(currentSlide).className='';
		lists.item(n).className='active';
		currentSlide=n;
	})(0);
	nextSlide = function(){
		go2slide(currentSlide+1);	
	}
	prvSlide = function(){
		go2slide(currentSlide-1);	
	}
	var autoPlayIv = false;
	(autoPlayStart = slideshow.onmouseout = function(){
		if(autoPlayIv) return ;
		autoPlayIv = setInterval(nextSlide,5000);
	})();
	autoPlayStop =slideshow.onmouseover = function(){
		clearInterval(autoPlayIv);
		autoPlayIv = false;
	}
	slideshow.getElementsByClassName('previous').item(0).onclick=prvSlide;
	slideshow.getElementsByClassName('next').item(0).onclick=nextSlide;
	for (var i=0; i<lists.length; i++) {
		(function(j){
			lists.item(j).onclick=function(){
				go2slide(j);
			}
		})(i);
	}
}