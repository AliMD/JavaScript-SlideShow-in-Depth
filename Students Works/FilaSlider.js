
window.onload = function(){

	var slideshow = document.getElementsByClassName('slideshow').item(0);
	var train = slideshow.getElementsByClassName('case-train').item(0).getElementsByClassName('train').item(0);
	var img = train.getElementsByTagName('div'); 
	
	var pre = slideshow.getElementsByClassName('pre').item(0); 
	var next = slideshow.getElementsByClassName('next').item(0); 
	var currentslide = 0;
	
	slider = function(n){
		if(n>(img.length-1)) n=0;
		if(n<0) n = (img.length-1);
		train.style.left = -(n*230) + 'px';
		currentslide = n;
		//alert();
	}
	
	nextslide = function(){
		slider(currentslide+1);
	}
	
	preslide = function(){
		slider(currentslide-1);
	}
	
	next.onclick = nextslide;
	pre.onclick = preslide;
	
	slider(0);
	
}