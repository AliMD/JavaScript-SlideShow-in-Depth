<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>Js SlideShow Tow</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/reset.css">
	<script type="text/javascript" src="../../zepto.js" ></script>
	<script type="text/javascript" src="script/SlideTow.js"></script>
</head>
<body>

	<div class="container">
		<div class="slTow">
			<?php
				$path='./images';
				$img_arr=scandir($path);
				$img_inc='jpg,png,gif,jpeg';
				$img_inc=explode(',',$img_inc);
				foreach ($img_arr as $value) {
					$val=explode('.',$value);
					$endF=strtolower(end($val));
					if(in_array($endF, $img_inc)){
						echo "<a href='$path/$value'><img src='$path/small/$value' alt='randomSlideshow'></a>";
						}
				}

			?>
			
			</div>
	</div><!--container-->
</body>
</html>