// Show popup on page load
window.onload = function() {
    document.getElementById("newsletter-popup").style.display = "block";
};

// Close popup function
function closePopup() {
    document.getElementById("newsletter-popup").style.display = "none";
}

// Show email box after user selects 'Yes'
function showEmailBox() {
    document.getElementById("email-box").style.display = "block";
}

// Submit email and auto-close popup
function submitEmail() {
    const email = document.getElementById("user-email").value;
    if (email) {
        // Save the email to 'newsletter_emails.html' (simulated here)
        console.log("Saving email:", email);

        // Auto-close popup
        closePopup();
        alert("Thank you! You’re now subscribed to our newsletter.");
    } else {
        alert("Please enter a valid email address.");
    }
}
