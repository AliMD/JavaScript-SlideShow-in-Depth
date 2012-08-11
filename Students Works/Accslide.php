<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Acc slide</title>

<link rel="stylesheet" type="text/css" href="style.css" />
<link rel="stylesheet" type="text/css" href="../reset.css" />
<script type="text/javascript" src="../zepto.js"></script>
<script type="text/javascript" src="js-slide.js" ></script>

</head>
<body class="back-image">

<div class="containet">
    <div class="slideshow">
        <div class="train">
            <?php
                    $image = '../images';
                    $scan = scandir($image);
                    foreach($scan as $scan){
                        $exp = explode('.', $scan);
                        $type = end($exp);
                        if ($type == 'jpg') {
                            echo "<div style=\"background-image:url('$image/$scan');\"></div>";
                        }
                    }
            ?>
        </div>
    </div>
</div>

</body>
</html>