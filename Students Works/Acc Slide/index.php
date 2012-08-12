<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>Acc Slides</title>
	<link rel="stylesheet" type="text/css" href="../../../reset.css" />
	<link rel="stylesheet" type="text/css" href="accslide.css" />
	<script type="text/javascript" src="../../../zepto.js"></script>
	<script type="text/javascript" src="Accslide.js"></script>
</head>
<body>
	<div class="container">
		<div class="slideshow">
			<div class="train">
				<?php
					$path= '../images/';
					$files= scandir($path);
					foreach ($files as $file) {
						$exp= explode('.',$file);
						$type= end($exp);
						if ($type == 'jpg'){
							echo "<div style=\"background-image:url('$path/$file');\"></div>";
						}
					}
				?>
			</div>
		</div>
	</div>
</body>
</html>