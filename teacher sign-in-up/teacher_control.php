<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Teacher Dashboard</title>
    <link rel="stylesheet" href="teacher_control.css">
</head>
<body>
    <div class="container">
        <h1>Teacher Dashboard</h1>
        
        <!-- Schedule Appointment Form -->
        <div>
            <h2>Schedule Appointment</h2>
            <form id="scheduleAppointmentForm">
                <div class="form-group">
                    <label for="teacher">Teacher:</label>
                    <select id="teacher" required>
                        <!-- Populate with teachers dynamically -->
                    </select>
                </div>
                <div class="form-group">
                    <label for="student">Student:</label>
                    <input type="text" id="student" required>
                </div>
                <div class="form-group">
                    <label for="dateTime">Date and Time:</label>
                    <input type="datetime-local" id="dateTime" required>
                </div>
                <button type="submit">Schedule Appointment</button>
            </form>
        </div>
        
        <!-- Approve/Cancel Appointment -->
        <div>
            <h2>Approve/Cancel Appointment</h2>
            <ul id="appointmentList">
                <!-- Appointments will be listed here dynamically -->
            </ul>
        </div>
        
        <!-- View Messages -->
        <div>
            <h2>View Messages</h2>
            <ul id="messageList">
                <!-- Messages will be listed here dynamically -->
            </ul>
        </div>
        
        <!-- View All Appointments -->
        <div>
            <h2>View All Appointments</h2>
            <ul id="allAppointmentsList">
                <!-- All appointments will be listed here dynamically -->
            </ul>
        </div>
        
        <!-- Logout Button -->
        <div>
            <button id="logoutButton"> <a href="logout.php"> Logout</a>Logout</button>
        </div>
    </div>
    
    <script type="module" src="teacher_control.js"></script>
</body>
</html>
