// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, query, where, getDocs,addDoc,doc,setDoc,getDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

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
            row.innerHTML = `<td>${teacher.teach_email}</td>
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
        option.textContent = doc.data().teach_email;
        document.getElementById('selectedTeacher').appendChild(option);
    });
}

// Function to book an appointment
document.getElementById('bookAppointmentForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const teacherEmail = document.getElementById('selectedTeacher').value;
    const dateTime = document.getElementById('appointmentDateTime').value;
    const studentEmail = document.getElementById('studentEmail').value;
    const studentName = document.getElementById('studentName').value;
    
    try {
         // Check if the staudent email already exists
         const studentRef = doc(db, 'appointments', studentEmail);
         const docSnap = await getDoc(studentRef);

         if (docSnap.exists()) {
             alert(`You have already booked an appointment with this "${studentEmail}"  Email Id!`);
             return;
         }

         // If student mail doesn't exist, proceed to take appointment
            await setDoc(studentRef,{
                studentEmail: studentEmail,
                studentName: studentName,
                teacherEmail: teacherEmail,
                dateTime: dateTime,
                status: 'Pending' // Example status; adjust as needed
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
    const studentEmail = document.getElementById('studentEmailMsg').value.trim();
    try {
        // Implement message sending logic here
        // Check if the recipient (teacher) exists
        const teacherRef = doc(db, 'teachers', recipient);
        const teacherDoc = await getDoc(teacherRef);

        if (!teacherDoc.exists()) {
            alert(`No teacher found with ID: ${recipient}`);
            return;
        }

        // Send the message
        await addDoc(collection(db, 'messages'), {
            recipient: recipient,
            studentEmail: studentEmail,
            messageContent: messageContent,
            timestamp: new Date()
        });

        alert(`Message sent to "${recipient}" successfully!`);
        document.getElementById('sendMessageForm').reset();
    } catch (error) {
        console.error('Error sending message: ', error);
        alert('Error sending message: ' + error.message);
    }
});


// Function to retrieve and display appointments with status for a specific student email
document.getElementById('searchAppointmentForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const studentEmailSearch = document.getElementById('studentEmailSearch').value.trim();
    const appointmentTableBody = document.getElementById('appointmentTableBody');
    appointmentTableBody.innerHTML = ''; // Clear previous results
    
    try {
        const studentRef = doc(db, 'appointments', studentEmailSearch);
        const docSnap = await getDoc(studentRef);

        if (!docSnap.exists()) {
            alert(`No appointments found for student email: ${studentEmailSearch}`);
            return;
        }

        const appointment = docSnap.data();
        const row = document.createElement('tr');
        row.innerHTML = `<td>${appointment.studentEmail}</td>
                         <td>${appointment.studentName}</td>
                         <td>${appointment.teacherEmail}</td>
                         <td>${appointment.dateTime}</td>
                         <td>${appointment.status}</td>`;
        appointmentTableBody.appendChild(row);

        document.getElementById('appointmentTable').style.display = 'table'; // Show table if results found
    } catch (error) {
        console.error('Error retrieving appointment: ', error);
        alert('Error retrieving appointment: ' + error.message);
    }
});

// Initialize the dashboard
async function initializeDashboard() {
    await populateTeachersDropdown();
    // await displayAppointments();
}

// Call initializeDashboard to start the dashboard
initializeDashboard();

document.getElementById('logoutButton').addEventListener('click', function() {
    // Perform logout action
    window.location.href = "logout.php"; // Redirect to logout.php
});
