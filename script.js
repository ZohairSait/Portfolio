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
