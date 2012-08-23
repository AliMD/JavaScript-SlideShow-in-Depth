<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Bottom Text Slideshow</title>
	<link rel="stylesheet" type="text/css" href="../../reset.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script type="text/javascript"src="../../zepto.js"></script>
	<script type="text/javascript" src="script/bottom-slide.js"></script>
</head>

<body>
	<div class="container">
		<div class="sl-btm">
			<div class="sl-btm-img">
				<?php 
					$path='./images';
					$arr_imgs=scandir($path);
					foreach ($arr_imgs as $img) {
						$img_typ=explode('.',$img);
						$end_im=strtolower(end($img_typ));
						if($end_im =='jpg')
						echo "<div><img src='$path/$img' ></div>";
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
	</div>
</body>
</html>
