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
											<li>menu1</li>
											<li>menu2</li>
											<li>menu3</li>
											<li>menu4</li>
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
    <div class="content"></div>
</div>

</body>
</html>