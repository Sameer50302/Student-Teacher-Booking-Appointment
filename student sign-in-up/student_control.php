<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Student Dashboard</title>
    <link rel="stylesheet" href="student_control.css">
</head>
<body>
    <div class="container">
        <h1>Student Dashboard</h1>
        
        <!-- Search Teacher -->
        <div>
            <h2>Search Teacher</h2>
            <form id="searchTeacherForm">
                <div class="form-group">
                    <label for="teacherName">Teacher Name:</label>
                    <input type="text" id="teacherName" required>
                </div>
                <button type="submit">Search Teacher</button>
            </form>
            <div id="teacherList">
                <!-- Teachers will be listed here dynamically -->
            </div>
        </div>
        
        <!-- Book Appointment -->
        <div>
            <h2>Book Appointment</h2>
            <form id="bookAppointmentForm">
                <div class="form-group">
                    <label for="selectedTeacher">Select Teacher:</label>
                    <select id="selectedTeacher" required>
                        <!-- Populate with teachers dynamically -->
                    </select>
                </div>
                <div class="form-group">
                    <label for="appointmentDateTime">Date and Time:</label>
                    <input type="datetime-local" id="appointmentDateTime" required>
                </div>
                <button type="submit">Book Appointment</button>
            </form>
        </div>
        
        <!-- Send Message -->
        <div>
            <h2>Send Message</h2>
            <form id="sendMessageForm">
                <div class="form-group">
                    <label for="recipient">Recipient:</label>
                    <input type="text" id="recipient" required>
                </div>
                <div class="form-group">
                    <label for="messageContent">Message:</label>
                    <textarea id="messageContent" rows="4" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
            <a href="logout.php"> Logout</a>   
        </div>
    </div>
    
    <script type="module" src="student_control.js"></script>
</body>
</html>
