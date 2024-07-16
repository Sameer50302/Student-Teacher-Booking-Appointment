// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, addDoc, query, where, getDocs, updateDoc, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

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

// Function to populate teachers dynamically in the dropdown
async function populateTeachersDropdown() {
    const teachersRef = collection(db, 'teachers');
    const teachersSnapshot = await getDocs(teachersRef);
    
    teachersSnapshot.forEach(doc => {
        const option = document.createElement('option');
        option.value = doc.id;
        option.textContent = doc.data().name;
        document.getElementById('teacher').appendChild(option);
    });
}

// Function to schedule an appointment
document.getElementById('scheduleAppointmentForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const teacherId = document.getElementById('teacher').value;
    const student = document.getElementById('student').value;
    const dateTime = document.getElementById('dateTime').value;
    
    try {
        await addDoc(collection(db, 'appointments'), {
            teacherId: teacherId,
            student: student,
            dateTime: dateTime,
            status: 'pending' // Example status; adjust as needed
        });
        alert('Appointment scheduled successfully!');
        document.getElementById('scheduleAppointmentForm').reset();
    } catch (error) {
        console.error('Error scheduling appointment: ', error);
        alert('Error scheduling appointment: ' + error.message);
    }
});

// Function to list all appointments dynamically
async function listAppointments() {
    const appointmentsRef = collection(db, 'appointments');
    const appointmentsSnapshot = await getDocs(appointmentsRef);
    
    appointmentsSnapshot.forEach(doc => {
        const appointment = doc.data();
        const li = document.createElement('li');
        li.textContent = `Teacher: ${appointment.teacherId}, Student: ${appointment.student}, Date: ${appointment.dateTime}, Status: ${appointment.status}`;
        document.getElementById('appointmentList').appendChild(li);
    });
}

// Function to view all messages (example)
async function listMessages() {
    const messagesRef = collection(db, 'messages');
    const messagesSnapshot = await getDocs(messagesRef);
    
    messagesSnapshot.forEach(doc => {
        const message = doc.data();
        const li = document.createElement('li');
        li.textContent = `From: ${message.sender}, Message: ${message.content}`;
        document.getElementById('messageList').appendChild(li);
    });
}

// Function to list all appointments (example)
async function listAllAppointments() {
    const appointmentsRef = collection(db, 'appointments');
    const appointmentsSnapshot = await getDocs(appointmentsRef);
    
    appointmentsSnapshot.forEach(doc => {
        const appointment = doc.data();
        const li = document.createElement('li');
        li.textContent = `Teacher: ${appointment.teacherId}, Student: ${appointment.student}, Date: ${appointment.dateTime}, Status: ${appointment.status}`;
        document.getElementById('allAppointmentsList').appendChild(li);
    });
}

// Logout functionality (example)
document.getElementById('logoutButton').addEventListener('click', function() {
    // Implement your logout logic here
    alert('Logged out successfully!');
});

// Initialize the dashboard
async function initializeDashboard() {
    await populateTeachersDropdown();
    await listAppointments();
    await listMessages();
    await listAllAppointments();
}

// Call initializeDashboard to start the dashboard
initializeDashboard();
