
window.onload = function(){

	var slideshow = document.getElementsByClassName('slideshow').item(0);
	var train = slideshow.getElementsByClassName('case-train').item(0).getElementsByClassName('train').item(0);
	var img = train.getElementsByClassName('img');
	//var info = img.getElementsByClassName('info');
	
	var pre = slideshow.getElementsByClassName('pre').item(0); 
	var next = slideshow.getElementsByClassName('next').item(0); 
	var currentslide = 0;
	
	slider = function(n){
		if(n>(img.length-1)) n=0;
		if(n<0) n = (img.length-2);
		train.style.left = -(n*230) + 'px';
		currentslide = n;
	}
	
	show_info = function(s){
		img.item(s).getElementsByClassName('info').item(0).style.bottom = 0 + 'px';
		img.item(s).getElementsByClassName('info').item(0).style.WebkitTransition = "all 400ms";
	}
	
	hide_info = function(s){
		img.item(s).getElementsByClassName('info').item(0).style.bottom = -80 + 'px';
		img.item(s).getElementsByClassName('info').item(0).style.WebkitTransition = "all 1000ms";
	}
	
	nextslide = function(){
		slider(currentslide+1);
	}
	
	preslide = function(){
		slider(currentslide-1);
	}
	
	for(var i=0; i<9 ; i++){
		(function(j){
			img.item(j).onmouseover = function(){
				show_info(j);	
			}
		})(i);
		
		(function(j){
			img.item(j).onmouseout = function(){
				hide_info(j);	
			}
		})(i);
	}
	
	next.onclick = nextslide;
	pre.onclick = preslide;
	
	slider(0);
	
}