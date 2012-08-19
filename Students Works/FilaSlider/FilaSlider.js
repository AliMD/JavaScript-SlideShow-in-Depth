
window.onload = function(){

	var slideshow = document.getElementsByClassName('slideshow').item(0);
	var case_train = slideshow.getElementsByClassName('case-train').item(0);
	var train = case_train.getElementsByClassName('train').item(0);
	var img = train.getElementsByClassName('img');
	
	var pre = slideshow.getElementsByClassName('pre').item(0); 
	var next = slideshow.getElementsByClassName('next').item(0); 
	var currentslide = 0;
	
	slider = function(n){
		if(n>(img.length-3)) n=0;
		if(n<0) n = (img.length-3);
		train.style.left = -(n*233) + 'px';
		currentslide = n;
	}
	
	nextslide = function(){
		slider(currentslide+1);
	}
	
	preslide = function(){
		slider(currentslide-1);
	}
	
	var intervalName = false;
	(startSliding = function(){
		if(intervalName) return; 
		intervalName = setInterval(nextslide,3000);
	})();
	
	stopSliding = function(){
		if(!intervalName) return;
		clearInterval(intervalName);
		intervalName = false;
	}
	
	next.onclick = nextslide;
	pre.onclick = preslide;
	
	slideshow.onmouseover = stopSliding;
	slideshow.onmouseout = startSliding;
	
	slider(0);
	
}