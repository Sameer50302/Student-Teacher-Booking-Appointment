// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection,setDoc, addDoc, query, where, getDocs, updateDoc, doc, deleteDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
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
        option.textContent = doc.data().teach_email;
        document.getElementById('teacher').appendChild(option);
    });
}
// Function to schedule an appointment
document.getElementById('scheduleAppointmentForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const teacherEmail = document.getElementById('teacher').value;
    const studentEmail = document.getElementById('studentEmail').value;
    const studentName = document.getElementById('studentName').value;
    const dateTime = document.getElementById('dateTime').value;
    try {
        // Check if student already take appointment
        const studentRef = doc(db, 'appointments', studentEmail );
        const docSnap = await getDoc(studentRef);
        if (docSnap.exists()) {
            alert(`Alerady booked appointment found for student email: ${studentEmail}`);
            return;
        }
        // If student mail doesn't exist, proceed to give appointment
        await setDoc(studentRef, {
            teacherEmail: teacherEmail,
            studentEmail: studentEmail,
            studentName: studentName,
            dateTime: dateTime,
            status: 'Pending' 
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
        li.textContent = `Teacher: ${appointment.teacherEmail}, Student: ${appointment.studentEmail}, Date: ${appointment.dateTime}, Status: ${appointment.status}`;
        document.getElementById('appointmentList').appendChild(li);
    });
}
// Function to retrieve all messages from Firestore
async function retrieveMessages() 
{
    const messagesTableBody = document.getElementById('messagesTableBody');
    messagesTableBody.innerHTML = ''; // Clear previous results
    try {
        const messagesRef = collection(db, 'messages');
        const querySnapshot = await getDocs(messagesRef);
        if (querySnapshot.empty) {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.colSpan = 4;
            cell.textContent = 'No messages yet';
            row.appendChild(cell);
            messagesTableBody.appendChild(row);
        } else {
            querySnapshot.forEach(doc => {
                const message = doc.data();
                const row = document.createElement('tr');
                row.innerHTML = `<td>${message.recipient}</td>
                                 <td>${message.studentEmail}</td>
                                 <td>${message.messageContent}</td>
                                 <td>${new Date(message.timestamp.seconds * 1000).toLocaleString()}</td>`;
                messagesTableBody.appendChild(row);
            });
        }
    } catch (error) {
        console.error('Error retrieving messages:', error);
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 4;
        cell.textContent = 'Error retrieving messages';
        row.appendChild(cell);
        messagesTableBody.appendChild(row);
    }
}
// Function to retrieve all appointments from Firestore
async function retrieveAppointments() {
    const appointmentTableBody = document.getElementById('appointmentTableBody');
    appointmentTableBody.innerHTML = ''; // Clear previous results
    try {
        const appointmentRef = collection(db, 'appointments');
        const querySnapshot = await getDocs(appointmentRef);
        if (querySnapshot.empty) {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.colSpan = 5;
            cell.textContent = 'No Appointments Yet';
            row.appendChild(cell);
            appointmentTableBody.appendChild(row);
        } else {
            querySnapshot.forEach(doc => {
                const appointment = doc.data();
                const row = document.createElement('tr');
                row.innerHTML = `<td>${appointment.teacherEmail}</td>
                                 <td>${appointment.studentEmail}</td>
                                 <td>${appointment.studentName}</td>
                                 <td>${appointment.status}</td>
                                 <td>${appointment.dateTime}</td>`;
                appointmentTableBody.appendChild(row);
            });
        }
    } catch (error) {
        console.error('Error retrieving appointments:', error);
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 5;
        cell.textContent = 'Error retrieving appointments';
        row.appendChild(cell);
        appointmentTableBody.appendChild(row);
    }
}
async function retrieveApproveAppointments() {
    const approveAppointmentTableBody = document.getElementById('approveAppointmentTableBody');
    approveAppointmentTableBody.innerHTML = ''; // Clear previous results
    try {
        const approveAppointmentRef = collection(db, 'appointments');
        const querySnapshot = await getDocs(approveAppointmentRef);

        if (querySnapshot.empty) {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.colSpan = 6; 
            cell.textContent = 'No Appointments Yet';
            row.appendChild(cell);
            approveAppointmentTableBody.appendChild(row);
        } else {
            let hasPendingAppointments = false;
            querySnapshot.forEach(doc => {
                const appointmentapprove = doc.data();
                if (appointmentapprove.status === 'Pending') {
                    hasPendingAppointments = true;
                    const row = document.createElement('tr');
                    row.innerHTML = `<td>${appointmentapprove.teacherEmail}</td>
                                     <td>${appointmentapprove.studentEmail}</td>
                                     <td>${appointmentapprove.studentName}</td>
                                     <td>${appointmentapprove.status}</td>
                                     <td>${appointmentapprove.dateTime}</td>
                                     <td>
                                         <button class="approve-btn">Approve</button>
                                         <button class="decline-btn">Decline</button>
                                     </td>`;
                    // Add event listeners to the buttons
                    row.querySelector('.approve-btn').addEventListener('click', async () => {
                        await updateAppointmentStatus(doc.id, 'Approved');
                        row.querySelector('td:nth-child(4)').textContent = 'Approved'; // Update status cell
                    });
                    row.querySelector('.decline-btn').addEventListener('click', async () => {
                        await updateAppointmentStatus(doc.id, 'Declined');
                        row.querySelector('td:nth-child(4)').textContent = 'Declined'; // Update status cell
                    });
                    approveAppointmentTableBody.appendChild(row);
                }
            });
            if (!hasPendingAppointments) {
                const row = document.createElement('tr');
                const cell = document.createElement('td');
                cell.colSpan = 6; 
                cell.textContent = 'No Pending Appointments';
                row.appendChild(cell);
                approveAppointmentTableBody.appendChild(row);
            }
        }
    } catch (error) {
        console.error('Error retrieving appointments:', error);
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 6; 
        cell.textContent = 'Error retrieving appointments';
        row.appendChild(cell);
        approveAppointmentTableBody.appendChild(row);
    }
}
async function updateAppointmentStatus(appointmentId, newStatus) {
    try {
        const appointmentRef = doc(db, 'appointments', appointmentId);
        await updateDoc(appointmentRef, {
            status: newStatus
        });
    } catch (error) {
        console.error('Error updating appointment status:', error);
    }
}
// Logout functionality (example)
document.getElementById('logoutButton').addEventListener('click', function() {
    // Implement your logout logic here
    alert('Logged out successfully!');
});
// Initialize the dashboard
async function initializeDashboard() {
    await populateTeachersDropdown();
    await retrieveApproveAppointments();
    await retrieveAppointments();
    await retrieveMessages();    
}
// Call initializeDashboard to start the dashboard
initializeDashboard();