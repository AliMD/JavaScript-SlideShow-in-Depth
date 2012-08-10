window.onload= function(){
	var frame= document.getElementsByClassName('frame').item(0);
	var next= frame.getElementsByClassName('next').item(0);
	var prev= frame.getElementsByClassName('prev').item(0);
	var slideshow= document.getElementsByClassName('slideshow').item(0);
	var train= slideshow.getElementsByClassName('train').item(0);
	var list= slideshow.getElementsByClassName('btn').item(0).getElementsByTagName('li');
	var play= false;
	var currentSlide= 0;

	(gotoslide = function (n){
		if (n > list.length-1) n= 0;
		if (n < 0) n= list.length-1;
		train.style.left=(-570*n)+'px';
		list.item(currentSlide).className='';
		list.item(n).className='active';
		currentSlide= n;
	})(0);

	nextslide= next.onclick = function(){
		gotoslide(currentSlide+1);
	}

	prevslide= prev.onclick = function(){
		gotoslide(currentSlide-1);
	}

	(autoPlay= frame.onmouseout = function(){
		if (play) return;
		play= setInterval(nextslide,5000);
	})();

	autoStop= frame.onmouseover = function(){
		clearInterval(play);
		play= false;
	}

	for (var i=0;i<list.length;i++){
		(function(j){
			list.item(j).onclick = function(){
				gotoslide(j);
			}
		})(i)
	}
}
