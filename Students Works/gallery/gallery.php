<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8" />
<title>My Gallery</title>
<link rel="stylesheet" type="text/css" href="reset.css" />
<link rel="stylesheet" type="text/css" href="gallery.css" />
<script type="text/javascript" src="zepto.js"></script>
<script type="text/javascript" src="gallery.js"></script>
</head>

<body>

<div class="container">
	<div class="gallery">
    	<?php
			$image = './images';
			$img = scandir($image);
			foreach($img as $pic){
				$exp = explode('.',$pic);
				$type = end($exp);
				if ($type == 'jpg'){
					echo "<a href='$image/$pic'><img src='$image/small/$pic' /></a>";
				}
			}
		?>
    </div>
</div>

</body>
</html>