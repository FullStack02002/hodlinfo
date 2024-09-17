const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for stored theme preference
const storedTheme = localStorage.getItem('theme');

// Apply stored theme or default to dark theme
if (storedTheme === 'dark') {
  body.classList.add('dark-theme');
  themeToggle.checked = true; 
} else if (storedTheme === 'light') {
  body.classList.remove('dark-theme');
  themeToggle.checked = false;
} else {
  // Default to dark theme if no preference is set
  body.classList.add('dark-theme');
  themeToggle.checked = true;
}

// Add event listener for theme toggle
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    // Dark theme enabled
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    // Light theme enabled
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
});
