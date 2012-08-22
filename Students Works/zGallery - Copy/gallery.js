Math.rnd = Math.random;
Math.random=function(a,b){
	if(!a && !b) return Math.rnd();
	return Math.floor(Math.rnd()*(b-a+1))+a;
}

$(function(){
	var pics = $('div.gallery div.bg-div'),
		due = 250,
		delay = 100,
		wd = -270,
		hg=50;
		pics.each(function() {
			var that = $(this);
			setTimeout(function(){
				wd+=270;
				if(wd>600){
					hg += 200;
					wd = 0;
				}
  				that.animate({
					left:wd,					
					top:hg,
				//	opacity:1,
				},due);   
	
			},delay+=due);
        });
})
