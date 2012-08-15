window.onload=function(){
	var slideshow = document.getElementsByClassName('slideshow').item(0);
	var lists = slideshow.getElementsByClassName('btns').item(0).getElementsByTagName('li');
	for (var i=0; i<lists.length; i++) {
		lists.item(i).onclick=function(){
			alert(i);
		}
	}
}