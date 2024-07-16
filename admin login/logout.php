<?php
session_start();
// if(session_destroy())
// {
//     header("Location:admin_login.php");
// }

// Unset all session variables
$_SESSION = array();

// Destroy the session
if (session_destroy()) {
    // Redirect to login page
    header("Location:admin_login.php");
    exit();
} else {
    echo "Error in destroying session.";
}

?>