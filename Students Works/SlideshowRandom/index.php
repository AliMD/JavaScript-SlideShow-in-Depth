<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8"/>
	<title>Js SlideShow Random</title>
	<link rel="stylesheet" type="text/css" href="../../reset.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script type="text/javascript" src="../../zepto.js" ></script>
	<script type="text/javascript" src="script/SlideTow.js"></script>
</head>
<body>
	<div class="container">
		<div class="slRnd">
			<?php
				$path='../../images/SlideshowRandom';
				$img_arr=scandir($path);
				$img_inc='jpg,jpeg';
				$img_inc=explode(',',$img_inc);
				foreach ($img_arr as $value) {
					$val=explode('.',$value);
					$endF=strtolower(end($val));
					if(in_array($endF, $img_inc)){
						echo "<div class='imgS'><a href='$path/$value' title='Baby Album'><img src='$path/small/$value'></a></div>";
						
						}
				}
			?>
		</div>
	</div><!--container-->
</body>
</html>