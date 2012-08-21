<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
	<link rel="stylesheet" type="text/css" href="../reset.css" />
	<link rel="stylesheet" type="text/css" href="slide.css" />
	<script type="text/javascript" src="../zepto.js"></script>
	<script type="text/javascript" src="slide.js" ></script>
</head>
<body>
	<div class="container">
    	<div class="slide">
        	<div class="train">
            	<?php
					
                	$pics=scandir('./images');
                    $len=0;
                    foreach($pics as $pic){
                    	$pic_array = explode('.' , $pic);
                        $pic_type = strtolower( end($pic_array) );
                        if ($pic_type=='jpg'){
                        	echo "<div style=\"background-image:url('./images/$pic');\"></div>";
                            $len++;
                        }
                    }
                ?>
            </div>
        </div>
    </div>
</body>
</html>