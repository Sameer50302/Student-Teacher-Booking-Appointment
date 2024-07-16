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
    <title>Contact</title>
</head>
<body>
    <section class="sub-header">
        <nav>
            <a href="index.php"><img src="images/logo-tp.png"></a>
            <div class="nav-links" id="navLinks">
                <i class="fa fa-times" onclick="hideMenu()"></i>
                <ul>
                    <li><a href="index.php">Home</a></li>
                    <li><a href="about.php">About</a></li>
                    <li><a href="contact.php">Contact</a></li>
                    <li><a href="admin login/admin_login.php">Admin Login</a></li>
                    <li><a href="user sign-in-up/user_login.php">Teacher Login</a></li>
                </ul>
            </div>
            <i class="fa fa-bars" onclick="showMenu()"></i>
        </nav>
        <h1>Contact Us</h1>
  </section>

  <!------------------ contact ------------------->
   <section class="location">
      <h1>Our Location</h1>
        <div class="loc-row">
            <div class="loc">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8595106091025!2d77.33048220956276!3d28.54394218799956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44e80a9461b%3A0x302ec8d3d5cb8d1a!2sAmity%20University%20Noida!5e0!3m2!1sen!2sin!4v1720894441015!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>    
            </div>
        </div>        
    </section>
  <section class="contact-us">
    <div class="row">
         <div class="contact-col">
            <div>
                <i class="fa fa-home"></i>
                <span>
                    <h5>Amity Rd, Sector 125</h5>
                    <p>Noida, Uttar Pradesh</p>
                </span>
            </div>
            <div>
                <i class="fa fa-phone"></i>
                <span>
                    <h5>+91 9971331***</h5>
                    <p>Monday to Saturday, 10AM to 3PM</p>
                </span>
            </div>
            <div>
                <i class="fa fa-envelope-o"></i>
                <span>
                    <h5>admissions@amity.edu</h5>
                    <h5></h5>
                    <p>Email us your query</p>
                </span>
            </div>
                      
         </div>
         <div class="contact-col">
            <form  method="post" id="contactForm">
            <input type="text" name="name" placeholder="Enter your name" required>
            <input type="email" name="email" placeholder="Enter email address" required>
            <input type="text" name="subject" placeholder="Enter your subject" required>
            <textarea rows="8" name="message" placeholder="Message" required></textarea>
            <button  type="submit" class="hero-btn red-btn">Send Message</button>
            </form>
         </div>
         
    </div>
</section>
 
<script type="module" src="form.js"></script>
 <!-------JavaScript for toggle menu------>
 <script>

    var navLinks = document.getElementById("navLinks")
    function showMenu(){
        navLinks.style.right = "0";
    }
    function hideMenu(){
        navLinks.style.right = "-200px";
    }
</Script>
</body>
</html>