document.addEventListener("DOMContentLoaded", function() {
    // Your existing carousel code
    const vulnerabilities = [
        "Buffer Overflow", "SQL Injection", "Cross-Site Scripting (XSS)",
        "Cross-Site Request Forgery (CSRF)", "Broken Authentication", 
        "Insecure Direct Object References (IDOR)", "Security Misconfiguration", 
        "Sensitive Data Exposure", "Command Injection", "Social Engineering"
    ];

    let currentIndex = 0;
    const vulnerabilityText = document.getElementById("vulnerability-text");

    function updateVulnerability() {
        vulnerabilityText.textContent = vulnerabilities[currentIndex];
        currentIndex = (currentIndex + 1) % vulnerabilities.length;
    }

    // Change text every 2 seconds
    setInterval(updateVulnerability, 1000);
    updateVulnerability();
});
