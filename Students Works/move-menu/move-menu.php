<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>MOVE MENU</title>

<link rel="stylesheet" type="text/css" href="../../reset.css" />
<link rel="stylesheet" type="text/css" href="move-menu.css" />
<script type="text/javascript" src="../../zepto.js"></script>
<script type="text/javascript" src="move-menu.js"></script>

</head>

<body>
<header>
</header>
<div class="container">
	<menu class="centermenu">
    	<?php
			$path = '../../images/zohreh-img/img-menu/img';
			$images = scandir($path);
			foreach($images as $img){
				$type = explode('.',$img);
				$type = strtolower(end($type));
				if($type == ('png')){
					echo "<li><img src='$path/$img' /><p>vsagvash</p></li>";
				}
			}
		?>
    </menu>
</div>

</body>
</html>