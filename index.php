<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="homestyle.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <title>Home Page</title>
    </head>
    <body>
        <section class="header">
            <nav>
            <video autoplay loop muted plays-inline speed:8x class="back-video">
                <source src="images/Lines - 4760.mp4" type="video/mp4">
            </video>    
                <a href="index.php"><img src="images/logo-tp.png"></a>
                <div class="nav-links" id="navLinks">
                    <i class="fa fa-times" onclick="hideMenu()"></i>
                    <ul>
                        <li><a href="index.php">Home</a></li>
                        <li><a href="about.php">About</a></li>
                        <li><a href="contact.php">Contact</a></li>
                        <li><a href="admin login/admin_login.php">Admin Login</a></li>
                        <li><a href="teacher sign-in-up/user_login.php">Teacher Login</a></li>
                    </ul>
                </div>
                <i class="fa fa-bars" onclick="showMenu()"></i>
            </nav>

            <div class="text-box">
                <h1>Student's are <span class="type"></span></h1>
                <h2> Student-Teacher <span class="type2"></span> Appointment.</h2>
        
                <p>“Education is our passport to the future, for tomorrow belongs to the people who prepare for it today.”</p>
                <a href="student sign-in-up/student_login.php" class="hero-btn">Book Appointment</a>
            </div>

        </section>


    <!-------JavaScript for toggle menu------>
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
        <script>

            var navLinks = document.getElementById("navLinks")
            function showMenu(){
                navLinks.style.right = "0";
            }
            function hideMenu(){
                navLinks.style.right = "-200px";
            }

            
            var typed=new Typed(".type",{
                strings: ["Leader","Future"],
                typeSpeed:100,
                backSpeed:100,
                loop:true
            })

            var typed2=new Typed(".type2",{
                strings: ["Booking","Meeting"],
                typeSpeed:100,
                backSpeed:100,
                loop:true
            })
            

        </script>
    </body>
</html>