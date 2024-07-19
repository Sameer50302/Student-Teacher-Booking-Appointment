import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, setDoc, doc, updateDoc, deleteDoc, query, where, getDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

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

document.addEventListener('DOMContentLoaded', () => {
    // Add Teacher
    document.getElementById('addTeacherForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        const teach_email = document.getElementById('teach_email').value;
        const name = document.getElementById('name').value;
        const department = document.getElementById('department').value;
        const subject = document.getElementById('subject').value;

        try {
            // Check if the teacher email already exists
            const teacherRef = doc(db, 'teachers', teach_email);
            const docSnap = await getDoc(teacherRef);

            if (docSnap.exists()) {
                alert(`Teacher with Email Id "${teach_email}" already exists! Please use a different Email Id.`);
                return;
            }
            // If teacher mail doesn't exist, proceed to add the teacher
            await setDoc(teacherRef, {
                teach_email: teach_email,
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

    const teach_email = document.getElementById('teacheremailupdate').value;
    const newName = document.getElementById('newName').value;
    const newDepartment = document.getElementById('newDepartment').value;
    const newSubject = document.getElementById('newSubject').value;

    try {
        const teacherRef = doc(db, 'teachers', teach_email); // Corrected document reference
        const docSnap = await getDoc(teacherRef);

        if (!docSnap.exists()) {
            alert(`Teacher with Email Id "${teach_email}" does not exist!`);
            return;
        }
        // Create an object to hold the updates
        const updates = {};
        if (newName) updates.name = newName;
        if (newDepartment) updates.department = newDepartment;
        if (newSubject) updates.subject = newSubject;

        await updateDoc(teacherRef, updates); // Update only the specified fields

        alert(`Teacher with Email Id "${teach_email}" updated successfully!`);
        document.getElementById('updateTeacherForm').reset();
    } catch (error) {
        console.error('Error updating teacher: ', error);
        alert('Error updating teacher: ' + error.message);
    }
    });


    // Delete Teacher
    document.getElementById('deleteTeacherForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        const teach_email = document.getElementById('teacheremailDelete').value;

        try {
            const teacherRef = doc(db, 'teachers', teach_email);
            const docSnap = await getDoc(teacherRef);

            if (!docSnap.exists()) {
                alert(`Teacher with Email Id "${teach_email}" does not exist!`);
                return;
            }

            await deleteDoc(teacherRef);
            alert(`Teacher with Email Id "${teach_email}" deleted successfully!`);
            document.getElementById('deleteTeacherForm').reset();
        } catch (error) {
            console.error('Error deleting teacher: ', error);
            alert('Error deleting teacher: ' + error.message);
        }
    });
});   

document.getElementById('logoutButton').addEventListener('click', function() {
    // Perform logout action
    window.location.href = "logout.php"; // Redirect to logout.php
});
 