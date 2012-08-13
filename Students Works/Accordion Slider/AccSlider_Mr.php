<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8" />
<title>Accordion Slider</title>
<link type="text/css" rel="stylesheet" href="../../reset.css" />
<link type="text/css" rel="stylesheet" href="AccSlider_Mr.css" />
<script type="text/javascript" src="../../zepto.js" ></script>
<script type="text/javascript" src="AccSlider_Mr.js" ></script>
</head>

<body>
	<div class="container">
    	<div class="slideshow">
        	<div class="train">
           <?php /*?> 	<?php
					$images_path = "../../images/AccSlider_Mr";
                	$images = scandir($images_path);
					
					foreach($images as $img){
						$pic_arr = explode('.',$img);
						$pic_type = strtolower(end($pic_arr));
						if($pic_type == "jpg"){
								echo "hi";
							}
							
					}
					
                ?><?php */?>
                <div style="background-image:url(../../images/AccSlider_Mr/AccSlider1.jpg)">
                	<div class="header">Meiklejohn</div>
                    <div class="bg-slide"></div>
                    <div class="description">
                    	<h2>Meiklejohn</h2>
                        <p>
                        	Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur.
                        </p>
                        <a href="#">more →</a>
                    </div>
                </div>
                <div style="background-image:url(../../images/AccSlider_Mr/AccSlider2.jpg)"></div>
                <div style="background-image:url(../../images/AccSlider_Mr/AccSlider3.jpg)"></div>
                <div style="background-image:url(../../images/AccSlider_Mr/AccSlider4.jpg)"></div>
            </div>
        </div>
    </div>
</body>
</html>
