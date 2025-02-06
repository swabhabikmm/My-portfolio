document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");
    
    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

    // Contact form submission
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Message sent successfully!");
        this.reset();
    });
});

const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skill.querySelector('i').style.color = '#0073e6';
    skill.querySelector('p').style.color = '#0073e6';
  });
  skill.addEventListener('mouseleave', () => {
    skill.querySelector('i').style.color = '#333';
    skill.querySelector('p').style.color = '#333';
  });
});
