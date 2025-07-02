document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); 

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('formMessage');

  if (!name || !email || !message) {
    feedback.textContent = "Please fill in all fields.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Thank you! Your message has been sent.";
    feedback.style.color = "lightgreen";
    this.reset(); 
  }
});
