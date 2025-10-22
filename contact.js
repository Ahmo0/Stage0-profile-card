// Vanilla JS form validation
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // reset previous error messages
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  successMsg.hidden = true;

  // get values
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  let valid = true;

  // validation rules
  if (!name) {
    document.getElementById("error-name").textContent = "Full name is required.";
    valid = false;
  }

  if (!email) {
    document.getElementById("error-email").textContent = "Email is required.";
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("error-email").textContent = "Please enter a valid email.";
    valid = false;
  }

  if (!subject) {
    document.getElementById("error-subject").textContent = "Subject is required.";
    valid = false;
  }

  if (!message) {
    document.getElementById("error-message").textContent = "Message is required.";
    valid = false;
  } else if (message.length < 10) {
    document.getElementById("error-message").textContent =
      "Message must be at least 10 characters.";
    valid = false;
  }

  // show success message if valid
  if (valid) {
    form.reset();
    successMsg.hidden = false;
  }
});
