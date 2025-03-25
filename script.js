// Smooth scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form submission (simple example)
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent! I will get back to you soon.');
    this.reset();
});
