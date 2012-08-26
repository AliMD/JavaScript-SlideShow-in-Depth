<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title></title>
	<link rel="stylesheet" href="slide.css">
	<script type="text/javascript" src="../../zepto.js"></script>
	<script type="text/javascript" src="slide.js"></script>
</head>
<body>
	<div class="slideshow">
		<div class="slide">
			<div class="train">
				<?php
					$path = '../../images';
					$images = scandir($path);
					foreach($images as $img){
						$img_arr = explode('.', $img);
						$img_type = strtolower( end($img_arr) );
						if ($img_type=='jpg') {
							echo "<div style=\"background-image:url('$path/$img');\"></div>";
						}
					}
				?>
				<div style="background-image:url('../../images/pic1.jpg')"></div>
			</div>
			<div class="btn">
				<ul>

					<li style="background-image:url('../../images/new-image.jpg')" ></li>
					<li style="background-image:url('../../images/pic1.jpg')" ></li>
					<li style="background-image:url('../../images/pic2.jpg')" ></li>
					<li style="background-image:url('../../images/pic3.jpg')" ></li>
				</ul>
			</div>
		</div>
	</div>
</body>
</html>
