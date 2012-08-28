<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8" />
<title>Slide</title>
<link rel="stylesheet" type="text/css" href="../../reset.css" />
<link rel="stylesheet" type="text/css" href="style.css" />
<script type="text/javascript" src="../../zepto.js"></script>
<script type="text/javascript" src="script.js"></script>
</head>
<body>

<div class="container">
<!-- ----------------- Menu --------------------------- -->
    <nav class="right-menu">
        <menu>
            <li><a href='#'><img src="../../images/soodmand-img/slide/twitter.png" /><div class="txt">twitter</div></a></li>
            <li><a href='#'><img src="../../images/soodmand-img/slide/google-plus.png" /><div class="txt">google+</div></a></li>
            <li><a href='#'><img src="../../images/soodmand-img/slide/skype.png" /><div class="txt">skype</div></a></li>
            <li><a href='#'><img src="../../images/soodmand-img/slide/rss.png" /><div class="txt">rss</div></a></li>
            <li><a href='#'><img src="../../images/soodmand-img/slide/facebook.png" /><div class="txt">facebook</div></a></li>
        </menu> 
    </nav>
<!-- ----------------- slide --------------------------- -->
	<div class="slide"> 
    	<div class="train">
            <?php
                    $path="../../images/soodmand-img/slide";
                    $scan=scandir($path);
                    foreach($scan as $img){
                        $exp=explode('.',$img);
                        $type=end($exp);
                        if($type=='jpg'){
                            echo "<div style=\"background-image:url('$path/$img');\"></div>";
                        }
                    }
                ?>
        </div>
        <div class="prv"></div>
        <div class="next"></div>
        <ul class="button">
      	<?php
			$image = '../../images/soodmand-img/slide/button';
			$img = scandir($image);
			foreach($img as $pic){
				$exp = explode('.',$pic);
				$type = end($exp);
				if ($type == 'png'){
					echo "<li><img src='$image/$pic' /></li>";
				}
			}
		?> 
		</ul>
    </div>
<!-- ----------------- Gallery Link --------------------------- -->
	<ul class="gallery-link">
    	<li><a href="gallery/gallery.php" target="_blank">Gallery Link</a></li>
    </ul>
    
</div>

</body>
</html>
