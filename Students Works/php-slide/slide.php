<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8" />
<title>Somaye Slide Show</title>
<link rel="stylesheet" type="text/css" href="../../reset.css" />
<link rel="stylesheet" type="text/css" href="style.css" />
<script type="text/javascript" src="../../zepto.js"></script>
<script type="text/javascript" src="script.js"></script>
</head>

<body  class="back-image">
<div class="container">
	<div class="backSlide">
        <div class="slide">
            <div class="train">
                <?php
                    $path="../../images/soodmand-img";
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
            <div class="ribbon"></div>
            <div class="prv"></div>
            <div class="next"></div>
            <ul class="button">
                <?php
                    for($i=0;$i<$lenpic;$i++){
                        echo "<li></li>";		
                    }
                ?>
            </ul>
        </div>
    </div>
</div>
</body>
</html>