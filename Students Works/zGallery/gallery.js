Math.rnd = Math.random;
Math.random=function(a,b){
	if(!a && !b) return Math.rnd();
	return Math.floor(Math.rnd()*(b-a+1))+a;
}

$(function(){
	var pics = $('div.gallery a'),
		due = 250,
		delay = 100;
		pics.each(function() {
			var that = $(this);
			setTimeout(function(){
  				that.animate({
					left:Math.random(0,500),
					top:Math.random(0,400),
					rotate:Math.random(-40,40)+'deg'
				},due);   
			},delay+=due);
        });
	/*		
		pics.mouseover(function(){
			alert(1);
			//pics.css({'left':'150'});
			//$(this).css({'z-index':'1'});

		});
/*		pics.click(function(){
			$(this).animate(function(){
				rotate:'120deg';
			},due);
		});*/
})
