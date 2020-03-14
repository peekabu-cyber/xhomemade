<?php

$meal_name = $_POST['meal_name'];
$image = $_POST["image"];
$source = $_POST["source"];
$sourceLink = $_POST["sourcelink"];

?>
<!DOCTYPE html>
<HEAD>
    <link rel="stylesheet" href="./App.css">
    <link rel = "stylesheet" href="./index.css">
    <link rel="stylesheet" href="bootstrap.css">
</HEAD>
<BODY>
    <div>

    <nav class = "navbar sticky-top App-header">
        <header><a href="http://localhost:3000/">
            <h1 class="App-title">Homemade</h1>
            </a></header>
        <div id="navbarText">
            <ul class="nav justify-content-center mr-auto">
                <li class="nav-item"><a class="nav-link" href="http://localhost:3000/mymeals" >Meals</a></li>
                <li class="nav-item"><a class="nav-link" href="http://localhost:3000/contact">Contact</a></li>
                <li class="nav-item"><a class="nav-link" href="http://localhost:3000/login">Login</a></li>
            </ul>
        </div>
    </nav>
    </div>
    <form method="post" action="http://localhost:8000/delete-meal.php" class="">
        <button type="submit" class="btn btn-warning rounded mx-auto d-block">Delete</button>
        <input type="hidden" name = "meal_name" value="<?php echo $meal_name?>" />
    </form>
    <iframe src="<?php echo $sourceLink?>" style="width: 100%;height: 600px;">
    </iframe>
                <!--        <button class=" btn btn-warning rounded mx-auto d-block btn btn-danger"></button>-->

</BODY>
