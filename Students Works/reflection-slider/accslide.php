<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>____REFLECTION____</title>
<link type="text/css" rel="stylesheet" href="../../reset.css" />
<link type="text/css" rel="stylesheet" href="accslide.css" />
<script type="text/javascript" src="../../zepto.js"></script>
<script type="text/javascript" src="accslide.js"></script>
</head>
<body>
<div class="container">
	<div class="slider">
	<br />
		<div class="scroll">
			<?php
				$images_path = '../../images/reflection-slider';		
				$images = scandir($images_path);
				foreach($images as $img){
					$img_arr = explode('.', $img);
					$img_type = strtolower( end($img_arr) );
					if ($img_type=='jpg') {
						echo "<div><img src='$images_path/$img' width='450' height='300'></div>";
					}
				}
			?>
		</div>
	</div>
</div>
</body>
</html>