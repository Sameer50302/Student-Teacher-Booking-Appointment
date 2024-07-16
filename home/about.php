<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/appointment/home/homestyle.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>About</title>
</head>
<body>
    <section class="sub-header">
        <nav>
            <a href="/appointment/index.php"><img src="/appointment/home/images/logo-tp.png"></a>
            <div class="nav-links" id="navLinks">
                <i class="fa fa-times" onclick="hideMenu()"></i>
                <ul>
                    <li><a href="/appointment/index.php">Home</a></li>
                    <li><a href="/appointment/home/about.php">About</a></li>
                    <li><a href="/appointment/home/contact.php">Contact</a></li>
                    <li><a href="/appointment/admin login/admin_login.php">Admin Login</a></li>
                    <li><a href="/appointment/user sign-in-up/user_login.php">Teacher Login</a></li>
                </ul>
            </div>
            <i class="fa fa-bars" onclick="showMenu()"></i>
        </nav>
        <h1>About Us</h1>
    </section>
    
    <!---------Blog Page Content---------------------->

    <section class="blog-content" id="bg-cont">           
        <div class="comment-box">
            <h3>WHAT WE DO</h3>
            <h4>Student-Teacher Booking Website</h4>
           <p>Welcome to our Student-Teacher Booking System, a revolutionary platform designed to streamline and enhance the educational experience for both teachers and students. Our system provides an intuitive interface for scheduling appointments, allowing students to easily book time with their teachers for extra help, tutoring, or academic counseling. We are committed to fostering better communication and collaboration within the educational community by leveraging the power of technology. Our goal is to make the process of connecting teachers and students as seamless and efficient as possible, ensuring that every student has access to the support they need to succeed academically. Join us in transforming education by making learning more accessible and personalized.
        </div>
    </section>							   
					  

 <!-------JavaScript for toggle menu------>
    <script>
        var navLinks = document.getElementById("navLinks")
        function showMenu(){
            navLinks.style.right = "0";
        }
        function hideMenu(){
            navLinks.style.right = "-200px";
        }
    </script>


</body>
</html>