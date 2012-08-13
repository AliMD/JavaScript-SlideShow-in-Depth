<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title></title>
	<link rel="stylesheet" type="text/css" href="slide.css" />
	<script type="text/javascript" src="slide.js" ></script>
</head>
<body>
	<div class="container">
		<div class="slide">
			<div class="train">
				<?php
					$images_path = './images';

					$images = scandir($images_path);
					$slidesLen = 0;
					foreach($images as $img){
						$img_arr = explode('.', $img);
						$img_type = strtolower( end($img_arr) ); // JPG => jpg
						if ($img_type=='jpg') {
							echo "<div style=\"background-image:url('$images_path/$img');\"></div>";
							$slidesLen++;
						}
					}
				?>
			</div>
			<div class="previous"></div>
			<div class="next"></div>
			<ul class="btns">
				<?php
					for($i=0;$i<$slidesLen;$i++){
						echo "<li></li>";
					}
				?>
			</ul>
		</div>
	</div>
</body>
</html>