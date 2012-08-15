<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>slideshow</title>
<link type="text/css" href="reset.css" rel="stylesheet"/>
<link type="text/css" href="slideshow.css" rel="stylesheet" />
<script type="text/javascript" src="slideshow.js"></script>
</head>

<body>
	<div class="container">
    	<div class="slideshow">
        	<div class="train">
				<?php
					$image_path = 'images';
					$images = scandir($image_path);
					$slideLn = 0;
					foreach($images as $img){
						$img_arr = explode('.' ,$img);
						$img_type = strtolower( end($img_arr) );
						if($img_type == 'jpg'){
							echo "<div style=\"background-image:url('$image_path/$img');\"></div>";
							$slideLn++;	
						}
					}
				?>
            </div>
			<div class="previous"></div>
			<div class="next"></div>
           	<ul class="btns">
				<?php
					for($i=0;$i<$slideLn;$i++){
						echo "<li></li>";	
					}
				?>
             </ul>
        </div>
    </div>
</body>
</html>
