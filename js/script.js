// Dark Mode Toggle Feature
document.addEventListener('DOMContentLoaded', function() {
    // Create dark mode toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'btn btn-outline-secondary btn-sm position-fixed';
    toggleBtn.style.cssText = 'bottom: 20px; right: 20px; z-index: 1000;';
    toggleBtn.innerHTML = '🌙';
    toggleBtn.setAttribute('aria-label', 'Toggle dark mode');
    document.body.appendChild(toggleBtn);
    
    // Dark mode functionality
    let isDarkMode = false;
    toggleBtn.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        document.body.style.backgroundColor = isDarkMode ? '#1a1a2e' : '#ffffff';
        document.body.style.color = isDarkMode ? '#ffffff' : '#000000';
        this.innerHTML = isDarkMode ? '☀️' : '🌙';
        
        // Update navbar
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.classList.toggle('navbar-dark', isDarkMode);
            navbar.classList.toggle('navbar-light', !isDarkMode);
            navbar.classList.toggle('bg-dark', isDarkMode);
            navbar.classList.toggle('bg-primary', !isDarkMode);
        }
    });
});

console.log('TechHaven website loaded successfully!');