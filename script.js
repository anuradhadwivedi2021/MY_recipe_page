// Simple JS for interactivity: Smooth scroll to sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add a simple filter functionality (example: hide/show sections)
const sections = document.querySelectorAll('section');
// For demo, you can add buttons to filter, but keeping it simple