<?php
session_start();

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