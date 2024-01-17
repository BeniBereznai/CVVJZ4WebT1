
  document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var form = event.target;
  var password = form.querySelector('#password').value;
  var confirmPassword = form.querySelector('#confirm-password').value;
  var email = form.querySelector('#email').value;

  var passwordMismatch = document.getElementById('passwordMismatch');
  passwordMismatch.style.display = 'none'; // Alapértelmezés: rejtve

  if (password !== confirmPassword) {
    passwordMismatch.style.display = 'block';
  } else {
    var inputs = form.querySelectorAll('input');

    var allFilled = true;
    inputs.forEach(function(input) {
      if (input.value.trim() === '') {
        allFilled = false;
      }
    });

    if (allFilled) {
      // Az adatok tárolása localStorage-ben
      localStorage.setItem('savedEmail', email);
      localStorage.setItem('savedPassword', password);

      // Átirányítás egy másik oldalra
      window.location.href = 'login.html';
    } else {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    }
  }
});
