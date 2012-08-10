<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title></title>
	<link rel="stylesheet" type="text/css" href="css-slide.css">
    <link rel="stylesheet" type="text/css" href="reset.css">
	<script type="text/javascript" src="js-slide.js"></script>
</head>
<body class="back-image">
	<div class="container">
    	<div class="backSlide">
            <div class="slideshow">
                <div class="train">
                    
                    <?php
                    	$scan_image = scandir("./images/");
						$length=0;
                        foreach($scan_image as $scan_image ){
							$image = explode('.',$scan_image);
                        	$type = end($image);
                            if($type == 'jpg'){
                            	echo "<div style=\"background-image:url('images/slide1.jpg');\"></div>";
                                $length++;
                            }
                       }
                    ?> 

                </div>
                <div class="prv"></div>
                <div class="next"></div>
                <ul class="button">
                   
                    <?php
						for($i=0;$i<$length;$length++){
							echo "<li></li>";
						}
					?>
                    
                    <li></li>
                </ul>
            </div>
    	</div>
	</div>
</body>
</html>