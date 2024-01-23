

// changing the themes of web page
document.addEventListener('DOMContentLoaded', function () {
  // Get theme buttons
  const themeButtons = document.querySelectorAll('.theme-btn');
  // Check local storage for the selected theme
  const savedTheme = localStorage.getItem('selectedTheme');

  // If a theme is saved, apply it
  if (savedTheme) {
    document.body.className = savedTheme;
  }

  themeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Get button text content
      const theme = this.textContent.toLowerCase();
      document.body.className = `theme-${theme}`;
      // Save the selected theme to local storage
      localStorage.setItem('selectedTheme', `theme-${theme}`);

      // Change the logo based on the selected theme
      updateLogo(theme);
    });
  });
});

// logo changing functionality
function updateLogo(theme) {
  const logoElement = document.querySelector('.logo');
  const labelText = document.querySelector('.label')
  console.log(logoElement);
  console.log(labelText);

  
  if (theme === 'blue' ) {
    logoElement.src = './Screenshot_2024-01-21_162256-removebg.png'; 
    labelText.style.color = "#000"
  } else if (theme === 'pink' ) {
    logoElement.src = './Screenshot_2024-01-21_162256-removebg.png'; 
    labelText.style.color = "#000"
  } else {
    // default
    logoElement.src = './Screenshot_2024-01-21_162816-removebg-preview (1).png';
    labelText.style.color = "#fff"
 
  }
};