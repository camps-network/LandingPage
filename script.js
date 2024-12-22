document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    const setActiveLink = () => {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    };

    setActiveLink(); // Run on page load
    window.addEventListener("scroll", setActiveLink); // Update on scroll


    const newsletterSection = document.querySelector(".newsletter-section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    newsletterSection.classList.add("animate");
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    observer.observe(newsletterSection);
});
import { config } from 'dotenv';
config();
const noting = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };

  const app = firebase.initializeApp(noting);
  const analytics = firebase.analytics(app);
  const db = firebase.firestore();
document.querySelector('.newsletter-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value.trim();
    const consent = document.getElementById('subscribe-checkbox').checked;

    if (!email) {
        alert('Please enter a valid email address.');
        return;
    }

    try {
        // Add email and consent to Firestore
        await db.collection('newsletterSubscribers').add({
            email: email,
            consent: consent,
            timestamp: firebase.firestore.FieldValue.serverTimestamp() // Store the server timestamp
        });

        alert('Thank you for subscribing!');
        document.querySelector('.newsletter-form').reset(); // Reset the form
    } catch (error) {
        console.error('Error storing data to Firestore:', error);
        alert('There was an error. Please try again later.');
    }
});
