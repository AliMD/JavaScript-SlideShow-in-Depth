function randColor(){
	var c='#';
	for(var i=0;i<6;i++){
		c+=rnd(0,15).toString(16);
	}
	return c;
}
window.onload=function(){
	function randColor(){
		var c='#';
		for(var i=0;i<6;i++){
				c+=rnd(0,15).toString(16);
			}
		return c;
		}
	var slide= document.getElementsByClassName('slide').item(0);
	var btns = slide.getElementsByClassName('btns').item(0).getElementsByTagName('li');
	var train = slide.getElementsByClassName('train').item(0);
	currentSlide = 0;

	(goToSlide = function(n) {
		if(n>btns.length-1) n=0;
		if (n<0) n=btns.length-1;
		train.style.left=(-450*n)+'px';
		btns.item(currentSlide).className = ''
		btns.item(n).className = 'active';
		currentSlide=n;

	})(0)
	nextSlide=function(){
		goToSlide(currentSlide+1)
		document.body.style.backgroundColor = randColor();
	}
	prvSlide=function(){
		goToSlide(currentSlide-1)
		document.body.style.backgroundColor = randColor();
	}
	var autoPlayIv = false;
	(autoPlayStart = slide.onmouseout = function(){
		if(autoPlayIv) return;
		autoPlayIv = setInterval(nextSlide, 3000);
	})(); 

	autoPlayStop = slide.onmouseover = function(){
		clearInterval(autoPlayIv);
		autoPlayIv = false;
	}
	slide.getElementsByClassName('next').item(0).onclick=nextSlide;
	slide.getElementsByClassName('previous').item(0).onclick=prvSlide;
	for (var i = 0; i < btns.length; i++) {
		(function(j){
			btns.item(j).onclick= function(){
				goToSlide(j);
			}
		})(i);
	}

}