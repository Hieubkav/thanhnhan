// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    // Toggle icon between bars and times
    const icon = mobileMenuBtn.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Speed Dial Toggle
const speedDialBtn = document.getElementById('speed-dial-btn');
const speedDialMenu = document.getElementById('speed-dial-menu');

speedDialBtn.addEventListener('click', () => {
    speedDialMenu.classList.toggle('hidden');
    speedDialMenu.classList.toggle('active');
    // Toggle icon between plus and times
    const icon = speedDialBtn.querySelector('i');
    if (icon.classList.contains('fa-plus')) {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-plus');
    }
});

// Close menus when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        const menuIcon = mobileMenuBtn.querySelector('i');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }

    if (!speedDialBtn.contains(e.target) && !speedDialMenu.contains(e.target)) {
        speedDialMenu.classList.add('hidden');
        speedDialMenu.classList.remove('active');
        const dialIcon = speedDialBtn.querySelector('i');
        dialIcon.classList.remove('fa-times');
        dialIcon.classList.add('fa-plus');
    }
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.remove('hidden');
    } else {
        scrollToTopBtn.classList.add('hidden');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Navbar Shadow on Scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('nav-shadow');
    } else {
        navbar.classList.remove('nav-shadow');
    }
});

// Active Link Highlighting
const updateActiveLink = () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || 
            (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

// Update active link on page load
document.addEventListener('DOMContentLoaded', updateActiveLink);

// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});