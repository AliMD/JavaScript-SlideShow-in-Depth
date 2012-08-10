window.onload=function(){
	var slideshow = document.getElementsByClassName('slideshow').item(0);
	var train = slideshow.getElementsByClassName('train').item(0);
	var list = slideshow.getElementsByClassName('button').item(0).getElementsByTagName('li');
	var current = 0;

	(goToPic = function (n) {
		if(n >list.length-1) n=0;
		if(n<0) n=list.length-1;
		train.style.left=(-600*n)+'px';
		list.item(current).className = '';
		list.item(n).className = 'active';
		current = n;
	})(0);
	
	nextpic = function(){
		goToPic(current+1);
	}
	
	prvpic = function(){
		goToPic(current-1);
	}

	var intervalAuto = false;
	(startAuto = slideshow.onmouseout = function(){
		if(intervalAuto) return;
		intervalAuto = setInterval(nextpic,2000);
	})();

	stopAuto = slideshow.onmouseover = function(){
		clearInterval(intervalAuto);
		intervalAuto = false;
	}
	
	slideshow.getElementsByClassName('next').item(0).onclick=nextpic;
	slideshow.getElementsByClassName('prv').item(0).onclick=prvpic;
	
	for(var i=0;i<list.length;i++){
		(function(j){
			list.item(j).onclick=function(){
				goToPic(j);	
			}	
		})(i);
	}
}