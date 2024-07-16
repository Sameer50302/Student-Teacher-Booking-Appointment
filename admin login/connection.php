<?php
session_start();
$servername= "localhost";
$username = "root";
$password = "";
$db_name = "sign_in_up";
$conn = mysqli_connect($servername, $username, $password, $db_name);

if (!$conn) 
{
    die("Connection failed: " . mysqli_connect_error());
}

if(isset($_POST['submit']))
{   
    $username = $_POST['user'];
    $password = $_POST['pass'];
    $sql = "SELECT * FROM admin WHERE username = '$username' AND password ='$password'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
    $count = mysqli_num_rows($result);
    if($count==1)
    {
        header("Location:welcome.php");
        $_SESSION["username"]=$row['username'];
        $_SESSION["password"]=$row['password'];
        // added
        $_SESSION['last_active_time']='yes';
    }
    else
    {
        echo 
        '<script>
            window.location.href = "admin_login.php";
            alert("Login failed. Invalid username and password!!!");
        </script>';
    }

}
?>