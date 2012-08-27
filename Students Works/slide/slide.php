<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8" />
<title>Slide</title>
<link rel="stylesheet" type="text/css" href="reset.css" />
<link rel="stylesheet" type="text/css" href="style.css" />
<script type="text/javascript" src="zepto.js"></script>
<script type="text/javascript" src="script.js"></script>



</head>

<body>

<div class="container">
<!-- ----------------- Menu --------------------------- -->
    <nav class="right-menu">
        <menu>
            <li><a href='#'><img src="images/twitter.png" /><div class="txt">twitter</div></a></li>
            <li><a href='#'><img src="images/google-plus.png" /><div class="txt">google+</div></a></li>
            <li><a href='#'><img src="images/skype.png" /><div class="txt">skype</div></a></li>
            <li><a href='#'><img src="images/rss.png" /><div class="txt">rss</div></a></li>
            <li><a href='#'><img src="images/facebook.png" /><div class="txt">facebook</div></a></li>
        </menu> 
    </nav>
<!-- ----------------- slide --------------------------- -->
	<div class="slide"> 
    	<div class="train">
            <?php
                    $path="images";
                    $lenpic=0;
                    $scan=scandir($path);
                    foreach($scan as $img){
                        $exp=explode('.',$img);
                        $type=end($exp);
                        if($type=='jpg'){
                            echo "<div style=\"background-image:url('$path/$img');\"></div>";
                            $lenpic++;
                        }
                    }
                ?>
        </div>
        <div class="prv"></div>
        <div class="next"></div>
        <ul class="button">
          	<li><img src="images/tn-model1.png" alt="Model 1" /></li>
            <li><img src="images/tn-model2.png" alt="Model 2" /></li>
            <li><img src="images/tn-model3.png" alt="Model 3" /></li>
		</ul>
    </div>
<!-- ----------------- Gallery Link --------------------------- -->
	<ul class="gallery-link">
    	<li><a href="gallery/gallery.php" target="_blank">Gallery Link</a></li>
    </ul>
    
</div>
   	



</body>
</html>
