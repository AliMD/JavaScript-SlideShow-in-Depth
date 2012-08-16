<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>Js SlideShow Tow</title>
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/reset.css">
	
	<script src="js/zepto.js"></script>
	<script src="js/SlideTow.js" type="text/javascript" charset="utf-8" async defer></script>
</head>
<body>

	<div class="container">
		
		<div class="slTow">
			<?php
				$counter=0;
				$path='images';
				$img_arr=scandir($path);
				$img_inc='jpg,png,gif,jpeg';
				$img_inc=explode(',',$img_inc);
				foreach ($img_arr as $value) {
					$val=explode('.',$value);
					$endF=end($val);
					if(in_array($endF, $img_inc)){
						
						$img_name='image-'.$counter.'.'.$endF;
						//echo $img_name;
						echo "<a href='$path/$img_name'><img src='$path/small/$img_name'></a>";
						$counter++;//echo $counter;
						}
				}

			?>
			
			</div>
	</div><!--container-->
</body>
</html>