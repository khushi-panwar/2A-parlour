

document.addEventListener('DOMContentLoaded', function () {
  // Get theme buttons
  const themeButtons = document.querySelectorAll('.theme-btn');
  // Check local storage for the selected theme
  const savedTheme = localStorage.getItem('selectedTheme');

  // If a theme is saved, apply it
  if (savedTheme) {
    document.body.className = savedTheme;
  }

  // changing the themes of web page
  themeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Get button text content
      const theme = this.textContent.toLowerCase();
      document.body.className = `theme-${theme}`;
      // Save the selected theme to local storage
      localStorage.setItem('selectedTheme', `theme-${theme}`);

      // Change the logo on selected theme
      updateChanges(theme);
    });
  });

});

// logo and labelText changing functionality
function updateChanges(theme) {
  const logoElement = document.querySelector('.logo');
  const labelText = document.querySelectorAll('.label')

  if (theme === 'blue') {
    logoElement.src = './images/Screenshot_2024-01-21_162256-removebg.png';

    labelText.forEach((val) => {
      val.style.color = "black";
    });
  } else if (theme === 'pink') {
    logoElement.src = './images/Screenshot_2024-01-21_162256-removebg.png';

    labelText.forEach((val) => {
      val.style.color = "black";
    });
  } else {
    // default
    logoElement.src = './images/Screenshot_2024-01-21_162816-removebg-preview (1).png';
    labelText.forEach((val) => {
      val.style.color = "#fff";
    });
  }
};


