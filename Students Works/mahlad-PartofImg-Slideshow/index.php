<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>Part of Image Slideshow</title>
	<link rel="stylesheet" type="text/css" href="../../reset.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script type="text/javascript" src="script/jquery.js"></script>
	<script type="text/javascript" src="script/partofImg.js"></script>
</head>
<body>
	<div class="partSl">
		<div class="imgSl">
			<?php 
				$path='images';
				$img_arr=scandir($path);
				$all_type='jpg,png,gif,jpeg';
				$all_type=explode(',',$all_type);
				foreach ($img_arr as $each_img) {
					$img_type=explode('.',$each_img);
					$end_type=strtolower(end($img_type));
					if(in_array($end_type , $all_type)){

						echo "
							<div>
								<img src='$path/$each_img' alt='$each_img'>
								<span>ice creame</span>
							</div>
							";
					}
				}
			 ?>
			 
			
		</div>
	</div>	
</body>
</html>