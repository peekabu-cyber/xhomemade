<?php

session_start();

function status(){
    if(isset($_SESSION['username'])) {
        $result = "true";
    }else{
//            and $_SESSION['username'] != " "
        $result = "false";
    }
    echo $result;

}
status();
?>