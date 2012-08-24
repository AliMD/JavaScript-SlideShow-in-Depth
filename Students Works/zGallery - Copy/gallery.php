<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8" />
	<title>Gallery</title>
	<link rel="stylesheet" type="text/css" href="../../reset.css" />
	<link rel="stylesheet" type="text/css" href="gallery.css" />
	<script type="text/javascript" src="../../zepto.js"></script>
	<script type="text/javascript" src="gallery.js"></script>
</head>
<body>
	<div class="container">
		<div class="gallery">
			<?php
				$images_path = "../../images/zohreh-img/zgallery";

				$images = scandir($images_path);
				foreach ($images as $img) {
					$exp = explode('.', $img);
					$img_type = strtolower(end($exp));
					if($img_type == 'jpg')
						echo "<div class='bg-div' style='background-image:url($images_path/$img);'>
								<div class='text'>sdn jksdkcnbsjcns</div>
							</div>";
				}
			?>
		</div>
	</div>
</body>
</html>