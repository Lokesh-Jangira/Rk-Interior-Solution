// ================= FORM + GOOGLE SHEET SCRIPT =================

document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector(".contact-form");
  if (!form) return;

  /* ===== ALERT FUNCTION ===== */
  function showAlert(message, type = "error") {
    const alertBox = document.getElementById("customAlert");
    const alertMsg = document.getElementById("alertMessage");

    alertMsg.textContent = message;

    alertBox.className = "alert-overlay";
    alertBox.classList.add("show", type);

    setTimeout(() => {
      alertBox.classList.remove("show");
    }, 2500);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const location = document.getElementById("location").value.trim();

    /* ===== NAME VALIDATION ===== */
    const nameRegex = /^[A-Za-z ]{3,}$/;
    if (!name) {
      showAlert("❌ Please enter your full name");
      return;
    }
    if (!nameRegex.test(name)) {
      showAlert("❌ Name must contain only letters (min 3 characters)");
      return;
    }

    /* ===== MOBILE VALIDATION ===== */
    if (!/^[6-9]\d{9}$/.test(phone)) {
      showAlert("❌ Enter a valid 10-digit Indian mobile number");
      return;
    }

    /* ===== EMAIL VALIDATION (GMAIL + YAHOO + OUTLOOK) ===== */
    const emailRegex = /^[a-zA-Z0-9]+([._%+-]?[a-zA-Z0-9]+)*@(gmail|yahoo|outlook)\.com$/i;

    if (!email) {
      showAlert("❌ Please enter your email address");
      return;
    }

    if (!emailRegex.test(email)) {
      showAlert("❌ Only Gmail, Yahoo or Outlook emails are allowed");
      return;
    }

    /* ===== LOCATION VALIDATION ===== */
    if (!location || location.length < 3) {
      showAlert("❌ Please enter a valid location");
      return;
    }

    /* ===== DATA OBJECT ===== */
    const data = {
      secret: "RK_INTERIOR_2001",
      name,
      phone,
      email,
      location
    };

    /* ===== SEND TO GOOGLE SHEET ===== */
    fetch("https://script.google.com/macros/s/AKfycbzszR7TK-_2WCJVyDHUa3gqc6JPFiIQEsCjNQst6Zm5UlFngo3FUCq8tZLYGmHug0N4/exec", { 
     method: "POST",
     mode: "no-cors",   // 🔥 THIS IS THE KEY FIX
     headers: {
         "Content-Type": "application/json"
     },
     body: JSON.stringify(data)
     });

     showAlert("✅ Thank you! Our team will contact you soon.", "success");
     form.reset();
   });
});