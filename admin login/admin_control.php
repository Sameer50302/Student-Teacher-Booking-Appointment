<?php
    include 'session_check.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="admin_control.css">
</head>
<body>
    <div class="container">
        <h1>Admin Dashboard</h1>
        <hr>
        <div>
            <h2>Add Teacher</h2>
            <form id="addTeacherForm">
                <div class="form-group">
                    <label for="teach_email">Teacher Email:</label>
                    <input type="email" id="teach_email" name="teach_email" required>
                </div>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="department">Department:</label>
                    <input type="text" id="department" name="department" required>
                </div>
                <div class="form-group">
                    <label for="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" required>
                </div>
                <button type="submit">Add Teacher</button>
            </form>
        </div>
        <hr>
        <div>
            <h2>Update Teacher</h2>
            <form id="updateTeacherForm">
                <div class="form-group">
                    <label for="teacheremailupdate">Teacher Email:</label>
                    <input type="email" id="teacheremailupdate" name="teacheremailupdate" required>
                </div>
                <div class="form-group">
                    <label for="newName">New Name:</label>
                    <input type="text" id="newName" name="newName">
                </div>
                <div class="form-group">
                    <label for="newDepartment">New Department:</label>
                    <input type="text" id="newDepartment" name="newDepartment">
                </div>
                <div class="form-group">
                    <label for="newSubject">New Subject:</label>
                    <input type="text" id="newSubject" name="newSubject">
                </div>
                <button type="submit" id="updateTeacher">Update Teacher</button>
            </form>
        </div>
        <hr>
        <div>
            <h2>Delete Teacher</h2>
            <form id="deleteTeacherForm">
                <div class="form-group">
                    <label for="teacheremailDelete">Teacher Email:</label>
                    <input type="email" id="teacheremailDelete" name="teacheremailDelete" required>
                </div>
                <button type="submit" id="deleteTeacher">Delete Teacher</button>
            </form>
        </div>
        <hr>
     
        <div>
            <button type="submit" id="logoutButton" class="log_btn">Log Out</button>
        </div>
    </div>
    <script type="module" src="admin_control.js"></script>
    <script>
        // Auto-refresh the page every 55 seconds to ensure inactivity is detected server-side
        setTimeout(function(){
            window.location.reload(1);
        }, 540000); // 540 seconds = 9 minutes 55000 for 55 sec
    </script>
</body>
</html>
