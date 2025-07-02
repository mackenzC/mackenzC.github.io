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

// For zooming in images in the gallery
function zoomIn(image) {

    const overlay = document.createElement('div');
    overlay.style.cssText = `
        cursor: zoom-out;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 2000;
    `;

    const zoomedImage = image.cloneNode();
    zoomedImage.style.cssText = `
        cursor: pointer;
        filter: none;
        max-width: 80%;
        max-height: 80%;
        width: 400px !important;
        height: auto !important;
    `;

    const caption = document.createElement('p');
    caption.textContent = image.dataset.caption || 'Untitled';
    caption.style.cssText = `
        color: white;
        text-align: center;
        margin-top: 20px;
        font-size: 30px;
    `;

    const tag = document.createElement('p');
    tag.textContent = image.dataset.tag || 'No tag';
    tag.style.cssText = `
        color: yellowgreen;
        text-align: center;
        font-size: 20px;
        margin-top: 0;
        border: 1px solid yellowgreen;
        padding: 5px 10px;
        border-radius: 50px;
    `;

    overlay.appendChild(zoomedImage);
    overlay.appendChild(caption);
    overlay.appendChild(tag);
    document.body.appendChild(overlay);
    overlay.addEventListener('click', function() {
        document.body.removeChild(overlay);
    });
}
window.zoomIn = zoomIn;


// For the tabs in the main page
function showTab(e, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    const targetElement = document.getElementById(tabName);
    if (targetElement) {
        targetElement.classList.add('active');
        e.target.classList.add('active');
    } else {
        console.error(`Element with id "${tabName}" not found`);
    }
}
window.showTab = showTab;