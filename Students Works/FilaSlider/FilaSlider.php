<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8" />
    <title>Fila SlideShow</title>
    <link type="text/css" rel="stylesheet" href="../../reset.css" />
    <link type="text/css" rel="stylesheet" href="FilaSlider.css" />
    <script type="text/javascript" src="FilaSlider.js"></script>
</head>

<body>
	<div class="container">
    	<div class="slideshow">
        	<div class="logo">
            	<a href="#"></a>
           		<div class="search-box">
                	<input type="text" name="search" />
                    <button type="submit" name="submitSearch" title="Search in Mampel.ir"></button>
                </div>
            </div>
        	<h2>Fila Men's Tops - Recommended for You</h2>
        	<div class="case-train">
        		<div class="train">
                	<?php
						$images_path = "../../images/FilaSlider_Mr";
						$images = scandir($images_path);
						
						foreach($images as $img){
							$pics_arr = explode('.',$img);
							$pic_type = strtolower(end($pics_arr));
							if($pic_type == 'jpg'){
								echo 	"<div class=\"img\" style=\"background-image:url($images_path/$img);\">
											<div class=\"info\">
												<div>
													<span>double bar tee</span>
													<span>$18.00</span>
												</div>
												<a href=\"#\">Quick View</a>
											</div>
										</div>";
							}
						}
					?>
          		</div>
            </div>
        	<h1></h1>
            <div class="pre"></div>
            <div class="next"></div>
            <div class="footer-bar"></div>
        </div>
        <p class="footer">
            © 2012 Mampel Design. All rights reserved. SlideShow example with PHP and JavaScript and CSS3.<br />
            Mohammad Reza Shariatzadeh. Mr@Mampel.ir
        </p>
    </div>
</body>
</html>