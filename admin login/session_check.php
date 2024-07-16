<?php
session_start();

// Define timeout duration (in seconds)
$timeout_duration = 600;
//60 sec

// Check if the user is logged in
if (isset($_SESSION['username'])) {
    // Check if the last active time is set
    if (isset($_SESSION['last_active_time'])) {
        // Calculate the time since the last activity
        $elapsed_time = time() - $_SESSION['last_active_time'];

        // If the elapsed time is greater than the timeout duration, log out
        if ($elapsed_time > $timeout_duration) {
            // Unset all session variables
            $_SESSION = array();

            // Destroy the session
            session_destroy();

            // Redirect to login page with a query parameter
            header("Location:admin_login.php?message=timeout");
            exit();
        }
    }

    // Update the last active time
    $_SESSION['last_active_time'] = time();
} else {
    // If the user is not logged in, redirect to login page
    header("Location:admin_login.php");
    exit();
}
?>
