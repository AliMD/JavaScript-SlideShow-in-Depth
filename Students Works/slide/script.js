// JavaScript Document

$(function(){
	
	var slide = $('div.slide'),
		train = $('div.slide div.train'),
		btn = $('div.slide ul.button li'),
		prv = $('div.slide div.prv'),
		next = $('div.slide div.next'),
		intervalAuto = false;
		current = 0;
	
	goToPic = function(n){
		if(n > btn.length-1) n=0;
		if(n < 0) n = btn.length-1;
		train.animate({
			left:(-1000*n)	
		},800,'ease-in');
		btn.eq(current).removeClass('active');
		btn.eq(n).addClass('active'	);
		current = n;
	}
	
	btn.click(function(){
		goToPic($(this).index());	
	});
	
	prv.click(prev = function(){
		goToPic(current-1);
	});
	
	next.click(nextpic = function(){
		goToPic(current+1);
	});	
	
	(startAuto = function(){
		if(intervalAuto){
			return;
		}
		intervalAuto = setInterval(nextpic,2000);	
	})();
	
	stopAuto = function(){
		clearInterval(intervalAuto);
		intervalAuto = false;
	}
	
	slide.mouseover(stopAuto);
	slide.mouseout(startAuto);
	
// -------------- java menu  ----------------
	var list = $('nav.right-menu li');
		txt = $('nav.right-menu a div.txt');
		img = $('nav.right-menu a img');
		du = 400;
		delay = 100;

	list.each(function(){
		var that = $('this');
		setTimeout(function(){
			that.animate({
				left:'-70'
			},du);
		},delay += du);
	});

	list.mouseover(function(){
		$(this).animate({left:'70px',
		},500);
	});
	
	list.mouseout(function(){
		$(this).animate({left:'0px'},500);
	});
	
	txt.mouseover(function(){
		$(this).animate({fontSize:'13px',
		},500);
	});
	
	txt.mouseout(function(){
		$(this).animate({fontSize:'12px',
		},500);
	});
	
	img.mouseover(function(){
		$(this).animate({rotate:'360'+'deg',
		},500);
	});
	
	img.mouseout(function(){
		$(this).animate({rotate:'-360'+'deg',
		},500);
	});	
})
