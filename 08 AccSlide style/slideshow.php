<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-US">
<head>
	<meta charset="UTF-8" />
	<title>08 AccSlide style - Ali.MD JavaScript SlideShow in Depth</title>
	<link rel="stylesheet" type="text/css" href="../reset.css" />
	<link rel="stylesheet" type="text/css" href="slideshow.css" />
	<script type="text/javascript" src="slideshow.js" ></script>
</head>
<body>
	<div class="container">
		<div class="slideshow">
			<?php
				$images_path = '../images';

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
</body>
</html>