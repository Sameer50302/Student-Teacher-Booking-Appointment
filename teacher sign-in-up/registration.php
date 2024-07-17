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

    if(isset($_POST["signup"]))
    {
        $username = $_POST["username"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        $conf_pass = $_POST["conf_pass"];
        
       
        $duplicate =mysqli_query($conn,"SELECT * FROM user_teacher WHERE username= '$username' OR email ='$email'");
       
          if(mysqli_num_rows($duplicate) > 0)
        {
            echo "<script>alert('Userame or Email already exist');</script>";
            echo "<script>window.location.href='user_login.php';</script>";
        }
        else
        {
            if($password == $conf_pass)
            {
              
                $query = "INSERT INTO user_teacher (username, email, password) VALUES ('$username', '$email','$password')";
                
                mysqli_query($conn, $query);
                echo "<script>alert('Registration Successful');</script>";
                echo "<script>window.location.href='user_login.php';</script>";
            }
            else
            {
                echo "<script>alert('Password and Confirm Password does not match');</script>";
            }
        }







        // {
        //     header("Location:welcome.php");
        //     $_SESSION["username"]=$row['username'];
        //     $_SESSION["password"]=$row['password'];
        //     // added
        //     $_SESSION['last_active_time']='yes';
        // }
        // else
        // {
        //     echo 
        //     '<script>
        //         window.location.href = "admin_login.php";
        //         alert("Login failed. Invalid username and password!!!");
        //     </script>';
        // }

    }
?>