<?php

require "credentials.php";
$mysqli = new MySQLi($host, $user, $password, $database);

$clientUsername = trim($_POST['client_username']);
$clientPassword = trim($_POST["client_password"]);
$clientEmail = $_POST["client_email"];

$sql = "SELECT userName
                    FROM useraccounts
                    WHERE userName = '$clientUsername'
                    ";

$query = $mysqli->query($sql);
$result = $query->fetch_all(MYSQLI_ASSOC);

if ($result[0]['userName'] == null) {
    $sql = "INSERT
                INTO useraccounts(userName, userPassword, userEmail)
                VALUES ('$clientUsername','$clientPassword','$clientEmail')";
    $result = $mysqli->query($sql);
    echo "Successfully signed up you can now log in";
    echo '<p><a href="javascript:history.go(-1)" = title="Return to previous page">&laquo; Go back</a></p>';
    exit(0);

} ?>


