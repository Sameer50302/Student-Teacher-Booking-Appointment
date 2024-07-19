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
        $password = $_POST["password"];


        $result =mysqli_query($conn,"SELECT * FROM user_student WHERE username= '$usernameemail' OR email ='$usernameemail'");
        $row = mysqli_fetch_assoc($result);
        if(mysqli_num_rows($result) > 0)
        {
            if($row["password"] == $password)
            {
                $_SESSION["login"] = true;
                $_SESSION["id"] = $row["id"];
                header("Location: student_control.php");
            }
            else
            {
                echo "<script>alert('Invalid Password')</script>";
                echo "<script>window.location.href='student_login.php';</script>";
            }
        }
        else
        {
            echo "<script>alert('Username or Email does not exist');</script>";
            echo "<script>window.location.href='student_login.php';</script>";
        }
    }    
?>
