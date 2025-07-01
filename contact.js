document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("✅ Your message has been sent successfully!");
  this.reset(); // clears the form
});
