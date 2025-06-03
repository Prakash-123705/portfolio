function handleContactForm(event) {
      event.preventDefault();
      const form = event.target;
      const messageEl = document.getElementById('formMessage');
      messageEl.textContent = '';
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if(!name || !email || !message) {
        messageEl.textContent = 'Please fill in all fields.';
        return;
      }

      // Simple email validation
      const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if(!emailPattern.test(email)) {
        messageEl.textContent = 'Please enter a valid email address.';
        return;
      }

      // Since no backend, just simulate sending
      messageEl.style.color = '#58a6ff';
      messageEl.textContent = 'Sending your message...';

      setTimeout(() => {
        messageEl.style.color = '#a0f0a0';
        messageEl.textContent = 'Thank you, ' + name + '! Your message has been sent.';
        form.reset();
      }, 1500);
    }