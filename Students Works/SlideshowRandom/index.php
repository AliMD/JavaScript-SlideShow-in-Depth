<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
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
					
					foreach ($img_arr as $each_img) {
						$img_type=explode('.',$each_img);
						$end_type=strtolower(end($img_type));
						if($end_type=='jpg'){
							echo "<div style=\"background-image:url('$path/$each_img');\">
								<span></span>
							</div>";
						}
					}
			?>
		</div>
	</div><!--container-->
</body>
</html>