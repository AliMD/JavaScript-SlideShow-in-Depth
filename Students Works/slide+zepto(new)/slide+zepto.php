<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<link type="text/css" rel="stylesheet" href="slide.css" />
<link type="text/css" rel="stylesheet" href="../../reset.css" />
<!--[if IE]>
		<script type="text/javascript" src="../../html5.js"></script>
	<![endif]-->

<script type="text/javascript" src="../../zepto.js" ></script>
<script type="text/javascript" src="slide.js" ></script>

</head>

<body style="background-color:#555;">

<div class="container">
    <div class="slide">
		<div class="scroll">
			<div class="train">
				<?php
					$path = '../../images/zohreh-img/slidezepto(new)';
					$files = scandir($path);
					$pathpic = '../../images/zohreh-img/slidezepto(new)/pics';
					$pics = scandir($pathpic);
					$len = 0;
					$i = 2;
					foreach($files as $file){
						$type = explode('.',$file);
						$type = end($type);
						if($type == strtolower( 'jpg')){
							echo "<div ><img src='$path/$file' />";
							echo "<div ><img src='$pathpic/$pics[$i]' /></div>";
							echo '</div>';
							$len++;
							$i++;
						}
					}
				?>
			</div>
			
			<ul class="btn">
				<?php
					for($i = 0; $i<$len; $i++){
						echo "<li></li>";
					}
				?>
			</ul>
            <div class="bg-button"></div>
		</div>
        <div class="next"></div>
		<div class="prev"></div>
        
	</div>
</div>

</body>
</html>