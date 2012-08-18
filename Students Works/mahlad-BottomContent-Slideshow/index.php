<!DOCTYPE>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Bottom Text Slideshow</title>
	<link type="text/css" rel="stylesheet" href="css/reset.css">
	<link type="text/css" rel="stylesheet" href="css/style.css">
	<script type="text/javascript"src="script/jquery.js"></script>
	<script type="text/javascript" src="script/bottom-slide.js"></script>
</head>

<body>
	<div class="sl-btm">
		<div class="sl-btm-img">
			<?php 
				$path='images';
				$arr_imgs=scandir($path);
				foreach ($arr_imgs as $img) {
					$img_typ=explode('.',$img);
					$end_im=strtolower(end($img_typ));
					if($end_im =='jpg')
					echo "<img src='$path/$img' >";
				}
			 ?>
			
		</div>
		<div class="sl-btm-next"></div>
		<div class="sl-btm-prev"></div>
		<div class="sl-btm-text">
			<span>spring flowers</span>
			<span>summer flowers</span>
			<span>sunflowers</span>
			<span>bride flowers</span>
		</div>
	</div>
</body>
</html>
