<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<link type="text/css" rel="stylesheet" href="slide.css" />

<script type="text/javascript" src="zepto.js"  ></script>
<script type="text/javascript" src="slidewithzepto.js"></script>

</head>

<body>

<div class="slide">
	<div class="scroll">
		<div class="train">
			<?php
				$path = '../images/newgallery/';
				$files=scandir($path);
				foreach($files as $file){
					$type = explode('.',$file);
					$type = end($type);
					if($type == 'png'){
						echo "<div style=\"background-image:url('$path/$file');\"></div>";
					}
				}
			?>
		</div>
      <div class="bt"></div>
	</div>
</div>

</body>
</html>