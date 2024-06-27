// script.js
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simple form validation
    const name = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelector('input[type="email"]').value;
    const message = event.target.querySelector('textarea').value;
    
    if (name && email && message) {
        alert('Form submitted successfully!');
        // Here you can add the code to actually send the form data to your email/server
    } else {
        alert('Please fill in all fields.');
    }
});
