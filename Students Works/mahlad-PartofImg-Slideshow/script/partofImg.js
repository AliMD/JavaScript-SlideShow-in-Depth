$(function () {
	var slideshow=$("div.partSl"),
		listImg=$("div.partSl div.imgSl div"),
		totalImg=$("div.partSl div.imgSl div").length,
		listSpan=$("div.partSl div.imgSl div span");
	(position=function(m){
		for(var n=1;n<=m;n++)
		{
			if(n==1)
				$("div.partSl div:eq("+n+")").animate({left:'0px'},2000);
			else
			$("div.partSl div:eq("+n+")").animate({left:((n-1)*60)+440+'px'},2000);

		}
	})(totalImg);
	listSpan.last().css({'padding-right':'200px'});

	listImg.click(function(){
		var ind=$("div.partSl div.imgSl div").index(this);
		//alert(listImg.index());
		for(var i=0;i<ind;i++){
			$("div.partSl div.imgSl div:eq("+i+")").animate({left:60*i+'px'},1000);

		}
		$(this).animate({left:60*ind+'px'},1000);
		for(var j=ind+1;j<totalImg;j++){
			$("div.partSl div.imgSl div:eq("+j+")").stop();
			$("div.partSl div.imgSl div:eq("+j+")").animate({left:(60*j)+440+'px'},1000);

		}
	});
	
	
});