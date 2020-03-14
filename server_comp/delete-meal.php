<?php
require "./credentials.php";
session_start();
$userName = $_SESSION['username'];
$meal_name = $_POST['meal_name'];
$mysqli = new MySQLi($host, $user, $password, $database);
$mysqli->set_charset('utf8');


$sql = "DELETE 
            FROM meal
            WHERE clientUsername = '$userName' AND meal_Name = '$meal_name'";
if(sql){
    echo "The meal " . $meal_name. " has been successfully deleted from your 'meals' tab,  ";
    echo "<a href='http://localhost:3000/mymeals'>Go back</a>";
}

$query = $mysqli->query($sql);

?>