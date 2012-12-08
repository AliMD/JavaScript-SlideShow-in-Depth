Math.rnd = Math.random;
Math.random=function(a,b){
	if(!a && !b) return Math.rnd();
	return Math.floor(Math.rnd()*(b-a+1))+a;
}

$(function(){
	var pics = $('div.gallery div.bg-div'),
		due = 200,
		delay = 70,
		wd = -160,
		hg=50,
		topimg=0,
		leftimg=0;
		
		pics.each(function() {
			var that = $(this);
			setTimeout(function(){
				wd+=150;
				if(wd>600){
					hg += 200;
					wd = 0;
				}
  				that.animate({
					left:wd,					
					top:hg,
					rotate:Math.random(10,-10)+'deg',
				},due);   
	
			},delay+=due);
        });
		
		pics.mouseover(function(){
			pics.css({opacity:0.5},400);
			$(this).animate({
				opacity:1,
				'z-index':'2',
				rotate:'360deg',
				scale:3,
				},400);
		});
		
		pics.mouseout(function(){
			$(this).animate({
				'z-index':'1',
				rotate:Math.random(10,-10)+'deg',
				scale:1,
			},200);
			pics.css({opacity:1},400);
		});
})
