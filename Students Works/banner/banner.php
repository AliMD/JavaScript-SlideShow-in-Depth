<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8" />
	<link rel="stylesheet" href="../../reset.css" />
	<link rel="stylesheet" href="style.css" />
	<script type="text/javascript" scr="../../zepto.js"></script>
	<script type="text/javascript" src="banner.js" ></script>
	<title></title>
</head>
<body>
	<div class="container">
		<div class="slideshow">
			<div class="train">
				<?php
					$img_path='/images';
					$img_length=0;
					$images=scandir($img_path);
					foreach ($images as $img) {
						$img_arr=explode('.', $img);
						$img_type=strtolower($img_arr);// uppercase to lowercase
						if($img_type==jpg){
							echo "<div style=\"background-image:url('$img_path/$img');\"></div>";
							$img_length++;
						}

					}
				?>
			</div>
			<div class="next" onclick="nextSlide();"></div>
			<div class="previous" onclick="preSlide();"></div>
			<ul class="btns">
				<?php
					for($i=0;$i<$img_length;$i++){
						echo "<li></li>";
					}
				?>
			</ul>
		</div>
	</div>
</body>
</html>