document.getElementById("quoteForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("✅ Your quote request has been submitted!");
  this.reset(); // Clear the form
});
