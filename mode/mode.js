document.getElementById('modeToggle').addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Change the icon based on the mode
    this.innerHTML = body.classList.contains('dark-mode') 
        ? '<i class="bi bi-sun"></i> Mode' // For dark mode, show sun icon
        : '<i class="bi bi-moon"></i> Mode'; // For light mode, show moon icon
    
    // Optionally save the mode in localStorage to keep the mode on page reload
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
});

// Check localStorage for mode and apply it, including the icon update
window.onload = function() {
    const modeToggleBtn = document.getElementById('modeToggle');
    if (localStorage.getItem('mode') === 'dark') {
        document.body.classList.add('dark-mode');
        modeToggleBtn.innerHTML = '<i class="bi bi-sun"></i> Mode';
    } else {
        modeToggleBtn.innerHTML = '<i class="bi bi-moon"></i> Mode';
    }
};
