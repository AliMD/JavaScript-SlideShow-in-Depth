<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="style.css" />
<script type="text/javascript" src="scripts.js"></script>
<title>Farhad Slide</title>
</head>
<body>
<div class="continer">
	<h1>Farhad Slide</h1>
	<div class="slider">
		<div class="bgslide">
			<div class="slides">
				<?php
					$image_path = 'image/gallery';
					$image = scandir($image_path);
					$pic_len = 0;
					foreach ($image as $pic) {
						$pic_arr = explode('.',$pic);
						$pic_type = strtolower(end($pic_arr));
						if ($pic_type == 'jpg') {
							echo "<div style=\"background-image:url('image/gallery/$pic');\"></div>";	
							$pic_len ++;
						}
					}
				?>
			</div>
			<div class="back"></div>
			<div class="next"></div>
			<ul class="btns">
				<?php
					for ($i=0;$i<$pic_len;$i++) {
						echo "<li></li>";	
					}
				?>
			</ul>
		</div>
	</div>
</div>
</body>
</html>