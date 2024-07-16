// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";



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

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    try {
        // Save to Firestore
        await addDoc(collection(db, 'messages'), {
            name: name,
            email: email,
            subject: subject,
            message: message,
            timestamp: serverTimestamp()
        });

        alert('Message sent successfully!');
        e.target.reset(); // Reset the form
    } catch (error) {
        console.error("Error adding document: ", error);
        alert('Error sending message. Please try again later.');
    }
});