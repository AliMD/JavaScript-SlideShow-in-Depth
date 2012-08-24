// JavaScript Document
$(function(){
	var lists = $('div.container .circlemenu li'),
		listp = $('div.container .circlemenu li p'),
		addleft = 300,
		addtop = 0;
		lf = 50,
		tp = 70,
		duration = 200,
		delay = 100,
		counter = 0;
		lists.each(function(){
			var that = $(this);
			setTimeout(function(){
				addtop+=70;
				if(addtop > 140){ 
					addleft = 200;
					counter++;
				}
				if(counter == 1){
					addleft += lf;
				}
				else if(counter  >= 2){
					addtop -= tp;
					lf +=80;
					addleft += lf;
					if(addleft>410){
						lf -=230;
						 addleft -=lf ;
						 tp -=135;
					}
					tp +=45;
				}
				else{
					addleft -= lf;
				}
				that.animate({
					top:addtop,
					left:addleft
				},600);				
			},duration+=delay);
		});
		listp.mouseover(function(){
				$(this).animate({color:'red'});		
		});
		listp.mouseout(function(){
				$(this).animate({color:'black'});		
		});
});