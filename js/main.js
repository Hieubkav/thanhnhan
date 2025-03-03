// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu elements
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;
    let isMenuOpen = false;

    // Toggle mobile menu
    function toggleMobileMenu() {
        if (!isMenuOpen) {
            // Open menu
            mobileMenu.classList.remove('hidden');
            setTimeout(() => {
                mobileMenu.classList.add('visible');
            }, 10);
            mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
            body.classList.add('menu-open');
        } else {
            // Close menu
            mobileMenu.classList.remove('visible');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            body.classList.remove('menu-open');
        }
        isMenuOpen = !isMenuOpen;
    }

    // Mobile menu button click
    mobileMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMobileMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (isMenuOpen && !mobileMenu.contains(e.target) && e.target !== mobileMenuBtn) {
            toggleMobileMenu();
        }
    });

    // Close menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            toggleMobileMenu();
        });
    });

    // Close menu on resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && isMenuOpen) {
            toggleMobileMenu();
        }
    });

    // Navbar scroll behavior
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('py-2');
            navbar.classList.remove('py-3');
        } else {
            navbar.classList.add('py-3');
            navbar.classList.remove('py-2');
        }
    });

    // Speed dial functionality
    const speedDialBtn = document.getElementById('speed-dial-btn');
    const speedDialMenu = document.getElementById('speed-dial-menu');
    let isSpeedDialOpen = false;

    speedDialBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (!isSpeedDialOpen) {
            speedDialMenu.classList.remove('hidden');
            setTimeout(() => {
                speedDialMenu.classList.add('fade-in');
            }, 10);
            this.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            speedDialMenu.classList.remove('fade-in');
            setTimeout(() => {
                speedDialMenu.classList.add('hidden');
            }, 300);
            this.innerHTML = '<i class="fas fa-plus"></i>';
        }
        isSpeedDialOpen = !isSpeedDialOpen;
    });

    // Close speed dial when clicking outside
    document.addEventListener('click', function(e) {
        if (isSpeedDialOpen && !speedDialMenu.contains(e.target) && e.target !== speedDialBtn) {
            speedDialMenu.classList.remove('fade-in');
            setTimeout(() => {
                speedDialMenu.classList.add('hidden');
            }, 300);
            speedDialBtn.innerHTML = '<i class="fas fa-plus"></i>';
            isSpeedDialOpen = false;
        }
    });

    // Scroll to top functionality
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    scrollToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.pointerEvents = 'auto';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.pointerEvents = 'none';
        }
    });

    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        disable: window.innerWidth < 640
    });

    // Handle mobile menu position on iOS
    function setMobileMenuHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setMobileMenuHeight();
    window.addEventListener('resize', setMobileMenuHeight);
});

// Prevent zoom on double tap (mobile)
document.addEventListener('touchend', function(e) {
    const now = Date.now();
    const timeDiff = now - (e.target.lastTouch || now);
    if (timeDiff < 500 && timeDiff > 0) {
        e.preventDefault();
    }
    e.target.lastTouch = now;
}, false);