document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
    const appButtons = document.querySelectorAll(".app-buttons .app-store");
    const newsletterSection = document.querySelector(".newsletter-section");

    const setActiveLink = () => {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    };

    setActiveLink(); // Run on page load
    window.addEventListener("scroll", setActiveLink); // Update on scroll

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

    // Add event listeners for App Store and Play Store buttons
    appButtons.forEach((button) => {
        button.addEventListener("click", () => {
            newsletterSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});

const noting = {
    apiKey: "AIzaSyAdFj1Er5PYvWUhFmkPs9VVz3X858KS1xI",
    authDomain: "camps-landing-page.firebaseapp.com",
    projectId: "camps-landing-page",
    storageBucket: "camps-landing-page.firebasestorage.app",
    messagingSenderId: "7236998092",
    appId: "1:7236998092:web:847d34528c7f6b17ccc369",
    measurementId: "G-9RB0JWZF06"
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