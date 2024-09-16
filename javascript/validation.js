const form = document.getElementById("contactForm");

    // ask for confirmation before submitting form
    form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (window.confirm("Are you sure you want to submit the form?")) {
        alert("Your message has been sent successfully!");
    }
    });

    const email = document.getElementById("mail");

    // checks email validity
    email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Invalid email address input");
    } else {
        email.setCustomValidity("");
    }
    });

