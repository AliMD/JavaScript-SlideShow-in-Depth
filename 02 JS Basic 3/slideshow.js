window.onload=function(){
	var slideshow = document.getElementsByClassName('slideshow').item(0);
	var lists = slideshow.getElementsByClassName('btns').item(0).getElementsByTagName('li');
	for (var i=0; i<lists.length; i++) {
		(function(j){
			lists.item(j).onclick=function(){
				alert(j);
			}
		})(i);
	}
}