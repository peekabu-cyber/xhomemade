<?php
session_start();
$username = $_SESSION['username'];
$_SESSION['username'] = null;
$_SESSION['password'] = null;

echo "Successfully signed out of account with username: $username"
?>