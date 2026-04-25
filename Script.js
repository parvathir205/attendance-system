let captchaText = "";

function generateCaptcha() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    captchaText = "";
    for (let i = 0; i < 5; i++) {
        captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captcha").innerText = captchaText;
}

function validateLogin() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let captchaInput = document.getElementById("captchaInput").value;

    if (user === "" || pass === "") {
        document.getElementById("error").innerText = "Please fill all fields";
        return;
    }

    if (captchaInput !== captchaText) {
        document.getElementById("error").innerText = "Invalid CAPTCHA";
        generateCaptcha();
        return;
    }

    window.location.href = "attendance.html";
}

// Generate captcha on page load
window.onload = generateCaptcha;
