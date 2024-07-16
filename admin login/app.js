import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, addDoc, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBg1FCGbLLPUySq3OD3BC0qFwUWAXJSyW8",
    authDomain: "appointment-df5dd.firebaseapp.com",
    databaseURL: "https://appointment-df5dd-default-rtdb.firebaseio.com",
    projectId: "appointment-df5dd",
    storageBucket: "appointment-df5dd.appspot.com",
    messagingSenderId: "844295855674",
    appId: "1:844295855674:web:36ed97bfc1eeb42f391f03"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add Teacher
document.getElementById('addTeacherForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const department = document.getElementById('department').value;
    const subject = document.getElementById('subject').value;
    
    try {
        await addDoc(collection(db, 'teachers'), {
            name: name,
            department: department,
            subject: subject
        });
        alert('Teacher added successfully!');
        document.getElementById('addTeacherForm').reset();
    } catch (error) {
        console.error('Error adding teacher: ', error);
        alert('Error adding teacher: ' + error.message);
    }
});

// Update Teacher
document.getElementById('updateTeacherForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const teacherId = document.getElementById('teacherId').value;
    const newName = document.getElementById('newName').value;
    const newDepartment = document.getElementById('newDepartment').value;
    const newSubject = document.getElementById('newSubject').value;

    const updateData = {};
    if (newName) updateData.name = newName;
    if (newDepartment) updateData.department = newDepartment;
    if (newSubject) updateData.subject = newSubject;

    try {
        await updateDoc(doc(db, 'teachers', teacherId), updateData);
        alert('Teacher updated successfully!');
        document.getElementById('updateTeacherForm').reset();
    } catch (error) {
        console.error('Error updating teacher: ', error);
        alert('Error updating teacher: ' + error.message);
    }
});

// Delete Teacher
document.getElementById('deleteTeacher').addEventListener('click', async function() {
    const teacherId = document.getElementById('teacherId').value;

    try {
        await deleteDoc(doc(db, 'teachers', teacherId));
        alert('Teacher deleted successfully!');
        document.getElementById('updateTeacherForm').reset();
    } catch (error) {
        console.error('Error deleting teacher: ', error);
        alert('Error deleting teacher: ' + error.message);
    }
});

// Approve Student Registration
document.getElementById('approveStudentForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const studentId = document.getElementById('studentId').value;

    try {
        await updateDoc(doc(db, 'students', studentId), { approved: true });
        alert('Student registration approved!');
        document.getElementById('approveStudentForm').reset();
    } catch (error) {
        console.error('Error approving student registration: ', error);
        alert('Error approving student registration: ' + error.message);
    }
});