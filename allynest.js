// Function to handle the mobile menu toggle
function setupMobileMenuToggle() {
    // Get the menu button and the navigation list using the elements we defined in HTML
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.getElementById('nav-list');
    
    // Check if both elements exist before setting up the listener
    if (menuToggle && navList) {
        
        // 1. Add an event listener to the menu button
        menuToggle.addEventListener('click', () => {
            
            // 2. Toggle the 'active' class on the navigation list
            // The CSS uses this class to show/hide the menu
            navList.classList.toggle('active');
            
            // 3. Update the ARIA attribute for accessibility
            const isExpanded = navList.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Optional: Close the menu when a link is clicked (useful for single-page sites)
        const navLinks = navList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Remove the 'active' class to hide the menu
                navList.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', false);
            });
        });
    }
}

// Run the setup function once the page is fully loaded
document.addEventListener('DOMContentLoaded', setupMobileMenuToggle);
