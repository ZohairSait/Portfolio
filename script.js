// Function to handle the animation of each progress bar
function animateProgressBar(entry) {
    const progressBar = entry.target;
    const progressValue = progressBar.getAttribute('data-progress');
    progressBar.style.width = `${progressValue}%`;
}

// Create the intersection observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateProgressBar(entry);
            entry.target.classList.add('animated'); // Optional: add class to track already animated elements
        } else {
            entry.target.style.width = '0'; // Reset the animation when element is out of view
            entry.target.classList.remove('animated');
        }
    });
});

// Select all progress bars and observe them
document.querySelectorAll('.progress-bar').forEach((progressBar) => {
    observer.observe(progressBar);
});




// Select the form element
const contactForm = document.querySelector('form');

// Add a submit event listener
contactForm.addEventListener('submit', (event) => {
    // Prevent the form from submitting the traditional way
    event.preventDefault();

    // Get the values of the input fields
    const name = document.querySelector('input[placeholder="Enter Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const message = document.querySelector('textarea[placeholder="Message"]').value;

    // Log the collected data to the console (you can send this data to a server if needed)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Optionally, display a success message or clear the form
    alert('Form submitted successfully!');
    contactForm.reset();
});


