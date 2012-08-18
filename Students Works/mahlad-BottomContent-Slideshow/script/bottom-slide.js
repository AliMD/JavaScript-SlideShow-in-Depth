// Bottom Text Slideshow JavaScript
/*$(function(){	
	var slideshow=$('div.sl-btm'),
		slImg=$('div.sl-btm-img'),
		slNext=$('div.sl-btm div.sl-btm-next'),
		slPrev=$('div.sl-btm div.sl-btm-prev'),
		slText=$('div.sl-btm-text'),
		totalImg=$('div.sl-btm-img img').length,
		curentSlide=0;
	//alert((-600*curentSlide)+'px');
	go2slide=function(n){
		if(n>totalImg-1)n=0;
		else
		if(n<0)n=totalImg-1;
		slImg.css('left',-600*n+'px');
		slText.css('left',-600*n+'px');
		curentSlide=n;
		//alert(curentSlide);

	};
	nextSlide=function(){
		go2slide(curentSlide+1);
	};
	prevSlide=function(){
		go2slide(curentSlide-1);
	};
	var timer=false;
	slideshow.mouseout(function(){
		timer=setInterval(nextSlide,3000);
		slNext.css('display','none');
		slPrev.css('display','none');
		if(timer)return;

	});
	slideshow.mouseover(function(){
		clearInterval(timer);
		timer=false;
		slNext.css('display','block');
		slPrev.css('display','block');
	});
	slNext.click(function(){
		nextSlide();
	});
	slPrev.click(function(){
		prevSlide();
	});
});*/
window.onload=function(){
	var slideshow=document.getElementsByClassName('sl-btm').item(0),
		listImg=slideshow.getElementsByClassName('sl-btm-img').item(0),
		listText=slideshow.getElementsByClassName('sl-btm-text').item(0),
		totalImg=slideshow.getElementsByClassName('sl-btm-img').item(0).getElementsByTagName('img')
		curentSlide=0;
		go2slide=function(n){
			if(n>totalImg.length-1)n=0;
			if(n<0)n=totalImg.length-1;
			listImg.style.left=(-600*n)+'px';
			listText.style.left=(-600*n)+'px';
			curentSlide=n;
		}
		nextSlide=function(){
			go2slide(curentSlide+1);	
		}
		prevSlide=function(){
			go2slide(curentSlide-1);
		}
		var flag=false;
		(startAuto=slideshow.onmouseout=function(){
			flag=setInterval(nextSlide,2000);
			document.getElementsByClassName('sl-btm-next').item(0).style.display='none';
			document.getElementsByClassName('sl-btm-prev').item(0).style.display='none';
			if(flag)return;	
			
		})();
		stopAuto=slideshow.onmouseover=function(){
			clearInterval(flag);
			flag=false;	
			document.getElementsByClassName('sl-btm-next').item(0).style.display='block';
			document.getElementsByClassName('sl-btm-prev').item(0).style.display='block';
		}
		document.getElementsByClassName('sl-btm-next').item(0).onclick=nextSlide;
		document.getElementsByClassName('sl-btm-prev').item(0).onclick=prevSlide;
			
}