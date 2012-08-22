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
						echo "<a href='#'><img src='$images_path/$img' width=200 /><div>kknjknxkdsks</div></a>";
				}
			?>
		</div>
	</div>
</body>
</html>