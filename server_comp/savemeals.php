<?php

require "./credentials.php";
session_start();
if (isset($_SESSION['username']) and isset($_SESSION['password']) and $_SESSION['username'] != " " and $_SESSION['password'] != " ") {
    $userName = $_SESSION['username'];
    $clientPassword = $_SESSION['password'];
    $mealName = $_POST["meal_name"];
    $source = $_POST["source"];
    $sourceLink = $_POST["sourcelink"];
    $image = $_POST["image"];
    $ingredients = $_POST["ingredients"];


    $mysqli = new MySQLi($host, $user, $password, $database);

    $mysqli->set_charset('utf8');

    $sql = "INSERT
            INTO meal(clientUsername, meal_Name,meal_Source,meal_SourceLink, meal_ImageURL)
            VALUES ('$userName','$mealName','$source','$sourceLink', '$image')";

    $result = $mysqli->query($sql);

    echo '<h2>' . 'Successfully saved ' . $mealName . ' to database ' . $database . '</h2>';

    $mysqli->close();
    echo '<p><a href="javascript:history.go(-1)" title="Return to previous page">&laquo; Go back</a></p>';
} else {
    echo "ERROR - #214 - ACCOUNT NOT FOUND //LOGIN NEEDED";
}
?>