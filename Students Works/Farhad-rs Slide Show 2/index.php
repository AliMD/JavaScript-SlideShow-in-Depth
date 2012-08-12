<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8" />
	<title>Farhad-rs New Design For Slider</title>
	<link type="text/css" rel="stylesheet" href="../../reset.css" />
	<link type="text/css" rel="stylesheet" href="style.css" />
	<script type="text/javascript" src="script.js"></script>
</head>
<body>
	<div class="container">
		<div class="slider">
			<div class="bgslide">
				<div class="slides">
					<?php
						$image_path = "../../images/farhad-image/gallery";
						$image = scandir ($image_path);
						foreach ($image as $pic) {
							$pic_arr = explode ('.',$pic);
							$pic_type = strtolower (end ($pic_arr));	
							if ($pic_type == 'jpg') {
								echo "<div style=\"background-image:url('../../images/farhad-image/gallery/$pic');\"></div>";	
							}
						}
					?>
				</div>
				<div class="back"></div>
				<div class="pause"></div>
				<div class="play"></div>
				<div class="next"></div>
				<ul class="btns">
					<?php
						$image_path = "../../images/farhad-image/gallery/small";
						$image = scandir ($image_path);
						foreach ($image as $picsmall) {
							$picsmall_arr = explode ('.',$picsmall);
							$picsmall_type = strtolower (end ($picsmall_arr));
							if ($picsmall_type == 'jpg') {
								echo "<li style=\"background-image:url('../../images/farhad-image/gallery/small/$picsmall');\"></li>";	
							}
						}
					?>
				</ul>
			</div>
		</div>
	</div>
</body>
</html>