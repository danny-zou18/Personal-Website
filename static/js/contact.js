document.addEventListener("DOMContentLoaded", ()=> {
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("successMessage");
    const overlay = document.getElementById("overlay");
    const closeButton = document.getElementById("close-button");
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally
        
        // Simulate form submission (you can use AJAX to handle the actual submission)
        setTimeout(function () {
            successMessage.style.display = 'flex';
            overlay.style.display="block";
        }, 1000); // Display success message after a delay (1 second)
    });
    closeButton.addEventListener("click", ()=> {
        successMessage.style.display = 'none';
        overlay.style.display="none";
    });
})