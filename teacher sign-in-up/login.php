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

    if(isset($_POST["signin"]))
    {
        $usernameemail = $_POST["usernameemail"];
        // $email = $_POST["email"];
        $password = $_POST["password"];
        // $conf_pass = $_POST["conf_pass"];

        $result =mysqli_query($conn,"SELECT * FROM user_teacher WHERE username= '$usernameemail' OR email ='$usernameemail'");
        $row = mysqli_fetch_assoc($result);
        if(mysqli_num_rows($result) > 0)
        {
            if($row["password"] == $password)
            {
                $_SESSION["login"] = true;
                $_SESSION["id"] = $row["id"];
                header("Location: teacher_control.php");
            }
            else
            {
                echo "<script>alert('Invalid Password')</script>";
                echo "<script>window.location.href='user_login.php';</script>";
            }

        }
        else
        {
            echo "<script>alert('Username or Email does not exist');</script>";
            echo "<script>window.location.href='user_login.php';</script>";
        }
    }    
?>
