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

    let formData = new FormData(this);

    fetch(this.action, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" },
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            document.getElementById("success-message").innerText = "Message sent successfully!";
            document.getElementById("success-message").style.color = "green";
            this.reset(); // Reset form fields
        } else {
            document.getElementById("success-message").innerText = "Failed to send message. Try again.";
            document.getElementById("success-message").style.color = "red";
        }
    })
    .catch(error => {
        document.getElementById("success-message").innerText = "An error occurred. Please try again.";
        document.getElementById("success-message").style.color = "red";
    });
});


