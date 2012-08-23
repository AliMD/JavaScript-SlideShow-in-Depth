<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8"/>
<title>acc gallery</title>
<link type="text/css" rel="stylesheet" href="../../reset.css"/>
<link type="text/css" rel="stylesheet" href="style.css"/>
<script type="text/javascript" src="../../zepto.js"></script>
<script type="text/javascript" src="javascript.js"></script>
</head>

<body>
	
	<div class="container">
		<div class="logo"></div>
		<div class="slideshow">
			<div class="train">
				<?php
					$images_path = '../../images/shatelgallery';

					$images = scandir($images_path);
					$slidesLen = 0;
					foreach($images as $img){
						$img_arr = explode('.', $img);
						$img_type = strtolower( end($img_arr) );
						if ($img_type=='jpg') {
							echo "<div style=\"background-image:url('$images_path/$img');\"></div>";
							$slidesLen++;
						}
					}
				?>
			</div>
		</div>
	</div>
</body>
</html>
