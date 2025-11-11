
// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});

// Form submission
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const teamName = document.getElementById('teamName').value;
    const captainName = document.getElementById('captainName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const players = document.getElementById('players').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (!teamName || !captainName || !email || !phone || !players) {
        alert('Please fill in all required fields');
        return;
    }

    // Show success message
    alert(`Thank you for registering ${teamName}! We will contact you soon at ${email}.`);

    // Reset form
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});