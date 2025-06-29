import * as THREE from 'three';

const loadingManager = new THREE.LoadingManager();
const loadingScreen = document.getElementById('loading-screen');

loadingManager.onStart = function(url, itemsLoaded, itemsTotal) {
    // console.log('Started loading: ' + itemsLoaded + ' of ' + itemsTotal); //tracking stuff
    document.body.style.overflow = 'hidden';
};

loadingManager.onLoad = function() {
    console.log('Loading complete!');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => { //Fade out effect
            loadingScreen.style.display = 'none';
            document.body.style.overflow = 'auto'; // Brings back scrolling/scrollbar
        }, 400);
    }
};
export { loadingManager }; // To be used for other js




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

window.toggleMenu = toggleMenu; // Make togglemenu function globally accessible!!! (same for other functions)
document.addEventListener('click', function(e) {
    const menu = document.getElementById('ham-list');
    const button = document.getElementById('hamburger-btn');
    
    // If menu is open and click is not inside ham-list OR hamburger button, close it
    if (menu.classList.contains('open') && !menu.contains(e.target) && !button.contains(e.target)) {
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

window.scrollToTop = scrollToTop;
window.addEventListener('scroll', function() {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    if (window.pageYOffset > 300) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

