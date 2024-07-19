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
        <hr>
        <!-- Search Teacher -->
        <div>
            <h2>Search Teacher</h2>
            <form id="searchTeacherForm">
                <div class="form-group">
                    <label for="teacherName">Teacher Name:</label>
                    <input type="text" id="teacherName" placeholder="If you dont Know the name just tap on the search teacher">
                </div>
                <button type="submit">Search Teacher</button>
            </form>
            <div id="teacherList">
                <!-- Teachers will be listed here dynamically -->
                <table id="teacherTable" style="display:none;">
            <thead>
                <tr>
                    <th>Email Id</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Subject</th>
                </tr>
            </thead>
            <tbody>
                <!-- Teacher rows will be inserted here -->
            </tbody>
        </table>
            </div>
        </div>
        <hr>
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
                    <label for="studentEmail">Email Id:</label>
                    <input type="email" id="studentEmail" placeholder="Enter Your Email Id">
                </div>
                <div class="form-group">
                    <label for="studentName">Name:</label>
                    <input type="text" id="studentName" placeholder="Enter Your Name">
                </div>
                <div class="form-group">
                    <label for="appointmentDateTime">Date and Time:</label>
                    <input type="datetime-local" id="appointmentDateTime" required>
                </div>
                <button type="submit">Book Appointment</button>
            </form>
        </div>
        <hr>
<div>
    <!-- Add this form to search appointment status by student email -->
<form id="searchAppointmentForm">
    <label for="studentEmailSearch">Enter Student Email:</label>
    <input type="email" id="studentEmailSearch" required>
    <button type="submit">Search Appointment Status</button>
</form>

<!-- Appointment status table -->
<table id="appointmentTable" style="display:none;">
    <thead>
        <tr>
            <th>Student Email</th>
            <th>Student Name</th>
            <th>Teacher Email</th>
            <th>Date and Time</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody id="appointmentTableBody">
        <!-- Appointment rows will be added here dynamically -->
    </tbody>
</table>
        </div>
        <hr>
        
        <div>
            
            <h2>Send Message</h2>
            <form id="sendMessageForm">
                <div class="form-group">
                    <label for="studentEmailMsg">Your Email:</label>
                    <input type="email" id="studentEmailMsg" required>
                </div>
                <div class="form-group">
                    <label for="recipient">Recipient:</label>
                    <input type="email" id="recipient" required>
                </div>
                <div class="form-group">
                    <label for="messageContent">Message:</label>
                    <textarea id="messageContent" rows="4" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>

        <hr>
        <div>
        <button type="submit" id="logoutButton" class="log_btn">Log Out</button>
        </div>
    </div>
    
    <script type="module" src="student_control.js"></script>
</body>
</html>