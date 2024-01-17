
    document.addEventListener('DOMContentLoaded', function() {
      var themeDropdown = document.getElementById('themeDropdown');
      var themeOptions = document.getElementById('themeOptions');

      themeDropdown.addEventListener('click', function(event) {
        if (themeOptions.style.display === 'none' || themeOptions.style.display === '') {
          themeOptions.style.display = 'block';
        } else {
          themeOptions.style.display = 'none';
        }
      });

      // Funkció a téma választására
      document.getElementById('lightTheme').addEventListener('click', function() {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        document.getElementById('theme-style').href = 'CSS\Base_bright.css';
      });

      document.getElementById('darkTheme').addEventListener('click', function() {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        document.getElementById('theme-style').href = 'CSS\Base.css';
      });
    });
