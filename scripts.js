document.addEventListener('DOMContentLoaded', function() {
    // Toggle button functionality
    const toggleBtn = document.querySelector('.toggle-btn');
    const nav = document.querySelector('nav ul');

    if (toggleBtn && nav) {
        toggleBtn.addEventListener('click', () => {
            // Toggle 'active' class to show/hide the navigation menu
            nav.classList.toggle('active');
        });
    }

    // EmailJS form submission
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            
            // Send form data using EmailJS
            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm)
                .then(() => {
                    alert('Message sent successfully!');
                    contactForm.reset(); // Reset the form after successful submission
                })
                .catch((error) => {
                    console.error('Failed to send the message:', error); // Log the error for debugging
                    alert('Failed to send the message. Please try again.');
                });
        });
    }
});
