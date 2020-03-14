<?php

require "./credentials.php";
session_start();
$userName =  $_SESSION['username'];
$userPassword =  $_SESSION['password'];

if(isset($_SESSION['username']) and isset($_SESSION['password']) and $_SESSION['password']!=" " and $_SESSION['username'] != " ") {

    $mysqli = new MySQLi($host, $user, $password, $database);
    $sql = "SELECT *
            FROM meal
            WHERE clientUsername = '$userName'";
    $result = $mysqli ->query($sql);
    if($result != null) {
        $rows = $result->fetch_all(MYSQLI_ASSOC);?>
        <div class = "row">
        <?php
        foreach ($rows as $row) {?>
            <div class="col-10 mx auto col-md-6 col-lg-4 my-4">
                <div class="card">
                    <img class="img-card-top recipe-img" alt="<?php echo $row['meal_Name'] ?>"
                         src="<?php echo $row['meal_ImageURL'] ?>"/>
                    <div class="card-body text-capitalize rounded mx-auto d-block">
                        <h6 class="rounded mx-auto d-block font-weight-bold"><?php echo $row['meal_Name'] ?></h6>
                    </div>
                    <h6 class="text-warning rounded mx-auto d-block">provided by <a href="<?php echo $row['meal_SourceLink']?>"target="_blank"
                                                            rel="noopener noreferrer"><?php echo $row['meal_Source'] ?></a>
                    </h6>
                    <form method="post" action="http://localhost:8000/info.php">
                    <div class="card-footer rounded mx-auto d-block">
                        <button class="btn btn-primary" type="submit">View</button>
                        <input type="hidden" name = "meal_name" value="<?php echo $row['meal_Name']?>" />
                        <input type="hidden" name="image" value="<?php echo $row['meal_ImageURL']?>"/>
                        <input type="hidden" name="source" value="<?php echo $row['meal_Source']?>"/>
                        <input type="hidden" name="sourcelink" value="<?php echo $row['meal_SourceLink']?>"/>
<!--                        <input type="hidden" id="array_Ingr"name="ingredients" value=""/>-->
                    </div>
                    </form>
                </div>
            </div>
            <?php
        }?>
        </div><?php
    }
    else{
        echo "No meals found!";
    }
    $mysqli->close();
}
else{
    echo "ERROR - #214 - ACCOUNT NOT FOUND //LOGIN NEEDED";
}
?>