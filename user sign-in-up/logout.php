<?php

    $servername= "localhost";
    $username = "root";
    $password = "";
    $db_name = "sign_in_up";
    $conn = mysqli_connect($servername, $username, $password, $db_name);

    if (!$conn) 
    {
        die("Connection failed: " . mysqli_connect_error());
    }

    $_SESSION = [];
    session_destroy();
    session_unset();
    header("Location: user_login.php")
?>