// Moves user to ABOUT section
document.getElementById('fun-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
    });
});

function toggleMenu() {
    const menu = document.getElementById('ham-list');
    const button = document.getElementById('hamburger-btn');
    menu.classList.toggle('open');

    if (menu.classList.contains('open')) {
        button.style.backgroundColor = 'rgb(49, 51, 62)'; // Change the bg color to something else
    } else {
        button.style.backgroundColor = ''; // Resets bg color
        
    }
    
}

// Handles outside clicks to close the menu
document.addEventListener('click', function(event) {
    const menu = document.getElementById('ham-list');
    const button = document.getElementById('hamburger-btn');
    
    // If menu is open and click is not inside ham-list OR hamburger button, close it
    if (menu.classList.contains('open') && !menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove('open');
        button.style.backgroundColor = '';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function() {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    if (window.pageYOffset > 300) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});