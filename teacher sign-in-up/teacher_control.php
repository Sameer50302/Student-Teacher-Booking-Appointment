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
        <hr>
        <!-- Schedule Appointment Form -->
        <div>
            <h2>Schedule Appointment</h2>
            <form id="scheduleAppointmentForm">
                <div class="form-group">
                    <label for="teacher">Teacher Email:</label>
                    <select id="teacher" required>
                        <!-- Populate with teachers dynamically -->
                    </select>
                </div>
                <div class="form-group">
                    <label for="studentEmail">Student Email:</label>
                    <input type="email" id="studentEmail" required>
                </div>
                <div class="form-group">
                    <label for="studentName">Student Name:</label>
                    <input type="text" id="studentName" required>
                </div>
                <div class="form-group">
                    <label for="dateTime">Date and Time:</label>
                    <input type="datetime-local" id="dateTime" required>
                </div>
                <button type="submit">Schedule Appointment</button>
            </form>
        </div>
        <hr>
        <!-- Approve/Cancel Appointment -->
        <div>
            <h2>Approve/Cancel Appointment</h2>
            <table id="approveAppointmentTable">
                <thead>
                    <tr>
                        <th>Teacher Email</th>
                        <th>Student Email</th>
                        <th>Student Name</th>
                        <th>Status</th>
                        <th>Appointment Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="approveAppointmentTableBody">
                    <!-- Message rows will be added here dynamically -->
                </tbody>
            </table>
        </div>
        <hr>
        <!-- View All Appointments -->
        <div>
            <h2>Here All Appointments</h2>
            <table id="appointmentTable">
                <thead>
                    <tr>
                        <th>Teacher Email</th>
                        <th>Student Email</th>
                        <th>Student Name</th>
                        <th>Status</th>
                        <th>Appointment Time</th>
                    </tr>
                </thead>
                <tbody id="appointmentTableBody">
                    <!-- Message rows will be added here dynamically -->
                </tbody>
            </table>
        </div>
        <hr>
        <!-- View Messages -->
        <div>
            <h2>Here All Messages</h2>
            <table id="messagesTable">
                <thead>
                    <tr>
                        <th>Recipient</th>
                        <th>Student Email</th>
                        <th>Message Content</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody id="messagesTableBody">
                    <!-- Message rows will be added here dynamically -->
                </tbody>
            </table>
        </div>
        <hr>   
        <!-- Logout Button -->
        <div>
            <button type="submit" id="logoutButton" class="log_btn">Log Out</button>
        </div>
    </div>
    <script type="module" src="teacher_control.js"></script>
</body>
</html>
