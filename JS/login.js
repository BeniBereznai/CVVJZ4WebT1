
    document.addEventListener('DOMContentLoaded', function() {
      var savedEmail = localStorage.getItem('savedEmail');
      var savedPassword = localStorage.getItem('savedPassword');

      if (savedEmail && savedPassword) {
        document.getElementById('username').value = savedEmail;
        document.getElementById('password').value = savedPassword;
      }
    });
    document.getElementById('signInBtn').addEventListener('click', function(event) {
      
      event.preventDefault();
      
      var redirectURL = 'fishingtackle.html';
   
      window.location.href = redirectURL;
    });
    document.getElementById('signInBtn').addEventListener('click', function(event) {
      event.preventDefault();
      
      var redirectURL = 'fishingtackle.html';
      window.location.href = redirectURL;
      localStorage.setItem('loginSuccess', 'true'); 
    });
