<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Untitled Document</title>

<link type="text/css" rel="stylesheet" href="menu.css" />
<link type="text/css" rel="stylesheet" href="../../reset.css" />

<script type="text/javascript" src="../../zepto.js" ></script>
<script type="text/javascript" src="menu.js" ></script>

</head>

<body>

<div class="container">
  <menu class="circlemenu">
  		<?php
			$path = '../../images/zohreh-img/img-for-menu';
			$images = scandir($path);
			echo "<a href='#' onClick='showmenu'>show menu</a>";
			foreach($images as $img){
				$type = explode('.',$img);
				$type = end($type);
				if($type == strtolower('png')){
					echo "<li><img src='$path/$img' /><p>vsagvash</p></li>";
				}
			}
		?>
  </menu>
</div>

</body>
</html>