<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Fila Slider</title>
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
						$images_path = "../images";
						$images = scandir($images_path);
						
						foreach($images as $img){
							$pics_arr = explode('.',$img);
							$pic_type = end($pics_arr);
							//$picname_start = $pics_arr[0];
							//if($picname_start == "Fila5") echo ' 0000 ';
							//else echo ' bye ';
							//echo $picname_start;
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
        </div>
    </div>
</body>
</html>