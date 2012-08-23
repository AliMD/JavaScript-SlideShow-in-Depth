<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="../../reset.css" />
	<link rel="stylesheet" type="text/css" href="slideshow.css" />
	<script type="text/javascript" src="slideshow.js"></script>
	<title>Slide Show</title>
</head>
<body>
	<div class="container">
		<div class="frame">
			<div class="prev"></div>
			<div class="next"></div>
			<div class="new"></div>
			<div class="bgloader"></div>
			<div class="slideshow">
				<div class="train">
					<?php
						$path= '../../images/moji-images';
						$files= scandir($path);
						$len= 0;
						foreach ($files as $file) {
							$exp= explode('.',$file);
							$type= end($exp);
							if ($type == 'jpg'){
								echo "<div style=\"background-image:url('$path/$file');\"></div>";
								$len++;
							}
						}
					?>
				</div>
				<ul class="btn">
					<?php
						for ($i=0; $i < $len; $i++){
							echo "<li></li>";
						}
					?>
				</ul>
			</div>
		</div>
	</div>
</body>
</html>