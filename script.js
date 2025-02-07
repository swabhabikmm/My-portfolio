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

   document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    let formData = new FormData(this);

    // Send data to PHP script
    fetch("send_email.php", {
        method: "POST",
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        alert(data);  // Show response message
        this.reset();
    })
    .catch(error => console.error("Error:", error));
});

