// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, query, where, getDocs,addDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// Your web app's Firebase configuration
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


document.getElementById('searchTeacherForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const teacherName = document.getElementById('teacherName').value.trim();
    const teacherTable = document.getElementById('teacherTable');
    const teacherTableBody = teacherTable.querySelector('tbody');
    teacherTableBody.innerHTML = ''; // Clear previous results
    
    try {
        const teachersRef = collection(db, 'teachers');
        let querySnapshot;

        if (teacherName) {
            querySnapshot = await getDocs(query(teachersRef, where('name', '==', teacherName)));
        } else {
            querySnapshot = await getDocs(teachersRef);
        }
        
        querySnapshot.forEach(doc => {
            const teacher = doc.data();
            const row = document.createElement('tr');
            row.innerHTML = `<td>${teacher.teach_id}</td>
                             <td>${teacher.name}</td>
                             <td>${teacher.department}</td>
                             <td>${teacher.subject}</td>`;
            teacherTableBody.appendChild(row);
        });

        if (querySnapshot.empty) {
            teacherTable.style.display = 'none'; // Hide table if no results
            alert('No teachers found.');
        } else {
            teacherTable.style.display = 'table'; // Show table if results found
        }
    } catch (error) {
        console.error('Error searching for teachers:', error);
        alert('Error searching for teachers: ' + error.message);
    }
});

// Function to populate teachers dynamically in the dropdown
async function populateTeachersDropdown() {
    const teachersRef = collection(db, 'teachers');
    const teachersSnapshot = await getDocs(teachersRef);
    
    teachersSnapshot.forEach(doc => {
        const option = document.createElement('option');
        option.value = doc.id;
        option.textContent = doc.data().name;
        document.getElementById('selectedTeacher').appendChild(option);
    });
}

// Function to book an appointment
document.getElementById('bookAppointmentForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const teacherId = document.getElementById('selectedTeacher').value;
    const dateTime = document.getElementById('appointmentDateTime').value;
    
    try {
        await addDoc(collection(db, 'appointments'), {
            teacherId: teacherId,
            student: 'Current Student ID', // Replace with actual student ID
            dateTime: dateTime,
            status: 'pending' // Example status; adjust as needed
        });
        alert('Appointment booked successfully!');
        document.getElementById('bookAppointmentForm').reset();
    } catch (error) {
        console.error('Error booking appointment: ', error);
        alert('Error booking appointment: ' + error.message);
    }
});

// Function to send a message
document.getElementById('sendMessageForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const recipient = document.getElementById('recipient').value.trim();
    const messageContent = document.getElementById('messageContent').value.trim();
    
    try {
        // Implement message sending logic here
        alert(`Message sent to ${recipient} successfully!`);
        document.getElementById('sendMessageForm').reset();
    } catch (error) {
        console.error('Error sending message: ', error);
        alert('Error sending message: ' + error.message);
    }
});

// Initialize the dashboard
async function initializeDashboard() {
    await populateTeachersDropdown();
}

// Call initializeDashboard to start the dashboard
initializeDashboard();

document.getElementById('logoutButton').addEventListener('click', function() {
    // Perform logout action
    window.location.href = "logout.php"; // Redirect to logout.php
});
