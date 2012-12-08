<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>MENU SLIDE </title>

<link type="text/css" rel="stylesheet" href="menuslide.css" />
<link type="text/css" rel="stylesheet" href="../../reset.css" />

<script type="text/javascript" src="../../zepto.js" ></script>
<script type="text/javascript" src="menuslide.js" ></script>

</head>

<body style="background-color:#E6ECF3">

<div class="container">
   	<div class="slide">
        <div class="scroll">
            <div class="train">
            	<?php
					$path = '../../images/zohreh-img/menu-slide/img';
					$images = scandir($path);
					foreach($images as $img){
						$type = explode('.',$img);
						$type = strtolower(end($type));
						if($type == 'png'){
							echo "<div>
									<img src='$path/$img' />
									<br/>
									<span>WEB</span>
									<div class='menu'>
										<ul>
											<li>Menu1</li>
											<li>Menu2</li>
											<li>Menu3</li>
											<li>Menu4</li>
										</ul>
									</div>
								</div>";
						}	
					}
				?>
	        </div>
        </div>
	</div>
    <div class="null"></div>
    <div class="content">
    	<div class="left">
	  		 <h1 class="size">	javaScript Slick Menu</h1>

				<h2 class="font">Main Features:</h2>
					- Nice, customizable animation<br />
- Trivial implementation to your website<br />
- Fully W3C compliant (XHTML 1.0 strict!)<br />
- Works fine on mobile devices (iPhone, iPad tested)<br />
- Touch screens compatible<br />
- Lots of configuration options<br />
- Preserves state in navigation<br />
- Good default configuration<br />
- You can control it programisticaly!<br />
</div>
<div class="right">
<h1 class="size">Easy integration:</h1>
It's enough to use this JS code:<br />


<span style="background-color:#999">$("#menuContainer").slickMenu();</span><br />
			
<h2 class="font">Factsheet:</h2>
- Created as a javaScript<br />
- Based on javaScript 1.7.2 and javaScript UI 1.8.18<br />
- XHTML 1.0 strict, CSS 2<br />
- Uses Google Font API for nice fonts (not required)<br />
- Plugin itself is 4 kB uncompressed and 2 kB compressed<br />
</div>
    </div>
</div>

</body>
</html>