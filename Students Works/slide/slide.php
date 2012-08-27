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
</div>
   	



</body>
</html>
