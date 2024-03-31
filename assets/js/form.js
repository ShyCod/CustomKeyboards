document.getElementById('feedback-form').onsubmit = function(event) {
    event.preventDefault();
    
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    
    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || !email.includes('@')) {
      alert('All fields must be completed');
      return false;
    }

    var confirmation = confirm('This is for educational/testing purposes and no email has been sent. Click OK to clear the form.');
    
    if (confirmation) {
      document.getElementById('feedback-form').reset();
    }
  }
